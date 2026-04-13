# Frontend (Vite + React + MUI)

## Run

```bash
cd frontend
npm install
npm run dev
```

## Backend base URL

By default the frontend calls relative routes:

- `/api` for app API requests
- `/diagnosis` for diagnosis inference

To override, create `frontend/.env`:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
VITE_DIAGNOSIS_API_URL=http://localhost:3000/diagnosis
```

## Deploy on Vercel

Deploy only this `frontend` folder to Vercel.

Project settings:

- Root Directory: `frontend`
- Framework Preset: `Vite`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`

Environment Variables (Production):

```bash
VITE_API_BASE_URL=https://YOUR_BACKEND_DOMAIN/api
VITE_DIAGNOSIS_API_URL=https://YOUR_BACKEND_DOMAIN/diagnosis
```

Important: the backend in this repository is an Express + Python inference service and should be hosted separately from Vercel frontend.

