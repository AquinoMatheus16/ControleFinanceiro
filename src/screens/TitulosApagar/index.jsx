import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { TitulosCard } from "../../components/TitulosCard";
import { useEffect, useState } from "react";
import { getTitulo } from "../../services/titulo";
import { getDashBoardTotal } from "../../services/dashboard";
import { ConverterValor } from "../../common/ConverterValor";
import { Loading } from "../../components/Loading";

export const TitulosApagar = () => {

    const [titulos, setTitulos] = useState([]);
    const [total, setTotal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const tituloList = await getTitulo();
        setIsLoading(false);
        if (titulos?.filter(filtrarPorNaoPagamento).length === 0) {
            setMostrarMensagem(true);
        }
        setTitulos(tituloList);
    }

    const fetchTotal = async () => {
        const total = await getDashBoardTotal();
        setTotal(total);
    }

    useEffect(() => {
        fetchData();
        fetchTotal();
    }, []);

    function filtrarPorNaoPagamento(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) !== 'string') {
            return value?.tipo.endsWith("APAGAR");
        }
    }

    return (
        <>
            <View style={styles.containerMian}>
                <View style={styles.homeDashboardtopo}>
                    <Text style={styles.textoTotal}>Total a pagar</Text>
                    <Text style={styles.textoNumero}>R$: {<ConverterValor valor={"" + (Math.floor(total.totalApagar * 100).toFixed(0) / 100).toFixed(2)} />}</Text>

                    <Text style={styles.textoTitulo}>Títulos a pagar</Text>
                </View>
                {mostrarMensagem ? titulos?.filter(filtrarPorNaoPagamento).length === 0 ? <Text style={styles.texto}>Nenhum título a pagar cadastrado</Text> : '' : ''}
                <View style={styles.containerCard}>
                    <FlatList
                        data={titulos?.filter(filtrarPorNaoPagamento)}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TitulosCard item={item} />}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <Loading isLoading={isLoading} />
        </>
    );
}