import { useContext, useEffect, useState } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"
import { BarraNavegacionAdministrador } from "../Components"
import { UsuarioTipo } from "../Model"
import { UsuarioLista } from "../Components"
import { UsuariosLista } from "../api/Usuario/usuariosLista"
import { cambioRolUsuario } from "../api"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto);
    const [lista,setLista] = useState<string>();
    const [usuarios,setUsuarios] = useState<UsuarioTipo[]>([])

    const cambioLista= (lista:string)=>{
       setLista(lista)
    }
    const cambioRol= async(id: string,rol:string)=>{
        await cambioRolUsuario(id,rol,usuario.token)

        verUsuarios();
    }

    const verUsuarios= async()=>{
        const lista = await UsuariosLista(usuario.token)
       setUsuarios(lista);
    }

    useEffect(()=>{
        verUsuarios();
    },[])

    return(
        <>  
            <BarraNavegacionAdministrador key={usuario.nombre} nombre={usuario.nombre} cambio={cambioLista} />
            {lista === 'Usuarios'?(
                <UsuarioLista key={usuario.id} cambioRol={cambioRol} usuarios={usuarios}/>
            ):(
                <UsuarioLista key={usuario.id} cambioRol={cambioRol} usuarios={usuarios}/>
            )
            }
            
        </>
    )
}