import { Text, View } from "react-native";
import { styles } from "./styles";
import { format } from "date-fns";

export const TitulosCard = ({ item }) => {

    const dataC = new Date(item?.dataCadastro)
    const formatdataCadastro = format(dataC, "dd/MM/yyyy");

    const dataR = new Date(item?.dataReferencia)
    const formatdataReferencia = format(dataR, "dd/MM/yyyy");

    const dataV = new Date(item?.dataVencimento)
    const formatdataVencimento = format(dataV, "dd/MM/yyyy");

    const dataP = new Date(item?.dataPagamento)
    const formatdataPagamento = format(dataP, "dd/MM/yyyy");

    return (
        <View style={styles.containerMain}>

            {item?.descricao === null ? "" : <Text style={styles.texto}>Descriçâo: {item?.descricao}</Text>}

            {item?.tipo === null ? "" : <Text style={styles.texto}>Tipo: {item?.tipo}</Text>}

            {item?.centrosDeCustos === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centrosDeCustos}</Text>}

            {item?.valor === null ? "" : <Text style={styles.texto}>Valor: {item?.valor}</Text>}

            {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimneto: {formatdataVencimento}</Text>}

            {item?.dataCadastro === null ? "" : <Text style={styles.texto}>Data cadastro: {formatdataCadastro}</Text>}

            {item?.dataReferencia === null ? "" : <Text style={styles.texto}>Data referência: {formatdataReferencia}</Text>}

            {item?.dataPagamento === null ? "" : <Text style={styles.texto}>Data pagamento: {formatdataPagamento}</Text>}

            {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

        </View>
    )
};