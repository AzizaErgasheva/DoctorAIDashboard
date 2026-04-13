import { verifyJwt } from '../lib/jwt.js'

export function requireBearerToken(req, res, next) {
  // Default to false in development; set REQUIRE_AUTH=true in production or when auth is needed.
  const requireAuth = String(process.env.REQUIRE_AUTH || 'false').toLowerCase() === 'true'

  const h = req.headers.authorization || ''
  const token = h.startsWith('Bearer ') ? h.slice('Bearer '.length).trim() : ''

  if (!token) {
    if (!requireAuth) return next()
    return res.status(401).json({ message: 'Missing Bearer token' })
  }

  try {
    const decoded = verifyJwt(token)
    req.user = decoded
    return next()
  } catch {
    if (!requireAuth) return next()
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}

