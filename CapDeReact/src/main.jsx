import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing from './router'

import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  </StrictMode>,
)
