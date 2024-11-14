import { useState } from "react";
import { BarraNavegacionUsuario } from "../Components";

export const paginaOperador = (cambio: (lista: String) => void) => {

    const [cualLista, setCualLista]= useState<String>('Reservas');
    const cambioLista =(nombre:String)=>{
        setCualLista(nombre)
    }
    return(
        <>
           <BarraNavegacionUsuario cambio={cambioLista}/>
            { cualLista === 'Reservas' ?  (
                <ListadoReserva />

            ) : (
                <Canchas token={usuario.usuario.token}/>
            )}
        </>
    )
}