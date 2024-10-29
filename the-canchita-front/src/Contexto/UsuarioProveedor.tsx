import { useState } from "react"
import { UsuarioContexto } from "./UsuarioContexto";
import { UsuarioTipo } from "../Modelo/UsuarioTipo";



export const UsuarioProveedor:React.FC<React.PropsWithChildren> = ({children})=>{
    
    const[ctxUsuario,setCtxUsuario] = useState<UsuarioTipo>({nombre:'', rol:'', token:'',cantidadReserva:'',email:'',telefono:'',codigoRespuesta:0, listadoReservaActivas:[]});
    
    const actualizarUsuario =(usuario:UsuarioTipo)=>{
        setCtxUsuario(usuario)
    };
    
    return(
        <UsuarioContexto.Provider value={{usuario:ctxUsuario,setUsuario:actualizarUsuario}}>
            {children}
        </UsuarioContexto.Provider>
    )
}