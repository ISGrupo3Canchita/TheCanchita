import React, { useContext } from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"
import { UsuarioContexto } from "../../Context/UsuarioContexto"

type reservaProps ={
    reserva: ReservaTipo,
    cancelar:(idReserva:String)=>void,
    confirmar:(idReserva:String)=>void,
}
export const ReservaFila:React.FC<reservaProps> = ({reserva,cancelar, confirmar})=>{

    const{usuario}= useContext(UsuarioContexto)
    const handleCancelar=()=>{
        cancelar(reserva.id,);
    }
    const handleConfirmar=()=>{
        confirmar(reserva.id,);
    }
    return (
        <>
            <div className="col-sm-4" >
                <div className="container mt-2 text-center">
                    <div className="card" style={{width:250, backgroundColor:"#C7C7C7 "}} >
                        <img className="card-img-top" src="/Images/Potrero_1.jpg" alt="Imagen De Cancha"></img>
                        <div className="card-body">
                            <h4 className="card-title">{reserva.nombreCancha}</h4>
                            <p className="card-text">Inicio Reserva {reserva.inicioReserva.slice(0,5)}hs</p>
                            <p className="card-text">Fin Reserva {reserva.finReserva.slice(0,5)}hs</p>

                            { reserva.estadoreserva === 'Pendiente' ?(
                                <h4 className="card-text" style={{color:"yellow"}}>{reserva.estadoreserva}</h4>
                            ):(
                                <h4 className="card-text"style={{color:"green"}}>{reserva.estadoreserva}</h4>
                            )
                            }

                            {usuario.rol ==='Operador' ? (
                                <button className="btn btn-danger" 
                                type="button"
                                onClick={handleConfirmar}
                            >Cancelar</button>
                            ):('')
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