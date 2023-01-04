import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { TitulosCard } from "../../components/TitulosCard";
import { useEffect, useState } from "react";
import { getTitulo } from "../../services/titulo";

export const TitulosApagar = () => {

    const [titulos, setTitulos] = useState([]);

    const fetchData = async () => {

        const tituloList = await getTitulo();
        setTitulos(tituloList);

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <View style={styles.containerMian}>
                <Text style={styles.textoTotal}>Total a pagar</Text>
                <Text style={styles.textoNumero}>00.00</Text>

                <Text style={styles.textoTitulo}>Títulos a pagar</Text>

                <View style={styles.containerCard}>
                    <FlatList
                        data={titulos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TitulosCard item={item} />}
                    />
                </View>
            </View>
        </>
    )
};