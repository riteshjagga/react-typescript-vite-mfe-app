import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@workspace/shared/contexts/auth'
import { Sidebar } from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar/NavBar'

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to sign-in', isAuthenticated)
    return <Navigate to="/sign-in" replace />
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col gap-4">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
