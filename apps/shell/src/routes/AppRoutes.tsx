import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';
import ProtectedRoutes from '../routes/ProtectedRoutes'
import PublicRoutes from '../routes/PublicRoutes'

export default function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      {isAuthenticated ? (
        // Load entire protected bundle
        <Route path="/*" element={<ProtectedRoutes />} />
      ) : (
        // Load entire public bundle
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  )
}
