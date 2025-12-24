import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@workspace/shared/contexts/auth'
import { Button } from '@workspace/shared/components/ui/button'
import { ModeToggle } from '../ModeToggle/ModeToggle'

export default function NavBar() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const handleSignoutClick = async () => {
    console.log('Sign out clicked')
    await signOut()

    navigate('/sign-in')
  }

  return (
    <nav className="flex items-center gap-4 p-4 bg-background text-foreground">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/account">Account</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink
        to="/mfe-account/dashboard"
        className={() => {
          const pathname = location.pathname // or use useLocation() hook
          const isActive = pathname.startsWith('/mfe-account')
          return isActive ? 'active' : '' // Add your active styles
        }}
      >
        Account Management
      </NavLink>
      <NavLink
        to="/mfe-underwriting/dashboard"
        className={() => {
          const pathname = location.pathname // or use useLocation() hook
          const isActive = pathname.startsWith('/mfe-underwriting')
          return isActive ? 'active' : '' // Add your active styles
        }}
      >
        Underwriting Management
      </NavLink>
      <ModeToggle />
      <Button onClick={handleSignoutClick} variant="outline">
        Sign out
      </Button>
    </nav>
  )
}
