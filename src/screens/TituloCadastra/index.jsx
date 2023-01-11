import { useContext, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import { styles } from "./styles";
import { SelectList } from 'react-native-dropdown-select-list';
import { postTitulo } from "../../services/titulo";
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/AuthContext';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    descricao: yup.string().min(2, "A descrição deve ter pelo menos 2 digitos").required("Informe a descrição"),
    observacao: yup.string(),
    valor: yup.string().required("Informe o valor"),
    dataVencimento: yup.string().required("Informe a data de vencimento"),
    tipo: yup.string().required("Informe o tipo"),
    centroDeCusto: yup.string().required("Informe o centro de custo")
});

export const TituloCadastra = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [descricao, setDescricao] = useState("");
    const [observacao, setObservacao] = useState("");
    const [valor, setValor] = useState("");
    const [dataVencimento, setDataVencimento] = useState(new Date());
    const [tipo, setTipo] = useState("");
    const [centroDeCusto, setCentroDeCusto] = useState([]);

    // const [descricaoError, setDescricaoError] = useState("");
    // const [observacaoError, setObservacaoError] = useState("");
    // const [valorError, setValorError] = useState("");
    // const [dataVencimentoError, setDataVencimentoError] = useState(new Date());
    // const [tipoError, setTipoError] = useState("");
    // const [centroDeCustoError, setCentroDeCustoError] = useState([]);

    const [data, setData] = useState([]);
    const [centroDeCustoSalvos, setCentroDeCustoSalvos] = useState([]);
    const [selected, setSelected] = useState("");
    const [centroDeCustoJson, setCentroDeCustoJson] = useState("");
    const [selectedTipo, setSelectedTipo] = useState([]);
    const [datePicker, setDatePicker] = useState(false);
    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);
    const [dataFormatada, setDataFormatada] = useState("");

    const selectTipo = [
        { key: '1', value: 'APAGAR' },
        { key: '2', value: 'ARECEBER' }
    ]

    function showDatePicker() {
        setDatePicker(true);
    };

    function dataVencimentoSelect(event, value) {
        const dataV = new Date(dataVencimento)
        const formatDataVencimento = format(dataV, "dd/MM/yyyy");
        setDataFormatada(formatDataVencimento);
        setDataVencimento(value);
        setDatePicker(false)
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
            if (item.descricao == centroDeCusto) {
                setCentroDeCustoJson(item)
            }
        })
        // console.log("centroDeCustoJson: ", centroDeCusto)
    }

    useEffect(() => {
        getCentroDeCustos()
        centroDeCustoId()
    }, [centroDeCusto]);

    const post = async (data) => {
        try {
            console.log("Data:: ", data);

            if (descricao === "" || tipo === "" || centroDeCusto === "" || valor === "" || dataVencimento === "") {
                alert("DDDDDDDDDDDDDDDD")
                return;
            };

            const novoTitulo = {
                descricao: descricao,
                tipo: tipo,
                valor: parseInt(valor),
                dataVencimento: dataVencimento,
                centroDeCusto: centroDeCustoJson,
                observacao: observacao
            }

            JSON.stringify(novoTitulo);

            centroDeCustoId();
            postTitulo(novoTitulo);
            console.log("Log do data: ", novoTitulo);

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

                {/* <Text style={styles.textoTituloSelect}>Tipo</Text>
                <SelectList
                    style={styles.selectListTipo}
                    setSelected={(val) => setSelectedTipo(val)}
                    data={selectTipo}
                    save="value"
                    onSelect={() => setTipo(selectedTipo)}
                    boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                    dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                    dropdownTextStyles={{ color: '#FFFFFF' }}
                    inputStyles={{ color: '#FFFFFF' }}
                    searchPlaceholder='Pesquisar'
                    placeholder='Tipo'
                />

                <Text style={styles.textoTituloSelect}>Centro de custo</Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save='value'
                    onSelect={() => setCentroDeCusto(selected)}
                    boxStyles={{ borderRadius: 10, width: 320, borderColor: '#FFFFFf', justifyContent: 'center' }}
                    dropdownStyles={{ borderRadius: 5, borderColor: '#FFFFFf', alignItems: 'center' }}
                    dropdownTextStyles={{ color: '#FFFFFF' }}
                    inputStyles={{ color: '#FFFFFF' }}
                    searchPlaceholder='Pesquisar'
                    placeholder='Centro de custo'
                />

                <Text style={styles.texto}>Descrção</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrção"
                    onChangeText={setDescricao}
                    value={descricao}
                />

                <Text style={styles.texto}>Valor</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Valor"
                    keyboardType="numeric"
                    onChangeText={setValor}
                    value={valor}
                />

                {datePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        value={dataVencimento}
                        onChange={dataVencimentoSelect}
                        style={styles.datePicker}
                    />
                )}
                <Text style={styles.texto}>Data de vencimento</Text>
                <View style={styles.containerDataInput}>
                    <AntDesign onPress={showDatePicker} style={styles.iconInput} name="calendar" size={24} color="black" />
                    <TextInput
                        style={styles.textInputDate}
                        placeholder="Data de vencimento"
                        onChangeText={setDataVencimento}
                        value={dataFormatada}
                    />
                </View>

                <Text style={styles.texto}>Observação</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Observação"
                    multiline
                    numberOfLines={5}
                    onChangeText={setObservacao}
                    value={observacao}
                /> */}

                <Text style={styles.textoTituloSelect}>Tipo</Text>
                <Controller
                    control={control}
                    name="tipo"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <SelectList
                            style={styles.selectListTipo}
                            setSelected={(val) => setSelectedTipo(val)}
                            data={selectTipo}
                            save="value"
                            onSelect={() => setTipo(selectedTipo)}
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
                            data={data}
                            save='value'
                            onSelect={() => setCentroDeCusto(selected)}
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

                <Text style={styles.texto}>Descrção</Text>
                <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            placeholder="Descrição"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
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
                        testID="dateTimePicker"
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        value={dataVencimento}
                        onChange={dataVencimentoSelect}
                        locale={'DE'}
                        style={styles.datePicker}
                    />
                )}
                <Controller
                    control={control}
                    name="dataVencimento"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.containerDataInput}>
                            <AntDesign onPress={() => showDatePicker()} style={styles.iconInput} name="calendar" size={24} color="black" />
                            <TextInput
                                style={styles.textInputDate}
                                onBlur={onBlur}
                                placeholder="Data de vencimento"
                                // onChangeText={setDataVencimento}
                                onChangeText={onChange}
                                // value={dataFormatada}
                                value={value}
                            />
                        </View>
                    )}
                />
                {errors.dataVencimento && <Text style={styles.textError}>{errors.dataVencimento?.message}</Text>}

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

                <TouchableOpacity onPress={handleSubmit(post)} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};
