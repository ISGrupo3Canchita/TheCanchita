import { useContext, useState } from "react";
import { BarraNavegacion } from "./BarraNavegacion";
import { ListadoReserva } from "./ListadoReserva";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";
import { Navigate } from "react-router-dom";
import { ReservaTipo } from "../Modelo/ReservaTipo";
import { ListaReservaTipo } from "../Modelo/ListaReservaTipo";


const reservas:ReservaTipo[] = [
    {canchaNombre:'Cancha1',horaFinal:10,horaInicio:9,idReserva:1},
    {canchaNombre:'Cancha2',horaFinal:11,horaInicio:10,idReserva:2},
    {canchaNombre:'Cancha3',horaFinal:12,horaInicio:12,idReserva:3},
]

export const PaginaUsuario= () =>{
    const {usuario} = useContext(UsuarioContexto)
    console.log(usuario.rol)

    const [listaReserva, setListaReserva]= useState<ListaReservaTipo>([]);

    const cargarMisReservas = ()=>{
        setListaReserva(reservas)
        console.log(listaReserva)
    }

    return(
        <>
            { usuario.rol ==='Adimnistrador' ? (
                <Navigate to={'../paginaAdministrador'}/>
            ):(
                <section>
                    <BarraNavegacion cargarReserva={cargarMisReservas}/>
                    <ListadoReserva reservas={listaReserva}/>
                </section>
            )
            }
        </>
    )
}