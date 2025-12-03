import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const app = document.getElementById('app')
if (!app) {
  throw new Error('Missing root element with app id.')
}
const appRoot = createRoot(app)
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
