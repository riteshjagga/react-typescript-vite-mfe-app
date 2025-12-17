import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

const Account = lazy(() => import('./modules/Account/Account'))
const Dashboard = lazy(() => import('./modules/Dashboard/Dashboard'))
const Settings = lazy(() => import('./modules/Settings/Settings'))

const AppRoutes = (): React.ReactElement => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </>
    
  )
}

export default AppRoutes
