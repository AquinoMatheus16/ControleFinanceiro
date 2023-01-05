import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import logo from "..//../img/cadeado.png"
import { api } from '../../services/api';

export const RecuperarSenha = () => {

  const [envioEmail, setEnvioEmail] = useState("");

  const enviaToken = async () => {

    try {

      if (envioEmail === "" || envioEmail === null) {
        return (
          alert("Preencha os campos")
        )
      }

      await api.post(`/api/usuarios/recover/${envioEmail}`);
      alert("E-mail enviado com sucesso!");

    } catch (error) {
      alert("E-mail inválido");
    }

  }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        <View>
          <Image source={logo} style={styles.imagemLogo} />
        </View>

        <Text style={styles.titulo}>Esqueceu sua Senha?</Text>

        {/* <View style={styles.logoContainer}>
          <ImageBackground source={logo} style={styles.imagemLogo} />
        </View> */}

        <Text style={styles.tituloTexto}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SEU EMAIL'
          onChangeText={setEnvioEmail}
          value={envioEmail}
        />

        <TouchableOpacity
          onPress={() => enviaToken()}
        >
          <View style={styles.botaoEntrar}>
            <Text style={styles.entrar}>ENVIAR</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};