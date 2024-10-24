import { useRef, useEffect, useState, useContext} from "react"
import UserContext from "../Context/UserProvider.tsx";
import { Ingresar } from "../api/Ingresar.ts";

const Login = () => {

    const { setUser} = useContext(UserContext);

    const inputRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);
    const botonRef = useRef<HTMLButtonElement>(null)

    const [userLogin, setUserLogin] = useState('');
    const [pwdLogin, setPwdLogin] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        inputRef.current!.focus();
     }, []) 

    useEffect(() => {
        setErrMsg('');
        }, [userLogin, pwdLogin]);

    const handleIngreso = () => {
   
            const token = Ingresar(userLogin,pwdLogin);
            console.log(token);
            
            setSuccess(true)
    }

    return (
        <>
            {success ? (
                <section>

                    {
                    //TODO aca voy a la pagina inicio
                    }

                    <h1> estas logueado</h1>
                    <p>
                        <a href="#"> Volver </a>
                    </p>
                </section>
            ): (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
                </p>
                <h1> Ingresar</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input 
                        ref={inputRef}
                        type="text" 
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUserLogin(e.target.value)}
                        value={userLogin}
                        required
                    />
                    
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e) => setPwdLogin(e.target.value)}
                        value={pwdLogin}
                        required
                    />
                    <button ref={botonRef} onClick={handleIngreso} > Ingresar </button>
                </form>

            </section>   
        )}
        </>
    )


}

export default Login
