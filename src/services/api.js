import axios from "axios";

export const api = axios.create({
    // baseURL: "http://192.168.0.168:8080"
    baseURL: "http://192.168.1.71:8080"
});