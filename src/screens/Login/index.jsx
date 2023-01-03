import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import { styles } from './styles';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const { loginContext } = useContext(AuthContext);

  const handleLogin = () => {
    if (email != "" && senha != "") {
      loginContext(email, senha);
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

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

        <Text style={styles.tituloTexto}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SUA SENHA'
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
        />

        <TouchableOpacity 
        onPress={() => navigation.navigate('RecuperarSenha')}>
        <View>
          <Text style={styles.entrar}>esqueci minha senha</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => handleLogin()}>
        <View style={styles.botaoEntrar}>
          <Text style={styles.entrar}>ENTRAR</Text>
        </View>
        </TouchableOpacity>


      </View>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Cadastrar')}>
        <View>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};