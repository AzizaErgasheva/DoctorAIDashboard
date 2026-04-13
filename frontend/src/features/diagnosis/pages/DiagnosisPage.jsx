import { useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import PsychologyIcon from '@mui/icons-material/Psychology'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { analyzeDiagnosisRemotely } from '../api/diagnosisApi.js'

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']


export function DiagnosisPage() {
  const [file, setFile] = useState(null)
  const [sourceDataUrl, setSourceDataUrl] = useState('')
  const [result, setResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState(0)
  const theme = useTheme()

  const hasImage = Boolean(sourceDataUrl)

  const pipelineSteps = useMemo(
    () => [
      'Load saved checkpoint(s)',
      'Run single-image segmentation inference',
      'Generate mask and heatmap overlay',
      'Run classification inference (TTA/specialist logic)',
      'Render prediction + confidence in real time',
    ],
    [],
  )

  async function onFileSelected(nextFile) {
    setError('')
    setResult(null)
    setActiveTab(0)

    if (!nextFile) {
      setFile(null)
      setSourceDataUrl('')
      return
    }

    if (!ACCEPTED_TYPES.includes(nextFile.type)) {
      setError('Please upload PNG/JPG/JPEG/WEBP image.')
      return
    }

    const dataUrl = await readFileAsDataUrl(nextFile)
    setFile(nextFile)
    setSourceDataUrl(dataUrl)
  }

  async function onAnalyze() {
    if (!file || !sourceDataUrl) {
      setError('Upload an image first.')
      return
    }
    setError('')
    setIsAnalyzing(true)

    /*
      Implementation order:
      1. Training and checkpoint saving happen outside this UI.
      2. This UI loads saved model checkpoints (remote or local) and runs
         inference on a single uploaded image.
      3. It produces segmentation mask + overlay + classification in one flow
         with a single button click.
    */

    try {
      // Remote checkpoint inference service with segmentation checkpoint.
      const remote = await analyzeDiagnosisRemotely(file, 'deeplab_effb4_bce_dice_384 (3).pth', 'segmentation')
      setResult({
        mode: 'remote',
        classification: remote.classification ?? 'Unknown',
        confidence: Number(remote.confidence ?? 0),
        maskDataUrl: remote.maskDataUrl ?? '',
        overlayDataUrl: remote.overlayDataUrl ?? '',
        details: remote.details ?? {},
      })
      setActiveTab(2)
    } catch (remoteErr) {
      console.error('Diagnosis inference failed:', remoteErr)
      setError('Diagnosis inference failed. Backend did not return a valid segmentation result.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <Stack spacing={2.5}>
      <PageHeader
        title="Diagnosis Workspace"
        subtitle="Upload a single image, run one-click inference, and visualize segmentation heatmap + classification in real time."
      />

      <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            Live judge-facing flow
          </Typography>
          {pipelineSteps.map((step, idx) => (
            <Typography key={step} variant="body2" color="text.secondary">
              {idx + 1}. {step}
            </Typography>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ md: 'center' }}>
          <Button component="label" startIcon={<CloudUploadIcon />} variant="outlined">
            Upload Image
            <input
              hidden
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={(e) => onFileSelected(e.target.files?.[0] || null)}
            />
          </Button>
          {file ? <Chip size="small" label={file.name} /> : <Chip size="small" label="No file selected" />}
          <Box sx={{ flex: 1 }} />
          <Button
            onClick={onAnalyze}
            disabled={!hasImage || isAnalyzing}
            startIcon={<PsychologyIcon />}
          >
            {isAnalyzing ? 'Analyzing…' : 'Run Diagnosis'}
          </Button>
        </Stack>

        {error ? (
          <Alert sx={{ mt: 2 }} severity="error">
            {error}
          </Alert>
        ) : null}
      </Paper>

      <Paper sx={{ border: (t) => `1px solid ${t.palette.divider}` }}>
        <Tabs value={activeTab} onChange={(_, next) => setActiveTab(next)}>
          <Tab label="Original" />
          <Tab label="Mask" disabled={!result} />
          <Tab label="Overlay / Heatmap" disabled={!result} />
        </Tabs>
        <Divider />

        <Box sx={{ p: 2 }}>
          {activeTab === 0 ? <ImagePanel title="Original Image" dataUrl={sourceDataUrl} /> : null}
          {activeTab === 1 ? <ImagePanel title="Segmentation Mask" dataUrl={result?.maskDataUrl} /> : null}
          {activeTab === 2 ? <ImagePanel title="Heatmap Overlay" dataUrl={result?.overlayDataUrl} /> : null}
        </Box>
      </Paper>

      <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
          Classification Result
        </Typography>
        {result ? (
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
            <Chip color="primary" label={`Prediction: ${result.classification}`} />
            <Chip
              variant="outlined"
              label={`Confidence: ${(Number(result.confidence || 0) * 100).toFixed(1)}%`}
            />
            <Chip
              variant="outlined"
              label={result.mode === 'remote' ? 'Inference source: checkpoint service' : 'Inference source: UI fallback'}
            />
          </Stack>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No result yet. Upload image and click Run Diagnosis.
          </Typography>
        )}
        {result?.classProbabilities?.length ? (
          <Box sx={{ mt: 3, height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={result.classProbabilities}
                margin={{ top: 20, right: 12, left: 12, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
                <Bar dataKey="value" fill={theme.palette.primary.main} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        ) : null}
      </Paper>
    </Stack>
  )
}

function ImagePanel({ title, dataUrl }) {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
      {dataUrl ? (
        <Box
          component="img"
          src={dataUrl}
          alt={title}
          sx={{
            maxWidth: '100%',
            maxHeight: 480,
            borderRadius: 2,
            border: (t) => `1px solid ${t.palette.divider}`,
            objectFit: 'contain',
          }}
        />
      ) : (
        <Typography variant="body2" color="text.secondary">
          No image available.
        </Typography>
      )}
    </Stack>
  )
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(String(r.result || ''))
    r.onerror = reject
    r.readAsDataURL(file)
  })
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = dataUrl
  })
}

async function runLocalInteractiveInference(sourceDataUrl) {
  const img = await loadImage(sourceDataUrl)
  const w = img.naturalWidth
  const h = img.naturalHeight

  const baseCanvas = document.createElement('canvas')
  baseCanvas.width = w
  baseCanvas.height = h
  const baseCtx = baseCanvas.getContext('2d')
  baseCtx.drawImage(img, 0, 0, w, h)
  const pixels = baseCtx.getImageData(0, 0, w, h)

  const maskCanvas = document.createElement('canvas')
  maskCanvas.width = w
  maskCanvas.height = h
  const maskCtx = maskCanvas.getContext('2d')
  const maskData = maskCtx.createImageData(w, h)

  let positiveCount = 0
  const total = w * h

  for (let i = 0; i < pixels.data.length; i += 4) {
    const r = pixels.data[i]
    const g = pixels.data[i + 1]
    const b = pixels.data[i + 2]
    const lum = 0.299 * r + 0.587 * g + 0.114 * b
    const hot = lum > 140 ? 255 : 0
    if (hot) positiveCount++

    maskData.data[i] = hot
    maskData.data[i + 1] = hot
    maskData.data[i + 2] = hot
    maskData.data[i + 3] = 255
  }

  maskCtx.putImageData(maskData, 0, 0)

  const overlayCanvas = document.createElement('canvas')
  overlayCanvas.width = w
  overlayCanvas.height = h
  const overlayCtx = overlayCanvas.getContext('2d')
  overlayCtx.drawImage(img, 0, 0, w, h)

  const heat = overlayCtx.getImageData(0, 0, w, h)
  for (let i = 0; i < heat.data.length; i += 4) {
    if (maskData.data[i] > 0) {
      // Red transparent heatmap overlay
      heat.data[i] = Math.min(255, heat.data[i] + 110)
      heat.data[i + 1] = Math.max(0, heat.data[i + 1] - 40)
      heat.data[i + 2] = Math.max(0, heat.data[i + 2] - 40)
    }
  }
  overlayCtx.putImageData(heat, 0, 0)

  const ratio = positiveCount / total
  const confidence = Math.max(0.55, Math.min(0.97, 0.55 + ratio * 0.5))
  const classification = ratio > 0.35 ? 'Potential abnormal ROI detected' : 'Likely normal'

  return {
    classification,
    confidence,
    maskDataUrl: maskCanvas.toDataURL('image/png'),
    overlayDataUrl: overlayCanvas.toDataURL('image/png'),
    details: {
      positivePixelRatio: ratio,
    },
  }
}

