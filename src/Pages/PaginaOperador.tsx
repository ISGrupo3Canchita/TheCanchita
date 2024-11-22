import { useContext, useEffect, useState } from "react";
import { BarraNavegacion, Canchas,ListadoReserva}  from "../Components";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { cancelaReserva, reservasPorEstado } from "../api";
import { Cancha } from "../Model/Cancha";
import { ReservaTipo } from "../Model/ReservaTipo";

export const PaginaOperador = () => {
    
    const {usuario} = useContext(UsuarioContexto)
    const [cualLista, setCualLista]= useState<String>('Reservas');
    // const [estado, setEstado] = useState<String>('Pendiente');
    const [reservas,setReservas] = useState<ReservaTipo[]>([]);
    const [canchas,setCanchas]=useState<Cancha[]>([]);
    
    const cambioLista =(nombre:string)=>{
        setCualLista(nombre)
    }
  
    const cancelar = async(idReserva:String)=>{
        await cancelaReserva(idReserva,'Cancelada',usuario.token);
        const listaReserva:ReservaTipo[] = await reservasPorEstado('Pendiente',usuario.token);
        setReservas(listaReserva);
    }
    
    const verReservas = async () => {
        const listaReserva:ReservaTipo[]= await reservasPorEstado('Pendiente',usuario.token);
        setReservas(listaReserva)
    }

    const confirmar = async(idReserva:String)=>{
        // setEstado('Reservada');
        await cancelaReserva(idReserva,'Reservada',usuario.token);
        const listaReserva:ReservaTipo[] = await reservasPorEstado('Pendiente',usuario.token);
        setReservas(listaReserva);
    }

    useEffect(()=>{
        verReservas();
    },[])

    return(
        <>
           <BarraNavegacion cambio={cambioLista}nombre={usuario.nombre} rol={usuario.rol}/>
            { cualLista === 'Reservas' ?  (
                <ListadoReserva key={usuario.id} reservas={reservas} cancelar={cancelar} confirmar={confirmar} rol={usuario.rol}/>
            ) : (
                <Canchas token={usuario.token}/>
            )}
        </>
    )
}