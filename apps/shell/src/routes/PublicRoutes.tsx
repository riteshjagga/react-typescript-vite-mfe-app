import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from '../auth/SignIn/SignIn'
import { SignUp } from '../auth/SignUp/SignUp'
import ForgotPassword from '../auth/ForgotPassword/ForgotPassword'
import ResetPassword from '../auth/ResetPassword/ResetPassword'
import PublicLayout from './PublicLayout'

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}
