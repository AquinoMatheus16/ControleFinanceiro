import { Text, View, TouchableOpacity, TextInput, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';
import { getTitulo } from "../../services/titulo";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TitulosCard } from "../../components/TitulosCard";
import { AuthContext } from "../../contexts/AuthContext";

export const Titulos = () => {

    const [titulos, setTitulos] = useState([]);
    const [itemFiltrado, setItemFiltrado] = useState([]);
    const [busca, setBusca] = useState("");
    const navigation = useNavigation();

    const { load } = useContext(AuthContext);

    const fetchData = async () => {
        const tituloList = await getTitulo();
        setTitulos(tituloList);
        setItemFiltrado(tituloList);
    };

    useEffect(() => {
        setItemFiltrado(titulos)

    }, []);

    useEffect(() => {
        setTimeout(() => {
            fetchData();

        }, 150);

    }, [load]);

    useEffect(() => {
        const resultado = titulos.filter((titulo) =>
            titulo.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setItemFiltrado(resultado)

    }, [busca]);

    return (

        <View style={styles.containerMain}>
            <Text style={styles.textoTitulo}>Títulos</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Titulos Cadastra")} style={styles.touchableOpacity}>
                <Text style={styles.touchableOpacityTexto}>Cadastar</Text>
            </TouchableOpacity>

            <Text style={styles.textoTituloInput}>Pequisar</Text>

            <View style={styles.containerInput}>
                <EvilIcons name="search" size={24} color="#FFFFFF" />
                <TextInput
                    style={styles.textInput} placeholder="Pequisar"
                    value={busca}
                    onChangeText={e => setBusca(e)}
                />
            </View>

            <View style={styles.containerFlatList}>
                <FlatList
                    data={itemFiltrado}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />
            </View>
        </View>

    )
};