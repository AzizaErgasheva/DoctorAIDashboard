#!/bin/sh
# Downloads model checkpoints from GitHub Releases if they aren't already
# present locally. Checkpoints are large binaries excluded from git (see
# .gitignore), so they're stored as release assets instead and pulled down
# on container startup. Already-downloaded files are skipped, so restarts
# (not just first boot) stay fast.

set -e

CHECKPOINT_DIR="$(dirname "$0")"
cd "$CHECKPOINT_DIR"

CLF_FILE="convnext_small_focal_fold1.pth"
SEG_FILE="deeplab_effb4_bce_dice_384 (3).pth"

CLF_URL="https://github.com/AzizaErgasheva/DoctorAIDashboard/releases/download/v1.0-checkpoints/convnext_small_focal_fold1.pth"
SEG_URL="https://github.com/AzizaErgasheva/DoctorAIDashboard/releases/download/v1.0-checkpoints/deeplab_effb4_bce_dice_384.3.pth"

if [ ! -f "$CLF_FILE" ]; then
  echo "Downloading $CLF_FILE ..."
  curl -fL -o "$CLF_FILE" "$CLF_URL"
else
  echo "$CLF_FILE already present, skipping download."
fi

if [ ! -f "$SEG_FILE" ]; then
  # Note: GitHub strips spaces/parentheses from release asset filenames, so
  # the uploaded asset is named "deeplab_effb4_bce_dice_384.3.pth" -- but the
  # backend code (see diagnosis.js) looks for the original name with the
  # space and parentheses, so we save it locally under that expected name.
  echo "Downloading $SEG_FILE ..."
  curl -fL -o "$SEG_FILE" "$SEG_URL"
else
  echo "$SEG_FILE already present, skipping download."
fi

echo "Checkpoints ready."
