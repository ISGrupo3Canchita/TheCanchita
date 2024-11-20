import { useContext, useState} from "react"
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { Canchas, BarraNavegacion } from "../Components";
import { UsuarioContexto } from "../Context/UsuarioContexto";

export const PaginaUsuario = () =>{
    const {usuario} = useContext(UsuarioContexto);
    const nombreUsuario = usuario.nombre;
    const [cualLista, setCualLista]=useState<String>('Reservas');
    const cambioLista =(nombre:String)=>{
        setCualLista(nombre)
    }

    return(
        <>
            <BarraNavegacion cambio={cambioLista} nombre={nombreUsuario} />
            { cualLista === 'Reservas' ?  (
                <ListadoReserva />

            ) : (
                <Canchas token={usuario.token}/>
            )}
        </>
    )
}