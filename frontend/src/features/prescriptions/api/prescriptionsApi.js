import { apiGet, apiPost } from '../../../shared/api/client.js'
import { endpoints } from '../../../shared/api/endpoints.js'

export async function createPrescription(payload) {
  return apiPost(endpoints.doctor.prescriptions, payload)
}

export function listPrescriptions() {
  return apiGet(endpoints.doctor.prescriptions)
}

export const prescriptionTemplates = [
  {
    id: 'tpl_hypertension',
    name: 'Hypertension (basic)',
    lines: ['Amlodipine 5mg — 1 tab daily', 'Lifestyle: low sodium diet'],
  },
  {
    id: 'tpl_antibiotic',
    name: 'Antibiotic course (example)',
    lines: ['Amoxicillin 500mg — 1 cap 3x daily for 7 days', 'Hydration, rest'],
  },
]

