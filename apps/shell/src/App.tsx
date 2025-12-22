import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@workspace/shared/components/ThemeProvider'
import { AuthProvider } from './auth/AuthContext'

import '@workspace/shared/global.css'
import './App.css'
import AppRoutes from './AppRoutes'

console.log(import.meta.env.VITE_ENV_NAME)

const App = (): React.ReactElement => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="m-4 p-4">
          <h1>
            React + Typescript + Vite + TailwindCSS + ShadCN + React Router + MonoRepo Template
          </h1>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
              {/* <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/account" element={<Account />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="mfe-account/*" element={<MfeAccount />} />
                <Route path="mfe-underwriting/*" element={<MfeUnderwriting />} />
              </Route>
            </Routes> */}
            </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
