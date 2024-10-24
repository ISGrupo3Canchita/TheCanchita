import { useRef, useEffect, useState, useContext} from "react"
import UserContext from "../Context/UserProvider.tsx";
import axios from "../api/Axios.ts"

const LOGIN_URL = '/theCanchita/generateToken';

const Login = () => {

    const { setUser} = useContext(UserContext);

    const inputRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

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

    const handleSubmit = async (e:Event) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: userLogin, password : pwdLogin}),
                {
                headers: {'Content-Type' : 'application/json'},
                withCredentials: true
                });
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.token;
            const roles = response?.data?.roles;
            const name = response?.data?.name;

            const usuarioAuth={name:name,rol:roles,token:accessToken};
            setUser(usuarioAuth)

            setUserLogin('')
            setPwdLogin(''); 
            setSuccess(true);

        } catch(err) {
            if(!err?.response ) {
                setErrMsg('No responde el server')
            }else if(err.response?.status === 400){
                setErrMsg('El usuario o la contraseña no es la esperada');
            }else if(err.response?.status === 401){
                setErrMsg('El usuario no está autorizado')
            } else {
                setErrMsg('Falló al ingresar')
            }
            errRef.current!.focus();
        }
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
                <h1> Logueate </h1>
                <form onSubmit={handleSubmit} >
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
                    <button > Ingresar </button>
                </form>

            </section>   
        )}
        </>
    )


}

export default Login
