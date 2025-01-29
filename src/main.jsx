import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import CareerProvider from './contextApi/CareerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CareerProvider >
      <RouterProvider router={routers}>

      </RouterProvider>
    </CareerProvider>
  </StrictMode>,
)
