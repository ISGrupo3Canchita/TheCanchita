import { ListaReservaTipo } from "../Model/ListaReservaTipo";
import { theCanchitaApi } from "./Api";

 const LISTA = 'reserva/get/reservaparausuario/'

export const listaReservas= async(email:String, token:String) => {
    console.log(LISTA+email)
    const response = await theCanchitaApi.get(LISTA+email,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    console.log(response.data);
    return response.data;
    
    }
