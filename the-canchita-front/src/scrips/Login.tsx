import { useRef, useEffect, useState, useContext} from "react"
import AuthContext from "../context/AuthProvider";
import axios from "../api/Axios.js"

const LOGIN_URL = '/auth';

const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
     }, []) 

    useEffect(() => {
        setErrMsg('');
        }, [user, pwd]);

    const handleSubmit = async (e:Event) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, 
            JSON.stringify({user, pwd}),
            {
            headers: {'Content-Type' : 'application/json'},
            withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
             //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd(''); 
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
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button> Ingresar </button>
            </form>

        </section>   
        )}
        </>
    )


}

export default Login
