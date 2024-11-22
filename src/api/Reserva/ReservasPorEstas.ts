import { apiReserva } from "../apisBases/ApiReserva";

 const LISTA = '/estado/'

export const reservasPorEstado= async(estado:string, token:string) => {
    const response = await apiReserva.get(LISTA+estado,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    }
