import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/NavBar/NavBar'
import { useAuth } from '../AuthContext'

export function ProtectedLayout() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
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
