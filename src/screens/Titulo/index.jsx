import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';
import { getTitulo } from "../../services/titulo";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TitulosCard } from "../../components/TitulosCard";

export const Titulos = () => {

    const [titulos, setTitulos] = useState([]);
    const [itemFiltrado, setItemFiltrado] = useState([]);
    const [busca, setBusca] = useState("");
    const navigate = useNavigation();

    const fetchData = async () => {
        const tituloList = await getTitulo();
        setTitulos(tituloList);
        setItemFiltrado(tituloList);
    };

    useEffect(() => {
        setItemFiltrado(titulos)

    }, [titulos]);

    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        const resultado = titulos.filter((titulo) =>
            titulo.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setItemFiltrado(resultado)
    }, [busca]);

    return (

        <View style={styles.containerMain}>
            <Text style={styles.textoTitulo}>Títulos</Text>

            <TouchableOpacity onPress={() => navigate.navigate("Titulos Cadastra")} style={styles.touchableOpacity}>
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
}