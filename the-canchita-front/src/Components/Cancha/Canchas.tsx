import { useEffect, useState } from "react";
import { CanchasHabilitadas } from "../../api/CanchasHabilitadas";
import { CanchasRow } from "./CanchasRow";
import { Cancha } from "../../Model/Cancha";

export const Canchas = () => {
    const [canchas, setCanchas] = useState<Cancha[]>([]);

    useEffect(() => {
        const fetchCanchas = async () => {
            try {
                const canchas = await CanchasHabilitadas();
                setCanchas(canchas);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCanchas();
    }, []);

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre de Cancha</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Horario Inicio</th>
                    <th scope="col">Horario Fin</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {canchas.length > 0 ? (
                    canchas.map((cancha) => (
                        <CanchasRow {...cancha} />
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No hay canchas disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
