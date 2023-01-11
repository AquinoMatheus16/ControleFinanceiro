import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { format } from "date-fns";
import { ScrollView } from "react-native-gesture-handler";
import { putPagar } from "../../services/titulo";

export const TituloDetalheHome = ({ route }) => {

    const { item } = route.params;

    const dataC = new Date(item?.dataCadastro)
    const formatdataCadastro = format(dataC, "dd/MM/yyyy");

    const dataV = new Date(item?.dataVencimento)
    const formatdataVencimento = format(dataV, "dd/MM/yyyy");

    const dataP = new Date(item?.dataPagamento)
    const formatdataPagamento = format(dataP, "dd/MM/yyyy");

    // const pagar = () => {
    //     putPagar(item);
    // }

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>
                <View style={styles.container}>

                    {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                    {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                    {item?.valor === null ? "" : <Text style={styles.texto}>Valor: {item?.valor}</Text>}

                    {item?.tipo === null ? "" : <Text style={styles.texto}>Tipo: {item?.tipo}</Text>}

                    {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimneto: {formatdataVencimento}</Text>}

                    {item?.dataCadastro === null ? "" : <Text style={styles.texto}>Data cadastro: {formatdataCadastro}</Text>}

                    {item?.dataReferencia === null ? "" : <Text style={styles.texto}>Data referência: {formatdataVencimento}</Text>}

                    {item?.dataPagamento === null ? "" : <Text style={styles.texto}>Data pagamento: {formatdataPagamento}</Text>}

                    {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

                </View>
                <View>
                    {item?.tipo === "APAGAR" ?
                        <TouchableOpacity onPress={() => putPagar(item)} style={styles.touchableOpacityPagar}>
                            <Text style={styles.touchableOpacityPagarTexto}>MARCAR COMO PAGA</Text>
                        </TouchableOpacity> : ""}
                </View>
            </View>
        </ScrollView>
    )
};