import axios from "axios";
import { UserRegistro } from "../Modelo/UserRegistro";
import Api from "./Api";

const Registro_URL = Api.defaults.baseURL+'/theCanchita/addUser';


export const RegistroUsuario= async(userRegistro:UserRegistro)=>{
    const response = await axios.post(Registro_URL,
                        JSON.stringify({
                                        nombreUsuario:userRegistro.nombreUsuario,
                                        email:userRegistro.email,
                                        contraseñaUsuario:userRegistro.contraseñaUsuario,
                                        telefonoUsuario:userRegistro.TelefonoUsuario
                        }),{
                        headers: {'Content-Type' : 'application/json'},
                            withCredentials: true})
    return response
}