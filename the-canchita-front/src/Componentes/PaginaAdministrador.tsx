import React, { useEffect, useState, useContext } from 'react';
import { UsuarioContexto } from '../Contexto/UsuarioContexto';
import axios from 'axios';

export const PaginaAdministrador = () => {
    const { usuario } = useContext(UsuarioContexto);
    const [view, setView] = useState('usuarios');
    const [usuarios, setUsuarios] = useState([]);
    const [canchas, setCanchas] = useState([]);

    useEffect(() => {
        view === 'usuarios'
            ? axios.get('/theCanchita/admin/usuarios')
                .then(response => setUsuarios(response.data))
                .catch(error => console.error(error))
            : axios.get('/theCanchita/admin/canchas')
                .then(response => setCanchas(response.data))
                .catch(error => console.error(error));
    }, [view]);

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => setView('usuarios')}>Usuarios</button>
                <button className="btn btn-secondary" onClick={() => setView('canchas')}>Canchas</button>
            </div>
            
            {view === 'usuarios' ? (
                <div>
                    <h2>Lista de Usuarios</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre de Usuario</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nombreUsuario}</td>
                                    <td>{usuario.rol}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <h2>Lista de Canchas</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre de Cancha</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {canchas.map((cancha) => (
                                <tr key={cancha.id}>
                                    <td>{cancha.nombreCancha}</td>
                                    <td>{cancha.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
