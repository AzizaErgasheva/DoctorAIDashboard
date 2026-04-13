import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiGet, apiPost } from '../../../shared/api/client.js'

export function useAppointments() {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: () => apiGet('/doctor/appointments'),
  })
}

export function useCreateAppointment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (appointmentData) => apiPost('/doctor/appointments', appointmentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] })
    },
  })
}