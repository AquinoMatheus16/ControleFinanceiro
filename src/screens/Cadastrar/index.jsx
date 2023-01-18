import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { postUsuario } from '../../services/usuario';
import { InputGeral } from '../../components/InputGeral';

export const Cadastrar = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [image, setImage] = useState(null);
  const [listUsuarios, setListUsuarios] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUsuario = async () => {
    if (nome == "" || email == "" || senha == "" || confirmaSenha == "") {
      alert("Preencha todos os campos");
      return;
    }

    if (senha != confirmaSenha) {
      alert("Senhas não são iguais");
      return;
    }

    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha,
      foto: image
    };

    try {
      const { data } = await postUsuario(novoUsuario);
      console.log(data);
      setListUsuarios([...listUsuarios, data]);
      setTimeout(() => {
        alert("Usuário cadastrado com sucesso")
      }, 2000);
      navigation.goBack();
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        {/* <View style={styles.logoContainer}>
          <ImageBackground source={logo} style={styles.imagemLogo} />
        </View> */}


        {/* {image ? <Image source={{ uri: image }} style={styles.img} /> : <EvilIcons name="image" size={300} color="black" />} */}

        <View style={styles.container2}>

          <TouchableOpacity
            style={styles.buttonArquivo}
            onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.img} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloTexto}>Nome</Text>
        <InputGeral
          placeholder={'INSIRA SEU NOME'}
          onChangeText={setNome}
          value={nome}
        />

        <Text style={styles.tituloTexto}>E-mail</Text>
        <InputGeral
          placeholder={'INSIRA SEU EMAIL'}
          onChangeText={setEmail}
          value={email}
        />

        <Text style={styles.tituloTexto}>Senha</Text>
        <InputGeral
          placeholder={'INSIRA SUA SENHA'}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
        />
        <Text style={styles.tituloTexto}>Confirma Senha</Text>
        <InputGeral
          placeholder={'CONFIRME SUA SENHA'}
          onChangeText={setConfirmaSenha}
          value={confirmaSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => handleUsuario()}>
          <View style={styles.botaoEntrar}>
            <Text style={styles.entrar}>Cadastrar</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};