import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-blue-100">
      <NavLink to="../dashboard" relative="path">
        Dashboard
      </NavLink>
      <NavLink to="../account" relative="path">
        Account
      </NavLink>
      <NavLink to="../settings" relative="path">
        Settings
      </NavLink>
    </nav>
  )
}
