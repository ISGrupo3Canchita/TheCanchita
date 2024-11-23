import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HacerReserva } from "../../api/Reserva/HacerReserva";
import { ReservaModel } from "../../Model";
import { UsuarioContexto } from "../../Context/UsuarioContexto";
import { BarraNavegacion } from "../NavBar/BarraNavegacion";

export const Reservar: React.FC = () => {
    const  navigate  = useNavigate();
    const { usuario } = useContext(UsuarioContexto);
    const { idCancha } = useParams<{ idCancha: string }>();
    const [inicioReserva, setInicioReserva] = useState<string>("");
    const [finReserva, setFinReserva] = useState<string>("");
    const [mensaje, setMensaje] = useState<string | null>(null);
    const [gif, setGif] = useState<string>("");

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
            //setMensaje(await HacerReserva(reserva, usuario.token));
            const respuesta = await HacerReserva(reserva, usuario.token); setMensaje(mensaje);
            
            setMensaje(respuesta)

            setGif(respuesta === "Reserva Guardada" ? "/gifs/bananeroAprobado.gif" : "/gifs/bananeroError.gif")


        } catch (error) {

            setMensaje("Hubo un error al realizar la reserva.");
            console.error(error);
        
        }
    };

    
    const handleBotonVolver = () =>{
        navigate('/canchita')
    }

    

    return (
        <>
        <BarraNavegacion key={usuario.id} cambio={handleBotonVolver} nombre={usuario.nombre} rol={usuario.rol} />
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
            

            {mensaje && <p className="mt-3">{mensaje}</p>}
            
            {gif && <img src={gif} />} 

        </div>
            
        </>    
    );

    
};
