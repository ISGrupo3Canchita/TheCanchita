import { ReservaFila } from "./ReservaFila"
import React from "react"
import { ReservaTipo } from "../../Model"


type listReservaProps = {
    reservas:ReservaTipo[],
    // verReservas: ()=>void,
    cancelar:(idReserva:string)=>void,
    confirmar:(idReserva:string)=>void,
    rol:string;
}

export const ListadoReserva:React.FC<listReservaProps> =({cancelar,confirmar,reservas,rol})=>{

    return (
        <>
            <div className="container-fluid mt-1 text-center" >
                { rol === 'Operador' ? (
                    <>
                        <h2>Listado Pendiente </h2>
                        <p>“Nunca recibí distinciones a título personal.<br/>
                         Para mí el “nosotros” siempre estuvo por encima del “yo”.<br/>
                         <h3>René Favaloro</h3>
                        </p>
                    </>
                ):(
                    <>
                        <h2>Mis Reservas </h2>
                        <p>"Mis sueños son dos;
                            <br/>Mi primer sueño es jugar en el Mundial, 
                            <br/> y el segundo es salir campeón de Octava"
                            <br/><h3>Diego Armando Maradona.</h3>
                        </p>
                    </>
                )
                }
                <div className="row">
                        {
                            reservas.map((reserva)=>(
                                <ReservaFila key={reserva.id} reserva={reserva} cancelar={cancelar} confirmar={confirmar}   />
                            ))
                        }
                </div>
            </div>
        </>
    )
} 