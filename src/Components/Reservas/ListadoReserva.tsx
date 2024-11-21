import { ReservaFila } from "./ReservaFila"
import React, { useContext, useEffect, useState } from "react"
import { UsuarioContexto } from "../../Context/UsuarioContexto"
import { ReservaTipo } from "../../Model"
import { listaReservas } from "../../api"

type listReservaProps = {
    reservas:ReservaTipo[],
    // verReservas: ()=>void,
    cancelar:(idReserva:String)=>void,
    confirmar:(idReserva:String)=>void,
}

export const ListadoReserva:React.FC<listReservaProps> =({cancelar,confirmar,reservas})=>{
    
    // const {usuario } = useContext(UsuarioContexto)

    // const [reservas, setReservas] = useState<ReservaTipo[]>([])

    // const verReservas = async()=>{
    //     const reservas = await listaReservas(usuario.email, usuario.token);
    //     setReservas(reservas);
    // }

    // useEffect(()=>{
    //     verReservas();
    // },[])

    return (
        <>
            <div className="container-fluid mt-1 text-center" >
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos;
                    <br/>Mi primer sueño es jugar en el Mundial, 
                    <br/> y el segundo es salir campeón de Octava"
                    <br/>Diego Armando Maradona.
                </p>
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