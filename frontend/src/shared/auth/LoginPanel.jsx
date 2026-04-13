import { useState } from 'react'
import { Alert, Button, Paper, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import { useAuth } from './AuthContext.jsx'

export function LoginPanel() {
  const [email, setEmail] = useState('doctor@example.com')
  const [password, setPassword] = useState('doctor123')
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [mode, setMode] = useState('login')

  const { user, status, login, register, logout } = useAuth()

  async function tryLogin() {
    setError('')
    try {
      await login({ email, password })
    } catch (e) {
      setError(e?.message || 'Login failed')
    }
  }

  async function tryRegister() {
    setError('')
    try {
      await register({ email, password, firstName, lastName, phone, specialty })
    } catch (e) {
      setError(e?.message || 'Registration failed')
    }
  }

  return (
    <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Stack spacing={1}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
          {mode === 'login' ? 'Sign In' : 'Register New Account'}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {mode === 'login'
            ? 'Sign in using your registered credentials.'
            : 'Create a doctor account and receive a JWT token automatically.'}
        </Typography>

        {status === 'authenticated' ? (
          <Alert severity="success">Logged in as {user?.doctorName ?? user?.email}</Alert>
        ) : null}
        {error ? <Alert severity="error">{error}</Alert> : null}

        <TextField size="small" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField
          size="small"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {mode === 'register' ? (
          <>
            <Stack direction="row" spacing={1}>
              <TextField
                size="small"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <TextField
                size="small"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Stack>
            <TextField
              size="small"
              label="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              size="small"
              label="Specialty (optional)"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              placeholder="e.g., Cardiology, General Practice"
            />
          </>
        ) : null}

        <Stack direction="row" spacing={1}>
          <Button onClick={mode === 'login' ? tryLogin : tryRegister}>
            {mode === 'login' ? 'Login' : 'Register'}
          </Button>
          <Button variant="outlined" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Switch to Register' : 'Switch to Login'}
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              logout()
              window.location.reload()
            }}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

