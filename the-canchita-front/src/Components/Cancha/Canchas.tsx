<<<<<<< HEAD:the-canchita-front/src/Componentes/Canchas.tsx
import { useEffect, useState } from "react";
import { CanchasHabilitadas } from "../api/CanchasHabilitadas";
import { CanchaFila } from "./CanchaFila";
import { Cancha } from "../Modelo/Cancha";
=======
import React, { useEffect, useState } from "react";
import { CanchasHabilitadas } from "../../api/CanchasHabilitadas";
import { CanchasRow } from "./CanchasRow";
import { Cancha } from "../../Model/Cancha";
>>>>>>> 820870fcbc6eabf2b2bcd08670046be742a993f3:the-canchita-front/src/Components/Cancha/Canchas.tsx

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
                        <CanchaFila {...cancha} />
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
