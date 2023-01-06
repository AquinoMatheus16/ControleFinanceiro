import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { login } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    let [load, setLoad] = useState(false);

    const loginContext = async (email, senha) => {
        const { data } = await login(email, senha)
        console.log(data)
        if (data.token && data.usuario) {
            setUser(data.usuario)
            api.defaults.headers['Authorization'] = `Bearer ${data.token}`

            await AsyncStorage.setItem("@app_user", JSON.stringify(data.usuario))
            await AsyncStorage.setItem("@app_token", data.token)
        }

    }

    const logoutContext = () => {
        setUser(null)
        AsyncStorage.clear();
    }

    useEffect(() => {
        const verificaStorage = async () => {
            const userStorage = await AsyncStorage.getItem("@app_user")
            const tokenStorage = await AsyncStorage.getItem("@app_token")

            if (userStorage != null && tokenStorage != null) {
                setUser(JSON.parse(userStorage))
                api.defaults.headers['Authorization'] = `Bearer ${tokenStorage}`
            }

            await new Promise(resolve => setTimeout(resolve, 2000))
            setLoading(false)
        }
        verificaStorage()
    }, [])

    return (
        <AuthContext.Provider value={{ logado: !!user, loginContext, logoutContext, loading: loading, load: load, setLoad: setLoad }}>
            {children}
        </AuthContext.Provider>
    )
};