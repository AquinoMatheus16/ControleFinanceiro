import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { InputGeral } from "../../components/InputGeral";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { deleteUsuario, putUsuario } from "../../services/usuario";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalFailed } from "../../components/ModalFailed";
import { ModalConfirm } from "../../components/ModalConfirm";

export const ContaAtualizar = ({ route }) => {

    const { user } = route.params;
    const navigation = useNavigation();
    const { logoutContext, setLoad } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalDelete, setMostrarModalDelete] = useState(false);
    const [mostrarModalFalid, setMostrarModalFalid] = useState(false);
    const [mostrarModalConfirm, setMostrarModalConfirm] = useState(false);
    const [mostrarModalErro, setMostrarModalErro] = useState(false);

    const [nome, setNome] = useState(user?.nome);
    const [email, setEmail] = useState(user?.email);
    const [foto, setFoto] = useState(user?.foto);

    const [erroNome, setErroNome] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            saveToPhotos: true,
            didCancel: true,
        });

        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
    };

    const validarInput = () => {
        if (nome === '' && email === '') {

            setErroNome(true)
            setErroEmail(true);
            return;
        } else if (nome === '') {

            setErroNome(true);
            setErroEmail(false);
            return;
        } else if (email === '') {

            setErroNome(true);
            setErroEmail(false);
            return;
        } else {
            put();
        }
    };

    const put = async () => {
        try {

            const novoUsuario = {
                nome: nome,
                email: email,
                foto: foto,
            }

            setIsLoading(true);
            await putUsuario(user, novoUsuario);
            setIsLoading(false);

            setMostrarModal(true);
            setLoad(true);

            setTimeout(() => {
                navigation.navigate("ContaStake");
                setMostrarModal(false);
            }, 2000);

            setTimeout(() => {
                setLoad(false);
            }, 120);

        } catch (error) {
            setIsLoading(false);
            setMostrarModalFalid(true);
            setTimeout(() => {
                setMostrarModalFalid(false);
            }, 1500);
        };
    };

    const onDelete = async () => {
        try {
            setMostrarModalConfirm(false);

            setIsLoading(true);
            await deleteUsuario(user.id);
            setIsLoading(false);

            setMostrarModalDelete(true)
            setTimeout(() => {
                logoutContext();
            }, 2000);

        } catch (e) {
            // console.error(e);
            setIsLoading(false);
            setMostrarModalErro(true);
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>
                <Text style={styles.textoTitulo}>Editar conta</Text>

                <Text style={styles.texto}>Foto de usuário</Text>
                <TouchableOpacity onPress={pickImage}>
                    {foto ? <Image source={{ uri: foto }} style={styles.homeDashboard} /> : <EvilIcons name="user" size={170} style={styles.icon} color="#ffffff" />}
                </TouchableOpacity>

                <Text style={styles.texto}>Nome</Text>

                <InputGeral
                    placeholder={'Nome'}
                    onChangeText={setNome}
                    value={nome}
                    onFocus={() => setErroNome(false)}
                />
                {erroNome ? <Text style={styles.textError}>Informe o nome</Text> : ''}

                <Text style={styles.texto}>E-mail</Text>
                <InputGeral
                    placeholder={'E-mail'}
                    onChangeText={setEmail}
                    value={email}
                    onFocus={() => setErroEmail(false)}
                />
                {erroEmail ? <Text style={styles.textError}>Informe o e-mail</Text> : ''}

                <TouchableOpacity onPress={() => validarInput()}>
                    <Text style={styles.enviar}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMostrarModalConfirm(true)}>
                    <Text style={styles.enviar}>DELETAR CONTA</Text>
                </TouchableOpacity>

                <ModalConfirm
                    isVisible={mostrarModalConfirm}
                    onPressCancel={() => setMostrarModalConfirm(false)}
                    onPressConfirm={() => onDelete()}
                    textoModal={'Deseja mesmo deletar seu usuário? Você perderá o acesso a está conta!'}
                />

                <ModalSuccessful isVisible={mostrarModalDelete} textoModal={'Usuário deletado com sucesso.'} />
                <ModalFailed isVisible={mostrarModalErro} textoModal={'Não foi possível deletar o usuário.'} />
                <Loading isLoading={isLoading} />


                <ModalSuccessful isVisible={mostrarModal} textoModal={'Conta editada com sucesso!'} />
                <ModalFailed isVisible={mostrarModalFalid} textoModal={'Erro ao atualizar'} />
                <Loading isLoading={isLoading} />

            </View>
        </ScrollView>
    );
}