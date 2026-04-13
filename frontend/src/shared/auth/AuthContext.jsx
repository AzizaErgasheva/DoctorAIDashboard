import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { apiGet, apiPost, apiPut } from '../api/client.js'
import { getAuthToken, setAuthToken } from '../api/client.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [status, setStatus] = useState('loading') // loading | authenticated | unauth
  const [user, setUser] = useState(null)

  async function refreshUser() {
    const token = getAuthToken()
    if (!token) {
      setUser(null)
      setStatus('unauth')
      return
    }

    try {
      const profile = await apiGet('/auth/me')
      setUser(profile)
      setStatus('authenticated')
    } catch (e) {
      setAuthToken('')
      setUser(null)
      setStatus('unauth')
    }
  }

  useEffect(() => {
    refreshUser()
  }, [])

  const login = async ({ email, password }) => {
    const res = await apiPost('/auth/login', { email, password })
    setAuthToken(res.token)
    setUser(res.user)
    setStatus('authenticated')
    return res.user
  }

  const register = async ({ email, password, firstName, lastName, phone, specialty }) => {
    const res = await apiPost('/auth/register', { email, password, firstName, lastName, phone, specialty })
    setAuthToken(res.token)
    setUser(res.user)
    setStatus('authenticated')
    return res.user
  }

  const logout = () => {
    setAuthToken('')
    setUser(null)
    setStatus('unauth')
  }

  const updateProfile = async ({ firstName, lastName, email, phone, specialty }) => {
    const updated = await apiPut('/auth/me', { firstName, lastName, email, phone, specialty })
    setUser(updated)
    return updated
  }

  const value = useMemo(
    () => ({ status, user, login, logout, register, updateProfile, refreshUser }),
    [status, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
