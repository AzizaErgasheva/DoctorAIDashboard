import { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Paper,
  Stack,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  TextField,
  Button,
  Divider,
  Chip,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import PersonIcon from '@mui/icons-material/Person'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { useMessages, useSendMessage } from '../hooks/useTeleconsult.js'
import { usePatients } from '../../patients/hooks/usePatients.js'

export function TeleconsultPage() {
  const { data: messages, isLoading: messagesLoading } = useMessages()
  const { data: patients } = usePatients()
  const sendMessage = useSendMessage()
  const [selectedPatientId, setSelectedPatientId] = useState(null)
  const { register, handleSubmit, reset } = useForm()

  const [typingByPatientId, setTypingByPatientId] = useState({})
  const typingTimeoutsRef = useRef({})
  const lastSentAtRef = useRef(0)
  const bottomRef = useRef(null)

  // Group messages by patient
  const conversations = useMemo(() => {
    const safe = Array.isArray(messages) ? messages : []
    const acc = {}

    for (const msg of safe) {
      const pid = msg?.patientId
      if (!pid) continue

      if (!acc[pid]) {
        acc[pid] = {
          patientId: pid,
          patientName: msg?.patientName ?? 'Unknown',
          messages: [],
          lastMessage: msg,
        }
      }

      acc[pid].messages.push(msg)

      const prev = acc[pid].lastMessage
      const prevT = prev?.createdAt ? new Date(prev.createdAt).getTime() : 0
      const curT = msg?.createdAt ? new Date(msg.createdAt).getTime() : 0
      if (curT >= prevT) acc[pid].lastMessage = msg

      if (msg?.patientName) acc[pid].patientName = msg.patientName
    }

    return Object.fromEntries(
      Object.entries(acc).sort(([, a], [, b]) => {
        const ta = a?.lastMessage?.createdAt ? new Date(a.lastMessage.createdAt).getTime() : 0
        const tb = b?.lastMessage?.createdAt ? new Date(b.lastMessage.createdAt).getTime() : 0
        return tb - ta
      }),
    )
  }, [messages])

  const selectedConversation = selectedPatientId ? conversations[selectedPatientId] : null
  const typing = selectedPatientId ? Boolean(typingByPatientId[selectedPatientId]) : false

  useEffect(() => {
    if (!bottomRef.current) return
    bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [selectedPatientId, selectedConversation?.messages?.length])

  useEffect(() => {
    if (!selectedPatientId || !Array.isArray(messages)) return
    const incomingAfterSend = messages.some(
      (m) =>
        m?.patientId === selectedPatientId &&
        m?.direction === 'in' &&
        new Date(m?.createdAt ?? 0).getTime() >= lastSentAtRef.current,
    )
    if (incomingAfterSend) {
      setTypingByPatientId((prev) => ({ ...prev, [selectedPatientId]: false }))
    }
  }, [messages, selectedPatientId])

  const onSubmit = async (data) => {
    if (!selectedPatientId) return
    const patient = (patients ?? []).find((p) => p.id === selectedPatientId)
    const patientName = patient?.fullName ?? patient?.email ?? 'Unknown'

    const text = String(data?.message ?? '').trim()
    if (!text) return

    lastSentAtRef.current = Date.now()
    setTypingByPatientId((prev) => ({ ...prev, [selectedPatientId]: true }))

    await sendMessage.mutateAsync({
      patientId: selectedPatientId,
      patientName,
      text,
    })
    reset()

    if (typingTimeoutsRef.current[selectedPatientId]) {
      clearTimeout(typingTimeoutsRef.current[selectedPatientId])
    }
    typingTimeoutsRef.current[selectedPatientId] = setTimeout(() => {
      setTypingByPatientId((prev) => ({ ...prev, [selectedPatientId]: false }))
    }, 1800)
  }

  const conversationList = Object.values(conversations ?? {})

  return (
    <Stack spacing={2.5}>
      <PageHeader title="Teleconsult" subtitle="Manage patient conversations and consultations." />

      <Grid container spacing={2} sx={{ height: '70vh' }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.primary.main}`, height: '100%', overflow: 'auto', bgcolor: '#eff9ff' }}>
            <Typography variant="h6" gutterBottom>
              Conversations
            </Typography>
            {messagesLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              <List>
                {conversationList.map((conv) => (
                  <ListItem
                    key={conv.patientId}
                    button
                    selected={selectedPatientId === conv.patientId}
                    onClick={() => setSelectedPatientId(conv.patientId)}
                    sx={{ borderRadius: 1 }}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={conv.patientName}
                      secondary={conv.lastMessage?.text ?? ''}
                      primaryTypographyProps={{ fontWeight: selectedPatientId === conv.patientId ? 700 : 600 }}
                    />
                    <Chip
                      label={(conv.messages ?? []).filter((m) => m.direction === 'in').length}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
            {selectedConversation ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Chat with {selectedConversation.patientName}
                </Typography>
                <Box sx={{ minHeight: 20, mb: 1 }}>
                  {typing ? (
                    <Typography variant="caption" color="text.secondary">
                      Patient is typing…
                    </Typography>
                  ) : null}
                </Box>
                <Box sx={{ flex: 1, overflow: 'auto', mb: 2 }}>
                  <Stack spacing={1}>
                    {selectedConversation.messages
                      .slice()
                      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                      .map((msg) => (
                        <Box
                          key={msg.id}
                          sx={{
                            alignSelf: msg.direction === 'out' ? 'flex-end' : 'flex-start',
                            maxWidth: '70%',
                          }}
                        >
                          <Paper
                            sx={{
                              p: 1.5,
                              bgcolor: msg.direction === 'out' ? 'linear-gradient(90deg, #1a9ed7 0%, #4cb7e8 100%)' : '#e8f4fb',
                              color: msg.direction === 'out' ? '#1a2535' : '#0f3c5b',
                              borderRadius: 3,
                              boxShadow: '0 2px 6px rgba(15, 60, 91, 0.1)',
                            }}
                          >
                            <Typography variant="body2" sx={{ color: 'inherit' }}>{msg.text}</Typography>
                            <Typography variant="caption" display="block" sx={{ mt: 0.5, opacity: 0.7 }}>
                              {new Date(msg.createdAt).toLocaleString()}
                            </Typography>
                          </Paper>
                        </Box>
                      ))}
                    <div ref={bottomRef} />
                  </Stack>
                </Box>
                <Divider />
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      {...register('message', { required: true })}
                      fullWidth
                      placeholder="Type your message..."
                      size="small"
                      disabled={sendMessage.isPending}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      disabled={sendMessage.isPending}
                    >
                      Send
                    </Button>
                  </Stack>
                </Box>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography color="text.secondary">
                  Select a conversation to start chatting
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}

