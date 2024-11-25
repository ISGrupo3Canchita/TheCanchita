import { createContext } from "react";
import { UsuarioContextoValue } from "./UsuarioContextoValue";

export const UsuarioContexto : React.Context<UsuarioContextoValue>= createContext<UsuarioContextoValue>({
    usuario:{id:'',nombre:'', rol:'', token:'',email:'',telefono:'',cantidadReservas:0, codigoRespuesta:0},
    setUsuario:()=>{}
})