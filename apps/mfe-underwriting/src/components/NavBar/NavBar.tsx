import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <NavLink to="../dashboard" relative="path">
        Dashboard
      </NavLink>
      <NavLink to="../management" relative="path">
        Management
      </NavLink>
      <NavLink to="../settings" relative="path">
        Settings
      </NavLink>
    </nav>
  )
}
