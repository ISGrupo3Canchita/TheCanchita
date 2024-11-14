import React from "react"
import { Cancha } from "../../Model/Cancha"

type canchaProps = {
    cancha : Cancha
}

export const CanchasRow: React.FC<canchaProps>= ( { cancha } ) => {
    
    return (
        <>  
             <div className="col-sm-2" >
                <div className="container mt-2 text-center">
                    <div className="card" style={{width:250, backgroundColor:"#C7C7C7 "}}>
                        <img className="card-img-top" src="/Images/cancha.jpg" alt="Imagen De Cancha"></img>
                            <div className="card-body">
                                <h4>Nombre de la Cancha:</h4>
                                    <h6 className="card-text">{cancha.nombreCancha}</h6>
                            <div className="card-body">
                                <h3>Direccion:</h3>
                                    <h6 className="card-text">{cancha.direccion}</h6>
                            <div className="card-body">
                                <h4>Horario Apertura:</h4>
                                    <h6 className="card-text">{cancha.horarioInicio}</h6>
                            <div className="card-body">
                                <h4>Horario Cierre:</h4>
                                    <h6 className="card-text">{cancha.horarioFin}</h6> 
                            </div> 
                            </div> 
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
            <div/>
        </>
    )
       
}

