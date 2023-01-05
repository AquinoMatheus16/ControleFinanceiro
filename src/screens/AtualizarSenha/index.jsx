import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import logo from "..//../img/cadeado.png"
import { async } from "q";

export const AtualizarSenha = () => {

    const { tok } = useParams();

    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const handleSenha = async () => {
        if(senha != confirmaSenha) {
            alert("Senhas não são iguais");
            return;
        }
        const token = await AsyncStorage.getItem("@app_token")
        await api.put(`/api/usuarios/${token}`, senha, { headers: { "Authorization": `${token}`, "Accept": "application/json" } });
    }


    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerLogin}>

                <View>
                    <Image source={logo} style={styles.imagemLogo} />
                </View>

                <Text style={styles.titulo}>Atualizar senha</Text>

                <Text style={styles.tituloTexto}>Nova Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='INSIRA SUA NOVA SENHA'
                    onChangeText={setSenha}
                    value={senha}
                />

                <Text style={styles.tituloTexto}>Confirma Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='INSIRA SUA SENHA NOVAMENTE'
                    onChangeText={setConfirmaSenha}
                    value={confirmaSenha}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                onPress={() => handleSenha()}
                >
                    <View style={styles.botaoEntrar}>
                        <Text style={styles.entrar}>Atualizar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};
