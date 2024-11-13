import { theCanchitaApi } from "./Api";

 const BASE = '/reserva/'

 const ESTADO = '/estado/'

//  const PRUEBA = 'prueba'


export const cancelaReserva= async(idReserva:String, nuevoEstado:String,token:String) => {
    console.log(idReserva);
    console.log(nuevoEstado);
    console.log(token);

    const response = await theCanchitaApi.put(BASE+idReserva+ESTADO+nuevoEstado,{
    // const response = await theCanchitaApi.get(BASE+PRUEBA,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    console.log(response.status);
    return response.data
    
    }