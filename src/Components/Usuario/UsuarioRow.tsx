import { useRef } from "react"
import { UsuarioTipo } from "../../Model"

type UsuarioRowProps= {
    cambioRol:(id:string, rol:string)=>void
    usuario: UsuarioTipo
}
export const UsuarioRow : React.FC<UsuarioRowProps> = ({cambioRol, usuario})=>{

   const inputRolRef = useRef<HTMLSelectElement>(null);

    const handleCambiarRol = ()=>{
        // console.log(inputRolRef.current!.value)
        cambioRol(usuario.id,inputRolRef.current!.value)
    }
    return (
        <> 
            <div className="container col-3 text-center" >
                <div className="card" style={{width:200, backgroundColor:"#C7C7C7 "}} >
                    <img className="card-img-top" src="/Images/Potrero_1.jpg"  alt="Imagen De Cancha"></img>
                    <div className="card-body">
                        <h4 className="card-title">{usuario.nombre}</h4>
                        <p className="card-text">Email: {usuario.email}</p>
                        <p className="card-text">Telefono: {usuario.telefono}</p>
                        <h4 className="card-text" style={{color:"#2986cc"}}>{usuario.rol}</h4>
                        <form 
                           
                        >
                            <select
                                ref={inputRolRef}
                             className="form-select form-select-sm mt-3">
                                <option>Administrador</option>
                                <option>Eliminado</option>
                                <option>Operador</option>
                                <option>Usuario</option>
                            </select>
                        </form> 
                
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-success" type="button" onClick={handleCambiarRol}>Asignar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}