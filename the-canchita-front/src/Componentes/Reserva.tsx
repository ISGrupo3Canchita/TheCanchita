export const Reserva = ()=>{
    return (
        <>
            <div className="container mt-3">
                <h2>Mis Reservas </h2>
                <p>Mis sueños son dos. Mi primer sueño es jugar en el Mundial, y el segundo es salir campeón de Octava"</p>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>Potrero</th>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}