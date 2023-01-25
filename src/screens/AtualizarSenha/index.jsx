import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import logo from "..//../img/cadeado.png"
import { async } from "q";
import { api } from "../../services/api";
import { MaterialIcons } from '@expo/vector-icons';

export const AtualizarSenha = ({ navigation }) => {

    // const { tok } = useParams();

    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [token, setToken] = useState('');
    const [desabilitar, setDesabilitar] = useState(false);

    const senhaAtualizada = {senha: senha}

    const handleSenha = async () => {
        try {
            if (senha != confirmaSenha) {
                alert("Senhas não são iguais");
                return;
            }

            await api.put(`/api/usuarios/novaSenha/${token}`, senhaAtualizada, { headers: { "Accept": "application/json" } })
            alert("Senha alterada com sucesso!")
            navigation.navigate('Login')
        } catch (error) {
            alert("errou")
        }
    }
    console.log(senha);
    const onblurToken = async () => {
        try {
            await api.get(`/api/usuarios/token/${token}`)
            alert("foi")
            setDesabilitar(true)
            // navigation.navigate('Login')
        } catch (error) {
            alert("Token inválido")
            setDesabilitar(false)
        }
    }


    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.homeDashboardtopo}>

                <Image source={logo} style={styles.imagemLogo} />

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
                <TextInput
                    style={styles.input}
                    placeholder='INSIRA SUA NOVA SENHA'
                    onChangeText={setSenha}
                    value={senha}
                    editable={desabilitar}
                />

                <Text style={styles.tituloTexto}>Confirma Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='INSIRA SUA SENHA NOVAMENTE'
                    onChangeText={setConfirmaSenha}
                    value={confirmaSenha}
                    secureTextEntry={true}
                    editable={desabilitar}
                />

                <View style={styles.butoes}>
                    <TouchableOpacity
                        onPress={() => handleSenha()}
                    >
                        <View>
                            <Text style={styles.atualizar}>ATUALIZAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
