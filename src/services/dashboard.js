import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

// GET
export const getDashBoardTotal = async () => {

    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/dashboard/total`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return data;
    } catch (e) {
        // console.error(e);
    }
};

// GET
export const getDashBoard = async (inicial, final) => {

    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/dashboard?periodoInicial=${inicial}&periodoFinal=${final}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return data;
    } catch (e) {
        console.error(e);
    }
};

