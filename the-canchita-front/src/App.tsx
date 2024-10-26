import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login'
import Registro from './Componentes/Registro';

function App() {

  

  return(
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registro' element ={<Registro/>}/>
      </Routes>
    </>
  );


}

export default App
