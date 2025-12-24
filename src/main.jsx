import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importamos el Router
import { Viewport } from './pages/Viewport'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Viewport />
    </BrowserRouter>
  </StrictMode>,
)