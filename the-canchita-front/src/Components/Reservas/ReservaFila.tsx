import React from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"
import { generatePath } from "react-router-dom"


type reservaProps ={
    reserva:ReservaTipo
}

const handleCancelar=()=>{
    console.log("Se cancela la reserva")
}
export const ReservaFila:React.FC<reservaProps>= ({reserva})=>{
    console.log('Estoy en RESERVA-FILA')

    console.log(reserva.estadoReserva)
    return (
        <>
            <div className="col-sm-4" >
                <div className="container mt-2 text-center">
                    <div className="card" style={{width:400, backgroundColor:"#C7C7C7 "}} >
                        <img className="card-img-top" src="/Images/Potrero_1.jpg" alt="Imagen De Cancha"></img>
                        <div className="card-body">
                            <h4 className="card-title">{reserva.canchaNombre}</h4>
                            <p className="card-text">Horario Reserva {reserva.horaInicio}</p>

                            { reserva.estadoReserva === 'Pendiente' ?(
                                <h4 className="card-text" style={{color:"yellow"}}>{reserva.estadoReserva}</h4>
                            ):(
                                <h4 className="card-text"style={{color:"green"}}>{reserva.estadoReserva}</h4>
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