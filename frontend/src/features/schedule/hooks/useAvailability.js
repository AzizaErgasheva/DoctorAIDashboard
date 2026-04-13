import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { getDoctorAvailability, saveDoctorAvailability } from '../api/scheduleApi.js'

export function useAvailability(dateKey) {
  return useQuery({
    queryKey: ['doctor', 'schedule', 'availability', dateKey],
    queryFn: () => getDoctorAvailability(dateKey),
  })
}

export function useSaveAvailability(dateKey) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: saveDoctorAvailability,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['doctor', 'schedule', 'availability', dateKey] }),
  })
}

