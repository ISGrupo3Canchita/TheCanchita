import { useContext } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"
import { CanchaCreate } from "../Components/Cancha/CanchaCreate"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto)

    return(
        <>
            <CanchaCreate key={usuario.id} token={usuario.token}/>
        </>
    )
}