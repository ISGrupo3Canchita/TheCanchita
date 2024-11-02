import axios from "axios";
import Api from "./Api";

const ListaReserva= Api.defaults.baseURL+'/misReservas/'

export const Ingresar= async(user:String,pwd:String) => {
    const response = await axios.post(ListaReserva, 
            JSON.stringify({username: user, password : pwd}),
                        {
                            headers: {'Content-Type' : 'application/json'},
                            withCredentials: true
                         });
    console.log(response)
    }