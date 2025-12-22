import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar/NavBar'
import { useAuth } from '../auth/AuthContext'

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
