import express from 'express'
import { readDb } from '../lib/storage.js'
import { signJwt } from '../lib/jwt.js'
import { writeDb, newId } from '../lib/storage.js'

export const authRouter = express.Router()

authRouter.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body || {}
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' })
    }

    const db = await readDb()
    const user = (db.users || []).find((u) => u.email === email)
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = signJwt({
      sub: user.id,
      role: user.role,
      doctorId: user.doctorId,
      doctorName: user.doctorName,
      email: user.email,
    })

    return res.json({
      token,
      user: {
        id: user.id,
        role: user.role,
        doctorId: user.doctorId,
        doctorName: user.doctorName,
        email: user.email,
      },
    })
  } catch (e) {
    next(e)
  }
})

authRouter.post('/register', async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, phone, specialty } = req.body || {}
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: 'Missing required fields: email, password, firstName, lastName' })
    }

    const db = await readDb()
    const existing = (db.users || []).find((u) => u.email === email)
    if (existing) {
      return res.status(409).json({ message: 'Email already in use' })
    }

    const doctorName = `Dr. ${firstName} ${lastName}`
    const user = {
      id: newId('usr'),
      role: 'doctor',
      email,
      password,
      doctorId: newId('doc'),
      doctorName,
      firstName,
      lastName,
      phone: phone || '',
      specialty: specialty || '',
    }

    db.users = [user, ...(db.users || [])]
    await writeDb(db)

    const token = signJwt({ sub: user.id, role: user.role, doctorId: user.doctorId, doctorName: user.doctorName, email: user.email })
    return res.status(201).json({ token, user: { id: user.id, role: user.role, email: user.email, doctorId: user.doctorId, doctorName: user.doctorName, firstName: user.firstName, lastName: user.lastName, phone: user.phone, specialty: user.specialty } })
  } catch (e) {
    next(e)
  }
})

authRouter.get('/me', async (req, res, next) => {
  try {
    if (!req.user || !req.user.sub) return res.status(401).json({ message: 'Unauthorized' })
    const db = await readDb()
    const user = (db.users || []).find((u) => u.id === req.user.sub)
    if (!user) return res.status(404).json({ message: 'User not found' })
    return res.json({ id: user.id, role: user.role, email: user.email, doctorId: user.doctorId, doctorName: user.doctorName, firstName: user.firstName, lastName: user.lastName, phone: user.phone, specialty: user.specialty })
  } catch (e) {
    next(e)
  }
})

authRouter.put('/me', async (req, res, next) => {
  try {
    if (!req.user || !req.user.sub) return res.status(401).json({ message: 'Unauthorized' })
    const { firstName, lastName, email, phone, specialty } = req.body || {}
    const db = await readDb()
    const userIndex = (db.users || []).findIndex((u) => u.id === req.user.sub)
    if (userIndex < 0) return res.status(404).json({ message: 'User not found' })

    if (email) {
      const existing = (db.users || []).find((u) => u.email === email && u.id !== req.user.sub)
      if (existing) return res.status(409).json({ message: 'Email already in use' })
      db.users[userIndex].email = email
    }
    if (firstName) db.users[userIndex].firstName = firstName
    if (lastName) db.users[userIndex].lastName = lastName
    if (phone !== undefined) db.users[userIndex].phone = phone
    if (specialty !== undefined) db.users[userIndex].specialty = specialty

    // Update doctorName if first/last name changed
    if (firstName || lastName) {
      const fn = firstName || db.users[userIndex].firstName
      const ln = lastName || db.users[userIndex].lastName
      db.users[userIndex].doctorName = `Dr. ${fn} ${ln}`
    }

    await writeDb(db)
    const updated = db.users[userIndex]
    return res.json({ id: updated.id, role: updated.role, email: updated.email, doctorId: updated.doctorId, doctorName: updated.doctorName, firstName: updated.firstName, lastName: updated.lastName, phone: updated.phone, specialty: updated.specialty })
  } catch (e) {
    next(e)
  }
})

