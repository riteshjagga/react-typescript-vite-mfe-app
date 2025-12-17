import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

const Dashboard = lazy(() => import('./modules/Dashboard/Dashboard'))
const Management = lazy(() => import('./modules/Management/Management'))
const Settings = lazy(() => import('./modules/Settings/Settings'))

const AppRoutes = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/management" element={<Management />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default AppRoutes
