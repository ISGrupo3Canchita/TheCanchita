import { useContext } from "react";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

type navBarProps = { 
    cambio: (lista: string) => void, 
    nombre: string,
    rol: string,
}

export const BarraNavegacion: React.FC<navBarProps> = ({ cambio, nombre, rol }) => {
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
        <>
            <nav className="navbar navbar-expand-sm navbar-light" style={{background:"#ffe0b3"}}>
                <div className="container ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_River_Plate.png" alt="RiverPlate" width="30" height="24"/>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            {rol === 'Usuario' ? (
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerReservas}>Mis Reservas</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerCanchas}>Canchas</button>
                                    </li>
                                </>
                            ):(
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerReservas}>Lista Pendiente</button>
                                    </li>
                                </> 
                            )}
                        </ul>
                    </div>
                </div>
                <div className="container-fluid ">
                    <span className="navbar-text">{nombre}</span>
                    <button className="nav-link btn" onClick={handlerlogout}>Cerrar Sesion</button>
                </div>
            </nav>
        </>
        
        
    );
};
