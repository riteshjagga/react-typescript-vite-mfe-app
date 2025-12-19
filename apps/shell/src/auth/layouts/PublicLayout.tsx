import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export function PublicLayout() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <main className="min-h-screen">
      {/* no navbar, no MFEs */}
      <Outlet />
    </main>
  )
}
