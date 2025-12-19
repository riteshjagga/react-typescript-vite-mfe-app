import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@workspace/shared/components/ui/button'
import { ModeToggle } from '../ModeToggle/ModeToggle'
import { useAuth } from '../../auth/AuthContext'

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
      <Link to="/mfe-account/account">Account Management</Link>
      <Link to="/mfe-underwriting/dashboard">Underwriting Management</Link>
      <ModeToggle />
      <Button onClick={handleSignoutClick} variant="outline">
        Sign out
      </Button>
    </nav>
  )
}
