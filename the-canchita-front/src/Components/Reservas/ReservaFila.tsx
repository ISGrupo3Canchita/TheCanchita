import React from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"

type reservaProps ={
    reserva:ReservaTipo
}
export const Reserva:React.FC<reservaProps>= ({reserva})=>{

    return (
        <>
            <tr>
                    <td>{reserva.canchaNombre}</td>
                    <td>{reserva.horaInicio}</td>
                    <td>{reserva.horaFinal}</td>
            </tr>
        </>
    )
}