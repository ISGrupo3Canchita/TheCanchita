import { ReservaTipo } from "../../Model"
import { ReservaFila } from "./ReservaFila"

type listaReservaProps = {
    cancelar:(idReserva:String)=>void,
    reservas:ReservaTipo[]
}

export const ReservaBase:React.FC<listaReservaProps> = ({reservas,cancelar})=>{

    return(
        <>
            <div className="container-fluid mt-1 text-center" >
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos.<br></br>Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <div className="row">
                        {
                            reservas.map((r)=>(
                                <ReservaFila key={r.id} reserva={r} cancelar={cancelar}   />
                            ))
                        }
                </div>
            </div>
        </>
    )
}