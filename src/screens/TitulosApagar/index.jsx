import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { TitulosCard } from "../../components/TitulosCard";
import { useEffect, useState } from "react";
import { getTitulo } from "../../services/titulo";
// import { useNavigation } from "@react-navigation/native";

export const TitulosApagar = () => {

    const [titulos, setTitulos] = useState([]);
    // const navigation = useNavigation();

    const fetchData = async () => {

        const tituloList = await getTitulo();
        setTitulos(tituloList);
        // setItemFiltrado(produtoList);

    };

    useEffect(() => {
        // navigation.addListener('focus', () => fetchData())
        fetchData();
    }, []);

    return (
        <View style={styles.containerMian}>
            <Text style={styles.textoTotal}>Total a pagar</Text>
            <Text style={styles.textoNumero}>1900.00</Text>

            <Text style={styles.textoTitulo}>Títulos a pagar</Text>

            <View style={styles.containerCard}>
                {/* <TitulosCard item={item} /> */}
                <FlatList
                    data={titulos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />
            </View>
        </View>
    )
};