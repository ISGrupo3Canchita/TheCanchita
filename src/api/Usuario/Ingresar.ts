import { apiUsuario } from "../apisBases/ApiUsuario";
import { UsuarioTipo } from "../../Model";

const LOGIN ='/login';

export const Ingresar= async(user:string,pwd:string) => {
        const response = await apiUsuario.post(LOGIN,JSON.stringify({username: user, password : pwd}))
    
        const datosUsuario:UsuarioTipo={
                id:response.data.id,
                nombre:response.data.nombre,
                email:response.data.email,
                rol:response.data.rol,
                telefono:response.data.telefono,
                token:response.data.token,
                codigoRespuesta: response.status,
        }
        console.log(datosUsuario.token)
        return datosUsuario
    }
