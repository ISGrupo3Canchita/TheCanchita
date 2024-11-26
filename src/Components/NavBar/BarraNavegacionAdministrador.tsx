import { useContext } from "react";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

type navBarProps = { 
    cambio: (lista: string) => void, 
    nombre: string
}

export const BarraNavegacionAdministrador: React.FC<navBarProps> = ({ cambio, nombre }) => {
    const {setUsuario} = useContext(UsuarioContexto);
    const handlerCanchas = () => {
        cambio('crearCancha');
    };
    const handlerUsuarios = () => {
        cambio('listaUsuarios');
    };
    const handlerlogout = ()=>{
        setUsuario({id:'',nombre:'', rol:'', token:'',email:'',telefono:'',codigoRespuesta:0,cantidadReservas:0});
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light" style={{background:"#ffe0b3"}}>
                <div className="container ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_River_Plate.png" alt="RiverPlate" width="30" height="24"/>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerCanchas}>Crear Cancha</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerUsuarios}>Lista de Usuarios</button>
                                    </li>
                                </>

                        </ul>
                    </div>
                </div>
                <div className="container-fluid ">
                    <span className="navbar-text">{nombre}</span>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/5/56/Escudo_de_Racing_Club_%282014%29.svg" alt="RacingClub" width="30" height="24"/>
                    <button className="nav-link btn" onClick={handlerlogout}>Cerrar Sesion</button>
                    
                </div>
            </nav>
        </>
        
        
    );
};
