import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { putCentroDeCusto } from "../../services/centroDeCusto";
import { styles } from "./styles";

export const CentroDeCustoAtualizar = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const [descricao, setDescricao] = useState(item.descricao);
    const [observacao, setObservacao] = useState(item.observacao);

    const put = async () => {
        try {

            const novoCentroDeCusto = {
                descricao: descricao,
                observacao: observacao
            }

            JSON.stringify(novoCentroDeCusto);

            const formData = new FormData();

            formData.append('centrodecustos', {
                "string": JSON.stringify(novoCentroDeCusto),
                type: 'application/json',
                name: 'centrodecustos'
            })

            const { data } = putCentroDeCusto(item, novoCentroDeCusto);
            console.log("novoCentroDeCusto: ", novoCentroDeCusto);

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
            navigation.navigate("CentroDeCustoStake");

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

                <TouchableOpacity onPress={put} style={styles.touchableOpacity}>
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};