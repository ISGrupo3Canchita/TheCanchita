import axios from "axios";

const theCanchitaApi = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials:true,
});

const webHook = axios.create({
    baseURL:'https://webhook.site/5c3a20ba-dcdc-4300-8000-3785579e42d9',
})

export {webHook,theCanchitaApi}