import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HacerReserva } from "../../api/Reserva/HacerReserva";
import { ReservaModel } from "../../Model";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

export const Reservar: React.FC = () => {
    const  navigate  = useNavigate();
    const { usuario } = useContext(UsuarioContexto);
    const { idCancha } = useParams<{ idCancha: string }>();
    const [inicioReserva, setInicioReserva] = useState<string>("");
    const [finReserva, setFinReserva] = useState<string>("");
    const [mensaje, setMensaje] = useState<string | null>(null);
    const handleReserva = async () => {
        try {
            const reserva: ReservaModel = {
                idCancha: idCancha!,
                idUsuario: usuario.id, 
                inicioReserva,
                finReserva,
                
            };

            console.log("ID Cancha ", idCancha);
            console.log("ID Usuario ", usuario);

            //Revisar esto pq aun no me convence tener que setter asi el mensaje, buscar alternativa para retornar la data en el HacerReserva
            setMensaje(await HacerReserva(reserva, usuario.token));


        } catch (error) {

            setMensaje("Hubo un error al realizar la reserva.");
            console.error(error);
        
        }
    };

    
    const handleBotonVolver = () =>{
        navigate('/canchita')
    }


    return (
        <div className="container">
            <h1>Reservar Cancha</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="inicioReserva">Inicio de la reserva:</label>
                    <input
                        type="time"
                        value={inicioReserva}
                        onChange={(e) => setInicioReserva(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="finReserva">Fin de la reserva:</label>
                    <input
                        type="time"
                        value={finReserva}
                        onChange={(e) => setFinReserva(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" onClick={handleReserva} className="btn btn-primary mt-3">
                    Confirmar Reserva
                </button>
            </form>
            
            <button type="button" onClick={handleBotonVolver} className="btn btn-primary mt-3"> Volver A mi Perfil</button>

            {mensaje && <p className="mt-3">{mensaje}</p>}
            
        </div>
            
            
    );

    
};
