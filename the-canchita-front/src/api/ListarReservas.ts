import axios from "axios";
import Api from "./Api";

const ListaReserva= Api.defaults.baseURL+'reserva/get/reservas'

export const listarReservas= async() => {
    console.log('estoy en ListarReservas')
    const response = await axios.get(ListaReserva,
                        { headers: {'Content-Type' : 'application/json'}, withCredentials: true});
    console.log(response)
    }