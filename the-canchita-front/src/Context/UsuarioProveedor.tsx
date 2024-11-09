import { useState } from "react"
import { UsuarioContexto } from "./UsuarioContexto";
import { UsuarioTipo } from "../Model/UsuarioTipo";

export const UsuarioProveedor:React.FC<React.PropsWithChildren> = ({children})=>{
    console.log('Estoy en USUARIO-PROVEEDOR')
    const[ctxUsuario,setCtxUsuario] = useState<UsuarioTipo>({id:'',nombre:'', rol:'', token:'',email:'',telefono:'',codigoRespuesta:0});
    
    const actualizarUsuario =(usuario:UsuarioTipo)=>{
        setCtxUsuario(usuario)
    };
    
    return(
        <>
            {console.log('Estoy en return  USUARIO-PROVEEDOR')}
            <UsuarioContexto.Provider value={{usuario:ctxUsuario,setUsuario:actualizarUsuario}}>
                {children}
            </UsuarioContexto.Provider>
        </>
    )
}