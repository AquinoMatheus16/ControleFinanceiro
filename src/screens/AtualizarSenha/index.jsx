import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import logo from "..//../img/cadeado.png"

export const AtualizarSenha = () => {

    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');


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
                >
                    <View style={styles.botaoEntrar}>
                        <Text style={styles.entrar}>Atualizar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};
