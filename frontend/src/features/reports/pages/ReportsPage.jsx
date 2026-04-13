import { Paper, Stack, Typography, Grid, Box } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

import { PageHeader } from '../../../shared/ui/PageHeader.jsx'
import { useReportsData, useReportsChartData } from '../hooks/useReports.js'

export function ReportsPage() {
  const { data: reportsData, isLoading: reportsLoading } = useReportsData()
  const { data: chartData, isLoading: chartLoading } = useReportsChartData()

  return (
    <Stack spacing={2.5}>
      <PageHeader title="Reports" subtitle="Clinical and operational metrics with visual insights." />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
            <Typography variant="h6" gutterBottom>
              Overall Metrics
            </Typography>
            {reportsLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              <Stack spacing={1}>
                <Typography>Total Appointments: {reportsData?.totals?.appointments ?? 0}</Typography>
                <Typography>Completed: {reportsData?.totals?.completed ?? 0}</Typography>
                <Typography>No-Show: {reportsData?.totals?.noShow ?? 0}</Typography>
                <Typography>No-Show Rate: {(reportsData?.noShowRate * 100)?.toFixed(1) ?? 0}%</Typography>
              </Stack>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
            <Typography variant="h6" gutterBottom>
              Appointment Volume (Last 30 Days)
            </Typography>
            {chartLoading ? (
              <Typography>Loading chart...</Typography>
            ) : (
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="appointments" stroke="#8884d8" name="Appointments" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
            <Typography variant="h6" gutterBottom>
              No-Show Rate Trend
            </Typography>
            {chartLoading ? (
              <Typography>Loading chart...</Typography>
            ) : (
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    <Legend />
                    <Line type="monotone" dataKey="noShowRate" stroke="#ff7300" name="No-Show Rate (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, border: (t) => `1px solid ${t.palette.divider}` }}>
            <Typography variant="h6" gutterBottom>
              Appointment Status Breakdown
            </Typography>
            {chartLoading ? (
              <Typography>Loading chart...</Typography>
            ) : (
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" stackId="a" fill="#82ca9d" name="Completed" />
                    <Bar dataKey="noShow" stackId="a" fill="#ff7c7c" name="No-Show" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}

