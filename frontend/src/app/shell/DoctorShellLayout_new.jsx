import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  TextField,
  Button,
  InputBase,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import DescriptionIcon from '@mui/icons-material/Description'
import ChatIcon from '@mui/icons-material/Chat'
import InsightsIcon from '@mui/icons-material/Insights'
import BiotechIcon from '@mui/icons-material/Biotech'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import { useState, useEffect } from 'react'
import { useAuth } from '../../shared/auth/AuthContext.jsx'

const drawerWidth = 220

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon />, badge: null },
  { to: '/appointments', label: 'Appointments', icon: <EventAvailableIcon />, badge: 5 },
  { to: '/schedule', label: 'Schedule', icon: <CalendarMonthIcon /> },
  { to: '/patients', label: 'Patients', icon: <PeopleAltIcon />, badge: 7 },
  { to: '/prescriptions', label: 'Prescriptions', icon: <DescriptionIcon /> },
  { to: '/diagnosis', label: 'Diagnosis', icon: <BiotechIcon /> },
  { to: '/teleconsult', label: 'Teleconsult', icon: <ChatIcon /> },
  { to: '/reports', label: 'Reports', icon: <InsightsIcon /> },
]

function isActivePath(currentPathname, to) {
  return currentPathname === to || currentPathname.startsWith(`${to}/`)
}

export function DoctorShellLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, updateProfile, logout } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null)
  const [openProfile, setOpenProfile] = useState(false)
  const [editFirstName, setEditFirstName] = useState(user?.firstName || '')
  const [editLastName, setEditLastName] = useState(user?.lastName || '')
  const [editEmail, setEditEmail] = useState(user?.email || '')
  const [editPhone, setEditPhone] = useState(user?.phone || '')
  const [editSpecialty, setEditSpecialty] = useState(user?.specialty || '')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setEditFirstName(user?.firstName || '')
    setEditLastName(user?.lastName || '')
    setEditEmail(user?.email || '')
    setEditPhone(user?.phone || '')
    setEditSpecialty(user?.specialty || '')
  }, [user])

  const profileInitials = (user?.doctorName || 'Doctor')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  const handleProfileOpen = (event) => setAnchorEl(event.currentTarget)
  const handleProfileClose = () => setAnchorEl(null)

  const openDialog = () => {
    setOpenProfile(true)
    handleProfileClose()
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateProfile({
        firstName: editFirstName,
        lastName: editLastName,
        email: editEmail,
        phone: editPhone,
        specialty: editSpecialty,
      })
      setOpenProfile(false)
    } catch (err) {
      console.error('Save error:', err)
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = () => {
    logout()
    window.location.reload()
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: drawerWidth,
          bgcolor: '#fff',
          borderRight: '1px solid #dce4ef',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {/* Brand */}
        <Box sx={{ p: '20px 20px 16px', borderBottom: '1px solid #eef2f7' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                bgcolor: '#1a6fbf',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>MD</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1a2535', lineHeight: 1.2 }}>
                MedDesk
              </Typography>
              <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>
                Clinical Portal
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Navigation */}
        <Box sx={{ p: '16px 12px 8px' }}>
          <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 1 }}>
            Navigation
          </Typography>
          <List sx={{ py: 0 }}>
            {navItems.map((item) => {
              const selected = isActivePath(location.pathname, item.to)
              return (
                <ListItemButton
                  key={item.to}
                  selected={selected}
                  onClick={() => navigate(item.to)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: '9px 14px',
                    m: '2px 8px',
                    borderRadius: 1,
                    cursor: 'pointer',
                    fontSize: '13.5px',
                    color: selected ? '#1a6fbf' : '#4f6272',
                    bgcolor: selected ? '#e8f2fb' : 'transparent',
                    fontWeight: selected ? 500 : 400,
                    '&:hover': {
                      bgcolor: selected ? '#e8f2fb' : '#f8fafc',
                      color: selected ? '#1a6fbf' : '#1a2535',
                    },
                    position: 'relative',
                  }}
                >
                  <Box sx={{ width: 16, height: 16, flexShrink: 0, color: 'inherit' }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: '13.5px', fontWeight: 'inherit', color: 'inherit' }}>
                    {item.label}
                  </Typography>
                  {item.badge && !selected && (
                    <Box
                      sx={{
                        ml: 'auto',
                        bgcolor: '#1a6fbf',
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 600,
                        p: '1px 6px',
                        borderRadius: 2.5,
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </ListItemButton>
              )
            })}
          </List>
        </Box>

        {/* Doctor Card */}
        <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid #eef2f7' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: '#1a6fbf',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {profileInitials}
            </Avatar>
            <Box>
              <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1a2535' }}>
                {user?.firstName && user?.lastName
                  ? `Dr. ${user.firstName} ${user.lastName}`
                  : user?.doctorName ?? 'Dr. Rachel Kim'}
              </Typography>
              <Typography sx={{ fontSize: 11, color: '#94a3b8' }}>
                General Practitioner
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ ml: `${drawerWidth}px`, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Topbar */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderBottom: '1px solid #dce4ef',
            p: '0 28px',
            height: 58,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 5,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 17, fontWeight: 600, color: '#1a2535' }}>
              {navItems.find(item => isActivePath(location.pathname, item.to))?.label || 'Dashboard'}
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#94a3b8', mt: 0.5 }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: '#f8fafc',
                border: '1px solid #dce4ef',
                borderRadius: 1,
                p: '6px 12px',
                fontSize: 13,
              }}
            >
              <SearchIcon sx={{ width: 14, height: 14, color: '#94a3b8' }} />
              <InputBase
                placeholder="Quick search..."
                sx={{ fontSize: 13, color: '#4f6272', width: 160 }}
              />
            </Box>

            <IconButton
              sx={{
                width: 34,
                height: 34,
                borderRadius: 1,
                bgcolor: '#f8fafc',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <NotificationsIcon sx={{ width: 16, height: 16, color: '#4f6272' }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 6,
                  right: 7,
                  width: 7,
                  height: 7,
                  bgcolor: '#b52a2a',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ p: '24px 28px', flex: 1 }}>
          <Outlet />
        </Box>
      </Box>

      {/* Profile Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileClose}>
        <MenuItem onClick={openDialog}>Edit Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      {/* Profile Dialog */}
      <Dialog open={openProfile} onClose={() => setOpenProfile(false)}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              size="small"
              label="First Name"
              value={editFirstName}
              onChange={(e) => setEditFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              size="small"
              label="Last Name"
              value={editLastName}
              onChange={(e) => setEditLastName(e.target.value)}
            />
          </Stack>
          <TextField
            fullWidth
            size="small"
            margin="normal"
            label="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            margin="normal"
            label="Phone"
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            margin="normal"
            label="Specialty"
            value={editSpecialty}
            onChange={(e) => setEditSpecialty(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenProfile(false)} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving} variant="contained">
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}