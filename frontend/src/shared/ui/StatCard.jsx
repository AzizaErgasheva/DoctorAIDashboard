import { Card, CardContent, Stack, Typography } from '@mui/material'

export function StatCard({ label, value, helper, color = 'primary' }) {
  return (
    <Card sx={{
      background: (theme) => theme.palette[color]?.light ?? theme.palette.grey[100],
      color: (theme) => theme.palette[color]?.contrastText ?? theme.palette.text.primary,
      boxShadow: '0 8px 24px rgba(5, 84, 114, 0.12)',
    }}>
      <CardContent>
        <Stack spacing={0.5}>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            {label}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
            {value}
          </Typography>
          {helper ? (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {helper}
            </Typography>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  )
}

