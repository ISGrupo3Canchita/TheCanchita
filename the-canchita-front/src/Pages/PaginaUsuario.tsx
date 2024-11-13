import React, { useState} from "react"
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { Canchas } from "../Components";
import { BarraNavegacionUsuario } from "../Components/NavBar/BarraNavegacionUsuario";
import { UsuarioTipo } from "../Model/UsuarioTipo";

export const PaginaUsuario : React.FC<{usuario:UsuarioTipo}> = (usuario) =>{
    console.log('Estoy en PAGINA-USUARIO')

    const nombreUsuario = usuario.usuario.nombre;


    const [cualLista, setCualLista]=useState<String>('Reservas');

    const cambioLista =(nombre:String)=>{
        setCualLista(nombre)
    }

    return(
        <>

            <BarraNavegacionUsuario cambio={cambioLista} nombre={nombreUsuario} />
            { cualLista === 'Reservas' ?  (
                <ListadoReserva />

            ) : (
                <Canchas token={usuario.usuario.token}/>
            )}
        </>
    )
}