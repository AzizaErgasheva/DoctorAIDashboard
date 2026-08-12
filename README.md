# DoctorAIDashboard

A full-stack clinical dashboard that lets a doctor upload a medical image and get an AI-assisted diagnosis: a 12-class abnormality classification (ConvNeXt-Small) plus a lesion segmentation mask/overlay (DeepLabV3+), delivered inside a real doctor workflow (patients, appointments, prescriptions, schedule, reports).

- **Live app:** frontend on Vercel, backend on Render
- **Repo:** [github.com/AzizaErgasheva/DoctorAIDashboard](https://github.com/AzizaErgasheva/DoctorAIDashboard)
- **Stack:** React 19 + Vite + MUI (frontend) · Express 5 (backend) · PyTorch inference via subprocess

---

## 1. Problem

Doctors reviewing medical images (e.g. radiographs) need a fast first-pass read: *is this abnormal, and where?* Manual review is slow and clinics without in-house radiology support lack a second opinion at the point of care.

DoctorAIDashboard addresses this by giving a doctor a single place to:
1. Upload a scan and get an automated **classification** (normal vs. one of 11 abnormality types) with a confidence score,
2. See a **segmentation mask/heatmap overlay** highlighting the region driving that prediction, and
3. Act on it directly inside their existing workflow (patient record, prescription, appointment) instead of switching tools.

> Fill in with your specific clinical framing (e.g. bone tumor detection on X-rays) and the exact patient population / imaging modality this was built for — that context lives in your hackathon writeup, not in the codebase itself.

## 2. Dataset

The inference code expects single RGB images and predicts one of **12 classes** (`Normal` + 11 abnormality categories) for classification, and a binary lesion mask for segmentation.

> This section needs your actual dataset details filled in, since they live outside the code (e.g. your BTXRD / hackathon dataset docs), not in this repo:
> - Dataset name, source, and size (train/val/test split)
> - Class distribution (especially class imbalance, since you trained the classifier with a **focal loss** checkpoint — `convnext_small_focal_fold1.pth` — which is typically a response to imbalance)
> - Image resolution/modality and any preprocessing done before training (the inference pipeline resizes to 224×224 for classification and 512×384 for segmentation, normalized with ImageNet mean/std)
> - Annotation process for segmentation masks (manual, semi-automated, etc.)

## 3. Methodology

Two separate models handle two separate tasks on the same uploaded image:

| Task | Model | Purpose |
|---|---|---|
| Classification | ConvNeXt-Small (`timm`) | Predicts 1 of 12 classes + per-class confidence |
| Segmentation | DeepLabV3+ (`segmentation_models_pytorch`, EfficientNet-B4 encoder) | Predicts a binary lesion mask, thresholded and resized back to the original image dimensions |

Both run independently on the same input and their outputs are combined in the API response: a predicted label + confidence + per-class probability breakdown, a mask image, and a red heatmap overlay composited onto the original image for visual interpretability.

> Fill in: loss functions and training strategy per model (you noted focal loss for classification), whether test-time augmentation or k-fold ensembling was used in the final deployed checkpoints (the pipeline docstring in `DiagnosisPage.jsx` references "TTA/specialist logic" — worth documenting exactly what runs at inference time), and why DeepLabV3+ was chosen over the UNet++ ensemble from your hackathon work if that differs from what's deployed here.

## 4. Architecture

```
┌─────────────────────┐        HTTPS         ┌──────────────────────────┐
│   Frontend (Vercel)  │ ───────────────────► │   Backend (Render)        │
│   React 19 + Vite     │                      │   Express 5 API            │
│   MUI · TanStack Query │ ◄─────────────────── │                            │
│   React Hook Form/Zod │      JSON             │  /health                  │
│   Recharts             │                      │  /diagnosis  (public)     │
└─────────────────────┘                        │  /api/auth   (JWT)         │
                                                │  /api/doctor (JWT-guarded) │
                                                └──────────────┬────────────┘
                                                                │ spawn (python3)
                                                                ▼
                                                 ┌──────────────────────────┐
                                                 │  diagnosis_runner.py      │
                                                 │  - loads .pth checkpoints │
                                                 │  - runs classification    │
                                                 │  - runs segmentation      │
                                                 │  - returns JSON to Node   │
                                                 └──────────────────────────┘
```

**Backend routes** (`backend/src/`):
- `routes/diagnosis.js` — accepts a base64 image + checkpoint name, writes it to a temp file, spawns `python3 diagnosis_runner.py`, parses the returned JSON, and cleans up the temp file.
- `routes/auth.js` — register/login/me, JWT-based (`jsonwebtoken`), simple JSON-file-backed user store (`src/data/db.json`).
- `routes/doctor.js` — appointments, patients, prescriptions, messages, schedule, and reports/stats endpoints, all guarded by `requireBearerToken` middleware.

**Frontend** (`frontend/src/`) is feature-sliced: `features/diagnosis`, `features/patients`, `features/appointments`, `features/prescriptions`, `features/schedule`, `features/reports`, `features/teleconsult`, `features/dashboard`, each with its own `api/` and `pages/`, sharing a common `shared/api/client.js` (fetch wrapper with JWT attached) and `shared/ui` components.

**Model checkpoints are not committed to git.** They're published as GitHub Release assets (`v1.0-checkpoints`) and pulled down by `backend/download-checkpoints.sh` on container start — this also resolves a filename mismatch where GitHub strips spaces/parentheses from uploaded asset names, so the script re-saves the segmentation checkpoint locally under the exact filename the backend code expects.

## 5. Training

> This section is intentionally left for you to fill in, since the training code/notebooks aren't part of this repo (only inference scripts `classify.py` and `segment.py`, and `diagnosis_runner.py` for serving, are):
> - Training environment (Colab/local GPU), epochs, batch size, optimizer, learning rate schedule
> - Augmentation strategy
> - Cross-validation setup (checkpoint is named `_fold1`, implying k-fold — how many folds, how fold 1 was selected as the deployed one)
> - How `best_threshold` was chosen for the segmentation model (it's stored in the checkpoint and loaded at inference time rather than hardcoded, so document the calibration process that produced it)

## 6. Results

> Pull these from your hackathon submission/evaluation notebook — they aren't computed anywhere in this repo:
> - Classification: accuracy, macro/weighted F1, per-class precision/recall (especially important given 12 classes and focal loss — some classes are likely rare)
> - Segmentation: Dice/IoU on held-out test data at the deployed `best_threshold`
> - Any leaderboard/competition ranking from the hackathon, if applicable

## 7. Error analysis

> Also outside this repo's code — worth documenting from your evaluation work:
> - Which classes are most confused with each other in the classifier (confusion matrix)
> - Cases where segmentation mask quality is poor (e.g. small lesions, low contrast, edge artifacts)
> - Known failure modes on out-of-distribution images (different scanner, unusual framing, non-medical images uploaded by mistake)
> - How the app currently handles a missing/failed model load: `diagnosis_runner.py` falls back to `'unknown'` classification with 0.0 confidence and a blank mask rather than erroring out — worth noting as a soft-failure mode, since a doctor could otherwise miss that inference silently failed

## 8. Demo

- **Frontend:** [add your Vercel URL]
- **Backend health check:** `GET /health` on your Render URL → `{ "ok": true }`
- **Try it:** register a doctor account via `/api/auth/register`, log in, then go to the Diagnosis page to upload an image and run inference.

> Add a screenshot or short screen recording of the Diagnosis page (upload → classification result → segmentation overlay) here — this is the single most convincing thing for a portfolio README.

## 9. Installation

### Prerequisites
- Node.js 18+
- Python 3 + pip
- `curl` (used by `download-checkpoints.sh`)

### Backend
```bash
cd backend
npm install
pip install -r requirements.txt

# Download model checkpoints from the GitHub Release
sh download-checkpoints.sh

npm run dev      # nodemon, http://localhost:3000
```

### Frontend
```bash
cd frontend
npm install
npm run dev       # http://localhost:5173, proxies /api and /diagnosis to the backend
```

### Environment variables
| Variable | Where | Purpose |
|---|---|---|
| `PORT` | backend | Server port (defaults to 3000) |
| `VITE_API_BASE_URL` | frontend | Base URL for `/api/*` calls in production (defaults to relative `/api`) |
| `VITE_DIAGNOSIS_API_URL` | frontend | Base URL for `/diagnosis` in production (defaults to relative `/diagnosis`) |

### Docker
A single `Dockerfile` at the repo root builds Node 18 + Python 3 together, installs both dependency sets, downloads checkpoints on container start, then runs `npm start`:
```bash
docker build -t doctor-ai-dashboard .
docker run -p 3000:3000 doctor-ai-dashboard
```

### Deployed setup
- **Frontend → Vercel:** build command `npm run build` in `frontend/`, with `VITE_API_BASE_URL`/`VITE_DIAGNOSIS_API_URL` pointed at the Render backend.
- **Backend → Render:** builds from the root `Dockerfile`. On Render's free tier the service cold-starts after inactivity, so the first request after idle can be slow — plan for that in the frontend's request handling.

## 10. Future improvements

- Persist users/appointments/patients in a real database instead of the JSON file store (`src/data/db.json`) — fine for a demo, not for concurrent writes in production.
- Replace plaintext password storage in `routes/auth.js` with hashing (bcrypt/argon2) before any real patient data touches this system.
- Add batching/queueing for inference requests instead of spawning a fresh Python process per request, to reduce latency and avoid overloading Render's free-tier resources under load.
- Report calibrated confidence (not just softmax max) and add an explicit "low confidence / needs human review" threshold in the UI.
- Add automated tests for the Express routes and a smoke test that runs `diagnosis_runner.py` against a known image/expected output, so regressions in checkpoint loading are caught in CI rather than in production.
- Expand class labels from generic `Abnormality_1..11` to their real clinical names in both the model output and the UI.
- Add multi-image / DICOM support if the target modality requires it.
