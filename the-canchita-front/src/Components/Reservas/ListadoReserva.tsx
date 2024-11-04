import { ReservaFila } from "./ReservaFila"
import { ReservaTipo } from "../../Model/ReservaTipo"
import { useEffect, useState } from "react"
import { listarReservas } from "../../api/ListarReservas"

// const reservas:ReservaTipo[] = [
//     {canchaNombre:'Cancha1',horaFinal:10,horaInicio:9,idReserva:1, estadoReserva:'Pendiente'},
//     {canchaNombre:'Cancha2',horaFinal:11,horaInicio:10,idReserva:2,estadoReserva:'Pendiente'},
//     {canchaNombre:'Cancha3',horaFinal:12,horaInicio:12,idReserva:3, estadoReserva:'Pendiente'},
// ]

export const ListadoReserva= ()=>{

    const [reservas, setReservas] = useState<ReservaTipo[]>([])

    useEffect(()=>{
       listarReservas;
        // setReservas(misReservas),
    },[])
    const handleCancelar = ()=>{
        listarReservas();
    }
    return (
        <>
            <div className="container mt-3 text-center" >
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos.<br></br>Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                {/* <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>POTRERO</th>
                        <th>A JUGAR</th>
                        <th>BIRRA TIME</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            reservas.map((r)=>(
                                <ReservaFila key={r.idReserva} reserva={r}   />
                            ))
                        }
                        
                    </tbody>
                </table> */}
                <button className="btn btn-danger" 
                            type="button"
                            onClick={handleCancelar}>Cancelar</button>
            </div>
        </>
    )
} 