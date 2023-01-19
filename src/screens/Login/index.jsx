import { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { InputGeral } from '../../components/InputGeral';
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o email"),
  senha: yup.string().required("Informe a senha"),
});

export const Login = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { loginContext } = useContext(AuthContext);

  const handleLogin = async (data) => {
    try {
      await loginContext(data.email, data.senha)

    } catch (error) {
      console.error('Error: ', error);
    }

  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>

      </View>

      <View style={styles.containerMain}>
        {/* <View style={styles.containerLogin}> */}

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

        <TouchableOpacity
          onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.texto}>esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubmit(handleLogin)}>
          <Text style={styles.entrar}>ENTRAR</Text>
        </TouchableOpacity>

        {/* </View> */}

        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};