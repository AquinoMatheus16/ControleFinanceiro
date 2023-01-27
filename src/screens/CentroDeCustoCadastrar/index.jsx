import { useContext, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { postCentroDeCusto } from "../../services/centroDeCusto";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { ModalFailed } from "../../components/ModalFailed";
import { InputGeral } from "../../components/InputGeral";
import { Loading } from "../../components/Loading";

const schema = yup.object({
    descricao: yup.string().min(2, "A descrição deve ter pelo menos 2 digitos").required("Informe a descrição"),
    observacao: yup.string(),
});

export const CentroDeCustoCadastrar = () => {

    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalErro, setMostrarModalErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const post = async (data) => {
        try {

            const novoCentroDeCusto = {
                descricao: data.descricao,
                observacao: data.observacao
            }

            JSON.stringify(novoCentroDeCusto);

            setIsLoading(true);
            await postCentroDeCusto(novoCentroDeCusto);
            setIsLoading(false);

            setMostrarModal(true)

            setLoad(true)
            setTimeout(() => {
                navigation.goBack();
            }, 2000);

            setTimeout(() => {
                setLoad(false)
            }, 120);
            return;

        } catch (error) {
            // console.error(error);
            setIsLoading(false);
            setMostrarModalErro(true)
        };
    };

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.texto}>Descrição</Text>
                <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputGeral
                            placeholder={'Descrção'}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.descricao && <Text style={styles.textError}>{errors.descricao?.message}</Text>}

                <Text style={styles.texto}>Observação</Text>
                <Controller
                    control={control}
                    name="observacao"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputGeral
                            placeholder={'Observação'}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.observacao && <Text style={styles.textError}>{errors.observacao?.message}</Text>}

                <TouchableOpacity onPress={handleSubmit(post)} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

                <ModalSuccessful isVisible={mostrarModal} textoModal={"Centro De Custo cadastrado com suecsso!"} />
                <ModalFailed onPress={() => setMostrarModalErro(false)} isVisible={mostrarModalErro} textoModal={"Erro ao cadastrar Centro De Custo."} />
                <Loading isLoading={isLoading} />

            </View>
        </ScrollView>
    )
};