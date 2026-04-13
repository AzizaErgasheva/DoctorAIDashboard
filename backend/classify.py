"""
classify.py — Classification inference script
AI in Healthcare Hackathon 2026

Usage:
    python classify.py \
        --test_dir   /path/to/classification/test \
        --model_path /path/to/convnext_small_focal_fold1.pth \
        --team       YourTeamName

Output:
    YourTeamName test_ground_truth.xlsx   (Image_ID, Label columns)
"""

import argparse
from pathlib import Path

import pandas as pd
import timm
import torch
from PIL import Image
from torch.utils.data import Dataset, DataLoader
from torchvision import transforms as T


# ── Constants ──────────────────────────────────────────────────────────────────
NUM_CLASSES = 12
IMAGE_SIZE  = 224
MEAN        = [0.485, 0.456, 0.406]
STD         = [0.229, 0.224, 0.225]
DEVICE      = torch.device("cuda" if torch.cuda.is_available() else "cpu")


# ── Dataset ────────────────────────────────────────────────────────────────────
class TestDataset(Dataset):
    def __init__(self, image_dir: Path, transform):
        self.paths     = sorted(image_dir.glob("*.png"))
        self.transform = transform
        print(f"Found {len(self.paths)} test images in: {image_dir}")

    def __len__(self):
        return len(self.paths)

    def __getitem__(self, idx):
        img = Image.open(self.paths[idx]).convert("RGB")
        return self.transform(img), self.paths[idx].stem


# ── Model ──────────────────────────────────────────────────────────────────────
def load_model(model_path: Path) -> torch.nn.Module:
    model = timm.create_model(
        "convnext_small",
        pretrained=False,
        num_classes=NUM_CLASSES,
    )

    checkpoint = torch.load(model_path, map_location=DEVICE, weights_only=True)

    if isinstance(checkpoint, dict):
        state_dict = checkpoint.get(
            "model_state_dict",
            checkpoint.get("state_dict", checkpoint)
        )
    else:
        state_dict = checkpoint

    # Strip 'model.' prefix from keys if present (common with wrapped models)
    cleaned = {}
    for k, v in state_dict.items():
        cleaned[k.removeprefix("model.")] = v
    state_dict = cleaned

    model.load_state_dict(state_dict, strict=True)
    model.to(DEVICE).eval()
    print(f"Model loaded from: {model_path}")
    print(f"Running on: {DEVICE}")
    return model


# ── Inference ──────────────────────────────────────────────────────────────────
@torch.no_grad()
def predict(model, loader):
    image_ids = []
    labels    = []

    for imgs, stems in loader:
        imgs  = imgs.to(DEVICE)
        preds = model(imgs).argmax(dim=1).cpu().tolist()
        labels.extend(preds)
        image_ids.extend(list(stems))

    return image_ids, labels


# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--test_dir",   type=Path, required=True,
                        help="Directory containing test PNG images")
    parser.add_argument("--model_path", type=Path, required=True,
                        help="Path to saved model .pth file")
    parser.add_argument("--team",       type=str,  required=True,
                        help="Team name — used in output filename")
    parser.add_argument("--batch_size", type=int,  default=32)
    args = parser.parse_args()

    transform = T.Compose([
        T.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        T.ToTensor(),
        T.Normalize(MEAN, STD),
    ])

    dataset = TestDataset(args.test_dir, transform)
    loader  = DataLoader(
        dataset,
        batch_size  = args.batch_size,
        shuffle     = False,
        num_workers = 0,
        pin_memory  = True,
    )

    model = load_model(args.model_path)

    print("Running inference...")
    image_ids, labels = predict(model, loader)

    df = pd.DataFrame({"Image_ID": image_ids, "Label": labels})

    output_file = Path(f"{args.team} test_ground_truth.xlsx")
    df.to_excel(output_file, index=False)

    print(f"\nDone! Saved {len(df)} predictions → {output_file}")


if __name__ == "__main__":
    main()
