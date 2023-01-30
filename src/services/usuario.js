import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

// GET
export const getUsuario = async () => {

    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/usuarios`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return data;
    } catch (e) {
        console.error(e);
    }
};

// GET
export const getToken = async (token) => {

    const getToken = await api.get(`/api/usuarios/token/${token}`);
    return getToken;
}

// GET ID
export const getUsuarioId = async (id) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/usuarios/${id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
    
        return data;
    } catch (e) {
        console.error(e);
    }
};

// POST
export const postUsuario = async (novoUsuario) => {

    const usuario = await api.post(`/api/usuarios`, novoUsuario)
    return usuario;
};

// POST RECOVER
export const postRecover = async (envioEmail) => {

    const emailRecover = await api.post(`/api/usuarios/recover/${envioEmail}`);
    return emailRecover;
}

// PUT SENHA
export const putSenha = async (token, senhaAtualizada) => {

    const putSenha = await api.put(`/api/usuarios/novaSenha/${token}`, senhaAtualizada, { headers: { "Accept": "application/json" } });
    return putSenha;
}

// PUT
export const putUsuario = async (usuario, novoUsuario) => {

    const token = await AsyncStorage.getItem("@app_token")
    const putUsuario = await api.put(`/api/usuarios/${usuario.id}`, novoUsuario, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
    return putUsuario;
};

// DELETE
// export const deleteUsuario = async (id) => {
//     try {
//         const token = await AsyncStorage.getItem("@app_token")
//         const deleteUsuario = await api.delete(`/api/usuarios/${id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

//         return deleteUsuario;
//     } catch (e) {
//         console.error(e);
//     }
// };