import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { requireBearerToken } from './middleware/auth.js'
import { authRouter } from './routes/auth.js'
import { doctorRouter } from './routes/doctor.js'
import { diagnosisRouter } from './routes/diagnosis.js'

const app = express()

app.use(morgan('dev'))
app.use(
  cors({
    origin: true,
  }),
)
app.use(express.json({ limit: '1mb' }))

app.get('/health', (_req, res) => res.json({ ok: true }))

app.use('/diagnosis', diagnosisRouter)

app.use('/api/auth', authRouter)
app.use('/api', requireBearerToken)
app.use('/api/doctor', doctorRouter)

app.use((err, _req, res, _next) => {
  const status = Number(err?.status) || 500
  res.status(status).json({
    message: err?.message || 'Server error',
  })
})

const port = Number(process.env.PORT) || 3000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${port}`)
})

