const DEFAULT_BASE_URL = '/api'

function resolveBaseUrl() {
  const fromEnv = import.meta?.env?.VITE_API_BASE_URL
  return (fromEnv && String(fromEnv)) || DEFAULT_BASE_URL
}

export function setAuthToken(token) {
  if (!token) {
    localStorage.removeItem('doctor_dashboard:authToken')
    return
  }
  localStorage.setItem('doctor_dashboard:authToken', token)
}

export function getAuthToken() {
  return localStorage.getItem('doctor_dashboard:authToken') || ''
}

function normalizePath(path) {
  const p = String(path || '')
  return p.startsWith('/') ? p.slice(1) : p
}

async function request(method, path, body) {
  const base = resolveBaseUrl()
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`
  const url = new URL(normalizePath(path), baseWithSlash).toString()
  const token = getAuthToken()

  const res = await fetch(url, {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : null),
      ...(token ? { Authorization: `Bearer ${token}` } : null),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const text = await res.text()
  const contentType = res.headers.get('content-type') || ''
  const data = contentType.includes('application/json') && text ? JSON.parse(text) : text

  if (!res.ok) {
    const message =
      typeof data === 'object' && data && 'message' in data
        ? String(data.message)
        : `Request failed: ${res.status} ${res.statusText}`
    const err = new Error(message)
    err.status = res.status
    err.data = data
    throw err
  }

  return data
}

export async function apiGet(path) {
  return request('GET', path)
}

export async function apiPost(path, body) {
  return request('POST', path, body)
}

export async function apiPut(path, body) {
  return request('PUT', path, body)
}

