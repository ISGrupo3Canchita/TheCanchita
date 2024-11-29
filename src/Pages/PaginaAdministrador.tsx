import { useContext, useState } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"
import { CanchaCreate } from "../Components/Cancha/CanchaCreate"
import { BarraNavegacionAdministrador } from "../Components/NavBar/BarraNavegacionAdministrador"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto)
    const [cualInterfaz, setCualInterfaz]=useState<string>('crearCancha');

    const cambiarInterfaz = (interfaz:string) => {
        setCualInterfaz(interfaz);
    }


    return(
        <>
        <BarraNavegacionAdministrador cambio={cambiarInterfaz} nombre={usuario.nombre} key={usuario.id}  />
        {cualInterfaz === 'crearCancha' ? (
            <CanchaCreate key={usuario.id} token={usuario.token}/>
        ) 
            :(
            <h1>Estoy en Listado usuarios</h1>
            )
            }

        </>
    )
}