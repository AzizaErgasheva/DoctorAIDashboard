# DoctorAIDashboard

A full-stack clinical dashboard for doctors: patients, appointments, prescriptions, schedule, and reports, plus an **AI diagnosis module** that classifies an uploaded medical image into one of 12 categories and segments the abnormal region, returning a confidence score and a visual overlay in real time.

- **Repo:** [github.com/AzizaErgasheva/DoctorAIDashboard](https://github.com/AzizaErgasheva/DoctorAIDashboard)
- **Stack:** React 19 + Vite + MUI + TanStack Query + React Hook Form + Zod + Recharts (frontend) · Express 5 / Node.js (backend) · PyTorch inference via subprocess (ConvNeXt-Small + DeepLabV3+)
- **Deployment:** Vercel (frontend) + Render (backend, Docker)


---

## 1. Problem

Doctors reviewing medical images need a fast first read before committing to a diagnosis or treatment plan. Manual review is slow, and not every clinic has a specialist on hand to give a second opinion at the point of care. Two things matter most in that moment:

1. **What is it?** — an abnormality classification with a confidence score, and
2. **Where is it?** — a visual region of interest, not just a label, so the doctor can verify the model is looking at the right place rather than trusting a black box.


## 2. Dataset

### Classification dataset
- **12 classes** (`Normal` + 11 abnormality types, labeled `0`–`11` in training).
- **Class balancing via augmentation**: every class was oversampled to exactly **2,136 samples**, for an augmented training pool of **25,632 images total** — a strong signal the raw class distribution was imbalanced before augmentation (which is also why focal loss was used as a training option, see below).
- **Split**: train **20,504** / validation **2,564** / internal test **2,564** (drawn from the augmented pool).
- **A separate real evaluation set** of **1,276 images** (`Image_ID`, no label — the held-out competition/grading test set) is scored separately via `classify.py`'s `--test_dir` workflow, producing a `test_ground_truth.xlsx` submission.

### Segmentation dataset
- **Train: 12,150 / Validation: 2,430** — combined into **Train+Val: 14,580** for final model training (the architecture-search phase logged below used the split separately; the winning configuration was then retrained on the combined set).
- **Local test: 1,620** (held-out for internal evaluation).
- **Real test: 200** (final unlabeled evaluation/submission set).

> The imaging modality, clinical source, and exact abnormality/class names aren't present in the training logs I have — only integer class labels (0–11) and dataset sizes. If you want the real class names in place of `Abnormality_1..11` (see [Future improvements](#10-future-improvements)), that mapping needs to come from your dataset documentation.

## 3. Methodology

Two independently trained models handle the two tasks, and their outputs are merged into one API response.

### Classification: ConvNeXt-Small

Trained via a small architecture/loss search (`timm`, backbone `convnext_small.fb_in22k_ft_in1k` — ImageNet-22k pretrained, fine-tuned on ImageNet-1k), comparing two loss functions across 5-fold cross-validation, 8 epochs per fold:

| Config | `img_size` | `batch_size` | `lr` | Loss | Label smoothing |
|---|---|---|---|---|---|
| `convnext_small_ce` | 384 | 16 | 1e-4 | Cross-entropy | 0.05 |
| `convnext_small_focal` | 384 | 16 | 1e-4 | Focal loss | 0.05 |

The **deployed checkpoint is `convnext_small_focal_fold1.pth`** — fold 1 of the focal-loss run — confirmed by the checkpoint filename matching the experiment name in the log exactly.

At inference (`load_classification_model` in `diagnosis_runner.py`, mirrored in standalone `classify.py`):
- Model instantiated via `timm.create_model('convnext_small', pretrained=False, num_classes=12)`, then trained weights loaded.
- Defensive checkpoint loading: checks for `model_state_dict`, then `state_dict`, then the raw dict; strips a `model.` key prefix if present (handles checkpoints saved from a wrapped/Lightning-style module).
- Image resized to **224×224**, normalized with ImageNet mean/std, run through the model, and `softmax`'d — argmax is the predicted class, full vector returned as `classProbabilities` for the frontend bar chart.

### Segmentation: DeepLabV3+ (EfficientNet-B4 encoder)

Trained via a 4-way architecture search, each for 12 epochs at `img_size=384`, `batch_size=8`, `lr=1e-4`, using a combined **BCE + Dice** loss:

| Architecture | Encoder | Final IoU (epoch 12, tuned threshold) |
|---|---|---|
| U-Net++ | EfficientNet-B4 | 0.9015 |
| **DeepLabV3+** | **EfficientNet-B4** | **0.9022** ← winner, deployed |
| U-Net++ | EfficientNet-B3 | 0.8921 |
| FPN | EfficientNet-B4 | 0.9005 |

DeepLabV3+ with the EfficientNet-B4 encoder won this search by a narrow margin and matches the deployed checkpoint name (`deeplab_effb4_bce_dice_384.pth`) exactly.

At inference (`load_segmentation_model` in `diagnosis_runner.py`, mirrored in standalone `segment.py`):
- Model rebuilt via `smp.DeepLabV3Plus(encoder_name=..., encoder_weights=None, in_channels=3, classes=1)`, with the encoder name and decision threshold read from the checkpoint's own `params` dict — the checkpoint is self-describing rather than the code hardcoding architecture details.
- Defensive state-dict loading, additionally stripping a `module.` prefix (checkpoint may have been saved from `DataParallel`/`DDP`).
- Image resized to **512×512**, normalized, run through the model, `sigmoid`'d, and thresholded at the checkpoint's stored `best_threshold` (during the search phase this threshold was tuned per-epoch by sweeping candidate values against validation IoU — visible in the log as `thr*`/`iou*` alongside the fixed `iou@0.5` baseline).
- Resulting binary mask is resized back to the original image's dimensions with nearest-neighbor interpolation (keeps mask edges crisp).

### Overlay generation
`create_overlay` turns the binary mask into a semi-transparent red layer (`RGBA(255, 50, 50, 120)`), visible only where the mask is positive (`> 128`), alpha-composited onto the original image — giving the doctor a heatmap-style visual explanation alongside the raw label.

### Known train/serve mismatch
Both models were **trained at `img_size=384`**. The deployed inference code resizes to **224×224** for classification and **512×512** for segmentation — neither matches the training resolution. This is a real discrepancy between the training logs and the production code, not a deployment-environment issue; see [Error analysis](#7-error-analysis).

## 4. Architecture

```
┌────────────────────────┐         HTTPS          ┌───────────────────────────────┐
│   Frontend (Vercel)      │ ─────────────────────► │   Backend (Render, Docker)      │
│   React 19 + Vite          │                        │   Express 5                      │
│   MUI · TanStack Query      │ ◄───────────────────── │                                   │
│   React Hook Form + Zod      │       JSON              │   GET  /health                   │
│   Recharts                    │                        │   POST /diagnosis   (public)     │
└────────────────────────┘                          │   POST /api/auth/*  (public)     │
                                                       │   *    /api/doctor/* (JWT-guarded)│
                                                       └────────────────┬──────────────────┘
                                                                        │ spawn('python3', [...])
                                                                        ▼
                                                        ┌───────────────────────────────┐
                                                        │   diagnosis_runner.py            │
                                                        │   - loads .pth checkpoints         │
                                                        │   - runs classification            │
                                                        │   - runs segmentation              │
                                                        │   - builds overlay                 │
                                                        │   - prints JSON to stdout          │
                                                        └───────────────────────────────┘
```

### Backend (`backend/src/`)

- **`server.js`** — Express app entry point. Registers `morgan` (request logging) and permissive `cors`, mounts `/health`, `/diagnosis` (unauthenticated), `/api/auth`, and `/api/doctor` (behind `requireBearerToken`), and a final error-handling middleware returning `{ message }` with the error's status code (or 500).
- **`middleware/auth.js`** — `requireBearerToken` validates the `Authorization: Bearer <jwt>` header before any `/api/doctor/*` route runs.
- **`lib/jwt.js`** — signs/verifies JWTs (`jsonwebtoken`).
- **`lib/storage.js`** — reads/writes `src/data/db.json`, a flat JSON file acting as the datastore, generates prefixed IDs (`newId('usr')`, `newId('apt')`, etc.).
- **`routes/auth.js`** — `POST /register`, `POST /login`, `GET /me`, `PUT /me`. Doctors register with email/password/name; passwords are compared and stored **in plaintext** in `db.json` (see [Future improvements](#10-future-improvements)).
- **`routes/doctor.js`** — CRUD-style endpoints for `appointments`, `patients`, `prescriptions`, `messages`, `schedule` (per-date availability blocks), and read-only `reports`, `stats`, and `reports/chart-data` (last-30-days appointment/no-show aggregation for the Reports page's chart).
- **`routes/diagnosis.js`** — the AI endpoint:
  1. Accepts `{ imageDataUrl, checkpoint, modelType }` as JSON.
  2. Validates the data URL with a regex (`^data:(image\/\w+);base64,(.+)$`) and decodes it to a `Buffer`.
  3. Writes the image to a temp file (`os.tmpdir()`).
  4. Resolves classification and segmentation checkpoint paths relative to the backend root and confirms the requested checkpoint exists.
  5. Spawns `python3 diagnosis_runner.py --checkpoint ... --image ... --model_type ... --seg_checkpoint ... --clf_checkpoint ...`, captures stdout/stderr, `JSON.parse`s stdout as the response body.
  6. Deletes the temp image file in a `finally` block regardless of success/failure.
  - Uses `python3` explicitly (not `python`) — the Debian-based Docker image has no bare `python` command; earlier attempts failed with `spawn ENOENT` on Render.

### Frontend (`frontend/src/`)

Feature-sliced structure — each domain owns its own `api/` and `pages/`:

```
features/
  dashboard/      — landing overview after login
  diagnosis/       — image upload, AI inference call, results display
  patients/         — patient list/detail
  appointments/      — appointment CRUD
  prescriptions/       — prescription CRUD
  schedule/              — per-date availability
  reports/                — stats + 30-day chart
  teleconsult/               — consultation UI
shared/
  api/client.js — fetch wrapper: attaches JWT from localStorage, resolves
                  base URL from VITE_API_BASE_URL (falls back to relative /api)
  api/endpoints.js — central path constants
  auth/, ui/ — auth context/guards, shared UI (PageHeader, etc.)
app/
  providers/, shell/, theme/, routes/ — app shell, routing, MUI theme, React Query provider
```

- **`diagnosisApi.js`** talks directly to `/diagnosis` (or `VITE_DIAGNOSIS_API_URL` in production) rather than the shared `/api` client, since this endpoint is intentionally public/unauthenticated, unlike the JWT-guarded doctor data endpoints.
- All other feature APIs go through `shared/api/client.js`, which attaches the JWT automatically and normalizes error responses into thrown `Error` objects with `.status`/`.data` attached.

### Model checkpoints & deployment

Checkpoints are **not committed to git** (excluded via `.gitignore`). They're published as **GitHub Release assets** under the `v1.0-checkpoints` tag and downloaded at container startup by `backend/download-checkpoints.sh`:

- Downloads are skipped if the file already exists locally, so container restarts (not just first boot) stay fast.
- GitHub strips spaces and parentheses from uploaded release-asset filenames. The segmentation checkpoint's asset is named `deeplab_effb4_bce_dice_384.3.pth` on the release, but `diagnosis.js` looks for a specific local filename — the download script explicitly re-saves it under the filename the backend code expects, with an inline comment explaining why.

The root **`Dockerfile`** builds a single image containing both runtimes:
- Base: `node:18-bullseye`.
- Installs `python3`, `pip3`, and `curl` (curl needed for the checkpoint download step).
- Installs Python deps (`pip3 install -r backend/requirements.txt`) and Node deps (`npm ci --only=production`) in the same image.
- Runs as a non-root user (`appuser`, uid 1001) with ownership of `/app` so it can write downloaded checkpoints at runtime.
- Includes a `HEALTHCHECK` hitting `GET /health` every 30s.
- Container `CMD` runs `download-checkpoints.sh` **then** `npm start`, so the app never starts serving before model files are on disk.

## 5. Training

Both models were trained in Google Colab on a **Tesla T4 GPU** (CUDA 12.8), with mixed-precision training (`scaler.scale(loss).backward()` — AMP/`GradScaler`).

### Classification training

- **Backbone**: `convnext_small.fb_in22k_ft_in1k` via `timm`, `pretrained=True` (ImageNet-22k → ImageNet-1k weights), fully fine-tuned.
- **Image size**: 384×384 · **Batch size**: 16 · **Optimizer/LR**: 1e-4, weight decay 1e-4.
- **Loss functions compared**: cross-entropy (with 0.05 label smoothing) vs. focal loss (also 0.05 label smoothing) — **focal loss was the deployed choice**.
- **Validation strategy**: 5-fold cross-validation, 8 epochs per fold. The `convnext_small_ce` run completed all 5 folds; the `convnext_small_focal` run completed folds 0 and 1, then was manually interrupted (`KeyboardInterrupt`) partway through fold 2, epoch 4 — folds 2–4 of the focal run were not completed. **Fold 1 of the focal run is what's deployed** (`convnext_small_focal_fold1.pth`).
- No mixup (`use_mixup: false`).

### Segmentation training

- **Encoder**: EfficientNet-B4 (`timm-efficientnet-b4`), ImageNet-pretrained, via `segmentation_models_pytorch`.
- **Image size**: 384×384 · **Batch size**: 8 · **Optimizer/LR**: 1e-4, weight decay 1e-4.
- **Loss**: combined BCE + Dice (`bce_dice`).
- **Architecture search**: 4 candidate architectures (U-Net++/EffB4, DeepLabV3+/EffB4, U-Net++/EffB3, FPN/EffB4) trained for 12 epochs each under identical hyperparameters — see the comparison table in [Methodology](#3-methodology). DeepLabV3+/EfficientNet-B4 won and was deployed.
- **Threshold tuning**: every epoch's segmentation threshold was swept to find the value maximizing validation IoU (logged as `thr*`/`iou*`), rather than fixing the threshold at 0.5 — this is why the deployed checkpoint stores its own `best_threshold` instead of the code hardcoding one.
- **Final training note from the log**: after the architecture search, training + validation sets were meant to be combined (`Train+Val: 14,580 ← used for final training`) for a final production run evaluated against the held-out `Local test` (1,620) and `Real test` (200) sets — but the metrics from that specific final run aren't present in the log I received (the log ends after the 4-architecture search).

> Not available from these logs: exact number of workers/augmentation pipeline for classification (the segmentation side used the standard SMP/Albumentations-style train transforms implied by `tr=`/`va=` loss curves, but the specific augmentation list isn't logged here), and the final retrain's actual epoch count/metrics on the combined Train+Val set.

## 6. Results

### Classification (ConvNeXt-Small)

Final-epoch (epoch 8/8) validation metrics per fold:

| Loss | Fold | Val Accuracy | Val F1 |
|---|---|---|---|
| Cross-entropy | 0 | 95.97% | 0.9594 |
| Cross-entropy | 1 | 96.12% | 0.9612 |
| Cross-entropy | 2 | 96.01% | 0.9599 |
| Cross-entropy | 3 | 96.38% | 0.9637 |
| Cross-entropy | 4 | 95.60% | 0.9559 |
| **Focal (deployed)** | **0** | **96.36%** | **0.9634** |
| **Focal (deployed → `fold1`)** | **1** | **95.95%** | **0.9594** |

The **deployed checkpoint** (`convnext_small_focal_fold1.pth`) reached **95.95% validation accuracy** and **0.9594 validation F1** at the end of its 8-epoch fine-tune. Training accuracy at the same point was 97.78% (train F1 0.9778) — a ~2-point train/val gap, consistent with normal generalization rather than severe overfitting given the class-balanced augmented training set.

For context, cross-entropy folds averaged **~96.02% validation accuracy** across all 5 completed folds — essentially on par with the focal-loss fold that was deployed, suggesting the choice of focal over cross-entropy was likely motivated by the pre-augmentation class imbalance (better-calibrated per-class behavior) rather than a large raw accuracy gain, though per-class precision/recall isn't in this log to confirm that directly.

### Segmentation (DeepLabV3+, EfficientNet-B4)

Final-epoch (epoch 12/12) results from the architecture search:

| Architecture | Encoder | IoU @ 0.5 threshold | Best IoU (tuned threshold) | Best threshold |
|---|---|---|---|---|
| U-Net++ | EfficientNet-B4 | 0.9011 | 0.9015 | 0.41 |
| **DeepLabV3+ (deployed)** | **EfficientNet-B4** | **0.9018** | **0.9022** | **0.42** |
| U-Net++ | EfficientNet-B3 | 0.8919 | 0.8921 | 0.40 |
| FPN | EfficientNet-B4 | 0.9003 | 0.9005 | 0.46 |

DeepLabV3+/EfficientNet-B4 had the best tuned IoU (0.9022) of the four, by a margin of roughly half a point over U-Net++/EffB4 and FPN/EffB4, and about a point over U-Net++/EffB3 — a real but modest lead, not a blowout.

> **Not available in these logs**: Dice score specifically (the log reports IoU, not Dice, despite the checkpoint filename containing `bce_dice` referring to the *loss function*, not the reported metric), and any metrics from the final production retrain on the combined Train+Val set or its evaluation on the held-out Local/Real test sets.

## 7. Error analysis

### Confirmed: training/serving resolution mismatch

Both models were trained at **384×384**. The deployed inference code resizes uploaded images differently:

| Model | Trained at | Served at (`diagnosis_runner.py`, `classify.py`/`segment.py`) |
|---|---|---|
| Classification (ConvNeXt-Small) | 384×384 | **224×224** |
| Segmentation (DeepLabV3+) | 384×384 | **512×512** |

This is present in the original standalone inference scripts too (`IMAGE_SIZE = 224` in `classify.py`, `img_size=512` default in `segment.py`), so it isn't something introduced by the dashboard integration — it looks like a leftover from an earlier training configuration or a copy-paste default that was never updated to match the final 384px training run. Feeding a model images at a different resolution than it was trained on typically degrades accuracy, sometimes substantially for CNNs with resolution-sensitive receptive fields — this is worth fixing before treating the reported validation numbers above as representative of production behavior, since production is currently running at the wrong input size for both models.

### Other observations

- **Silent failure handling in production**: `diagnosis_runner.py` is written defensively — if either checkpoint fails to load, or `torch`/`timm`/`smp` aren't importable, the corresponding function returns a safe fallback (`'unknown'` classification at 0.0 confidence, or an all-black mask) **instead of raising an exception**. A broken deployment (missing dependency, corrupted checkpoint, wrong path) will still return `200 OK` with a plausible-looking but meaningless result rather than surfacing an error. The frontend currently has no way to distinguish "model returned `unknown`/0% confidence" from "model is confident this is normal."
- **Incomplete cross-validation for the deployed loss function**: only 2 of 5 planned folds (`fold0`, `fold1`) completed for the focal-loss classification run before it was interrupted. `fold1` was deployed, but there's no aggregate 5-fold statistic for focal loss the way there is for cross-entropy — the reported focal numbers reflect one fold's random split, not a cross-validated average.
- **Metric mismatch in naming**: the segmentation checkpoint is named with `bce_dice` (its loss function), but the logged evaluation metric throughout training is IoU, not Dice — worth computing Dice explicitly if that's the metric you want to report, since it isn't the same number as IoU.
- **Class confusion, per-class precision/recall, and segmentation failure modes by lesion size** aren't in the logs I have — recommend pulling those from a proper evaluation pass (confusion matrix + per-class report) run at the *correct* input resolution once the mismatch above is fixed, so the analysis reflects production behavior rather than the training-time numbers.

## 8. Demo

- **Frontend (Vercel):** https://doctor-ai-dashboard.vercel.app/
- **Backend health check:** `GET https://https://doctoraidashboard.onrender.com/health` → `{ "ok": true }`
- **Try it end-to-end:**
  1. `POST /api/auth/register` with `email`, `password`, `firstName`, `lastName` to create a doctor account (or use an existing seeded account from `backend/src/data/db.json` if running locally).
  2. Log in through the frontend.
  3. Open the **Diagnosis** page, upload a PNG/JPG/JPEG/WEBP image, and run analysis to see the classification result, confidence, per-class probability chart, and segmentation overlay.

> Add a screenshot or short screen recording of the Diagnosis page mid-result (upload → prediction → overlay) — the single most convincing thing to show in a portfolio README.

## 9. Installation

### Prerequisites

- Node.js 18+
- Python 3 + `pip`
- `curl` (used by `download-checkpoints.sh`)

### Backend

```bash
cd backend
npm install
pip install -r requirements.txt

# Download model checkpoints from the GitHub Release (v1.0-checkpoints)
sh download-checkpoints.sh

npm run dev      # nodemon, http://localhost:3000
```

`requirements.txt`: `numpy`, `Pillow`, `torch`, `torchvision`, `timm`, `segmentation-models-pytorch`.

### Frontend

```bash
cd frontend
npm install
npm run dev       # Vite dev server, http://localhost:5173
```

In development, the frontend calls relative `/api` and `/diagnosis` paths — configure your dev proxy (e.g. Vite's `server.proxy`) to forward those to `http://localhost:3000`, or set the env vars below to point directly at the backend.

### Environment variables

| Variable | Used by | Purpose | Default |
|---|---|---|---|
| `PORT` | backend | Port the Express server listens on | `3000` |
| `VITE_API_BASE_URL` | frontend | Base URL for `/api/*` calls in production | relative `/api` |
| `VITE_DIAGNOSIS_API_URL` | frontend | Base URL for the `/diagnosis` endpoint in production | relative `/diagnosis` |

### Docker (single-image build, matches what's deployed on Render)

```bash
docker build -t doctor-ai-dashboard .
docker run -p 3000:3000 doctor-ai-dashboard
```

Builds Node 18 + Python 3 into one image, installs both dependency sets, and on container start runs `download-checkpoints.sh` before `npm start` — so model files are guaranteed present before the server accepts traffic.

### Production deployment notes

- **Frontend → Vercel:** build command `npm run build` inside `frontend/`; set `VITE_API_BASE_URL` and `VITE_DIAGNOSIS_API_URL` to the deployed Render backend's URL.
- **Backend → Render:** deploys from the root `Dockerfile`. On Render's free tier, the service **cold-starts after a period of inactivity** — the first request after idle can take significantly longer while the container spins up and re-downloads/loads checkpoints, so the frontend should handle a slow first response gracefully rather than treating it as a failure.


