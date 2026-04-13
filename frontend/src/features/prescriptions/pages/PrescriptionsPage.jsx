import { z } from 'zod'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { usePatients } from '../../patients/hooks/usePatients.js'
import { createPrescription, prescriptionTemplates } from '../api/prescriptionsApi.js'

const schema = z.object({
  patientId: z.string().min(1, 'Pick a patient'),
  summary: z.string().min(5, 'Add a short summary'),
  lines: z.array(z.string().min(2, 'Line is too short')).min(1, 'Add at least one medication/instruction line'),
})

export function PrescriptionsPage() {
  const { data: patients, isLoading: patientsLoading } = usePatients()
  const [serverResult, setServerResult] = useState(null)
  const [serverError, setServerError] = useState(null)
  const [templateId, setTemplateId] = useState('')

  const defaultValues = useMemo(
    () => ({
      patientId: '',
      summary: 'Prescription',
      lines: [''],
    }),
    [],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const lines = watch('lines')

  async function onSubmit(values) {
    setServerResult(null)
    setServerError(null)
    try {
      const created = await createPrescription(values)
      setServerResult(created)
    } catch (e) {
      setServerError(e?.message || 'Failed to create prescription.')
    }
  }

  function applyTemplate(nextTemplateId) {
    setTemplateId(nextTemplateId)
    const tpl = prescriptionTemplates.find((t) => t.id === nextTemplateId)
    if (!tpl) return
    setValue('summary', `Prescription — ${tpl.name}`, { shouldValidate: true })
    setValue('lines', tpl.lines, { shouldValidate: true })
  }

  return (
    <Stack spacing={2.5}>
      <PageHeader title="Prescriptions" subtitle="Compose quickly using templates (validated)." />
      <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
        <Stack spacing={2}>
          {serverResult ? (
            <Alert severity="success">
              Created prescription <strong>{serverResult.id}</strong>
            </Alert>
          ) : null}
          {serverError ? <Alert severity="error">{serverError}</Alert> : null}

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 260 }}>
              <InputLabel id="template-label">Template</InputLabel>
              <Select labelId="template-label" label="Template" value={templateId} onChange={(e) => applyTemplate(e.target.value)}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {prescriptionTemplates.map((t) => (
                  <MenuItem key={t.id} value={t.id}>
                    {t.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ flex: 1 }} />
            <Typography variant="caption" color="text.secondary">
              Sending/export can be added once backend is connected.
            </Typography>
          </Stack>

          <Divider />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormControl size="small" fullWidth error={Boolean(errors.patientId)}>
                <InputLabel id="patient-label">Patient</InputLabel>
                <Select labelId="patient-label" label="Patient" defaultValue="" {...register('patientId')} disabled={patientsLoading}>
                  <MenuItem value="">
                    <em>Select patient…</em>
                  </MenuItem>
                  {(patients ?? []).map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.fullName}
                    </MenuItem>
                  ))}
                </Select>
                {errors.patientId ? (
                  <Typography variant="caption" color="error">
                    {errors.patientId.message}
                  </Typography>
                ) : null}
              </FormControl>

              <TextField
                size="small"
                label="Summary"
                error={Boolean(errors.summary)}
                helperText={errors.summary?.message ?? 'Shown on prescription header'}
                {...register('summary')}
              />

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  Medication / instructions
                </Typography>

                {lines.map((_, idx) => (
                  <TextField
                    key={idx}
                    size="small"
                    label={`Line ${idx + 1}`}
                    error={Boolean(errors.lines?.[idx])}
                    helperText={errors.lines?.[idx]?.message}
                    {...register(`lines.${idx}`)}
                  />
                ))}

                <Stack direction="row" spacing={1}>
                  <Button type="button" variant="outlined" onClick={() => setValue('lines', [...lines, ''], { shouldValidate: true })}>
                    Add line
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    disabled={lines.length <= 1}
                    onClick={() => setValue('lines', lines.slice(0, -1), { shouldValidate: true })}
                  >
                    Remove last
                  </Button>
                  <Box sx={{ flex: 1 }} />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating…' : 'Create prescription'}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Stack>
  )
}

