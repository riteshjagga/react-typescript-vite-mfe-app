import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function PublicLayout() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    console.log('User is authenticated, redirecting to dashboard', isAuthenticated)
    return <Navigate to="/dashboard" replace />
  }

  return (
    <main className="min-h-screen">
      {/* no navbar, no MFEs */}
      <Outlet />
    </main>
  )
}
