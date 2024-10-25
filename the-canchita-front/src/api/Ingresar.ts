import axios, { AxiosResponse } from "axios";
import Axios from "./Axios";

const LOGIN_URL = 'http://localhost:8080/theCanchita/ingreso';

export const Ingresar= async(user:String,pwd:String) => {
    const response = await axios.post(LOGIN_URL, 
            JSON.stringify({username: user, password : pwd}),
                        {
                            headers: {'Content-Type' : 'application/json'},
                            withCredentials: true
                         });
    console.log(response)
}