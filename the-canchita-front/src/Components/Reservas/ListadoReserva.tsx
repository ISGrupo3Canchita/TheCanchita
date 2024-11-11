import { ReservaFila } from "./ReservaFila"
import { useContext, useEffect, useState } from "react"
import { ListaReservaTipo } from "../../Model/ListaReservaTipo"
import { UsuarioContexto } from "../../Context/UsuarioContexto"
import { listaReservas } from "../../api/ListaReservas"



export const ListadoReserva =()=>{
    const {usuario } = useContext(UsuarioContexto)

    const [reservas ,setReservas] = useState<ListaReservaTipo>([]);

    useEffect(()=>{
        const reservas = async () => {
            const listaReserva:ListaReservaTipo = await listaReservas(usuario.email, usuario.token);
            setReservas(listaReserva)
        };
        reservas();
    },[])

    return (
        <>
            <div className="container-fluid mt-1 text-center" >
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos.<br></br>Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <div className="row">
                        {
                            reservas.map((r)=>(
                                <ReservaFila key={r.id} reserva={r}   />
                            ))
                        }
                </div>
            </div>
        </>
    )
    
} 