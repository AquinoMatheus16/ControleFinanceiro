import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { TitulosCard } from "../../components/TitulosCard";
import { getDashBoardTotal, getTitulo } from "../../services/titulo";
import { styles } from "../TitulosApagar/styles";

export const TitulosAreceber = () => {

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
                <Text style={styles.textoTotal}>Total a receber</Text>
                <Text style={styles.textoNumero}>R$: {total.totalAreceber}</Text>

                <Text style={styles.textoTitulo}>Títulos a receber</Text>

                <View style={styles.containerCard}>
                    <FlatList
                        data={titulos.filter((titulo) =>
                            titulo.tipo.endsWith("ARECEBER")
                        )}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TitulosCard item={item} />}
                    />
                </View>
            </View>
        </>
    )
}