import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContexto } from './Context/UsuarioContexto';
import { Login, Registro } from './Components';
import { PaginaAdministrador, PaginaOperador, PaginaUsuario } from './Pages';
import { Reservar } from './Components';

function App() {
  
  const {usuario,setUsuario} = useContext(UsuarioContexto);

  

  return(
    <>
      <Routes>
        <Route path='/' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/paginausuario' element = {<PaginaUsuario usuario={usuario}/>}/>
        <Route path='/paginaadministrador' element={<PaginaAdministrador/>}/>
        <Route path='/paginaoperador' element={<PaginaOperador/>}/>
        <Route path="/reservar/:idCancha" element={<Reservar />} />
      </Routes>
    </>
  );
}

export default App