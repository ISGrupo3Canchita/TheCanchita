import axios from "axios";

 const theCanchitaApi =  axios.create({
    baseURL: 'http://localhost:8080'
});

export {theCanchitaApi}



