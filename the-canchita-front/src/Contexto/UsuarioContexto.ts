import { createContext } from "react";
import { UsuarioContextoTipo } from "./UsuarioContextoTipo";
import { UsuarioTipo } from "../Modelo/UsuarioTipo";


export const UsuarioContexto : React.Context<UsuarioContextoTipo>= createContext<UsuarioContextoTipo>({
    usuario:{nombre:'', rol:'', token:'',cantidadReserva:'',email:'',telefono:''},
    codigoRespuesta:0,
    setUsuario:()=>{}
})