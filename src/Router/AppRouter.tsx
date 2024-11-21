import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Login, Registro } from "../Components";
import { PaginaUsuario, PaginaOperador, PaginaAdministrador } from "../Pages";
import { ProtectedRouter } from "./ProtectedRouter";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element = { <Login /> } />
            <Route path='/registro' element = {<Registro/>} />

            <Route element = {<ProtectedRouter />}>
                <Route path='/canchita' element = {<PaginaUsuario/>}/>
                {/* <Route path='/admin' element={<PaginaAdministrador/>}/> */}
                <Route path='/operator' element={<PaginaOperador/>}/>
            </Route>

            {/* <Route element = {<PaginaAdministrador/>} */}
            
        </>
    )
)


