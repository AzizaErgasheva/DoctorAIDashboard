import { useQuery } from '@tanstack/react-query'
import { apiGet } from '../../../shared/api/client.js'

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => apiGet('/doctor/stats'),
  })
}