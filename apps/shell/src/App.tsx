import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Account } from './modules/Account/Account'
import NavBar from './components/NavBar/NavBar'
import Dashboard from './modules/Dashboard/Dashboard'
import Settings from './modules/Settings/Settings'

import { ThemeProvider } from '@workspace/shared/components/ThemeProvider'
import MfeAccount from '@workspace/mfe-account'
import '@workspace/shared/global.css'
import './App.css'

const App = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <div className="m-4 p-4">
        <h1>React + Typescript + Vite + TailwindCSS + ShadCN + React Router + MonoRepo Template</h1>
        <BrowserRouter>
          <div className="flex flex-col gap-4">
            <NavBar />
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/mfe-account/account" replace />} />
                <Route path="mfe-account/*" element={<MfeAccount />} />
                <Route path="/account" element={<Account />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
