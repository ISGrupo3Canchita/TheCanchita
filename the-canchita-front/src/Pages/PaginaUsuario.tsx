import React, { useState, useEffect } from "react"
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { ReservaTipo } from "../Model/ReservaTipo";
import { Canchas } from "../Components";
import { ListaReservaTipo } from "../Model/ListaReservaTipo";
import { BarraNavegacionUsuario } from "../Components/NavBar/BarraNavegacionUsuario";
import { UsuarioTipo } from "../Model/UsuarioTipo";
import { listaReservas } from "../api/ListaReservas";

const canchas:ReservaTipo[] = [
    {canchaNombre:'Potrero 1',horaFinal:10,horaInicio:9,idReserva:1, estadoReserva:'habilitada'},
    {canchaNombre:'Potrero 2',horaFinal:11,horaInicio:10,idReserva:2, estadoReserva:'habilitada'},
    {canchaNombre:'Potrero 3',horaFinal:12,horaInicio:12,idReserva:3,estadoReserva:'habilitada'},
]
const reservas:ReservaTipo[] = [
    {canchaNombre:'Cancha 1',horaFinal:10,horaInicio:9,idReserva:1, estadoReserva:'Pendiente'},
    {canchaNombre:'Cancha 2',horaFinal:11,horaInicio:10,idReserva:2,estadoReserva:'Reservado'},
    {canchaNombre:'Cancha 3',horaFinal:12,horaInicio:12,idReserva:3, estadoReserva:'Pendiente'},
]

export const PaginaUsuario : React.FC<{usuario:UsuarioTipo}> = (usuario) =>{
    {console.log('Estoy en PAGINA-USUARIO')}
    const nombreUsuario = usuario.usuario.nombre

    const obtenerReservas = async()=>{
        const reservas = await listaReservas(usuario.usuario.id);
        console.log(reservas)
    }
    const [cualLista, setCualLista]=useState<String>('');

    const [listaReserva, setListaReservas]= useState<ListaReservaTipo>(reservas);

    const cambioCualLista =(nombre:String)=>{
        setCualLista(nombre)
    }
   
    useEffect(()=>{

    },[])

    return(
        <>
            <BarraNavegacionUsuario cambio={cambioCualLista} nombre={nombreUsuario} />
            { cualLista === 'Reservas' ? (
                <ListadoReserva reservas={listaReserva}/>
                
            ) : (
                <Canchas token={usuario.usuario.token}/>
            )}
        
        </>
    )
}