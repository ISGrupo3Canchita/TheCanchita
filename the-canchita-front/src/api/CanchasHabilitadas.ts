import axios from "axios";
import Api from "./Api";
import { Cancha } from "../Modelo/Cancha";




const Canchas_Habilitas_URL = Api.defaults.baseURL+'/cancha/get/canchas/habilitadas'

export const CanchasHabilitadas = async() => {
    const response = await axios.get(Canchas_Habilitas_URL);

    

    const canchaDatos:Cancha[] = response.data.map((cancha: Cancha) => ({
        
        nombreCancha:cancha.nombreCancha,
        direccion:cancha.direccion,
        horarioInicio:cancha.horarioInicio,
        horarioFin:cancha.horarioFin,
        estado:cancha.estado
    }));

    return canchaDatos

}