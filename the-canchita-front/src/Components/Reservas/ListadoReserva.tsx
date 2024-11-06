import { ReservaFila } from "./ReservaFila"
import React, { useEffect, useState } from "react"
import { ListaReservaTipo } from "../../Model/ListaReservaTipo"



export const ListadoReserva : React.FC<{reservas:ListaReservaTipo}> =(lista)=>{
    {console.log('Estoy en LISTADO-RESERVA')}
    console.log(lista);

    return (
        <>
            <div className="container-fluid mt-1 text-center" >
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos.<br></br>Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <div className="row">
                        {
                            lista.reservas.map((r)=>(
                                <ReservaFila key={r.idReserva} reserva={r}   />
                            ))
                        }
                </div>
            </div>
        </>
    )
    
} 