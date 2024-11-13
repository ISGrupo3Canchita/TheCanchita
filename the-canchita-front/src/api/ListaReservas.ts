import { ListaReservaTipo } from "../Model/ListaReservaTipo";
import { theCanchitaApi } from "./Api";

 const LISTA = 'reserva/reservaparausuario/'

export const listaReservas= async(email:String, token:String) => {
    const response = await theCanchitaApi.get(LISTA+email,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    
    }
