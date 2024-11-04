import React from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"

type reservaProps ={
    reserva:ReservaTipo
}

const handleCancelar=()=>{
    console.log("Se cancela la reserva")
}
export const ReservaFila:React.FC<reservaProps>= ({reserva})=>{

    return (
        <>
            <tr>
                    <td>{reserva.canchaNombre}</td>
                    <td>{reserva.horaInicio}</td>
                    <td>{reserva.horaFinal}</td>
                    <td>
                        <button className="btn btn-danger" 
                            type="button"
                            onClick={handleCancelar}>Cancelar</button>
                    </td>
            </tr>
        </>
    )
}