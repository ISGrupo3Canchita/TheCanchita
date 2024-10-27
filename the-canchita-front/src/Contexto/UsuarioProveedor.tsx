import { useState } from "react"
import { UsuarioContexto } from "./UsuarioContexto";

import { UsuarioContextoTipo } from "./UsuarioContextoTipo";
import { UsuarioTipo } from "../Modelo/UsuarioTipo";

export const UsuarioProveedor:React.FC<React.PropsWithChildren> = ({children})=>{
    
    const[usuario,setUsuario] = useState<UsuarioTipo>({nombre:'', rol:'', token:'',cantidadReserva:'',email:'',telefono:''});
    const actualizaUsuario= (usuarioNuevo:UsuarioTipo) =>{
        setUsuario(usuarioNuevo)
    }
    
    const ctxUsuario: UsuarioContextoTipo ={
        usuario,
        codigoRespuesta:0,
        setUsuario:actualizaUsuario   
    }

    return(
        <UsuarioContexto.Provider value={ctxUsuario}>
            {children}
        </UsuarioContexto.Provider>
    )
}