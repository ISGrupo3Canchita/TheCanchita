import axios from "axios";
import { theCanchitaApi } from "./Api";
import { UsuarioTipo } from "../Model/UsuarioTipo";


const LOGIN ='/theCanchita/ingreso';

export const Ingresar= async(user:String,pwd:String) => {
    const response = await theCanchitaApi.post(
            JSON.stringify({username: user, password : pwd}),
            {headers:{'Content-Type' : 'application/json'},
            withCredentials: true})

    const datosUsuario:UsuarioTipo={
            nombre:response.data.nombre,
            email:response.data.email,
            rol:response.data.rol,
            telefono:response.data.rol,
            token:response.data.token,
            codigoRespuesta: response.status,

    }
    return datosUsuario
}


// consulta mandando token
// const api = `your api here`
// axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
//         .then(res => {
//             console.log(res.data);
//         this.setState({
//             items: res.data,  /*set response data in items array*/
//             isLoaded : true,
//             redirectToReferrer: false
//         })
