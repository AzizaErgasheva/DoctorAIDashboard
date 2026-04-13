import { Chip, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { useAppointments } from '../hooks/useAppointments.js'

function statusColor(status) {
  switch (status) {
    case 'scheduled':
      return 'info'
    case 'completed':
      return 'success'
    case 'cancelled':
    case 'no_show':
      return 'error'
    case 'in_progress':
    case 'checked_in':
      return 'warning'
    default:
      return 'default'
  }
}

export function AppointmentsPage() {
  const { data, isLoading, error } = useAppointments()

  return (
    <Stack spacing={2.5}>
      <PageHeader title="Appointments" subtitle="Fast filtering and one-click updates." />

      <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
        {isLoading ? <Typography variant="body2">Loading…</Typography> : null}
        {error ? (
          <Typography variant="body2" color="error">
            Failed to load appointments.
          </Typography>
        ) : null}

        {data ? (
          <Table size="small" aria-label="appointments table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Time</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Patient</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 800 }} align="right">
                  Duration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((apt) => (
                <TableRow key={apt.id} hover>
                  <TableCell>
                    {new Date(apt.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>{apt.patientName}</TableCell>
                  <TableCell>{apt.type}</TableCell>
                  <TableCell>
                    <Chip size="small" label={apt.status} color={statusColor(apt.status)} />
                  </TableCell>
                  <TableCell align="right">{apt.durationMin}m</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </Paper>
    </Stack>
  )
}

