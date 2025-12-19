import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MfeAccount from '@workspace/mfe-account'
import MfeUnderwriting from '@workspace/mfe-underwriting'
import { ThemeProvider } from '@workspace/shared/components/ThemeProvider'
import { AuthProvider } from './auth/AuthContext'
import { Account } from './modules/Account/Account'
import Dashboard from './modules/Dashboard/Dashboard'
import Settings from './modules/Settings/Settings'
import { PublicLayout } from './auth/layouts/PublicLayout'
import { ProtectedLayout } from './auth/layouts/ProtectedLayout'
import { SignIn } from './auth/SignIn/SignIn'
import { SignUp } from './auth/SignUp/SignUp'
import ForgotPassword from './auth/ForgotPassword/ForgotPassword'
import ResetPassword from './auth/ResetPassword/ResetPassword'

import '@workspace/shared/global.css'
import './App.css'

console.log(import.meta.env.VITE_ENV_NAME)

const App = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="m-4 p-4">
          <h1>
            React + Typescript + Vite + TailwindCSS + ShadCN + React Router + MonoRepo Template
          </h1>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* ---------- PUBLIC ROUTES ---------- */}
                <Route element={<PublicLayout />}>
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                </Route>
                {/* ---------- PROTECTED ROUTES ---------- */}
                <Route element={<ProtectedLayout />}>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="mfe-account/*" element={<MfeAccount />} />
                  <Route path="mfe-underwriting/*" element={<MfeUnderwriting />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
