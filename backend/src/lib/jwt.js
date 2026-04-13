import jwt from 'jsonwebtoken'

function secret() {
  return process.env.JWT_SECRET || 'dev_secret_change_me'
}

export function signJwt(payload, opts = {}) {
  return jwt.sign(payload, secret(), {
    expiresIn: '7d',
    ...opts,
  })
}

export function verifyJwt(token) {
  return jwt.verify(token, secret())
}

