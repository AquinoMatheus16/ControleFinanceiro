import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { api } from './api';

// GET
export const getTitulo = async () => {

    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/titulos`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
        // console.log(data)

        return data;
    } catch (e) {
        console.error(`Blaa: ${e}`);
    }
};

// GET ID
export const getTituloId = async (titulo) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const { data } = await api.get(`/api/titulos/${titulo.id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
        // console.log(data)

        return data;
    } catch (e) {
        console.error(e);
    }
};

// POST
export const postTitulo = async (novoTitulo) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const titulo = await api.post(`/api/titulos`, novoTitulo, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return titulo;
    } catch (e) {
        console.error(e);
    }
};

// PUT
export const putTitulo = async (titulo, novoTitulo) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const putTitulo = await api.put(`/api/titulos/${titulo.id}`, novoTitulo, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return putTitulo;
    } catch (e) {
        console.error(e);
    }
};

// PUT
export const putPagar = async (titulo) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const putTitulo = await api.put(`/api/titulos/pagar/${titulo.id}`, titulo, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
        Alert.alert(
            'Aviso',
            'Título marcado com sucesso!',
            [
                {
                    text: "OK",
                    onPress: () => null
                }
            ]
        );
        return putTitulo;
    } catch (e) {
        Alert.alert(
            'Aviso',
            'Erro ao marcar título!',
            [
                {
                    text: "OK",
                    onPress: () => null
                }
            ]
        );
    }
};

// PUT
export const putDespagar = async (titulo) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const putTitulo = await api.put(`/api/titulos/despagar/${titulo.id}`, titulo, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })
        alert('Título desmarcado com sucesso!');
        return putTitulo;
    } catch (e) {
        Alert.alert(
            'Aviso',
            'Erro ao marcar título!',
            [
                {
                    text: "OK",
                    onPress: () => null
                }
            ]
        );
    }
};

// DELETE   
export const deleteTitulo = async (id) => {
    try {
        const token = await AsyncStorage.getItem("@app_token")
        const deletedTitulo = await api.delete(`/api/titulos/${id}`, { headers: { "Authorization": `${token}`, "Accept": "application/json" } })

        return deletedTitulo;
    } catch (e) {
        console.error(e);
    }
};