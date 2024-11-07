import { UserRegistro } from "../Model/UserRegistro";
import { theCanchitaApi } from "./Api";

const Registro_URL = '/theCanchita/addUser';


export const RegistroUsuario= async(userRegistro:UserRegistro)=>{
    const response = await theCanchitaApi.post(Registro_URL,
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