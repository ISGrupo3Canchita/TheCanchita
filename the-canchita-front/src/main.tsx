import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UsuarioProveedor } from './Contexto/UsuarioProveedor.tsx'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <UsuarioProveedor>
        <App />
      </UsuarioProveedor>
    </BrowserRouter>   

)
