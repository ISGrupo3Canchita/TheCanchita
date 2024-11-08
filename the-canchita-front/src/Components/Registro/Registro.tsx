import { useRef } from "react"
import { UserRegistro } from "../../Model/UserRegistro";
import { RegistroUsuario } from "../../api/Registro";
import { Link } from "react-router-dom";

export const Registro =()=>{

    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputTelefonoRef = useRef<HTMLInputElement>(null);
    const inputConstraseñaRef = useRef<HTMLInputElement>(null);


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
                        <button
                            type="button" 
                            className="btn btn-dark"
                            onClick={handlerBotonRegistro}
                        >
                            Registrarme
                        </button>
                    </form>
                    <p><Link className="link-opacity-50-hover" to='/'>No Man Ya Estoy Registrado</Link></p>
                </div>
            </section>
        </>
    )

}