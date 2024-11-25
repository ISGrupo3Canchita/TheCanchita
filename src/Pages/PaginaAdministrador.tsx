import { useContext } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"
import { CanchaCreate } from "../Components/Cancha/CanchaCreate"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto)

    return(
        <>
            <h1>{usuario.nombre}</h1>
            <CanchaCreate key={usuario.id} token={usuario.token}/>

        </>
    )
}