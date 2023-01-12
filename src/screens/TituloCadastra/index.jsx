import { useContext, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from "react-native";
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

    function showDatePicker() {
        setDatePicker(true);
    };

    function dataVencimentoSelect(event, value) {
        const dataV = new Date(dataVencimento)
        const formatDataVencimento = format(dataV, "dd/MM/yyyy");
        setDataFormatada(formatDataVencimento);
        setDataVencimento(value);
        setDatePicker(false)
        setErroData(true)
    };

    const getCentroDeCustos = async () => {
        await getCentroDeCusto()
            .then((response) => {

                let newArray = response.map((item) => {
                    return { key: item.id, value: item.descricao }
                })
                setData(newArray)
                setCentroDeCustoSalvos(response)
                // console.log("centroDeCustoSalvos: ", centroDeCustoSalvos);
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const centroDeCustoId = () => {
        centroDeCustoSalvos.map(item => {
            if (item.descricao === selected) {
                setCentroDeCustoJson(item)
            }
        })
    }

    useEffect(() => {
        getCentroDeCustos()
    }, [])

    useEffect(() => {
        centroDeCustoId()
    }, [selected]);

    const validarData = () => {
        if (dataFormatada === '') {
            setErrorDataVencimento("Informe a data de vencimento")
            return;
        }
    };

    const post = async (data) => {
        try {
            // console.log("Data: ", data);

            const novoTitulo = {
                descricao: data.descricao,
                tipo: data.tipo,
                valor: parseInt(data.valor),
                dataVencimento: dataVencimento,
                centroDeCusto: centroDeCustoJson,
                observacao: data.observacao
            }
            // console.log("centroDeCustoJson 2: ", centroDeCustoJson);

            JSON.stringify(novoTitulo);

            centroDeCustoId();
            postTitulo(novoTitulo);
            console.log("Log do novoTitulo: ", novoTitulo);

            Alert.alert(
                'Aviso',
                'Título cadastrado com suecsso!',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );

            setLoad(true)
            navigation.goBack();
            setTimeout(() => {
                setLoad(false)
            }, 160);

        } catch (error) {
            console.error("Error error: ", error);
            Alert.alert(
                'Aviso',
                'Erro ao cadastrar.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            )
        };
    };

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.textoTituloSelect}>Tipo</Text>
                <Controller
                    control={control}
                    name="tipo"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <SelectList
                            style={styles.selectListTipo}
                            setSelected={(val) => setSelectedTipo(val)}
                            onSelect={() => onChange(selectedTipo)}
                            data={selectTipo}
                            save="value"
                            boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                            dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                            dropdownTextStyles={{ color: '#FFFFFF' }}
                            inputStyles={{ color: '#FFFFFF' }}
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            onSelect={() => onChange(selected)}
                            data={data}
                            save='value'
                            boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                            dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                            dropdownTextStyles={{ color: '#FFFFFF' }}
                            inputStyles={{ color: '#FFFFFF' }}
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
                        <TextInput
                            style={styles.textInput}
                            placeholder="Descrição"
                            onBlur={onBlur}
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
                        <TextInput
                            style={styles.textInput}
                            placeholder="Valor"
                            keyboardType="numeric"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
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
                        locale={'DE'}
                    />
                )}
                <View style={styles.containerDataInput}>
                    <TouchableOpacity style={styles.touchableOpacity2} onPress={() => showDatePicker()}>
                        <AntDesign style={styles.iconInput} name="calendar" size={24} color="#000000" />
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            placeholder="Observação"
                            multiline
                            numberOfLines={5}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.observacao && <Text style={styles.textError}>{errors.observacao?.message}</Text>}

                <TouchableOpacity onPress={handleSubmit(post)} onPressIn={() => validarData()} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView >
    )
};
