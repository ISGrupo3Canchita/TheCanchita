import { useRef } from "react"
import { Ingresar } from "../api/Ingresar.ts";
import { Link } from "react-router-dom";
import { UsuarioContextoValue } from "../Contexto/UsuarioContextoValue.ts";
import { PaginaUsuario } from "./PaginaUsuario.tsx";



export const Login = (ctxUsuario:UsuarioContextoValue,) => {


    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputContraseñaRef = useRef<HTMLInputElement>(null);

    const handleIngreso = async() => {
       const usuarioRespuesta= await Ingresar(inputNombreRef.current!.value,inputContraseñaRef.current!.value);
       ctxUsuario.setUsuario(usuarioRespuesta)
    }

    




    
    return (
        <>
            {ctxUsuario.usuario.codigoRespuesta === 200 ? (
                    <section>
                        <PaginaUsuario/>
                    </section>
                ) : ( 
                    <section>
                        <div className="container pt-5 text-center">
                            <h2> Ingresar a The Canchita Club</h2>
                            <form>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Nombre de Usuario
                                    <input className="form-control" id="nombre"
                                        ref={inputNombreRef}
                                        type="text"
                                        placeholder="Tu Email"
                                        required
                                    /></label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" id="contraseña">Contraseña:
                                    <input className="form-control" id="contraseña"
                                        ref={inputContraseñaRef}
                                        type="text"
                                        placeholder="del 1 al 8"
                                        required
                                    /></label>
                                </div>
                                <button className="btn btn-success" 
                                        type="button"
                                        onClick={handleIngreso}> 
                                    Ingresar 
                                </button>
                                <p><Link className="link-opacity-50-hover" to='/registro'>Quiero Registrarme</Link></p>

                            </form>
                        </div>
                    </section>
                )
            }
        </>
    )
}
