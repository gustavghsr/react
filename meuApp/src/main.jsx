// ferramenta para detectar problemas em potencial.
//variáveis não utilizadas, códigos legado, funções mal definidas, etc

import { StrictMode } from 'react'

//ferramenta para renderizar a aplicação
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)
