import express from 'express'
import { writeFile, unlink, access } from 'fs/promises'
import { constants } from 'fs'
import { spawn } from 'child_process'
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const diagnosisRouter = express.Router()

function fileExists(filePath) {
  return access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false)
}

function runPythonInference(checkpointPath, imagePath, modelType = 'classification') {
  const scriptPath = path.join(__dirname, '../diagnosis_runner.py')
  const segCheckpointPath = path.resolve(path.join(__dirname, '../../', 'deeplab_effb4_bce_dice_384 (3).pth'))
  const clfCheckpointPath = path.resolve(path.join(__dirname, '../../', 'convnext_small_focal_fold1.pth'))
  return new Promise((resolve, reject) => {
    const pythonCmd = process.platform === 'win32' ? 'py' : 'python'
    const proc = spawn(pythonCmd, [
      scriptPath,
      '--checkpoint', checkpointPath,
      '--image', imagePath,
      '--model_type', modelType,
      '--seg_checkpoint', segCheckpointPath,
      '--clf_checkpoint', clfCheckpointPath,
    ], {
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let output = ''
    let error = ''

    proc.stdout.on('data', (chunk) => { output += chunk.toString() })
    proc.stderr.on('data', (chunk) => { error += chunk.toString() })

    proc.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`Python inference failed (code ${code}): ${error}`))
      }
      try {
        const parsed = JSON.parse(output)
        resolve(parsed)
      } catch (err) {
        reject(new Error(`Failed to parse inference output: ${err.message}; output=${output}; error=${error}`))
      }
    })
  })
}

diagnosisRouter.post('/', async (req, res, next) => {
  try {
    const imageDataUrl = String(req.body.imageDataUrl || '').trim()
    const checkpointName = String(req.body.checkpoint || 'convnext_small_focal_fold1.pth')
    const modelType = String(req.body.modelType || 'classification') // 'classification' or 'segmentation'

    if (!imageDataUrl) {
      return res.status(400).json({ message: 'Missing imageDataUrl in request body.' })
    }

    const match = imageDataUrl.match(/^data:(image\/\w+);base64,(.+)$/)
    if (!match) {
      return res.status(400).json({ message: 'imageDataUrl must be a valid data URL.' })
    }
    const base64Data = match[2]
    const imageBuffer = Buffer.from(base64Data, 'base64')

    const tmpFile = path.join(os.tmpdir(), `diagnosis_input_${Date.now()}.png`)
    await writeFile(tmpFile, imageBuffer)

    // Resolve checkpoint path from backend root
    const checkpointPath = path.resolve(path.join(__dirname, '../../', checkpointName))

    if (!(await fileExists(checkpointPath))) {
      await unlink(tmpFile).catch(() => {})
      return res.status(400).json({ message: `Checkpoint file not found: ${checkpointName}` })
    }

    try {
      const result = await runPythonInference(checkpointPath, tmpFile, modelType)
      res.json(result)
    } finally {
      await unlink(tmpFile).catch(() => {})
    }
  } catch (err) {
    next(err)
  }
})
