import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
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
            <Text style={styles.textoTitulo}>Centro De Custos</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Centro De Custo Cadastrar")} style={styles.touchableOpacity}>
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
                    renderItem={({ item }) => <CentroDeCustoCard item={item} />}
                />
            </View>
        </View>

    )
}