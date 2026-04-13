"""
segment.py — Segmentation inference script
AI in Healthcare Hackathon 2026

Usage:
    python segment.py \
        --images_dir /path/to/test/images \
        --model_path /path/to/ClinovaSegModel.pth \
        --output_dir predicted_masks

Output:
    Predicted binary masks saved as PNG in output_dir.
"""

import os
import argparse
import torch
import numpy as np
from PIL import Image
from torchvision import transforms
import segmentation_models_pytorch as smp


def load_model(model_path, device):
    """Load the SMP DeepLabV3+ model from checkpoint."""
    checkpoint = torch.load(model_path, map_location=device, weights_only=False)

    params = checkpoint.get("params", {})
    model_name = params.get("model_name", "deeplabv3plus")
    encoder_name = params.get("encoder_name", "timm-efficientnet-b4")
    best_threshold = checkpoint.get("best_threshold", 0.5)

    print(f"Model architecture : {model_name}")
    print(f"Encoder            : {encoder_name}")
    print(f"Best threshold     : {best_threshold}")

    # Recreate the exact architecture used during training
    model = smp.DeepLabV3Plus(
        encoder_name=encoder_name,
        encoder_weights=None,       # we load our own weights
        in_channels=3,
        classes=1,
    )

    state_dict = checkpoint["model_state_dict"]
    model.load_state_dict(state_dict, strict=True)
    model.to(device).eval()

    print(f"Model loaded from  : {model_path}")
    print(f"Running on         : {device}")

    return model, best_threshold


def predict_mask(model, image_path, device, threshold, img_size=512):
    """Run inference on a single image and return the binary mask."""
    original = Image.open(image_path).convert("RGB")
    orig_w, orig_h = original.size

    transform = transforms.Compose([
        transforms.Resize((img_size, img_size)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225]),
    ])

    tensor = transform(original).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(tensor)
        prob = torch.sigmoid(output.squeeze())
        binary = (prob > threshold).cpu().numpy().astype(np.uint8)

    # Resize mask back to original image size
    mask_img = Image.fromarray(binary * 255).resize((orig_w, orig_h), Image.NEAREST)
    return mask_img


def main():
    parser = argparse.ArgumentParser(description="Segmentation inference script")
    parser.add_argument("--images_dir", type=str, required=True,
                        help="Path to test images folder")
    parser.add_argument("--model_path", type=str, required=True,
                        help="Path to saved .pth model")
    parser.add_argument("--output_dir", type=str, default="predicted_masks",
                        help="Output folder for masks")
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model, threshold = load_model(args.model_path, device)

    # Support both .png and .jpg test images
    valid_ext = (".png", ".jpg", ".jpeg")
    image_files = sorted([f for f in os.listdir(args.images_dir)
                          if f.lower().endswith(valid_ext)])

    print(f"Found {len(image_files)} test images in: {args.images_dir}")
    print("Running inference...")

    for i, fname in enumerate(image_files, 1):
        image_path = os.path.join(args.images_dir, fname)
        mask = predict_mask(model, image_path, device, threshold)
        # Save mask as PNG regardless of input format
        out_name = os.path.splitext(fname)[0] + ".png"
        out_path = os.path.join(args.output_dir, out_name)
        mask.save(out_path)
        if i % 50 == 0 or i == len(image_files):
            print(f"  [{i}/{len(image_files)}] processed")

    print(f"\nDone! {len(image_files)} masks saved to {args.output_dir}")


if __name__ == "__main__":
    main()
