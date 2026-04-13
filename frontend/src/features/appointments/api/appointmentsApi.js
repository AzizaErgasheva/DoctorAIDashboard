import { apiGet } from '../../../shared/api/client.js'
import { endpoints } from '../../../shared/api/endpoints.js'

export async function getDoctorAppointments() {
  return apiGet(endpoints.doctor.appointments)
}

