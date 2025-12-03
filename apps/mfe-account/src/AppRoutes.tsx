import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Account = lazy(() => import('./modules/Account/Account'))
const Dashboard = lazy(() => import('./modules/Dashboard/Dashboard'))
const Settings = lazy(() => import('./modules/Settings/Settings'))

const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/account" replace />} />
      <Route path="/account" element={<Account />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default AppRoutes
