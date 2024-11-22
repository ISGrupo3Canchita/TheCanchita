import { useRef } from "react"
import { UserRegistro } from "../../Model/UserRegistro";
import { Link } from "react-router-dom";
import { Registrar } from "../../api";


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
        const respuestaRegistro = Registrar(userRegistro)
        console.log(respuestaRegistro)
    }
    const handleKeyUp = (e : React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (inputNombreRef.current!.value && inputConstraseñaRef.current!.value && inputEmailRef.current!.value
                && inputTelefonoRef.current!.value) {
              handlerBotonRegistro();
            } else {
              alert("Por favor, complete los campos");
            }
          }
        };
    
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
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Ingrese su Mail
                            <input
                                ref={inputEmailRef}
                                className="form-control" 
                                type="text" 
                                placeholder="ejemplo@gmail.com"
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Telefono
                            <input
                                ref={inputTelefonoRef}
                                className="form-control"
                                type="tel"
                                placeholder=" 2243 mmm mmm"
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Constraseña
                            <input
                            ref={inputConstraseñaRef}
                            className="form-control"
                            type="password"
                            placeholder="********" 
                            onKeyUp={handleKeyUp}
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