import { createContext } from "react";
import { UsuarioContextoValue } from "./UsuarioContextoValue";


export const UsuarioContexto : React.Context<UsuarioContextoValue>= createContext<UsuarioContextoValue>({
    usuario:{nombre:'', rol:'', token:'',cantidadReserva:'',email:'',telefono:'', codigoRespuesta:0,listadoReservaActivas:[]},
    setUsuario:()=>{}
})