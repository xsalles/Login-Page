import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/Global.css"
import LoginPage from './components/LoginPage/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
