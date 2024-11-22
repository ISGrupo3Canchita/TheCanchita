import { apiReserva } from "../apisBases/ApiReserva";
import { ReservaModel } from "../../Model";

export const HacerReserva = async (reserva: ReservaModel, token: string) => {

    console.log(reserva);
    
    const response = await apiReserva.post(``,JSON.stringify({
        idCancha        :   reserva.idCancha,
        idUsuario       :   reserva.idUsuario,
        inicioReserva   :   reserva.inicioReserva,
        finReserva      :   reserva.finReserva
    }),{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
)
    
    
    return response.data;
};
