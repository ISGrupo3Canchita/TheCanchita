import React, { useState} from "react"
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { Canchas, BarraNavegacion } from "../Components";
import { UsuarioTipo } from "../Model/UsuarioTipo";

export const PaginaUsuario : React.FC<{usuario:UsuarioTipo}> = (usuario) =>{
    const nombreUsuario = usuario.usuario.nombre;
    const [cualLista, setCualLista]=useState<string>('Reservas');
    const cambioLista =(nombre:string)=>{
        setCualLista(nombre)
    }

    return(
        <>
            <BarraNavegacion cambio={cambioLista} nombre={nombreUsuario} />
            { cualLista === 'Reservas' ?  (
                <ListadoReserva />

            ) : (
                <Canchas token={usuario.usuario.token}/>
            )}
        </>
    )
}