import { ListaReservaTipo } from "../Model/ListaReservaTipo";
import { theCanchitaApi } from "./Api";

 const BASE = 'reserva/'
 

export const cancelaReserva= async(idReserva:String, nuevoEstado:String,token:String) => {
    
    const response = await theCanchitaApi.post(BASE+idReserva+'/estado/'+nuevoEstado,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data.status;
    
    }