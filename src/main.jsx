import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarefa from './Tarefa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarefa />
  </StrictMode>,
)
