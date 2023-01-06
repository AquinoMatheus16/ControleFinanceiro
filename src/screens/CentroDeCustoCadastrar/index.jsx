import { useContext, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { postCentroDeCusto } from "../../services/centroDeCusto";
import { AuthContext } from "../../contexts/AuthContext";

export const CentroDeCustoCadastrar = () => {

    const navigation = useNavigation();
    const [descricao, setDescricao] = useState("");
    const [observacao, setObservacao] = useState("");
    const { setLoad } = useContext(AuthContext);

    const post = async () => {
        try {

            const novoCentroDeCusto = {
                descricao: descricao,
                observacao: observacao
            }

            JSON.stringify(novoCentroDeCusto);

            postCentroDeCusto(novoCentroDeCusto);

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
            setLoad(true)
            navigation.goBack();
            setTimeout(() => {
                setLoad(false)
            }, 120);

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