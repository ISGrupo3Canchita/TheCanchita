export const BarraNavegacion: React.FC<{ cambio: (lista: string) => void; nombre: string }> = ({ cambio, nombre }) => {
    const handlerCanchas = () => {
        cambio('Canchas');
    };
    const handlerReservas = () => {
        cambio('Reservas');
    };

    return (
        <div className="container-fluid text-center">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand active">{nombre}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handlerReservas}>
                                    Mis Reservas
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handlerCanchas}>
                                    Canchas
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
