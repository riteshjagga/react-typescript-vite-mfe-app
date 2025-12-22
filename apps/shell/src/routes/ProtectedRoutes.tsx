import { Navigate, Route, Routes } from 'react-router-dom'

import MfeAccount from '@workspace/mfe-account'
import MfeUnderwriting from '@workspace/mfe-underwriting'
import Dashboard from '../modules/Dashboard/Dashboard'
import { Account } from '../modules/Account/Account'
import Settings from '../modules/Settings/Settings'
import ProtectedLayout from './ProtectedLayout'

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="mfe-account/*" element={<MfeAccount />} />
        <Route path="mfe-underwriting/*" element={<MfeUnderwriting />} />
      </Route>
    </Routes>
  )
}
