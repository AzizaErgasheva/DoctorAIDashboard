import dayjs from 'dayjs'

import { apiGet, apiPost } from '../../../shared/api/client.js'
import { endpoints } from '../../../shared/api/endpoints.js'

function isoDate(d) {
  return dayjs(d).format('YYYY-MM-DD')
}

export async function getDoctorAvailability(date) {
  const key = isoDate(date)
  return apiGet(`${endpoints.doctor.schedule}?date=${encodeURIComponent(key)}`)
}

export async function saveDoctorAvailability(payload) {
  return apiPost(endpoints.doctor.schedule, payload)
}

