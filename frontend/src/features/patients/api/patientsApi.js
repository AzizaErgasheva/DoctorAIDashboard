import { apiGet } from '../../../shared/api/client.js'
import { endpoints } from '../../../shared/api/endpoints.js'

export async function getDoctorPatients() {
  return apiGet(endpoints.doctor.patients)
}

