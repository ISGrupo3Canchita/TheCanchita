
import { Cancha } from "../Model/Cancha";
import { theCanchitaApi } from "./Api";

const Canchas_Habilitas_URL = '/cancha'

export const CanchasHabilitadas = async() => {
    const response = await theCanchitaApi.get(Canchas_Habilitas_URL);

    const canchaDatos:Cancha[] = response.data.map((cancha: Cancha) => ({
        
        nombreCancha:cancha.nombreCancha,
        direccion:cancha.direccion,
        horarioInicio:cancha.horarioInicio,
        horarioFin:cancha.horarioFin,
        estado:cancha.estado
    }));

    return canchaDatos

}