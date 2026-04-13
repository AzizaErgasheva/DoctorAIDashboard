import { useQuery } from '@tanstack/react-query'
import { apiGet } from '../../../shared/api/client.js'

export function useReportsData() {
  return useQuery({
    queryKey: ['reports', 'data'],
    queryFn: () => apiGet('/doctor/reports'),
  })
}

export function useReportsChartData() {
  return useQuery({
    queryKey: ['reports', 'chart-data'],
    queryFn: () => apiGet('/doctor/reports/chart-data'),
  })
}