import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { InputGeral } from "../../components/InputGeral";
import { Loading } from "../../components/Loading";
import { ModalFailed } from "../../components/ModalFailed";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { AuthContext } from "../../contexts/AuthContext";
import { putCentroDeCusto } from "../../services/centroDeCusto";
import { styles } from "./styles";

export const CentroDeCustoAtualizar = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();
    const [descricao, setDescricao] = useState(item?.descricao);
    const [observacao, setObservacao] = useState(item?.observacao);
    const [erroDescricao, setErroDescricao] = useState(false);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalErro, setMostrarModalErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { setLoad } = useContext(AuthContext);

    const put = async () => {
        try {

            if (descricao === '') {
                setErroDescricao(true)
                return;
            };

            const novoCentroDeCusto = {
                descricao: descricao,
                observacao: observacao
            }

            JSON.stringify(novoCentroDeCusto);

            setIsLoading(true);
            await putCentroDeCusto(item, novoCentroDeCusto);
            setIsLoading(false);

            setMostrarModal(true);

            setLoad(true)
            setTimeout(() => {
                navigation.navigate("CentroDeCustoStake");
            }, 2000);

            setTimeout(() => {
                setLoad(false)
            }, 150);

        } catch (error) {

            console.error("Erro: " + error);
            setMostrarModalErro(true);
        };
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.texto}>Descrição</Text>
                <InputGeral
                    placeholder={"Descrção"}
                    onChangeText={setDescricao}
                    value={descricao}
                    onFocus={() => setErroDescricao(false)}
                />
                {erroDescricao ? <Text style={styles.textError}>Informe a descrição</Text> : ''}

                <Text style={styles.texto}>Observação</Text>
                <InputGeral
                    placeholder={"Observação"}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={setObservacao}
                    value={observacao}
                />

                <TouchableOpacity onPress={() => put()} style={styles.touchableOpacity}>
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>

                <ModalSuccessful isVisible={mostrarModal} textoModal={'Centro de custo atualizado com suecsso!'} />
                <ModalFailed onPress={() => setMostrarModalErro(false)} isVisible={mostrarModalErro} textoModal={"Erro ao atualizar centro de custo."} />
                <Loading isLoading={isLoading} />

            </View>
        </ScrollView>
    )
};