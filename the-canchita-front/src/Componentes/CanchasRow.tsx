import { Cancha } from "../Modelo/Cancha"



export const CanchasRow = (cancha : Cancha) => {

    return (
        <>
            <tr>
                <td>{cancha.nombreCancha}</td>
                <td>{cancha.direccion}</td>
                <td>{cancha.horarioInicio}</td>
                <td>{cancha.horarioFin}</td>
                <td>{cancha.estado}</td>
            </tr>
        </>
    )

}