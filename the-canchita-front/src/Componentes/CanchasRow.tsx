import { Cancha } from "../Modelo/Cancha"

type canchaRowProps = {
    cancha : Cancha
}

export const CanchasRow : React.FC<canchaRowProps> = ( { cancha } ) => {

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