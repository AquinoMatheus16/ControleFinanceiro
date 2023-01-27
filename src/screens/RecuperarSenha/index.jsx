import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import logo from "../../img/cadeado.png"
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputGeral } from '../../components/InputGeral';
import { ModalSuccessful } from '../../components/ModalSuccessful';
import { ModalFailed } from '../../components/ModalFailed';
import { Loading } from '../../components/Loading';
import { postRecover } from '../../services/usuario';

const schema = yup.object({
  envioEmail: yup.string().email("E-mail inválido").required("Informe o email")
});

export const RecuperarSenha = ({ navigation }) => {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalFailed, setMostrarModalFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const enviaToken = async (data) => {
    try {

      setIsLoading(true)
      await postRecover(data.envioEmail);
      setIsLoading(false)
      setMostrarModal(true);

      setTimeout(() => {
        navigation.navigate('AtualizarSenha');
        setMostrarModal(false);
      }, 2000);

    } catch (error) {
      // console.error('error: ', error);
      setIsLoading(false);
      setMostrarModalFailed(true);
      setTimeout(() => {
        setMostrarModalFailed(false);
      }, 2500);
    }
  }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.homeDashboardtopo}>
        <Image source={logo} style={styles.imagemLogo} />
      </View>

      <View style={styles.containerLogin}>

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
          <Text style={styles.enviar}>ENVIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AtualizarSenha')}>
          <Text style={styles.enviar}>ATUALIZAR</Text>
        </TouchableOpacity>

        <ModalSuccessful isVisible={mostrarModal} textoModal={'E-mail enviado com sucesso!'} />
        <ModalFailed isVisible={mostrarModalFailed} textoModal={'Esse e-mail não existe.'} />
        <Loading isLoading={isLoading} />

      </View>
    </View>
  );
};