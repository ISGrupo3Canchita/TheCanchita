import { apiReserva } from "../apisBases/ApiReserva";

 const LISTA = '/porestado/'

export const reservasPorEstado= async(estado:String, token:String) => {
    const response = await apiReserva.get(LISTA+estado,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    }
