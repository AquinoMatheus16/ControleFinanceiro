import { useContext, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { InputGeral } from '../../components/InputGeral';
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Loading } from '../../components/Loading';
import { Image } from 'react-native';
import carteira from '../../img/icon-logo.png';
import { ModalFailed } from '../../components/ModalFailed';
import { useNetInfo } from '@react-native-community/netinfo';

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o email"),
  senha: yup.string().required("Informe a senha"),
});

export const Login = ({ navigation }) => {

  const netInfo = useNetInfo();
  const [isLoading, setIsLoading] = useState(false);
  const [mostarModalFailed, setMostarModalFailed] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { loginContext } = useContext(AuthContext);

  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      await loginContext(data.email, data.senha);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);

        if(!netInfo.isConnected) {
          alert("Sem conexão com a internet");
          return;
        }

      setMostarModalFailed(true);
      setTimeout(() => {
        setMostarModalFailed(false);
      }, 1500);
    }
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>
        <Image source={carteira} style={styles.logoContainer} />
      </View>

      <View style={styles.containerMain}>

        <Text style={styles.tituloTextoEmail}>E-mail</Text>
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

        <Text style={styles.tituloTextoSenha}>Senha</Text>
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

        <TouchableOpacity
          onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.texto}>esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubmit(handleLogin)}>
          <Text style={styles.entrar}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.touchableOpacityCadastro} onPress={() => navigation.navigate('Cadastrar')}>
        <Text style={styles.cadastro}>Cadastre-se</Text>
      </TouchableOpacity>

      <Loading isLoading={isLoading} />
      <ModalFailed isVisible={mostarModalFailed} textoModal={'Usuário e/ou senha inválidos'} />
    </View>
  );
};