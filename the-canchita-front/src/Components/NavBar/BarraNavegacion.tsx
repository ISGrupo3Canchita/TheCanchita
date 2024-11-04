import { useContext } from "react";
import { UsuarioContexto } from "../../Context/UsuarioContexto";



export const BarraNavegacionUsuario  = () => {

    const {usuario} = useContext(UsuarioContexto);

    // const handlerCanchas = ()=>{
    //     setLista('Canchas')
    // }
    // const handlerReservas = ()=>{
    //     setLista('Reservas')
    // }

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
                            <a className="nav-link" href=""
                                // onClick={handlerReservas}
                            >Mis Reservas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href=""
                                // onClick={handlerCanchas} 
                            >Canchas</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}