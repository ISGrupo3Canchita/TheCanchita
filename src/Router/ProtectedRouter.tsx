import { useContext } from "react"
import {  redirect } from "react-router-dom"
import { UsuarioContexto } from "../Context/UsuarioContexto"



export const ProtectedRouter=()=>{

    const {usuario} = useContext(UsuarioContexto)
    
    return (
        <>
            { usuario.id ==='' ? (
                redirect("/")
            ):(
                usuario.token ==='Administrador' ? redirect('/paginaadministrador') :
                usuario.token === 'Operador' ? redirect('/paginaoperador') : redirect('paginausuario')
            ) 
            }
        </>
    )

}