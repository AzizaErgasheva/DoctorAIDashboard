import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DoctorShellLayout } from '../shell/DoctorShellLayout.jsx'
import { LoginPanel } from '../../shared/auth/LoginPanel.jsx'
import { useAuth } from '../../shared/auth/AuthContext.jsx'
import { DashboardPage } from '../../features/dashboard/pages/DashboardPage.jsx'
import { AppointmentsPage } from '../../features/appointments/pages/AppointmentsPage.jsx'
import { SchedulePage } from '../../features/schedule/pages/SchedulePage.jsx'
import { PatientsPage } from '../../features/patients/pages/PatientsPage.jsx'
import { PrescriptionsPage } from '../../features/prescriptions/pages/PrescriptionsPage.jsx'
import { DiagnosisPage } from '../../features/diagnosis/pages/DiagnosisPage.jsx'
import { TeleconsultPage } from '../../features/teleconsult/pages/TeleconsultPage.jsx'
import { ReportsPage } from '../../features/reports/pages/ReportsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <DoctorShellLayout />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'appointments', element: <AppointmentsPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'patients', element: <PatientsPage /> },
      { path: 'prescriptions', element: <PrescriptionsPage /> },
      { path: 'diagnosis', element: <DiagnosisPage /> },
      { path: 'teleconsult', element: <TeleconsultPage /> },
      { path: 'reports', element: <ReportsPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/dashboard" replace /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

function RequireAuth({ children }) {
  const { status } = useAuth()

  if (status === 'loading') {
    return <div style={{ padding: '2rem' }}>Checking authentication…</div>
  }

  if (status === 'unauth') {
    return <LoginPanel />
  }

  return <>{children}</>
}

