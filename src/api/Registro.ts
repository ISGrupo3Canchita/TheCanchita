import { UserRegistro } from "../Model/UserRegistro";
import { theCanchitaApi } from "./ApiUsuario";

const Registro_URL = 'usuarios';


export const RegistroUsuario= async(userRegistro:UserRegistro)=>{
    const response = await theCanchitaApi.post(Registro_URL,
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