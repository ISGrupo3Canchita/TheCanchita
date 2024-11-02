import { Route, Routes } from 'react-router-dom';
import { Login } from './Componentes/Login'
import { Registro } from  './Componentes/Registro';
import { useContext } from 'react';
import { UsuarioContexto } from './Contexto/UsuarioContexto';
import { PaginaUsuario } from './Componentes/PaginaUsuario';
import { PaginaAdministrador } from './Componentes/PaginaAdministrador';

function App() {
  
  const {usuario,setUsuario} = useContext(UsuarioContexto);

  return(
    <>
      <Routes>
        <Route path='/' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/paginausuario' element = {<PaginaUsuario/>}/>
        <Route path='/paginaadministrador' element={<PaginaAdministrador/>}/>
      </Routes>
    </>
  );


}

export default App
