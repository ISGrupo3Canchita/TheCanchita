import { useContext } from "react"
import {  Navigate, Outlet, redirect } from "react-router-dom"
import { UsuarioContexto } from "../Context/UsuarioContexto"



export const ProtectedRouter=()=>{

    const {usuario} = useContext(UsuarioContexto)
    console.log(usuario)
    return (
        <>
            { usuario.rol ==='' ? (
                <Navigate to='/'/>
            ):(
                <Outlet/>
            ) 
            }
        </>
    )

}