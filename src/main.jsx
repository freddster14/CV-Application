import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import  Intro  from './components/Intro'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro/>
    <App />
  </StrictMode>,
)


