import { Link } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle/ModeToggle'

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 p-4 bg-background text-foreground">
      <Link to="/account">Account</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      <ModeToggle />
    </nav>
  )
}
