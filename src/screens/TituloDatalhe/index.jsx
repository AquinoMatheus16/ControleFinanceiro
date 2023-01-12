import { Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { format } from "date-fns";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { deleteTitulo, putDespagar } from "../../services/titulo";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const TitulosDetalhe = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

    const dataC = new Date(item?.dataCadastro)
    const formatdataCadastro = format(dataC, "dd/MM/yyyy");

    const dataV = new Date(item?.dataVencimento)
    const formatdataVencimento = format(dataV, "dd/MM/yyyy");

    const dataP = new Date(item?.dataPagamento)
    const formatdataPagamento = format(dataP, "dd/MM/yyyy");

    const confirmarDeletar = () => {
        Alert.alert(
            "Aviso",
            "Deseja mesmo deletar o título?",
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => onDelete() }
            ]
        );
    }

    const onDelete = async () => {
        try {

            deleteTitulo(item.id)

            Alert.alert(
                'Aviso',
                'Título deletado com sucesso.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
            setLoad(true)
            navigation.goBack();
            setTimeout(() => {
                setLoad(false)
            }, 120);

        } catch (e) {
            console.error(e);
            Alert.alert(
                'Aviso',
                'Não possível deletar o título.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
        }
    };

    const desmarcar = (item) => {
        try {
            putDespagar(item);
            alert("Desmarcado com sucesso!")
        } catch (error) {
            alert("Erro ao desmarcar!")
        }
    }

    const buttonMostrar = () => {

        if (item?.dataPagamento != null && item?.tipo === "APAGAR") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => desmarcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>DESMARCAR COMO PAGO</Text>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento != null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => desmarcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>DESMARCAR COMO RECEBIDO</Text>
                </TouchableOpacity>
            )

        }

    }

    const buttonMostrarPagar = () => {

        if (item?.dataPagamento != null && item?.tipo === "APAGAR") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => desmarcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>DESMARCAR COMO PAGO</Text>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento != null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => desmarcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>DESMARCAR COMO RECEBIDO</Text>
                </TouchableOpacity>
            )

        }

    }

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>
                <View style={styles.container}>

                    {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                    {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                    {item?.valor === null ? "" : <Text style={styles.texto}>Valor: {item?.valor}</Text>}

                    {item?.tipo === null ? "" : <Text style={styles.texto}>Tipo: {item?.tipo}</Text>}

                    {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimento: {formatdataVencimento}</Text>}

                    {item?.dataCadastro === null ? "" : <Text style={styles.texto}>Data cadastro: {formatdataCadastro}</Text>}

                    {item?.dataPagamento === null ? "" : <Text style={styles.texto}>Data pagamento: {formatdataPagamento}</Text>}

                    {item?.observacao === "" ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}
                    {/* <Text style={styles.texto}>Observação: {item?.observacao}</Text> */}

                    {buttonMostrar()}



                    <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => navigation.navigate("Titulos Atualizar", { item: item })}>
                        <Text style={styles.touchableOpacityAtualizarTexto}>ATUALIZAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityDeletar} onPress={() => confirmarDeletar()}>
                        <Text style={styles.touchableOpacityDeletarTexto}>DELETAR</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
};