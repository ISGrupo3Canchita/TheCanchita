import { useContext, useEffect, useState } from "react";
import { BarraNavegacion } from "../Components/NavBar/BarraNavegacion";
import { ListadoReserva } from "../Components/Reservas/Reservas";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { Navigate } from "react-router-dom";
import { ReservaTipo } from "../Model/ReservaTipo";
import { ListaReservaTipo } from "../Model/ListaReservaTipo";


const reservas:ReservaTipo[] = [
    {canchaNombre:'Cancha1',horaFinal:10,horaInicio:9,idReserva:1},
    {canchaNombre:'Cancha2',horaFinal:11,horaInicio:10,idReserva:2},
    {canchaNombre:'Cancha3',horaFinal:12,horaInicio:12,idReserva:3},
]

const canchas:ReservaTipo[] = [
    {canchaNombre:'Potrero 1',horaFinal:10,horaInicio:9,idReserva:1},
    {canchaNombre:'Potrero 2',horaFinal:11,horaInicio:10,idReserva:2},
    {canchaNombre:'Potrero 3',horaFinal:12,horaInicio:12,idReserva:3},
]

export const PaginaUsuario= () =>{
    const {usuario} = useContext(UsuarioContexto)

    const [lista, setLista]= useState<ListaReservaTipo>([]);



    useEffect(()=>{
        setLista(reservas);
    },[])

    return(
        <>
            { usuario.rol ==='Adimnistrador' ? (
                <Navigate to={'../paginaAdministrador'}/>
            ):(
                usuario.rol==='Operador' ? (
                    <Navigate to={'../paginaOperador'}/>
                ):(
                <section>
                    <BarraNavegacion />
                    <ListadoReserva reservas={lista}/>
                </section>
            )
            )}
        </>
    )
}