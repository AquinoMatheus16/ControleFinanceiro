import axios from "axios";

export const api = axios.create({
    //baseURL: "http://192.168.0.168:8080"
    // baseURL: "http://192.168.1.64:8080"
    baseURL: "https://helpless-side-production.up.railway.app"
});