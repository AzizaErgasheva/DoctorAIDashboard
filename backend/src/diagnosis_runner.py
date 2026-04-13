import argparse
import base64
import json
import os
import sys
import numpy as np
from io import BytesIO

try:
    from PIL import Image, ImageDraw
except ImportError:
    Image = None

try:
    import torch
    import torch.nn as nn
    from torchvision import transforms
except ImportError:
    torch = None

try:
    import timm
except ImportError:
    timm = None

try:
    import segmentation_models_pytorch as smp
except ImportError:
    smp = None


# ── Constants ──────────────────────────────────────────────────────────────────
NUM_CLASSES_CLASSIFICATION = 12
CLASSIFICATION_IMAGE_SIZE = 224
SEGMENTATION_IMAGE_SIZE = 512
MEAN = [0.485, 0.456, 0.406]
STD = [0.229, 0.224, 0.225]
DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu') if torch else None


def image_to_data_url(img, fmt='PNG'):
    buffered = BytesIO()
    img.save(buffered, format=fmt)
    encoded = base64.b64encode(buffered.getvalue()).decode('utf-8')
    return f'data:image/{fmt.lower()};base64,{encoded}'


def load_segmentation_model(checkpoint_path):
    """Load DeepLabV3+ segmentation model from checkpoint."""
    if torch is None or smp is None:
        print('Warning: torch or segmentation_models_pytorch not installed', file=sys.stderr, flush=True)
        return None, None

    try:
        checkpoint = torch.load(checkpoint_path, map_location=DEVICE, weights_only=False)
        
        params = checkpoint.get('params', {})
        encoder_name = params.get('encoder_name', 'timm-efficientnet-b4')
        best_threshold = checkpoint.get('best_threshold', 0.5)
        
        print(f'Segmentation Model encoder: {encoder_name}', file=sys.stderr, flush=True)
        print(f'Best threshold: {best_threshold}', file=sys.stderr, flush=True)
        
        model = smp.DeepLabV3Plus(
            encoder_name=encoder_name,
            encoder_weights=None,
            in_channels=3,
            classes=1,
        )
        
        state_dict = checkpoint.get('model_state_dict', checkpoint.get('state_dict', checkpoint))
        if isinstance(state_dict, dict):
            cleaned = {}
            for k, v in state_dict.items():
                key = k
                if key.startswith('module.'):
                    key = key[len('module.'):]
                if key.startswith('model.'):
                    key = key[len('model.'):]
                cleaned[key] = v
            state_dict = cleaned
        model.load_state_dict(state_dict, strict=True)
        model.to(DEVICE).eval()
        
        print(f'Segmentation model loaded from: {checkpoint_path}', file=sys.stderr, flush=True)
        return model, best_threshold
    except Exception as exc:
        print(f'Warning: Failed to load segmentation checkpoint {checkpoint_path}: {exc}', file=sys.stderr, flush=True)
        return None, None


def load_classification_model(checkpoint_path):
    """Load ConvNeXt classification model from checkpoint."""
    if torch is None or timm is None:
        print('Warning: torch or timm not installed', file=sys.stderr, flush=True)
        return None

    try:
        model = timm.create_model(
            'convnext_small',
            pretrained=False,
            num_classes=NUM_CLASSES_CLASSIFICATION,
        )
        
        checkpoint = torch.load(checkpoint_path, map_location=DEVICE, weights_only=True)
        
        if isinstance(checkpoint, dict):
            state_dict = checkpoint.get(
                'model_state_dict',
                checkpoint.get('state_dict', checkpoint)
            )
        else:
            state_dict = checkpoint
        
        # Strip 'model.' prefix from keys if present
        cleaned = {}
        for k, v in state_dict.items():
            cleaned[k.removeprefix('model.')] = v
        state_dict = cleaned
        
        model.load_state_dict(state_dict, strict=True)
        model.to(DEVICE).eval()
        print(f'Classification model loaded from: {checkpoint_path}', file=sys.stderr, flush=True)
        return model
    except Exception as exc:
        print(f'Warning: Failed to load classification checkpoint {checkpoint_path}: {exc}', file=sys.stderr, flush=True)
        return None


def run_segmentation_inference(seg_model, image_path, threshold):
    """Run segmentation and return mask image."""
    if Image is None or seg_model is None:
        return Image.new('L', (512, 512), 0) if Image else None
    
    try:
        original = Image.open(image_path).convert('RGB')
        orig_w, orig_h = original.size
        
        transform = transforms.Compose([
            transforms.Resize((SEGMENTATION_IMAGE_SIZE, SEGMENTATION_IMAGE_SIZE)),
            transforms.ToTensor(),
            transforms.Normalize(mean=MEAN, std=STD),
        ])
        
        tensor = transform(original).unsqueeze(0).to(DEVICE)
        
        with torch.no_grad():
            output = seg_model(tensor)
            if output.dim() == 4 and output.shape[1] == 1:
                output = output[:, 0, :, :]
            if output.dim() == 3 and output.shape[0] == 1:
                output = output[0]
            prob = torch.sigmoid(output)
            binary = (prob > threshold).cpu().numpy().astype(np.uint8)
        
        mask_img = Image.fromarray(binary * 255).resize((orig_w, orig_h), Image.NEAREST)
        return mask_img
    except Exception as exc:
        print(f'Segmentation inference error: {exc}', file=sys.stderr, flush=True)
        return Image.new('L', (512, 512), 0) if Image else None


def run_classification_inference(clf_model, image_path):
    """Run classification and return label + confidence."""
    if Image is None or clf_model is None:
        return 'unknown', 0.0, []
    
    try:
        img = Image.open(image_path).convert('RGB')
        
        transform = transforms.Compose([
            transforms.Resize((CLASSIFICATION_IMAGE_SIZE, CLASSIFICATION_IMAGE_SIZE)),
            transforms.ToTensor(),
            transforms.Normalize(mean=MEAN, std=STD),
        ])
        
        tensor = transform(img).unsqueeze(0).to(DEVICE)
        
        with torch.no_grad():
            output = clf_model(tensor)
            probs = torch.softmax(output, dim=1).squeeze(0)
            confidence, class_idx = torch.max(probs, 0)
            confidence = confidence.item()
            class_idx = class_idx.item()
            probs = probs.cpu().numpy().tolist()
        
        # Map class index to label (0-11)
        class_labels = [
            'Normal', 'Abnormality_1', 'Abnormality_2', 'Abnormality_3',
            'Abnormality_4', 'Abnormality_5', 'Abnormality_6', 'Abnormality_7',
            'Abnormality_8', 'Abnormality_9', 'Abnormality_10', 'Abnormality_11'
        ]
        label = class_labels[class_idx] if class_idx < len(class_labels) else f'Class_{class_idx}'
        
        return label, confidence, probs
    except Exception as exc:
        print(f'Classification inference error: {exc}', file=sys.stderr, flush=True)
        return 'unknown', 0.0, []


def create_overlay(original_image_path, mask_image):
    """Create heatmap overlay of mask on original image."""
    if Image is None:
        return mask_image
    
    try:
        original = Image.open(original_image_path).convert('RGB')
        
        # Resize mask to match original
        mask_resized = mask_image.resize(original.size, Image.NEAREST)
        
        # Create overlay with semi-transparent red where mask is positive
        overlay = original.copy().convert('RGBA')
        mask_array = np.array(mask_resized)
        
        # Create colored overlay (red for positive regions)
        red_layer = Image.new('RGBA', original.size, (255, 50, 50, 120))
        
        # Apply mask to red layer
        red_array = np.array(red_layer)
        mask_bool = mask_array > 128
        red_array[~mask_bool] = (0, 0, 0, 0)
        red_layer = Image.fromarray(red_array)
        
        # Composite
        overlay = Image.alpha_composite(overlay, red_layer)
        return overlay
    except Exception as exc:
        print(f'Overlay creation error: {exc}', file=sys.stderr, flush=True)
        return mask_image


def main():
    parser = argparse.ArgumentParser(description='Run diagnosis inference on one image.')
    parser.add_argument('--checkpoint', required=True, help='Path to model checkpoint file (.pth)')
    parser.add_argument('--image', required=True, help='Path to uploaded image file')
    parser.add_argument('--model_type', choices=['classification', 'segmentation'], default='classification', help='Primary model type for this run')
    parser.add_argument('--seg_checkpoint', type=str, default='deeplab_effb4_bce_dice_384 (3).pth',
                        help='Path to segmentation checkpoint')
    parser.add_argument('--clf_checkpoint', type=str, default='convnext_small_focal_fold1.pth',
                        help='Path to classification checkpoint')
    args = parser.parse_args()

    # Determine checkpoint routing based on selected modelType
    if args.model_type == 'segmentation':
        seg_checkpoint = args.checkpoint
        clf_checkpoint = args.clf_checkpoint
    else:
        clf_checkpoint = args.checkpoint
        seg_checkpoint = args.seg_checkpoint

    seg_model, threshold = load_segmentation_model(seg_checkpoint)
    clf_model = load_classification_model(clf_checkpoint)

    if seg_model is None:
        mask = Image.new('L', (512, 512), 0) if Image else None
        overlay = Image.new('RGBA', (512, 512), (0, 0, 0, 0)) if Image else None
    else:
        mask = run_segmentation_inference(seg_model, args.image, threshold)
        overlay = create_overlay(args.image, mask)

    if clf_model is None:
        label, confidence, probabilities = 'unknown', 0.0, []
    else:
        label, confidence, probabilities = run_classification_inference(clf_model, args.image)

    result = {
        'classification': label,
        'confidence': float(confidence),
        'classProbabilities': [],
        'maskDataUrl': image_to_data_url(mask, fmt='PNG') if mask else '',
        'overlayDataUrl': image_to_data_url(overlay, fmt='PNG') if overlay else '',
        'details': {
            'model_type': args.model_type,
            'seg_checkpoint': seg_checkpoint,
            'clf_checkpoint': clf_checkpoint,
            'segmentation_threshold': float(threshold) if seg_model is not None else None,
        },
    }

    class_labels = [
        'Normal', 'Abnormality_1', 'Abnormality_2', 'Abnormality_3',
        'Abnormality_4', 'Abnormality_5', 'Abnormality_6', 'Abnormality_7',
        'Abnormality_8', 'Abnormality_9', 'Abnormality_10', 'Abnormality_11'
    ]
    if probabilities:
        result['classProbabilities'] = [
            {'name': class_labels[idx] if idx < len(class_labels) else f'Class_{idx}', 'value': float(prob) * 100}
            for idx, prob in enumerate(probabilities)
        ]

    print(json.dumps(result))


if __name__ == '__main__':
    main()
