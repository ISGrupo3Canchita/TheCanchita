import { useRef, useEffect, useState } from "react"

export const Login = () => {

    const userRef = useRef;
    const errRef = useRef;

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []) 

    useEffect(() => {
        setErrMsg('');
        }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.peventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd(''); 
        setSucess(true);
    }



    return (

        <>
            {sucess ? (
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
                    ref={useRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password"
                    ref={useRef}
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

// segui a partir del minuto: 14:00 del video: https://www.youtube.com/watch?v=X3qyxo_UTR4
