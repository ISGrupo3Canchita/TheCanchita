import { theCanchitaApi } from "./Api";

 const ESTADO = 'estado'

export const cancelaReserva= async(idReserva:String, nuevoEstado:String,token:String) => {
    console.log(idReserva);
    console.log(nuevoEstado);
    console.log(token);

    const response = await theCanchitaApi.put(`${idReserva}/${ESTADO}/${nuevoEstado}`,{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data
    
    }