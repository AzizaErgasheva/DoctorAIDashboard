import { useState, useMemo } from 'react'
import {
  Paper,
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  TextField,
  InputAdornment,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { usePatients } from '../hooks/usePatients.js'

export function PatientsPage() {
  const { data: patients, isLoading } = usePatients()
  const [search, setSearch] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)

  const filteredPatients = useMemo(() => {
    const list = Array.isArray(patients) ? patients : []
    const q = String(search || '').toLowerCase().trim()
    if (!q) return list

    return list.filter((patient) => {
      const name = String(patient?.fullName ?? patient?.name ?? '').toLowerCase()
      const email = String(patient?.email ?? '').toLowerCase()
      const phone = String(patient?.phone ?? '').toLowerCase()
      return name.includes(q) || email.includes(q) || phone.includes(q)
    })
  }, [patients, search])

  return (
    <Box>
      {/* Filter Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: '#f8fafc',
            border: '1px solid #dce4ef',
            borderRadius: 1,
            p: '6px 12px',
            fontSize: 13,
            flex: 1,
            maxWidth: 320,
          }}
        >
          <SearchIcon sx={{ width: 14, height: 14, color: '#94a3b8' }} />
          <TextField
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              flex: 1,
              '& .MuiInput-root': {
                fontSize: 13,
                color: '#4f6272',
                '&::before, &::after': { display: 'none' },
              },
            }}
          />
        </Box>
        <select
          style={{
            padding: '6px 10px',
            borderRadius: 7,
            border: '1px solid #dce4ef',
            background: '#fff',
            fontSize: 13,
            color: '#4f6272',
            outline: 'none',
          }}
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="stable">Stable</option>
          <option value="pending">Pending</option>
          <option value="critical">Critical</option>
        </select>
        <Button
          variant="contained"
          sx={{
            ml: 'auto',
            borderRadius: 1,
            textTransform: 'none',
            fontSize: 13,
            fontWeight: 500,
            bgcolor: '#1a6fbf',
            '&:hover': { bgcolor: '#155a9d' },
          }}
        >
          + Add Patient
        </Button>
      </Box>

      {/* Patients Table */}
      <Box sx={{ bgcolor: '#fff', borderRadius: 1, border: '1px solid #dce4ef', overflow: 'hidden' }}>
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Patient
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Age
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Condition
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Last Visit
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Next Visit
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                  Status
                </th>
                <th style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid #dce4ef',
                  background: '#f8fafc',
                }}>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>
                    Loading patients...
                  </td>
                </tr>
              ) : filteredPatients.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>
                    No patients found
                  </td>
                </tr>
              ) : (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} style={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            bgcolor: '#1a6fbf22',
                            color: '#1a6fbf',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 10,
                            fontWeight: 600,
                            flexShrink: 0,
                          }}
                        >
                          {(patient.fullName ?? patient.name ?? 'U').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </Box>
                        <Typography sx={{ fontWeight: 500, fontSize: 13 }}>
                          {patient.fullName ?? patient.name ?? 'Unknown'}
                        </Typography>
                      </Box>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      {patient.age ?? '—'}
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      {patient.condition ?? '—'}
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      {patient.lastVisit ?? '—'}
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      {patient.nextVisit ?? '—'}
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      <Box
                        sx={{
                          fontSize: 11,
                          fontWeight: 500,
                          p: '3px 8px',
                          borderRadius: 1,
                          display: 'inline-block',
                          bgcolor: patient.status === 'critical' ? '#fdeaea' :
                                  patient.status === 'pending' ? '#fdf1e6' :
                                  patient.status === 'active' ? '#e8f2fb' : '#e8f5ed',
                          color: patient.status === 'critical' ? '#b52a2a' :
                                 patient.status === 'pending' ? '#b85c0b' :
                                 patient.status === 'active' ? '#1a6fbf' : '#2a7a43',
                        }}
                      >
                        {(patient.status ?? 'stable').charAt(0).toUpperCase() + (patient.status ?? 'stable').slice(1)}
                      </Box>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid #eef2f7', color: '#1a2535', fontSize: 13 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setSelectedPatient(patient)}
                        sx={{
                          p: '4px 10px',
                          fontSize: 11,
                          borderRadius: 1,
                          textTransform: 'none',
                          borderColor: '#dce4ef',
                          color: '#4f6272',
                          '&:hover': { borderColor: '#1a6fbf', color: '#1a6fbf' },
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Box>
      </Box>

      <Dialog
        open={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedPatient && (
          <>
            <DialogTitle>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6">{selectedPatient.fullName ?? selectedPatient.name ?? 'Unknown'}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Patient ID: {selectedPatient.id}
                  </Typography>
                </Box>
              </Stack>
            </DialogTitle>
            <DialogContent>
              <Stack spacing={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Contact Information
                      </Typography>
                      <Stack spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <EmailIcon fontSize="small" />
                          <Typography>{selectedPatient.email}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <PhoneIcon fontSize="small" />
                          <Typography>{selectedPatient.phone}</Typography>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Medical Information
                      </Typography>
                      <Stack spacing={1}>
                        <Typography>DOB: {selectedPatient.dob ?? '—'}</Typography>
                        <Typography>Notes: —</Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>

                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Appointments, prescriptions, and notes will be displayed here.
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Last appointment: March 25, 2026"
                        secondary="Follow-up consultation"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Prescription issued: March 20, 2026"
                        secondary="Amoxicillin 500mg"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedPatient(null)}>Close</Button>
              <Button variant="contained">Edit Profile</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}

