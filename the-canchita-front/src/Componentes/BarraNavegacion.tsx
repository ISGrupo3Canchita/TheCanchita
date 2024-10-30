import { useContext } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";
import { Link } from "react-router-dom";


export const BarraNavegacion : React.FC<{cargarReserva:()=>void}> = ({cargarReserva}) => {

    const {usuario} = useContext(UsuarioContexto);

    return(
        <>
            <div className="container-fluid text-center">
                
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand active" href="#" > {usuario.nombre}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <a className="nav-link" href="#"
                                onClick={cargarReserva}
                            >Mis Reservas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" >Canchas</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}