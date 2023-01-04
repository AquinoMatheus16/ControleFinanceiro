import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

// GET
// export const getUsuario = async () => {

//     try {
//         const token = await AsyncStorage.getItem("@app_token")
//         const { data } = await api.get(`/api/usuarios`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
//         // console.log(data)

//         return data;
//     } catch (e) {
//         console.error(`Blaa: ${e}`);
//     }
// };

// GET ID
// export const getUsuarioId = async (usuario) => {
//     try {
//         const token = await AsyncStorage.getItem("@app_token")
//         const { data } = await api.get(`/api/usuarios/${titulo.id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
//         // console.log(data)

//         return data;
//     } catch (e) {
//         console.error(e);
//     }
// };

// POST
export const postUsuario = async (novoUsuario) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const usuario = await api.post(`/api/usuarios`, novoUsuario, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
        return usuario;
    } catch (e) {
        console.error(e);
    }
};

// PUT
export const putUsuario = async (usuario) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const putUsuario = await api.put(`/api/usuarios/${usuario.id}`, usuario, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return putUsuario;
    } catch (e) {
        console.error(e);
    }
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