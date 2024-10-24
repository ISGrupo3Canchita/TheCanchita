import axios from "axios";

const LOGIN_URL = 'http://localhost:8080/theCanchita/generateToken';

export const Ingresar = async(user:String,pwd:String) => {

    const response = await axios.post(LOGIN_URL, 
            JSON.stringify({username: user, password : pwd}),
                        {
                            headers: {'Content-Type' : 'application/json'},
                            withCredentials: true
                         });

        const accessToken = response
        
    return accessToken;
}