import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import logo from "../../img/cadeado.png"
import { api } from '../../services/api';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputGeral } from '../../components/InputGeral';
import { ModalSuccessful } from '../../components/ModalSuccessful';

const schema = yup.object({
  envioEmail: yup.string().email("E-mail inválido").required("Informe o email")
});

export const RecuperarSenha = ({navigation}) => {

  const [mostrarModal, setMostrarModal] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const enviaToken = async (data) => {
    try {

      await api.post(`/api/usuarios/recover/${data.envioEmail}`);
      setMostrarModal(true);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);

    } catch (error) {
      // console.error(error);
      console.error("Ops, algo deu errado");
    }
  }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        <Image source={logo} style={styles.imagemLogo} />

        <Text style={styles.titulo}>Esqueceu sua Senha?</Text>

        <Text style={styles.tituloTexto}>E-mail</Text>
        <Controller
          control={control}
          name="envioEmail"
          render={({ field: { onChange, value } }) => (
            <InputGeral
              placeholder='INSIRA SEU EMAIL'
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.envioEmail && <Text style={styles.textError}>{errors.envioEmail?.message}</Text>}

        <TouchableOpacity onPress={handleSubmit(enviaToken)}>
          <Text style={styles.entrar}>ENVIAR</Text>
        </TouchableOpacity>

        <ModalSuccessful isVisible={mostrarModal} textoModal={'E-mail enviado com sucesso!'} />

      </View>
    </View>
  );
};