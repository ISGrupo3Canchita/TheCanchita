import { useContext } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto)

    return(
        <>  
            <h1>{usuario.nombre}</h1>
        </>
    )
}