import { theCanchitaApi } from "./Api";

 const LISTA = '/reserva/get/reservaparausuario/'
 const PRUEBA = '/usuarios/prueba'

export const listaReservas= async(idUsuario:String) => {
    console.log(LISTA+idUsuario)
    const response = await theCanchitaApi.get(LISTA+idUsuario);
    return response.data
    }
    

