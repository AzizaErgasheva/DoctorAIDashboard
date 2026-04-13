import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiGet, apiPost } from '../../../shared/api/client.js'

export function useMessages() {
  return useQuery({
    queryKey: ['messages'],
    queryFn: () => apiGet('/doctor/messages'),
  })
}

export function useSendMessage() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (messageData) => apiPost('/doctor/messages', messageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] })
    },
  })
}