import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { ConverterValor } from "../../common/ConverterValor";
import { TitulosCard } from "../../components/TitulosCard";
import { getDashBoardTotal } from "../../services/dashboard";
import { getTitulo } from "../../services/titulo";
import { styles } from "./styles";

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

    function filtrarPorNaoRecebimento(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) !== 'string') {
            return value?.tipo.endsWith("ARECEBER");
        }
    }

    return (
        <>
            <View style={styles.containerMian}>
                <View style={styles.homeDashboardtopo}>
                    <Text style={styles.textoTotal}>Total a receber</Text>
                    <Text style={styles.textoNumero}>R$: {<ConverterValor valor={""+(Math.floor(total.totalAreceber * 100).toFixed(0) / 100).toFixed(2)} />}</Text>

                    <Text style={styles.textoTitulo}>Títulos a receber</Text>
                </View>
                <View style={styles.containerCard}>
                    <FlatList
                        data={titulos.filter(filtrarPorNaoRecebimento)}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TitulosCard item={item} />}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </>
    )
}