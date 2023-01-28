import { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { getToken, putSenha } from "../../services/usuario";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Loading } from "../../components/Loading";
import { ModalFailed } from "../../components/ModalFailed";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { EvilIcons } from '@expo/vector-icons';

const schema = yup.object({
    senha: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a senha"),
    confirmaSenha: yup.string().oneOf([yup.ref("senha"), null], "Senhas e confirma senha não sao iguais").required("Informe o confirma senha")
});

export const AtualizarSenha = ({ navigation }) => {

    const [token, setToken] = useState('');
    const [desabilitar, setDesabilitar] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalFailed, setMostrarModalFailed] = useState(false);
    const [mostrarModalFailedToken, setMostrarModalFailedToken] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [borderBottomColor, setBorderBottomColor] = useState('#C4C4C4');

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSenha = async (data) => {
        try {

            const senhaAtualizada = { senha: data.senha }

            setIsLoading(true);
            await putSenha(token, senhaAtualizada);
            setIsLoading(false);

            setMostrarModal(true);

            setTimeout(() => {
                navigation.navigate('Login');
            }, 1600);

        } catch (error) {

            setIsLoading(false);
            setMostrarModalFailed(true);
            setTimeout(() => {
                setMostrarModalFailed(false);
            }, 2000);
        }
    }

    const onblurToken = async () => {
        try {
            setIsLoading(true);
            await getToken(token);
            setIsLoading(false);

            setDesabilitar(true);
            setBorderBottomColor('#101010');
            return;

        } catch (error) {
            setIsLoading(false);
            setDesabilitar(false);
            setBorderBottomColor('#C4C4C4');

            setMostrarModalFailedToken(true);
            setTimeout(() => {
                setMostrarModalFailedToken(false);
            }, 1000);
        }
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerPrincipal}>
                <View style={styles.homeDashboardtopo}>
                    <EvilIcons name="unlock" size={200} color="#FFFFFF" />
                </View>

                <View style={styles.containerLogin}>

                    <Text style={styles.titulo}>Atualizar senha</Text>
                    <Text style={styles.tituloTexto}>Digite o código enviado para seu email!</Text>
                    <View style={styles.viewInput}>
                        <MaterialIcons style={styles.icon} name="logout" size={20} color="#FFFFFF" onPress={onblurToken} />
                        <TextInput
                            style={styles.inputToken}
                            placeholder='Código'
                            onChangeText={setToken}
                            value={token}
                        />
                    </View>

                    <Text style={styles.tituloTexto}>Nova Senha</Text>
                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={[styles.textInput, { borderBottomColor }]}
                                placeholder='INSIRA SUA NOVA SENHA'
                                onChangeText={onChange}
                                value={value}
                                editable={desabilitar}
                            />
                        )}
                    />
                    {errors.senha && <Text style={styles.textError}>{errors.senha?.message}</Text>}

                    <Text style={styles.tituloTexto}>Confirma Senha</Text>
                    <Controller
                        control={control}
                        name="confirmaSenha"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={[styles.textInput, { borderBottomColor }]}
                                placeholder='INSIRA SUA SENHA NOVAMENTE'
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                                editable={desabilitar}
                            />
                        )}
                    />
                    {errors.confirmaSenha && <Text style={styles.textError}>{errors.confirmaSenha?.message}</Text>}

                    <TouchableOpacity disabled={!desabilitar} onPress={handleSubmit(handleSenha)} >
                        <Text style={styles.atualizar}>ATUALIZAR</Text>
                    </TouchableOpacity>
                </View>

                <ModalSuccessful isVisible={mostrarModal} textoModal={"Senha alterada com sucesso!"} />
                <ModalFailed isVisible={mostrarModalFailed} textoModal={"Erro ao atualizar senha!"} />
                <ModalFailed isVisible={mostrarModalFailedToken} textoModal={"Código inválido!"} />
                <Loading isLoading={isLoading} />

            </View>
        </ScrollView>
    );
};
