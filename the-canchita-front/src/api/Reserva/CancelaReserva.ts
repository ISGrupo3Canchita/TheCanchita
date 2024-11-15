import { apiReserva } from "../apisBases/ApiReserva";

 const ESTADO = 'estado'

export const cancelaReserva= async(idReserva:String, nuevoEstado:String,token:String) => {

    const response = await apiReserva.put(`${idReserva}/${ESTADO}/${nuevoEstado}`,{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data
    }