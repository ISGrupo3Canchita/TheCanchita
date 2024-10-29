import { Reserva } from "./Reserva"


export const ListadoReserva = ()=>{
    
    return (
        <>
            <div className="container mt-3">
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos. Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>Nombre Potrero</th>
                        <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                        <Reserva/>
                    </tbody>
                </table>
            </div>
        </>
    )
} 