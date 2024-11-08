import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login'
import { Registro } from  './Components/Registro/Registro';
import { useContext } from 'react';
import { UsuarioContexto } from './Context/UsuarioContexto';
import { PaginaUsuario } from './Pages/PaginaUsuario';
import { PaginaAdministrador } from './Pages/PaginaAdministrador';

function App() {
  
  const {usuario,setUsuario} = useContext(UsuarioContexto);

  return(
    <>
      {console.log('Estoy en APP')}
      <Routes>
        <Route path='/' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/paginausuario' element = {<PaginaUsuario usuario={usuario}/>}/>
        <Route path='/paginaadministrador' element={<PaginaAdministrador/>}/>
      </Routes>
    </>
  );


}

export default App
