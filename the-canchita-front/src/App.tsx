import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login'
import Registro from './Componentes/Registro';

import { useContext } from 'react';
import { UsuarioContexto } from './Contexto/UsuarioContexto';

function App() {
  
  const {usuario,codigoRespuesta,setUsuario} = useContext(UsuarioContexto);
  return(
    <>
      <Routes>
        <Route path='/' element = { <Login usuario={usuario} codigoRespuesta={codigoRespuesta} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
      </Routes>
    </>
  );


}

export default App
