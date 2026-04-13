import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1a6fbf' },
    secondary: { main: '#0f7e75' },
    background: {
      default: '#f0f4f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2535',
      secondary: '#4f6272',
    },
    error: { main: '#b52a2a' },
    warning: { main: '#b85c0b' },
    success: { main: '#2a7a43' },
    info: { main: '#1a6fbf' },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'system-ui',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          fontFamily: '"Segoe UI", system-ui, sans-serif',
          backgroundColor: '#f0f4f8',
          color: '#1a2535',
          minHeight: '100vh',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: '1px solid #dce4ef',
          boxShadow: '0 1px 3px rgba(0,0,0,0.07), 0 1px 8px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 7,
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #dce4ef',
            fontSize: '11px',
            fontWeight: 600,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-body': {
            borderBottom: '1px solid #eef2f7',
            color: '#1a2535',
            fontSize: '13px',
            '&:hover': {
              backgroundColor: '#f8fafc',
            },
          },
        },
      },
    },
  },
})

