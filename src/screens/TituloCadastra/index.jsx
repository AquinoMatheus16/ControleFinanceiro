import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { SelectList } from 'react-native-dropdown-select-list';
import { postTitulo } from "../../services/titulo";
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/AuthContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputGeral } from "../../components/InputGeral";
import { ModalSuccessful } from "../../components/ModalSuccessful";
import { ModalFailed } from "../../components/ModalFailed";
import { Loading } from "../../components/Loading";
import { TextInputMask } from 'react-native-masked-text'

const schema = yup.object({
    descricao: yup.string().min(2, "A descrição deve ter pelo menos 2 digitos").required("Informe a descrição"),
    observacao: yup.string(),
    valor: yup.string().required("Informe o valor"),
    tipo: yup.string().required("Informe o tipo"),
    centroDeCusto: yup.string().required("Informe o centro de custo")
});

export const TituloCadastra = () => {

    const [erroData, setErroData] = useState(false);
    const [dataVencimento, setDataVencimento] = useState(new Date());
    const [errorDataVencimento, setErrorDataVencimento] = useState('');

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalErro, setMostrarModalErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState([]);
    const [centroDeCustoSalvos, setCentroDeCustoSalvos] = useState([]);
    const [selected, setSelected] = useState('');
    const [selectedTipo, setSelectedTipo] = useState([]);
    const [centroDeCustoJson, setCentroDeCustoJson] = useState('');
    const [datePicker, setDatePicker] = useState(false);
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);
    const [dataFormatada, setDataFormatada] = useState('');

    const selectTipo = [
        { key: '1', value: 'APAGAR' },
        { key: '2', value: 'ARECEBER' }
    ]

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function dataVencimentoSelect(event, value) {
        setDatePicker(false);
        setDataVencimento(value);
        setErroData(true)
        const formatDataVencimento = format(new Date(value), "dd/MM/yyyy");
        setDataFormatada(formatDataVencimento);
    };

    const getCentroDeCustos = async () => {
        await getCentroDeCusto()
            .then((response) => {

                let newArray = response.map((item) => {
                    return { key: item.id, value: item.descricao }
                })
                setData(newArray)
                setCentroDeCustoSalvos(response)
            })
            .catch((e) => {
                console.log(e)
            })
    };

    const centroDeCustoId = () => {
        centroDeCustoSalvos.map(item => {
            if (item.descricao === selected) {
                setCentroDeCustoJson(item)
            }
        })
    };

    useEffect(() => {
        getCentroDeCustos()
    }, []);

    useEffect(() => {
        centroDeCustoId()
    }, [selected]);

    const validarData = () => {
        if (dataFormatada === '') {
            return setErrorDataVencimento("Informe a data de vencimento");
        }
    };

    const post = async (data) => {

        if (dataFormatada === '') {
            return setErrorDataVencimento("Informe a data de vencimento");
        }

        try {

            const novoTitulo = {
                descricao: data.descricao,
                tipo: data.tipo,
                valor: ""+data.valor.split('.').join('').replace(',', '.'),
                dataVencimento: dataVencimento,
                centroDeCusto: centroDeCustoJson,
                observacao: data.observacao
            }


            JSON.stringify(novoTitulo);

            centroDeCustoId();
            setIsLoading(true);
            await postTitulo(novoTitulo);
            setIsLoading(false);

            setMostrarModal(true)
            setLoad(true)

            setTimeout(() => {
                navigation.goBack();
            }, 2000);

            setTimeout(() => {
                setLoad(false)
            }, 160);

        } catch (error) {
            // console.error("Error: ", error);
            setIsLoading(false);
            mostrarModalErro(true);
        };
    };

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.textoTituloSelect}>Tipo</Text>
                <Controller
                    control={control}
                    name="tipo"
                    render={({ field: { onChange } }) => (
                        <SelectList
                            style={styles.selectListTipo}
                            setSelected={(val) => setSelectedTipo(val)}
                            onSelect={() => onChange(selectedTipo)}
                            data={selectTipo}
                            save="value"
                            boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                            dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                            dropdownTextStyles={{ color: '#353535' }}
                            inputStyles={{ color: '#353535' }}
                            searchPlaceholder='Pesquisar'
                            placeholder='Tipo'
                        />
                    )}
                />
                {errors.tipo && <Text style={styles.textError}>{errors.tipo?.message}</Text>}

                <Text style={styles.textoTituloSelect}>Centro de custo</Text>
                <Controller
                    control={control}
                    name="centroDeCusto"
                    render={({ field: { onChange } }) => (
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            onSelect={() => onChange(selected)}
                            data={data}
                            save='value'
                            boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                            dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                            dropdownTextStyles={{ color: '#353535' }}
                            inputStyles={{ color: '#353535' }}
                            notFoundText={'Não existem centros de custos'}
                            searchPlaceholder='Pesquisar'
                            placeholder='Centro de custo'
                        />
                    )}
                />
                {errors.centroDeCusto && <Text style={styles.textError}>{errors.centroDeCusto?.message}</Text>}

                <Text style={styles.texto}>Descrição</Text>
                <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputGeral
                            placeholder={"Descrição"}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.descricao && <Text style={styles.textError}>{errors.descricao?.message}</Text>}

                <Text style={styles.texto}>Valor</Text>
                <Controller
                    control={control}
                    name="valor"
                    render={({ field: { onChange, onBlur, value } }) => (

                        <TextInputMask
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: ''
                        }}
                        
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholder={"Valor"}
                    />
                    )}
                />
                {errors.valor && <Text style={styles.textError}>{errors.valor?.message}</Text>}

                <Text style={styles.texto}>Data de vencimento</Text>
                {datePicker && (
                    <DateTimePicker
                        style={styles.datePicker}
                        testID="dateTimePicker"
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        value={dataVencimento}
                        onChange={dataVencimentoSelect}
                    />
                )}
                <View style={styles.containerDataInput}>
                    <TouchableOpacity style={styles.touchableOpacity2} onPress={() => setDatePicker(true)}>
                        <AntDesign style={styles.iconInput} name="calendar" size={24} color="#ffffff" />
                        <TextInput
                            style={styles.textInputDate}
                            placeholder="Data vencimento"
                            defaultValue=""
                            value={dataFormatada}
                            dataDetectorTypes={"none"}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
                {erroData ? "" : <Text style={styles.textError}>{errorDataVencimento}</Text>}

                <Text style={styles.texto}>Observação</Text>
                <Controller
                    control={control}
                    name="observacao"
                    render={({ field: { onChange, value } }) => (
                        <InputGeral
                            placeholder={"Observação"}
                            multiline
                            numberOfLines={5}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.observacao && <Text style={styles.textError}>{errors.observacao?.message}</Text>}

                <TouchableOpacity onPress={handleSubmit(post)} onPressIn={() => validarData()} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

                <ModalSuccessful isVisible={mostrarModal} textoModal={"Título cadastrado com sucesso!"} />
                <ModalFailed onPress={() => setMostrarModalErro(false)} isVisible={mostrarModalErro} textoModal={"Erro ao cadastrar."} />
                <Loading isLoading={isLoading} />

            </View>
        </ScrollView >
    )
};
