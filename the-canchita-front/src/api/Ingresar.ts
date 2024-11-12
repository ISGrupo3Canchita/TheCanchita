import { theCanchitaApi } from "./Api";
import { UsuarioTipo } from "../Model/UsuarioTipo";


const LOGIN ='/usuarios/login';

export const Ingresar= async(user:String,pwd:String) => {
    const response = await theCanchitaApi.post(LOGIN,
            JSON.stringify({username: user, password : pwd}),
            {headers:{'Content-Type' : 'application/json'},
            withCredentials: true})

    const datosUsuario:UsuarioTipo={
            id:response.data.id,
            nombre:response.data.nombre,
            email:response.data.email,
            rol:response.data.rol,
            telefono:response.data.rol,
            token:response.data.token,
            codigoRespuesta: response.status,

    }
    console.log(datosUsuario.token)
    return datosUsuario
}
