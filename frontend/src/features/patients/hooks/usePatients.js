import { useQuery } from '@tanstack/react-query'

import { getDoctorPatients } from '../api/patientsApi.js'

export function usePatients() {
  return useQuery({
    queryKey: ['doctor', 'patients'],
    queryFn: getDoctorPatients,
  })
}

