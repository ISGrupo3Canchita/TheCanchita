import { theCanchitaApi } from "./Api";
import { UsuarioTipo } from "../Modelo/UsuarioTipo";


const LOGIN_URL = '/usuarios/login';

export const Ingresar= async(user:String,pwd:String) => {
    console.log(LOGIN_URL )
    const response = await theCanchitaApi.post(LOGIN_URL, 
            JSON.stringify({username: user, password : pwd}),
                        {
                            headers: {'Content-Type' : 'application/json'},
                            withCredentials: true
                         });
    const datosUsuario:UsuarioTipo={
            nombre:response.data.nombre,
            email:response.data.email,
            rol:response.data.rol,
            telefono:response.data.rol,
            cantidadReserva:response.data.cantidadReserva,
            token:response.data.token,
            codigoRespuesta: response.status
    }
    return datosUsuario
}