import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import MedicationIcon from '@mui/icons-material/Medication'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { StatCard } from '../../../shared/ui/StatCard.jsx'
import { apiPost } from '../../../shared/api/client.js'
import { useDashboardStats } from '../hooks/useDashboard.js'

export function DashboardPage() {
  const [openPrescription, setOpenPrescription] = useState(false)
  const [openNote, setOpenNote] = useState(false)
  const [loadingPrescription, setLoadingPrescription] = useState(false)
  const [loadingNote, setLoadingNote] = useState(false)
  const [errorPrescription, setErrorPrescription] = useState('')
  const [errorNote, setErrorNote] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [recentNotes, setRecentNotes] = useState([])
  const [tasks, setTasks] = useState([
    { id: 'task_01', label: 'Review lab results', done: false },
    { id: 'task_02', label: 'Confirm teleconsult follow-ups', done: false },
    { id: 'task_03', label: 'Approve refill requests', done: false },
  ])

  const { data: stats, isLoading: statsLoading } = useDashboardStats()

  // Prescription form state
  const [prescriptionForm, setPrescriptionForm] = useState({
    patientId: 'pat_001',
    summary: '',
    lines: '',
  })

  // Patient note form state
  const [noteForm, setNoteForm] = useState({
    patientId: 'pat_001',
    noteType: 'general',
    content: '',
  })

  const patients = [
    { id: 'pat_001', name: 'Maria N.' },
    { id: 'pat_002', name: 'John K.' },
    { id: 'pat_003', name: 'Elena P.' },
  ]

  const tasksDone = useMemo(() => tasks.filter((t) => t.done).length, [tasks])
  const taskProgress = Math.round((tasksDone / tasks.length) * 100)

  useEffect(() => {
    try {
      const notes = JSON.parse(localStorage.getItem('patientNotes') || '{}')
      const grouped = Object.values(notes)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
      setRecentNotes(grouped)
    } catch {
      setRecentNotes([])
    }
  }, [openNote])

  const toggleTask = (taskId) => {
    setTasks((prev) => prev.map((item) => (item.id === taskId ? { ...item, done: !item.done } : item)))
  }

  const handleCreatePrescription = async () => {
    setErrorPrescription('')
    setSuccessMessage('')
    if (!prescriptionForm.summary.trim() || !prescriptionForm.lines.trim()) {
      setErrorPrescription('Please fill in all fields')
      return
    }

    setLoadingPrescription(true)
    try {
      const lines = prescriptionForm.lines
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)

      await apiPost('/doctor/prescriptions', {
        patientId: prescriptionForm.patientId,
        summary: prescriptionForm.summary,
        lines,
      })

      setSuccessMessage('✓ Prescription created successfully!')
      setTimeout(() => {
        setOpenPrescription(false)
        setPrescriptionForm({ patientId: 'pat_001', summary: '', lines: '' })
        setSuccessMessage('')
      }, 1500)
    } catch (err) {
      setErrorPrescription(err?.message || 'Failed to create prescription')
    } finally {
      setLoadingPrescription(false)
    }
  }

  const handleCreateNote = async () => {
    setErrorNote('')
    setSuccessMessage('')
    if (!noteForm.content.trim()) {
      setErrorNote('Please enter a note')
      return
    }

    setLoadingNote(true)
    try {
      // Store patient notes in localStorage for now (can be extended to backend)
      const notes = JSON.parse(localStorage.getItem('patientNotes') || '{}')
      const noteId = `note_${Date.now()}`
      notes[noteId] = {
        id: noteId,
        patientId: noteForm.patientId,
        type: noteForm.noteType,
        content: noteForm.content,
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem('patientNotes', JSON.stringify(notes))

      setSuccessMessage('✓ Patient note added successfully!')
      setTimeout(() => {
        setOpenNote(false)
        setNoteForm({ patientId: 'pat_001', noteType: 'general', content: '' })
        setSuccessMessage('')
      }, 1500)
    } catch (err) {
      setErrorNote(err?.message || 'Failed to add note')
    } finally {
      setLoadingNote(false)
    }
  }

  return (
    <Box>
      {/* Stat Cards Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 3 }}>
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            border: '1px solid #dce4ef',
            p: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2.5,
              bgcolor: '#e8f2fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: 20, color: '#1a6fbf' }}>📅</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#1a2535', lineHeight: 1 }}>
              {statsLoading ? '...' : stats?.todayAppointments ?? 0}
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 0.5 }}>
              Today appointments
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#2a7a43', mt: 0.5 }}>
              2 urgent
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            border: '1px solid #dce4ef',
            p: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2.5,
              bgcolor: '#e2f5f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: 20, color: '#0f7e75' }}>👥</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#1a2535', lineHeight: 1 }}>
              {statsLoading ? '...' : stats?.waitingRoom ?? 0}
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 0.5 }}>
              Waiting room
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#0f7e75', mt: 0.5 }}>
              avg. wait 8m
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            border: '1px solid #dce4ef',
            p: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2.5,
              bgcolor: '#fdf1e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: 20, color: '#b85c0b' }}>💬</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#1a2535', lineHeight: 1 }}>
              {statsLoading ? '...' : stats?.unreadMessages ?? 0}
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 0.5 }}>
              Unread messages
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#b85c0b', mt: 0.5 }}>
              teleconsult
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            border: '1px solid #dce4ef',
            p: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2.5,
              bgcolor: '#fdeaea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: 20, color: '#b52a2a' }}>⚠️</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#1a2535', lineHeight: 1 }}>
              {statsLoading ? '...' : stats?.noShowRate ?? '0%'}
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 0.5 }}>
              No-show (7d)
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#2a7a43', mt: 0.5 }}>
              down 0.6%
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Row 3: Appointments and Patient Alerts */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3, mb: 3 }}>
        <Box sx={{ bgcolor: '#fff', borderRadius: 1, border: '1px solid #dce4ef' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px 18px 12px', borderBottom: '1px solid #eef2f7' }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1a2535' }}>
              Today's appointments
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#1a6fbf', cursor: 'pointer' }}>
              See all →
            </Typography>
          </Box>
          <Box sx={{ p: '14px 18px' }}>
            <Box sx={{ display: 'flex', gap: 2, p: '9px 0', borderBottom: '1px solid #eef2f7', alignItems: 'flex-start' }}>
              <Typography sx={{ fontSize: 11, color: '#94a3b8', minWidth: 50, pt: 0.3 }}>10:30</Typography>
              <Box sx={{ width: 3, borderRadius: 0.5, alignSelf: 'stretch', flexShrink: 0, minHeight: 36, bgcolor: '#1a6fbf' }} />
              <Box>
                <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1a2535' }}>Maria N.</Typography>
                <Typography sx={{ fontSize: 11, color: '#94a3b8', mt: 0.3 }}>Follow-up • 15 min</Typography>
                <Box sx={{ fontSize: 10, fontWeight: 500, p: '2px 7px', borderRadius: 1, display: 'inline-block', mt: 0.5, bgcolor: '#1a6fbf22', color: '#1a6fbf' }}>
                  Follow-up
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#fff', borderRadius: 1, border: '1px solid #dce4ef' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px 18px 12px', borderBottom: '1px solid #eef2f7' }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1a2535' }}>
              Patient alerts
            </Typography>
          </Box>
          <Box sx={{ p: '14px 18px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '9px 0', borderBottom: '1px solid #eef2f7' }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                  flexShrink: 0,
                  bgcolor: '#b52a2a22',
                  color: '#b52a2a',
                }}
              >
                JC
              </Box>
              <Box>
                <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1a2535' }}>John C.</Typography>
                <Typography sx={{ fontSize: 11, color: '#94a3b8', mt: 0.3 }}>Critical condition</Typography>
              </Box>
              <Typography sx={{ ml: 'auto', fontSize: 11, fontWeight: 500, p: '3px 8px', borderRadius: 1, bgcolor: '#fdeaea', color: '#b52a2a' }}>
                Critical
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Row 2: Tasks and Quick Actions */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mb: 3 }}>
        <Box sx={{ bgcolor: '#fff', borderRadius: 1, border: '1px solid #dce4ef' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px 18px 12px', borderBottom: '1px solid #eef2f7' }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1a2535' }}>
              Tasks
            </Typography>
          </Box>
          <Box sx={{ p: '14px 18px' }}>
            <Stack spacing={1}>
              {tasks.map((task) => (
                <Button
                  key={task.id}
                  variant={task.done ? 'contained' : 'outlined'}
                  color={task.done ? 'success' : 'primary'}
                  size="small"
                  onClick={() => toggleTask(task.id)}
                  sx={{
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    fontSize: 13,
                    borderRadius: 1,
                    textTransform: 'none',
                  }}
                >
                  {task.done ? '✓ ' : ''}{task.label}
                </Button>
              ))}
            </Stack>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 1 }}>
              {tasksDone} of {tasks.length} tasks completed ({taskProgress}%)
            </Typography>
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#fff', borderRadius: 1, border: '1px solid #dce4ef' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px 18px 12px', borderBottom: '1px solid #eef2f7' }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1a2535' }}>
              Quick actions
            </Typography>
          </Box>
          <Box sx={{ p: '14px 18px' }}>
            <Stack spacing={1}>
              <Button
                variant="outlined"
                onClick={() => setOpenPrescription(true)}
                sx={{
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: 13,
                  justifyContent: 'flex-start',
                  borderColor: '#dce4ef',
                  color: '#4f6272',
                  '&:hover': { borderColor: '#1a6fbf', color: '#1a6fbf' },
                }}
              >
                + Create prescription
              </Button>
              <Button
                variant="outlined"
                onClick={() => setOpenNote(true)}
                sx={{
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: 13,
                  justifyContent: 'flex-start',
                  borderColor: '#dce4ef',
                  color: '#4f6272',
                  '&:hover': { borderColor: '#1a6fbf', color: '#1a6fbf' },
                }}
              >
                + Add patient note
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Prescription Dialog */}
      <Dialog open={openPrescription} onClose={() => setOpenPrescription(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 800 }}>
          <MedicationIcon />
          Create New Prescription
        </DialogTitle>
        <DialogContent>
          {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
          {errorPrescription && <Alert severity="error" sx={{ mb: 2 }}>{errorPrescription}</Alert>}

          <FormControl fullWidth margin="normal" size="small">
            <InputLabel>Select Patient</InputLabel>
            <Select
              value={prescriptionForm.patientId}
              onChange={(e) => setPrescriptionForm({ ...prescriptionForm, patientId: e.target.value })}
              label="Select Patient"
            >
              {patients.map((p) => (
                <MenuItem key={p.id} value={p.id}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            margin="normal"
            label="Prescription Title/Summary"
            placeholder="e.g., Hypertension Management"
            value={prescriptionForm.summary}
            onChange={(e) => setPrescriptionForm({ ...prescriptionForm, summary: e.target.value })}
            size="small"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Prescription Details"
            placeholder="Enter each medication/instruction on a new line&#10;e.g.&#10;Amlodipine 5mg — 1 tab daily&#10;Low sodium diet&#10;Follow-up in 2 weeks"
            multiline
            rows={5}
            value={prescriptionForm.lines}
            onChange={(e) => setPrescriptionForm({ ...prescriptionForm, lines: e.target.value })}
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPrescription(false)}>Cancel</Button>
          <Button onClick={handleCreatePrescription} variant="contained" disabled={loadingPrescription}>
            {loadingPrescription ? 'Creating...' : 'Create Prescription'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Patient Note Dialog */}
      <Dialog open={openNote} onClose={() => setOpenNote(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 800 }}>
          <StickyNote2Icon />
          Add Patient Note
        </DialogTitle>
        <DialogContent>
          {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
          {errorNote && <Alert severity="error" sx={{ mb: 2 }}>{errorNote}</Alert>}

          <FormControl fullWidth margin="normal" size="small">
            <InputLabel>Select Patient</InputLabel>
            <Select
              value={noteForm.patientId}
              onChange={(e) => setNoteForm({ ...noteForm, patientId: e.target.value })}
              label="Select Patient"
            >
              {patients.map((p) => (
                <MenuItem key={p.id} value={p.id}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" size="small">
            <InputLabel>Note Type</InputLabel>
            <Select
              value={noteForm.noteType}
              onChange={(e) => setNoteForm({ ...noteForm, noteType: e.target.value })}
              label="Note Type"
            >
              <MenuItem value="general">General Note</MenuItem>
              <MenuItem value="clinical">Clinical Observation</MenuItem>
              <MenuItem value="follow-up">Follow-up Reminder</MenuItem>
              <MenuItem value="lab-result">Lab Result</MenuItem>
              <MenuItem value="urgent">Urgent Alert</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            margin="normal"
            label="Note Content"
            placeholder="Write your note here..."
            multiline
            rows={5}
            value={noteForm.content}
            onChange={(e) => setNoteForm({ ...noteForm, content: e.target.value })}
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNote(false)}>Cancel</Button>
          <Button onClick={handleCreateNote} variant="contained" disabled={loadingNote}>
            {loadingNote ? 'Adding...' : 'Add Note'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

