import { useRef, useState } from "react"
import { UserRegistro } from "../Modelo/UserRegistro";
import { Ingresar } from "../api/Ingresar";
import { RegistroUsuario } from "../api/Registro";

const Registro =()=>{

    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputTelefonoRef = useRef<HTMLInputElement>(null);
    const inputConstraseñaRef = useRef<HTMLInputElement>(null);
    const inputConfirmarConstraseñaRef = useRef<HTMLInputElement>(null);


    const handlerBotonRegistro = ()=>{

        const userRegistro:UserRegistro = {
            nombreUsuario:inputNombreRef.current!.value,
            email:inputEmailRef.current!.value,
            TelefonoUsuario:inputTelefonoRef.current!.value,
            contraseñaUsuario:inputConstraseñaRef.current!.value,
        }
        const respuestaRegistro = RegistroUsuario(userRegistro)
        console.log(respuestaRegistro)
    }
    return(
        <>
            <section>
                <div className="container pt-5 my-5 text-center border">
                    <h2>Registrame en <br></br>The Canchita Club</h2>
                    <form >
                        <div className="mb-3 mt-3">
                            <label className="form-label">Nombre
                            <input
                                ref={inputNombreRef}
                                className="form-control" 
                                type="text" 
                                placeholder="Nombre" 
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Ingrese su Mail
                            <input
                                ref={inputEmailRef}
                                className="form-control" 
                                type="text" 
                                placeholder="alt+64"
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Telefono
                            <input
                                ref={inputTelefonoRef}
                                className="form-control"
                                type="String"
                                placeholder=" 2243 mmm mmm"
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Constraseña
                            <input
                            ref={inputConstraseñaRef}
                            className="form-control"
                            type="text"
                            placeholder="********" 
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Confirmar la Contraseña
                            <input
                                ref={inputConfirmarConstraseñaRef}
                                className="form-control"
                                type="text"
                                placeholder="Lo mismo que antes"
                            /></label>
                        </div>
                        <button
                            type="button" 
                            className="btn btn-dark"
                            onClick={handlerBotonRegistro}
                        >
                            Registrarme
                        </button>
                    </form>
                </div>
            </section>
            {/* <section>
                <div className="container mt-3">
                    <h2>Card Image</h2>
                    <p>Image at the top (card-img-top):</p>
                    <div className="card" >
                        <img className="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )

}

export default Registro