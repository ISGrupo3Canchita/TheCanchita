import axios from "axios";
import { UserRegistro } from "../Modelo/UserRegistro";
import Api from "./Api";

const Registro_URL = Api.defaults.baseURL+'/theCanchita/add/usuario';


export const RegistroUsuario= async(userRegistro:UserRegistro)=>{
    const response = await axios.post(Registro_URL,
                        JSON.stringify({
                                        nombre:userRegistro.nombreUsuario,
                                        email:userRegistro.email,
                                        contraseña:userRegistro.contraseñaUsuario,
                                        telefono:userRegistro.TelefonoUsuario
                        }),{
                        headers: {'Content-Type' : 'application/json'},
                            withCredentials: true})
    return response
}