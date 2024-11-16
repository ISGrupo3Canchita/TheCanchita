import axios from "axios";

const apiCancha = axios.create({
    baseURL:window.location.protocol + "//" + window.location.host + '/api',
    withCredentials:true,
})

export {apiCancha}