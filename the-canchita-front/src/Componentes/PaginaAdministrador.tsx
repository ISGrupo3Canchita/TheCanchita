import { useContext } from "react"
import { UsuarioContexto } from "../Contexto/UsuarioContexto"

export const PaginaAdministrador = () => {

    const {usuario}=useContext(UsuarioContexto);
    return(
        <>
            <h1>Soy D10s</h1>
            <h2>{usuario.nombre}</h2>
            <h3>{usuario.token}</h3>
        </>
    )
}