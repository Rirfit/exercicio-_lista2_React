import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Estilo from './components/Estilo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Estilo/>
  </StrictMode>,
)
