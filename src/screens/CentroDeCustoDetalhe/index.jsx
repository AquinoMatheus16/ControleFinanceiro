import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCentroDeCusto } from "../../services/centroDeCusto";
import { styles } from "./styles";

export const CentroDeCustoDetalhe = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

    const confirmarDeletar = () => {
        Alert.alert(
            "Aviso",
            "Deseja mesmo deletar o centro de custo? Excluir este centro de custo pode excluir os títulos ligados a ele!",
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

            deleteCentroDeCusto(item.id)

            Alert.alert(
                'Aviso',
                'Centro de custo deletado com sucesso.',
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
                'Não possível deletar o centro de custo.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
        }
    };

    return (
        <View style={styles.containerMain}>
            <View style={styles.container}>

                {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                {item?.observacao === null ? "" : <Text style={styles.texto}>Observação: {item?.observacao}</Text>}

                <TouchableOpacity style={styles.touchableOpacityAtualizar} onPress={() => navigation.navigate("Centro De Custo Atualizar", { item: item })}>
                    <Text style={styles.touchableOpacityAtualizarTexto}>ATUALIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacityDeletar} onPress={() => confirmarDeletar()}>
                    <Text style={styles.touchableOpacityDeletarTexto}>DELETAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}