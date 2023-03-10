import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

// GET
export const getCentroDeCusto = async () => {

    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/centrodecustos`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return data;
    } catch (e) {
        console.error(e);
    }
};

// GET ID
export const getCentroDeCustoId = async (centroDeCusto) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/centrodecustos/${centroDeCusto.id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return data;
    } catch (e) {
        console.error(e);
    }
};

// POST
export const postCentroDeCusto = async (novoCentroDeCusto) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const centroDeCusto = await api.post(`/api/centrodecustos`, novoCentroDeCusto, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return centroDeCusto;
    } catch (e) {
        console.error(e);
    }
};

// PUT
export const putCentroDeCusto = async (centroDeCusto, novoCentroDeCusto) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const putTitulo = await api.put(`/api/centrodecustos/${centroDeCusto.id}`, novoCentroDeCusto, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return putTitulo;
    } catch (e) {
        console.error(e);
    }
};

// DELETE   
export const deleteCentroDeCusto = async (id) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const deletedCentroDeCusto = await api.delete(`/api/centrodecustos/${id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return deletedCentroDeCusto;
    } catch (e) {
        console.error(e);
    }
};