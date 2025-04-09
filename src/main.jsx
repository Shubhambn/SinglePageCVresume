import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Ginfo from './Ginfo.jsx'
import Submit from './Submit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Submit/>
  </StrictMode>,
)
