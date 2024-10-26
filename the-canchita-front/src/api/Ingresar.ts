import axios from "axios";
import Api from "./Api";


const LOGIN_URL = Api.defaults.baseURL+'/theCanchita/ingreso';

export const Ingresar= async(user:String,pwd:String) => {
    console.log(LOGIN_URL )
    const response = await axios.post(LOGIN_URL, 
            JSON.stringify({username: user, password : pwd}),
                        {
                            headers: {'Content-Type' : 'application/json'},
                            withCredentials: true
                         });
    console.log(response)
}