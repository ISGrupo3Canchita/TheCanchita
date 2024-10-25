import axios, { Axios } from "axios";
import { UserRegistro } from "../Modelo/UserRegistro";

const Registro_URL ='http://localhost:8080/theCanchita/addUser';

export const RegistroUsuario= async(userRegistro:UserRegistro)=>{
    console.log(userRegistro.email)

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