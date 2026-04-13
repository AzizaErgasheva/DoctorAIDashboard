import express from 'express'
import { newId, readDb, writeDb } from '../lib/storage.js'

export const doctorRouter = express.Router()

doctorRouter.get('/appointments', async (_req, res, next) => {
  try {
    const db = await readDb()
    res.json(db.appointments ?? [])
  } catch (e) {
    next(e)
  }
})

doctorRouter.post('/appointments', async (req, res, next) => {
  try {
    const db = await readDb()
    const payload = req.body || {}
    const created = {
      id: newId('apt'),
      patientId: String(payload.patientId ?? ''),
      patientName: String(payload.patientName ?? 'Unknown'),
      startsAt: String(payload.startsAt ?? new Date().toISOString()),
      durationMin: Number(payload.durationMin ?? 15),
      status: String(payload.status ?? 'scheduled'),
      type: String(payload.type ?? 'Consultation'),
    }
    db.appointments = [created, ...(db.appointments ?? [])]
    await writeDb(db)
    res.status(201).json(created)
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/patients', async (_req, res, next) => {
  try {
    const db = await readDb()
    res.json(db.patients ?? [])
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/prescriptions', async (_req, res, next) => {
  try {
    const db = await readDb()
    res.json(db.prescriptions ?? [])
  } catch (e) {
    next(e)
  }
})

doctorRouter.post('/prescriptions', async (req, res, next) => {
  try {
    const db = await readDb()
    const payload = req.body || {}
    const created = {
      id: newId('rx'),
      createdAt: new Date().toISOString(),
      patientId: String(payload.patientId ?? ''),
      summary: String(payload.summary ?? 'Prescription'),
      lines: Array.isArray(payload.lines) ? payload.lines.map(String) : [],
    }
    db.prescriptions = [created, ...(db.prescriptions ?? [])]
    await writeDb(db)
    res.status(201).json(created)
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/messages', async (_req, res, next) => {
  try {
    const db = await readDb()
    res.json(db.messages ?? [])
  } catch (e) {
    next(e)
  }
})

doctorRouter.post('/messages', async (req, res, next) => {
  try {
    const db = await readDb()
    const payload = req.body || {}
    const created = {
      id: newId('msg'),
      createdAt: new Date().toISOString(),
      patientId: String(payload.patientId ?? ''),
      patientName: String(payload.patientName ?? 'Unknown'),
      direction: String(payload.direction ?? 'out'),
      text: String(payload.text ?? ''),
    }
    db.messages = [created, ...(db.messages ?? [])]
    await writeDb(db)
    res.status(201).json(created)
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/schedule', async (req, res, next) => {
  try {
    const date = String(req.query.date ?? '')
    if (!date) return res.status(400).json({ message: 'Missing ?date=YYYY-MM-DD' })

    const db = await readDb()
    const entry = db.availabilityByDate?.[date]
    if (entry) return res.json(entry)

    const fallback = {
      date,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      blocks: [
        { id: 'blk_1', start: '09:00', end: '12:00', location: 'Room 2' },
        { id: 'blk_2', start: '13:00', end: '16:30', location: 'Room 2' }
      ],
      exceptions: []
    }
    res.json(fallback)
  } catch (e) {
    next(e)
  }
})

doctorRouter.post('/schedule', async (req, res, next) => {
  try {
    const payload = req.body || {}
    const date = String(payload.date ?? '')
    if (!date) return res.status(400).json({ message: 'Missing body.date' })

    const db = await readDb()
    db.availabilityByDate = db.availabilityByDate ?? {}
    db.availabilityByDate[date] = payload
    await writeDb(db)
    res.json(payload)
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/reports', async (_req, res, next) => {
  try {
    const db = await readDb()
    const appts = db.appointments ?? []
    const total = appts.length
    const noShow = appts.filter((a) => a.status === 'no_show').length
    const completed = appts.filter((a) => a.status === 'completed').length

    res.json({
      totals: { appointments: total, completed, noShow },
      noShowRate: total ? noShow / total : 0,
      updatedAt: new Date().toISOString(),
    })
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/stats', async (_req, res, next) => {
  try {
    const db = await readDb()
    const appts = db.appointments ?? []
    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    const todayAppointments = appts.filter((a) => a.startsAt.startsWith(today)).length
    const waitingRoom = appts.filter((a) => a.status === 'waiting').length
    const unreadMessages = 0 // Placeholder, implement when messages are added
    const recentAppts = appts.filter((a) => a.startsAt >= sevenDaysAgo)
    const noShow = recentAppts.filter((a) => a.status === 'no_show').length
    const totalRecent = recentAppts.length
    const noShowRate = totalRecent ? ((noShow / totalRecent) * 100).toFixed(1) + '%' : '0%'

    res.json({
      todayAppointments,
      waitingRoom,
      unreadMessages,
      noShowRate,
      updatedAt: new Date().toISOString(),
    })
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/reports/chart-data', async (_req, res, next) => {
  try {
    const db = await readDb()
    const appts = db.appointments ?? []
    
    // Generate last 30 days data
    const data = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      
      const dayAppts = appts.filter(a => a.startsAt.startsWith(dateStr))
      const total = dayAppts.length
      const noShow = dayAppts.filter(a => a.status === 'no_show').length
      const completed = dayAppts.filter(a => a.status === 'completed').length
      
      data.push({
        date: dateStr,
        appointments: total,
        noShow,
        completed,
        noShowRate: total ? (noShow / total) * 100 : 0,
      })
    }
    
    res.json(data)
  } catch (e) {
    next(e)
  }
})

doctorRouter.get('/messages', async (_req, res, next) => {
  try {
    const db = await readDb()
    res.json(db.messages ?? [])
  } catch (e) {
    next(e)
  }
})

doctorRouter.post('/messages', async (req, res, next) => {
  try {
    const db = await readDb()
    const payload = req.body || {}
    const created = {
      id: newId('msg'),
      patientId: String(payload.patientId ?? ''),
      patientName: String(payload.patientName ?? ''),
      text: String(payload.text ?? ''),
      createdAt: new Date().toISOString(),
      direction: 'out', // doctor's message
    }
    db.messages = [created, ...(db.messages ?? [])]
    await writeDb(db)
    res.status(201).json(created)
  } catch (e) {
    next(e)
  }
})

