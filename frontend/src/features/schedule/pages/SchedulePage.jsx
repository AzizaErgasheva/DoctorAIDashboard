import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Fab,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { useAvailability, useSaveAvailability } from '../hooks/useAvailability.js'
import { useAppointments, useCreateAppointment } from '../hooks/useAppointments.js'
import { usePatients } from '../../patients/hooks/usePatients.js'

export function SchedulePage() {
  const [day, setDay] = useState(dayjs())
  const [tab, setTab] = useState(0)
  const [newException, setNewException] = useState('')
  const [newBlock, setNewBlock] = useState({ start: '', end: '', location: 'Clinic' })
  const dateKey = day.format('YYYY-MM-DD')

  const dayAsDate = useMemo(() => day.toDate(), [day])
  const { data, isLoading, error } = useAvailability(dayAsDate)
  const saveMutation = useSaveAvailability(dayAsDate)
  const { data: appointments } = useAppointments()
  const { data: patients } = usePatients()
  const createAppointment = useCreateAppointment()

  const dayAppointments =
    (Array.isArray(appointments) ? appointments : []).filter((apt) =>
      String(apt?.startsAt ?? '').startsWith(dateKey),
    )

  const handleAddException = () => {
    if (!newException.trim()) return
    const updatedData = {
      ...data,
      exceptions: [
        ...(data?.exceptions || []),
        { id: Date.now().toString(), note: newException.trim() }
      ]
    }
    // Optimistically update the data
    // Since we can't directly mutate the query data, we'll save immediately
    saveMutation.mutate({ date: dateKey, ...updatedData })
    setNewException('')
  }

  const handleDeleteException = (exceptionId) => {
    const updatedData = {
      ...data,
      exceptions: (data?.exceptions || []).filter(e => e.id !== exceptionId)
    }
    saveMutation.mutate({ date: dateKey, ...updatedData })
  }

  const handleAddBlock = () => {
    if (!newBlock.start || !newBlock.end) return
    const updatedData = {
      ...data,
      blocks: [
        ...(data?.blocks || []),
        { id: Date.now().toString(), start: newBlock.start, end: newBlock.end, location: newBlock.location }
      ]
    }
    saveMutation.mutate({ date: dateKey, ...updatedData })
    setNewBlock({ start: '', end: '', location: 'Clinic' })
  }

  const handleDeleteBlock = (blockId) => {
    const updatedData = {
      ...data,
      blocks: (data?.blocks || []).filter(b => b.id !== blockId)
    }
    saveMutation.mutate({ date: dateKey, ...updatedData })
  }

  return (
    <Stack spacing={2.5}>
      <PageHeader
        title="Schedule & Appointments"
        subtitle="Manage your availability and view scheduled appointments."
      />

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
        <DatePicker
          label="Date"
          value={day}
          onChange={(v) => (v ? setDay(v) : null)}
          slotProps={{ textField: { size: 'small' } }}
        />
      </Stack>

      <Paper sx={{ border: (t) => `1px solid ${t.palette.divider}` }}>
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Availability" />
          <Tab label="Appointments" />
        </Tabs>

        {tab === 0 && (
          <Box sx={{ p: 2 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  variant="outlined"
                  onClick={() => saveMutation.mutate({ date: dateKey, ...data })}
                  disabled={!data || saveMutation.isPending}
                >
                  {saveMutation.isPending ? 'Saving…' : 'Save'}
                </Button>
              </Stack>

              {isLoading ? <Typography variant="body2">Loading…</Typography> : null}
              {error ? <Alert severity="error">Failed to load availability for this date.</Alert> : null}

              {data ? (
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Add Availability Block
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TextField
                      size="small"
                      label="Start time"
                      type="time"
                      value={newBlock.start}
                      onChange={(e) => setNewBlock({ ...newBlock, start: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      size="small"
                      label="End time"
                      type="time"
                      value={newBlock.end}
                      onChange={(e) => setNewBlock({ ...newBlock, end: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      size="small"
                      label="Location"
                      value={newBlock.location}
                      onChange={(e) => setNewBlock({ ...newBlock, location: e.target.value })}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleAddBlock}
                      disabled={!newBlock.start || !newBlock.end || saveMutation.isPending}
                    >
                      Add Block
                    </Button>
                  </Stack>

                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Availability blocks
                  </Typography>

                  {data.blocks?.length ? (
                    <Stack spacing={1}>
                      {data.blocks.map((b) => (
                        <Paper key={b.id} variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
                          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ sm: 'center' }}>
                            <Chip label={`${b.start}–${b.end}`} size="small" color="primary" />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                              {b.location}
                            </Typography>
                            <Box sx={{ flex: 1 }} />
                            <Button size="small" variant="text" color="error" onClick={() => handleDeleteBlock(b.id)}>
                              Delete
                            </Button>
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No availability blocks for this day.
                    </Typography>
                  )}

                  <Divider />

                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Exceptions
                  </Typography>
                  {data.exceptions?.length ? (
                    <Stack spacing={1}>
                      {data.exceptions.map((e) => (
                        <Alert key={e.id} severity="info" action={
                          <Button color="inherit" size="small" onClick={() => handleDeleteException(e.id)}>
                            Delete
                          </Button>
                        }>
                          {e.note}
                        </Alert>
                      ))}
                    </Stack>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No exceptions.
                    </Typography>
                  )}

                  <Stack direction="row" spacing={1} alignItems="center">
                    <TextField
                      size="small"
                      label="Add exception note"
                      value={newException}
                      onChange={(e) => setNewException(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddException()}
                      fullWidth
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleAddException}
                      disabled={!newException.trim() || saveMutation.isPending}
                    >
                      Add
                    </Button>
                  </Stack>
                </Stack>
              ) : null}
            </Stack>
          </Box>
        )}

        {tab === 1 && (
          <Box sx={{ p: 2 }}>
            <Stack spacing={2}>
                <Typography variant="h6" sx={{ color: 'primary.dark' }}>Appointments for {day.format('MMMM D, YYYY')}</Typography>
              {dayAppointments.length > 0 ? (
                <List sx={{ bgcolor: '#f0f9ff', p: 1, borderRadius: 2 }}>
                  {dayAppointments.map((apt) => (
                    <ListItem key={apt.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${apt.patientName} - ${apt.type}`}
                        secondary={
                          <Stack direction="row" spacing={1} alignItems="center">
                            <AccessTimeIcon fontSize="small" />
                            <Typography variant="body2">
                              {new Date(apt.startsAt).toLocaleTimeString()} ({apt.durationMin} min)
                            </Typography>
                            <Chip
                              label={apt.status}
                              size="small"
                              color={apt.status === 'scheduled' ? 'primary' : apt.status === 'completed' ? 'success' : 'error'}
                            />
                          </Stack>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No appointments scheduled for this day.
                </Typography>
              )}
            </Stack>
          </Box>
        )}
      </Paper>

      {tab === 1 && (
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => {
            // Placeholder for adding appointment
            alert('Add appointment modal coming soon!')
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </Stack>
  )
}

