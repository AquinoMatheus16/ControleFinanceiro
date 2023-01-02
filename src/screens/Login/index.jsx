import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        {/* <View style={styles.logoContainer}>
          <ImageBackground source={logo} style={styles.imagemLogo} />
        </View> */}

        <Text style={styles.tituloTexto}>E-main</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SEU LOGIN'
          onChangeText={setUsername}
          value={username}
        />

        <Text style={styles.tituloTexto}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SUA SENHA'
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <Text>esqueci minha senha</Text>

        <View style={styles.botaoEntrar}>
          <Text style={styles.entrar}>ENTRAR</Text>
        </View>

      </View>
    </View>
  );
};