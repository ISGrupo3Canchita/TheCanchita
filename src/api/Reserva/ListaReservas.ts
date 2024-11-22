import { apiReserva } from "../apisBases/ApiReserva";

 const LISTA = '/email/'

export const listaReservas= async(email:String, token:String) => {
    const response = await apiReserva.get(LISTA+email,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    }
