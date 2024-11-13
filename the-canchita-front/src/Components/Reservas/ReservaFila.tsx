import React, { useContext } from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"

type reservaProps ={
    reserva: ReservaTipo,
    cancelar:(idReserva:String,nuevoEstado:String)=>void
}
export const ReservaFila:React.FC<reservaProps> = ({reserva,cancelar})=>{
    const handleCancelar=()=>{
        const nuevoEstado:String = 'Cancelada';
        cancelar(reserva.id,nuevoEstado);
    }
    return (
        <>
            <div className="col-sm-4" >
                <div className="container mt-2 text-center">
                    <div className="card" style={{width:250, backgroundColor:"#C7C7C7 "}} >
                        <img className="card-img-top" src="/Images/Potrero_1.jpg" alt="Imagen De Cancha"></img>
                        <div className="card-body">
                            <h4 className="card-title">{reserva.nombreCancha}</h4>
                            <p className="card-text">Horario Reserva {reserva.inicioReserva}</p>

                            { reserva.estadoreserva === 'Pendiente' ?(
                                <h4 className="card-text" style={{color:"yellow"}}>{reserva.estadoreserva}</h4>
                            ):(
                                <h4 className="card-text"style={{color:"green"}}>{reserva.estadoreserva}</h4>
                            )
                            }
                            <button className="btn btn-danger" 
                                type="button"
                                onClick={handleCancelar}
                            >Cancelar</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}