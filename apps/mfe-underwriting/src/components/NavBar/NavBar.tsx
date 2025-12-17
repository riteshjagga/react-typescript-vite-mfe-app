import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="../dashboard" relative="path">
        Dashboard
      </Link>
      <Link to="../management" relative="path">
        Management
      </Link>
      <Link to="../settings" relative="path">
        Settings
      </Link>
    </nav>
  )
}
