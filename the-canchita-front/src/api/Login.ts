import axios from "axios";

const LOGIN_URL = '/theCanchita/generateToken';

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