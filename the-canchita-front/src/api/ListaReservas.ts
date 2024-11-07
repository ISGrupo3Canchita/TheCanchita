import { theCanchitaApi } from "./Api";

 const LISTA= '/get/reservaparausuario/'

export const listaReservas= async(idUsuario:String) => {

    const response = await theCanchitaApi.get(LISTA+idUsuario)
                        
    return response.data
    }
    

