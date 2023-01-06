import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { postCentroDeCusto } from "../../services/centroDeCusto";

export const CentroDeCustoCadastrar = () => {

    const navigation = useNavigation();
    const [descricao, setDescricao] = useState("");
    const [observacao, setObservacao] = useState("");

    const post = async () => {
        try {

            const novoCentroDeCusto = {
                descricao: descricao,
                observacao: observacao
            }
            // console.log(novoCentroDeCusto);
            JSON.stringify(novoCentroDeCusto);

            const formData = new FormData();

            formData.append('centrodecustos', {
                "string": JSON.stringify(novoCentroDeCusto),
                type: 'application/json',
                name: 'centrodecustos'
            })

            const { data } = postCentroDeCusto(novoCentroDeCusto);
            console.log(data);

            Alert.alert(
                'Aviso',
                'Centro De Custo cadastrado com suecsso!',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
            navigation.goBack();

        } catch (error) {
            console.error(error);
            Alert.alert(
                'Aviso',
                'Erro ao cadastrar Centro De Custo.',
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

                <TouchableOpacity onPress={post} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};