
import { UsuarioTipo } from "../../Model"
import { UsuarioRow } from "./UsuarioRow"

type listSUsuarioProps = {
    usuarios: UsuarioTipo[],
    cambioRol: (id:string, rol:string)=>void,
}
export const UsuarioLista: React.FC<listSUsuarioProps> = ({usuarios, cambioRol})=>{

    return (
        <>
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-sm-2 text-center bg-light">
                        <h4>Usuarios </h4>
                    </div>

                    <div className="col-sm-10 bg-light">
                        <div className="container row">
                            {
                                usuarios.map((usuario)=>(
                                    <UsuarioRow key={usuario.id} usuario={usuario} cambioRol={cambioRol}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}