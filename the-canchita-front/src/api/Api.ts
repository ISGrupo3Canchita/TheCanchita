import axios from "axios";

const theCanchitaApi = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials:true,
});

const webHook = axios.create({
    baseURL:'https://webhook.site/f6baeef4-6b3e-4332-8f73-4d67bd5daf2e',
})

export {webHook,theCanchitaApi}