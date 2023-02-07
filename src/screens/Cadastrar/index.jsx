import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { postUsuario } from '../../services/usuario';
import { InputGeral } from '../../components/InputGeral';
import { EvilIcons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalSuccessful } from '../../components/ModalSuccessful';
import { ModalFailed } from '../../components/ModalFailed';
import { Loading } from '../../components/Loading';

const schema = yup.object({
  nome: yup.string().min(3, "O nome deve ter pelo menos 3 digitos").required("Informe o nome"),
  email: yup.string().email("E-mail inválido").required("Informe o email"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a senha"),
  confirmaSenha: yup.string().oneOf([yup.ref("senha"), null], "Senhas e confirma senha não sao iguais").required("Informe o confirma senha")
});

export const Cadastrar = ({ navigation }) => {

  const [image, setImage] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalFailed, setMostrarModalFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
      setImage(result.assets[0].uri);
    }
  };

  const handleUsuario = async (data) => {
    try {
      const novoUsuario = {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        confirmaSenha: data.confirmaSenha,
        foto: image
      };

      setIsLoading(true);
      await postUsuario(novoUsuario);
      setIsLoading(false);

      setMostrarModal(true);

      setTimeout(() => {
        navigation.goBack();
      }, 2000);

    } catch (error) {
      console.error('error:', error);

      setIsLoading(false);
      setMostrarModalFailed(true);
      setTimeout(() => {
        setMostrarModalFailed(false);
      }, 2500);
    }
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.buttonArquivo}
            onPress={pickImage}
          >
            {image ? <Image source={{ uri: image }} style={styles.img} /> : <EvilIcons name="user" size={200} style={styles.icon} color="#ffffff" />}
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloTexto}>Nome</Text>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <InputGeral
              placeholder={'INSIRA SEU NOME'}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.nome && <Text style={styles.textError}>{errors.nome?.message}</Text>}

        <Text style={styles.tituloTexto}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputGeral
              placeholder={'INSIRA SEU EMAIL'}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.textError}>{errors.email?.message}</Text>}

        <Text style={styles.tituloTexto}>Senha</Text>
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <InputGeral
              placeholder={'INSIRA SUA SENHA'}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.senha && <Text style={styles.textError}>{errors.senha?.message}</Text>}

        <Text style={styles.tituloTexto}>Confirma Senha</Text>
        <Controller
          control={control}
          name="confirmaSenha"
          render={({ field: { onChange, value } }) => (
            <InputGeral
              placeholder={'CONFIRME SUA SENHA'}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.confirmaSenha && <Text style={styles.textError}>{errors.confirmaSenha?.message}</Text>}

        <TouchableOpacity onPress={handleSubmit(handleUsuario)}>
          <Text style={styles.entrar}>Cadastrar</Text>
        </TouchableOpacity>

        <ModalSuccessful isVisible={mostrarModal} textoModal={"Usuário cadastrado com sucesso!"} />
        <ModalFailed isVisible={mostrarModalFailed} textoModal={"Já existe um usuário com esse e-mail"} />
        <Loading isLoading={isLoading} />

      </View>
    </View>
  );
};