import { createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";
import { Login, Registro } from "../Components";
import { PaginaUsuario, PaginaOperador, PaginaAdministrador } from "../Pages";
import { ProtectedRouter } from "./ProtectedRouter";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path='/' element = { <Login /> } />
            <Route path='/registro' element = {<Registro/>} />

            <Route element = {<ProtectedRouter/>}>
                <Route path='/paginausuario' element = {<PaginaUsuario/>}/>
                <Route path='/paginaadministrador' element={<PaginaAdministrador/>}/>
                <Route path='/paginaoperador' element={<PaginaOperador/>}/>
            </Route>
        </Routes>
    )
)


