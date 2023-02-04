import { Text, View } from "react-native";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { ConverterValor } from "../../common/ConverterValor";
import { ConverterData } from "../../common/ConverterData";

export const TituloDetalheHome = ({ route }) => {

    const { item } = route.params;

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>
                <View style={styles.container}>

                    {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                    {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                    {item?.valor === null ? "" : <Text style={styles.texto}>Valor: <ConverterValor valor={(Math.floor("" + item?.valor * 100).toFixed(0) / 100).toFixed(2)} /></Text>}

                    {item?.tipo === null ? "" : <Text style={styles.texto}>Tipo: {item?.tipo === "APAGAR" ? "A pagar" : "A receber"}</Text>}

                    {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimneto: {ConverterData(item?.dataVencimento)}</Text>}

                    {item?.dataCadastro === null ? "" : <Text style={styles.texto}>Data cadastro: {ConverterData(item?.dataCadastro)}</Text>}

                    {item?.dataPagamento === null ? "" : <Text style={styles.texto}>Data pagamento: {ConverterData(item?.dataPagamento)}</Text>}

                    {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

                </View>
            </View>
        </ScrollView>
    )
};