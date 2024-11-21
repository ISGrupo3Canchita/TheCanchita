import { useContext } from "react";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

type navBarProps = { 
    cambio: (lista: string) => void, 
    nombre: string,
}

export const BarraNavegacion: React.FC<navBarProps> = ({ cambio, nombre }) => {
    const {setUsuario} = useContext(UsuarioContexto);

    const handlerCanchas = () => {
        cambio('Canchas');
    };
    const handlerReservas = () => {
        cambio('Reservas');
    };

    const handlerlogout = ()=>{
        setUsuario({id:'',nombre:'', rol:'', token:'',email:'',telefono:'',codigoRespuesta:0});
    }

    return (
        <div className="container-fluid text-center">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand active">{nombre}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handlerReservas}>
                                    Mis Reservas
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handlerCanchas}>
                                    Canchas
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handlerlogout}>
                                    Cerrar Sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
