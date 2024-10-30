import { Reserva } from "./Reserva"
import { ReservaTipo } from "../Modelo/ReservaTipo"



export const ListadoReserva:React.FC< {reservas:ReservaTipo[]}> = ({reservas})=>{

    return (
        <>
            <div className="container mt-3">
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos.<br></br>Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>Nombre Potrero</th>
                        <th>Te convertis en Heroe</th>
                        <th>Empiezaa BIRRA TIME</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            reservas.map((r)=>(
                                <Reserva key={r.idReserva} reserva={r}   />
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
} 