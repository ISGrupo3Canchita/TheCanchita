import { Reserva } from "./Reserva"

export type UsuarioTipo ={
    nombre:String,
    email:String,
    rol:String,
    token:String,
    telefono:String,
    cantidadReserva:String,
    codigoRespuesta:number,
    listadoReservaActivas:Reserva[],

}

