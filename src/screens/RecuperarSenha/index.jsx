import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import logo from "..//../img/cadeado.png"

export const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');

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
          onChangeText={setEmail}
          value={email}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('AtualizarSenha')}
        >
          <View style={styles.botaoEntrar}>
            <Text style={styles.entrar}>ENVIAR</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};