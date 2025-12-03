import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/">Account</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  )
}
