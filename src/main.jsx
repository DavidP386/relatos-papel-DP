/**
 * Modificado por: Gabby Zapata
 * Fecha: 2025-12-24
 * Descripción: Startup de la aplicación
 */

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