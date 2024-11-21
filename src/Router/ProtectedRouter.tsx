import { useContext } from "react"
import {  Navigate, Outlet, redirect } from "react-router-dom"
import { UsuarioContexto } from "../Context/UsuarioContexto"



export const ProtectedRouter=()=>{

    const {usuario} = useContext(UsuarioContexto)

    return (
        <>
            {console.log("EN PROTECTER")}
            { usuario.rol ==='' ? (
                <Navigate to='/'/>
            ):(
                <Outlet/>
            ) 
            }
        </>
    )
}