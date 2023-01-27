import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Loading } from "../../components/Loading";
import { ModalConfirm } from "../../components/ModalConfirm";
import { ModalFailed } from "../../components/ModalFailed";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCentroDeCusto } from "../../services/centroDeCusto";
import { styles } from "./styles";

export const CentroDeCustoDetalhe = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalErro, setMostrarModalErro] = useState(false);
    const [mostrarModalConfirm, setMostrarModalConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async () => {
        try {
            setMostrarModalConfirm(false)

            setIsLoading(true);
            await deleteCentroDeCusto(item.id);
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
            // console.error(e);
            setIsLoading(false);
            setMostrarModalErro(true);
        }
    };

    return (
        <View style={styles.containerMain}>
            <View style={styles.container}>

                {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => navigation.navigate("Atualizar Centro De Custo", { item: item })}>
                    <Text style={styles.touchableOpacityTexto}>ATUALIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacityDeletar} onPress={() => setMostrarModalConfirm(true)}>
                    <Text style={styles.touchableOpacityTexto}>DELETAR</Text>
                </TouchableOpacity>

                <ModalConfirm
                    isVisible={mostrarModalConfirm}
                    onPressCancel={() => setMostrarModalConfirm(false)}
                    onPressConfirm={() => onDelete()}
                    textoModal={'Deseja mesmo deletar o centro de custo? Excluir este centro de custo pode excluir os títulos ligados a ele!'}
                />

                <ModalSuccessful isVisible={mostrarModal} textoModal={'Centro de custo deletado com sucesso.'} />
                <ModalFailed isVisible={mostrarModalErro} textoModal={'Não foi possível deletar o centro de custo.'} />
                <Loading isLoading={isLoading} />

            </View>
        </View>
    )
}