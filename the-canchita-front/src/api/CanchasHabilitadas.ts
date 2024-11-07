import { theCanchitaApi } from "./Api";
import { Cancha } from "../Modelo/Cancha";
import { useContext } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";



const Canchas_Habilitas_URL = '/cancha'





export const CanchasHabilitadas = async() => {
    
    const { usuario } = useContext(UsuarioContexto)

    const token = usuario.token
    
 
    const response = await theCanchitaApi.get(Canchas_Habilitas_URL, {
        headers: {
            'Authorization': `Bearer ${token}`,  
        }, 
    } );

    

    const canchaDatos:Cancha[] = response.data.map((cancha: Cancha) => ({
        
        nombreCancha:cancha.nombreCancha,
        direccion:cancha.direccion,
        horarioInicio:cancha.horarioInicio,
        horarioFin:cancha.horarioFin,
        estado:cancha.estado
    }));

    return canchaDatos

}