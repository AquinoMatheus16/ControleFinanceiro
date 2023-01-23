import { Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { deleteTitulo, putDespagar, putPagar } from "../../services/titulo";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { ModalConfirm } from "../../components/ModalConfirm";
import { Loading } from "../../components/Loading";

export const TitulosDetalhe = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalConfirm, setMostrarModalConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dataC = new Date(item?.dataCadastro)
    const formatdataCadastro = format(dataC, "dd/MM/yyyy");

    const dataV = new Date(item?.dataVencimento)
    const formatdataVencimento = format(dataV, "dd/MM/yyyy");

    const dataP = new Date(item?.dataPagamento)
    const formatdataPagamento = format(dataP, "dd/MM/yyyy");

    const onDelete = async () => {
        try {

            setIsLoading(true);
            await deleteTitulo(item.id);
            setIsLoading(false);

            setMostrarModal(true)
            setLoad(true)

            setTimeout(() => {
                navigation.goBack();
            }, 2000);

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

    const marcar = (item) => {
        setLoad(true)
        putPagar(item)
        setTimeout(() => {
            setLoad(false)
        }, 250);
        setTimeout(() => {
            setLoad(false)
            navigation.goBack()
        }, 500);
    }

    const desmarcar = (item) => {
        setLoad(true)
        Alert.alert(
            "Aviso",
            item.tipo === "APAGAR" ? "Deseja desmarcar como pago?" : "Deseja desmarcar como recebido?",
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"

                },
                { text: "OK", onPress: () => putDespagar(item, setTimeout(() => { setLoad(false) }, 250), setTimeout(() => { navigation.goBack() }, 1000)) }
            ]
        );
    }

    const buttonMostrar = () => {

        if (item?.dataPagamento != null && item?.tipo === "APAGAR") {
            return (
                <TouchableOpacity onPress={() => desmarcar(item)}>
                    <View style={styles.marcarPago}>
                        <View style={styles.marcador}></View>
                        <Text>PAGO</Text>
                    </View>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento != null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity onPress={() => desmarcar(item)}>
                    <View style={styles.marcar}>
                        <View style={styles.marcador}></View>
                        <Text>RECEBIDO</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const buttonMostrarPagar = () => {

        if (item?.dataPagamento === null && item?.tipo === "APAGAR") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => marcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>MARCAR COMO PAGO</Text>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento === null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => marcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>MARCAR COMO RECEBIDO</Text>
                </TouchableOpacity>
            )
        }
    }

    return (

        <View style={styles.scrollView}>
            <View style={styles.container}>

                {buttonMostrar()}

                {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                {item?.valor === null ? "" : <Text style={styles.texto}>Valor: {item?.valor}</Text>}

                {item?.tipo === null ? "" : <Text style={styles.texto}>Tipo: {item?.tipo}</Text>}

                {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimento: {formatdataVencimento}</Text>}

                {item?.dataCadastro === null ? "" : <Text style={styles.texto}>Data cadastro: {formatdataCadastro}</Text>}

                {item?.dataPagamento === null ? "" : item?.tipo === "APAGAR" ? <Text style={styles.texto}>Data pagamento: {formatdataPagamento}</Text> : <Text style={styles.texto}>Data recebimento: {formatdataPagamento}</Text>}

                {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

                {buttonMostrarPagar()}

                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => navigation.navigate("Atualizar Título", { item: item })}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>ATUALIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacityDeletar} onPress={() => setMostrarModalConfirm(true)}>
                    <Text style={styles.touchableOpacityDeletarTexto}>DELETAR</Text>
                </TouchableOpacity>

                <ModalConfirm
                    isVisible={mostrarModalConfirm}
                    onPressCancel={() => setMostrarModalConfirm(false)}
                    onPressConfirm={() => onDelete()}
                    textoModal={'Deseja mesmo deletar o título?'}
                />

                <ModalSuccessful
                    isVisible={mostrarModal}
                    textoModal={'Título deletado com sucesso.'}
                />

                <Loading isLoading={isLoading} />

            </View>
        </View>
    )
};