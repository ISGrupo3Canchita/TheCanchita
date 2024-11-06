import axios from "axios";
import Api from "./Api";

const ListaReserva= Api.defaults.baseURL+'reserva/get/reservas'

export const listaReservas= async() => {
    const response = await axios.get(ListaReserva,
                        { headers: {'Content-Type' : 'application/json'}, withCredentials: true});
    console.log(response)
    }