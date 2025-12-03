import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import AppRoutes from './AppRoutes'

import '@workspace/shared/global.css'
import './App.css'

const App = (): React.ReactElement => {
  return (
    <>
      <h1>React + TypeScript + Vite + TailwindCSS + React Router Template</h1>
      <BrowserRouter>
        <div className="flex flex-col gap-4">
          <NavBar />
          <main>
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
