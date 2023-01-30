import { Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CentroDeCustoCard } from "../../components/CentroDeCustoCard";
import { AuthContext } from "../../contexts/AuthContext";

export const CentroDeCusto = () => {

    const [centroDeCusto, setCentroDeCusto] = useState([]);
    const [itemFiltrado, setItemFiltrado] = useState([]);
    const [busca, setBusca] = useState("");
    const navigation = useNavigation();
    const { load } = useContext(AuthContext);

    const fetchData = async () => {
        const centroDeCustoList = await getCentroDeCusto();
        setCentroDeCusto(centroDeCustoList);
        setItemFiltrado(centroDeCustoList);
    };

    useEffect(() => {
        setItemFiltrado(centroDeCusto)

    }, [centroDeCusto]);

    useEffect(() => {
        setTimeout(() => {
            fetchData();

        }, 200);

    }, [load]);

    useEffect(() => {
        const resultado = centroDeCusto.filter((centroDeCusto) =>
            centroDeCusto.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setItemFiltrado(resultado)
    }, [busca]);

    return (

        <View style={styles.containerMain}>
            <View style={styles.containerTopo}>
                <Text style={styles.textoTitulo}>Centros De Custo</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Cadastrar Centro De Custo")} style={styles.touchableOpacity}>
                    <Text style={styles.touchableOpacityTexto}>Cadastar</Text>
                </TouchableOpacity>

                <KeyboardAvoidingView behavior="padding" style={styles.containerInput}>
                    <EvilIcons name="search" size={24} color="#FFFFFF" />
                    <TextInput
                        style={styles.textInput} placeholder="Pesquisar centro de custo"
                        value={busca}
                        onChangeText={e => setBusca(e)}
                    />
                </KeyboardAvoidingView>
            </View>

            <View style={styles.containerFlatList}>
                <FlatList
                    data={itemFiltrado}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CentroDeCustoCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    refreshing={true}
                />
            </View>
        </View>

    )
}