import { Text, View, TouchableOpacity } from "react-native";
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
    const [mostrarModalConfirmDesmarcar, setMostrarModalConfirmDesmarcar] = useState(false);
    const [mostrarModalMarcar, setMostrarModalMarcar] = useState(false);
    const [mostrarModalMarcarReceber, setMostrarModalMarcarReceber] = useState(false);
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
            setIsLoading(false);
        }
    };

    const marcar = async (item) => {
        try {
            setLoad(true);

            await putPagar(item);
            setMostrarModalMarcarReceber(true);

            setTimeout(() => {
                setLoad(false);
            }, 250);

            setTimeout(() => {
                setLoad(false);
                setMostrarModalMarcarReceber(false);
                navigation.goBack();
            }, 1500);
        } catch (error) {
            console.error(error);
        }

    }

    const desmarcar = async (item) => {
        try {
            await putDespagar(item);

            setMostrarModalMarcar(true);

            setLoad(true);

            setTimeout(() => {
                navigation.goBack();
                setMostrarModalMarcar(false);
            }, 1000);

            setTimeout(() => {
                setLoad(false);
            }, 250);


        } catch (error) {
            console.error(error);
        }
    }

    const buttonMostrar = () => {

        if (item?.dataPagamento != null && item?.tipo === "APAGAR") {
            return (
                <TouchableOpacity onPress={() => setMostrarModalConfirmDesmarcar(true)}>
                    <View style={styles.marcarPago}>
                        <View style={styles.marcador}></View>
                        <Text>PAGO</Text>
                    </View>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento != null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity onPress={() => setMostrarModalConfirmDesmarcar(true)}>
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
                    <Text style={styles.touchableOpacityAtualizarTexto}>PAGAR</Text>
                </TouchableOpacity>
            )

        } else if (item?.dataPagamento === null && item?.tipo === "ARECEBER") {
            return (
                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => marcar(item)}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>RECEBER</Text>
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

                <View style={styles.buttons}>
                    {buttonMostrarPagar()}

                    <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => navigation.navigate("Atualizar Título", { item: item })}>
                        <Text style={styles.touchableOpacityAtualizarTexto}>ATUALIZAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableOpacityDeletar} onPress={() => setMostrarModalConfirm(true)}>
                        <Text style={styles.touchableOpacityDeletarTexto}>DELETAR</Text>
                    </TouchableOpacity>
                </View>

                <ModalConfirm
                    isVisible={mostrarModalConfirm}
                    onPressCancel={() => setMostrarModalConfirm(false)}
                    onPressConfirm={() => onDelete()}
                    textoModal={'Deseja mesmo deletar o título?'}
                />

                <ModalConfirm
                    isVisible={mostrarModalConfirmDesmarcar}
                    onPressCancel={() => setMostrarModalConfirmDesmarcar(false)}
                    onPressConfirm={() => desmarcar(item)}
                    textoModal={item.tipo === "APAGAR" ? "Deseja desmarcar como pago?" : "Deseja desmarcar como recebido?"}
                />

                <ModalSuccessful
                    isVisible={mostrarModal}
                    textoModal={'Título deletado com sucesso.'}
                />

                <ModalSuccessful
                    isVisible={mostrarModalMarcar}
                    textoModal={'Título desmarcado com sucesso!'}
                />

                <ModalSuccessful
                    isVisible={mostrarModalMarcarReceber}
                    textoModal={'Título marcado com sucesso!'}
                />

                <Loading isLoading={isLoading} />

            </View>
        </View>
    )
};