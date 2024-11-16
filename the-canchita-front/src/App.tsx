import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContexto } from './Context/UsuarioContexto';
import { Login, Registro } from './Components';
import { PaginaAdministrador, PaginaOperador, PaginaUsuario } from './Pages';
import { ProtectedRouter } from './Router/ProtectedRouter';
import { AppRouter } from './Router';
import { UsuarioProveedor } from './Context/UsuarioProveedor';

function App() {
  
  // const {usuario,setUsuario} = useContext(UsuarioContexto);

//   return(
//     <>
//       <Routes>
//         <Route path='/' element = { <Login usuario={usuario} setUsuario={setUsuario} /> } />
//         <Route path='/registro' element = {<Registro/>} />
//         <Route path='/paginausuario' element = {<PaginaUsuario usuario={usuario}/>}/>
//         <Route path='/paginaadministrador' element={<PaginaAdministrador/>}/>
//         <Route path='/paginaoperador' element={<PaginaOperador/>}/>
//       </Routes>
//     </>
//   );
// }

  return(
    <>
      <UsuarioProveedor>
        <RouterProvider router={AppRouter}>
        </RouterProvider>
      </UsuarioProveedor>
      
    </>
  )
}

export default App
