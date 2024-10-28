import { Route, Routes } from 'react-router-dom';
import { Login } from './Login'
import { Registro } from  './Registro';

import { useContext } from 'react';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';

function App() {
  
  const {usuario,setUsuario} = useContext(UsuarioContexto);

  return(
    <>
      <Routes>
        <Route path='/' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
        
      </Routes>
    </>
  );


}

export default App
