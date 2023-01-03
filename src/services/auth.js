import { api } from "./api"

export const login = async (email, senha) => {
   
    return await api.post("/api/auth", { email: email, senha: senha })
}