import React from "react"
import { useContext } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";


export const BarraNavegacion:React.FC = () => {

    const {usuario} = useContext(UsuarioContexto);
    return(
        <>
            <div className="container-fluid text-center">
                <h1>Bienvenido {usuario.nombre} </h1>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="javascript:void(0)">The Canchita</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Mis Reservas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Canchas</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}