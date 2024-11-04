import { useContext, useEffect, useState } from "react";
import { BarraNavegacionUsuario } from "../Components/NavBar/BarraNavegacion";
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { Navigate, Route } from "react-router-dom";
import { ReservaTipo } from "../Model/ReservaTipo";
import { ListaReservaTipo } from "../Model/ListaReservaTipo";

const canchas:ReservaTipo[] = [
    {canchaNombre:'Potrero 1',horaFinal:10,horaInicio:9,idReserva:1, estadoReserva:'habilitada'},
    {canchaNombre:'Potrero 2',horaFinal:11,horaInicio:10,idReserva:2, estadoReserva:'habilitada'},
    {canchaNombre:'Potrero 3',horaFinal:12,horaInicio:12,idReserva:3,estadoReserva:'habilitada'},
]

export const PaginaUsuario= () =>{
    const {usuario} = useContext(UsuarioContexto)

    // const [lista, setLista]= useState<ListaReservaTipo>([]);
    // useEffect(()=>{
    //     setLista(reservas);
    // },[])

    return(
        <>
            { usuario.rol ==='Adimnistrador' ? (
                <Navigate to={'../paginaAdministrador'}/>
            ):(
                usuario.rol==='Operador' ? (
                    <Navigate to={'../paginaOperador'}/>
                ):(
                <section>
                    <BarraNavegacionUsuario />
                    <ListadoReserva />
                </section>
            )
            )}
        </>
    )
}