import { Link } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle/ModeToggle'

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 p-4 bg-background text-foreground">
      <Link to="/mfe-account/account">Account Management</Link>
      <Link to="/mfe-underwriting/dashboard">Underwriting Management</Link>
      <ModeToggle />
    </nav>
  )
}
