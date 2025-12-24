import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '@workspace/shared/contexts/auth'

const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'))
const PublicRoutes = lazy(() => import('./PublicRoutes'))

export default function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="/*" element={isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />} />
    </Routes>
  )
}
