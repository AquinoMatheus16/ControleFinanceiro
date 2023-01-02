import { api } from "./api";

export const login = async (email, senha) => {

    return await api.post("/api/login", { email: email, senha: senha })
}