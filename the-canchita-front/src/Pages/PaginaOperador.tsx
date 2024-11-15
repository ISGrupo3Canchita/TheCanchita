import { useContext, useEffect, useState } from "react";
import { BarraNavegacion, Canchas,ReservaBase}  from "../Components";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { cancelaReserva, reservasPorEstado } from "../api";
import { Cancha } from "../Model/Cancha";
import { ReservaTipo } from "../Model/ReservaTipo";

export const PaginaOperador = () => {
    const token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdWF0cm9AbWFpbCIsImlhdCI6MTczMTY2ODM3MSwiZXhwIjoxNzMxNjcwMTcxfQ.fKh56cjpqDPVrehKk4DupTrnSfLT9nzZIr6x3QspUDU'
    const {usuario} = useContext(UsuarioContexto)
    const [cualLista, setCualLista]= useState<String>('Reservas');
    const [estado, setEstado] = useState<String>('Pendiente');
    const [reservas,setReservas] = useState<ReservaTipo[]>([]);
    const [canchas,setCanchas]=useState<Cancha[]>([]);
    
    const cambioLista =(nombre:String)=>{
        setCualLista(nombre)
    }
    const cancelar = async(idReserva:String)=>{
        const respuesta = await cancelaReserva(idReserva,estado,token);
        const listaReserva:ReservaTipo[] = await reservasPorEstado(estado,token);
        setReservas(listaReserva);
    }

    useEffect(()=>{
        const reservas = async () => {
            const listaReserva:ReservaTipo[]= await reservasPorEstado(estado,token);
            setReservas(listaReserva)
        };
        reservas();
    },[])

    return(
        <>
           <BarraNavegacion cambio={cambioLista}nombre={usuario.nombre}/>
            { cualLista === 'Reservas' ?  (
               <ReservaBase reservas={reservas} cancelar={cancelar}/>

            ) : (
                <Canchas token={usuario.token}/>
            )}
        </>
    )
}