import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { TitulosCard } from "../../components/TitulosCard";
import { useEffect, useState } from "react";
import { getDashBoardTotal, getTitulo } from "../../services/titulo";

export const TitulosApagar = () => {

    const [titulos, setTitulos] = useState([]);
    const [total, setTotal] = useState("");

    const fetchData = async () => {

        const tituloList = await getTitulo();
        setTitulos(tituloList);

    };

    const fetchTotal = async () => {

        const total = await getDashBoardTotal();
        setTotal(total);

    };

    useEffect(() => {
        fetchData();
        fetchTotal();
    }, []);

    return (
        <>
            <View style={styles.containerMian}>
                <Text style={styles.textoTotal}>Total a pagar</Text>
                <Text style={styles.textoNumero}>R$: {total.totalApagar}</Text>

                <Text style={styles.textoTitulo}>Títulos a pagar</Text>

                <View style={styles.containerCard}>
                    <FlatList
                        data={titulos.filter((titulo) =>
                            titulo.tipo.endsWith("APAGAR")
                        )}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TitulosCard item={item} />}
                    />
                </View>
            </View>
        </>
    )
};