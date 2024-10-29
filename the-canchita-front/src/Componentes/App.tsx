import { Route, Routes } from 'react-router-dom';
import { Login } from './Login'
import { Registro } from  './Registro';

import { useContext } from 'react';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import { PaginaUsuario } from './PaginaUsuario';

function App() {
  
  const {usuario,setUsuario} = useContext(UsuarioContexto);

  return(
    <>
      <Routes>
        <Route path='/login' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/paginaUsuario' element = {<PaginaUsuario/>}/>
      </Routes>
    </>
  );


}

export default App
