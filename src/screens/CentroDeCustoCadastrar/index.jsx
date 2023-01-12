import { useContext } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { postCentroDeCusto } from "../../services/centroDeCusto";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    descricao: yup.string().min(2, "A descrição deve ter pelo menos 2 digitos").required("Informe a descrição"),
    observacao: yup.string(),
});

export const CentroDeCustoCadastrar = () => {

    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

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

            await postCentroDeCusto(novoCentroDeCusto);

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
            return;

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
                <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            placeholder="Descrção"
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
                        <TextInput
                            style={styles.textInput}
                            placeholder="Observação"
                            multiline
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

            </View>
        </ScrollView>
    )
};