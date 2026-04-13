import { useQuery } from '@tanstack/react-query'

import { getDoctorAppointments } from '../api/appointmentsApi.js'

export function useAppointments() {
  return useQuery({
    queryKey: ['doctor', 'appointments'],
    queryFn: getDoctorAppointments,
  })
}

