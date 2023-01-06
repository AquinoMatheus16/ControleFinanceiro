import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { putCentroDeCusto } from "../../services/centroDeCusto";
import { styles } from "./styles";

export const CentroDeCustoAtualizar = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const [descricao, setDescricao] = useState(item.descricao);
    const [observacao, setObservacao] = useState(item.observacao);
    const { setLoad } = useContext(AuthContext);

    const confirmarAtualizar = () =>
    Alert.alert(
        "Aviso",
        "Deseja mesmo atualizar o centro de custo?",
        [
            {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
            },
            { text: "OK", onPress: () => put() }
        ]
    );

    const put = async () => {
        try {

            const novoCentroDeCusto = {
                descricao: descricao,
                observacao: observacao
            }

            JSON.stringify(novoCentroDeCusto);

            putCentroDeCusto(item, novoCentroDeCusto);
            // console.log("novoCentroDeCusto: ", novoCentroDeCusto);

            Alert.alert(
                'Aviso',
                'Centro de custo atualizado com suecsso!',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );

            setLoad(true)
            navigation.navigate("CentroDeCustoStake");
            setTimeout(() => {
                setLoad(false)
            }, 150);

        } catch (error) {

            console.error("Erro: " + error);
            Alert.alert(
                'Aviso',
                'Erro ao atualizar centro de custo .',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
        };
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.texto}>Descrção</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrção"
                    onChangeText={setDescricao}
                    value={descricao}
                />

                <Text style={styles.texto}>Observação</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Observação"
                    multiline
                    numberOfLines={5}
                    onChangeText={setObservacao}
                    value={observacao}
                />

                <TouchableOpacity onPress={confirmarAtualizar} style={styles.touchableOpacity}>
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};