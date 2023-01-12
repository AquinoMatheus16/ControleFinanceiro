import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { putTitulo } from "../../services/titulo";
import { styles } from "./styles";
import { AuthContext } from '../../contexts/AuthContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { AntDesign } from '@expo/vector-icons';

export const TitulosAtualizar = ({ route }) => {

    const { item } = route.params;
    const [descricao, setDescricao] = useState(item.descricao);
    const [observacao, setObservacao] = useState(item.observacao);
    const [valor, setValor] = useState('' + item.valor);
    const [dataVencimento, setDataVencimento] = useState(new Date(item.dataVencimento));
    const [tipo, setTipo] = useState('');

    const [centroDeCusto, setCentroDeCusto] = useState(item.centroDeCusto);
    const [data, setData] = useState([]);
    const [centroDeCustoSalvos, setCentroDeCustoSalvos] = useState([]);
    const [selected, setSelected] = useState('');
    const [centroDeCustoJson, setCentroDeCustoJson] = useState(item.centroDeCusto);
    const [selectedTipo, setSelectedTipo] = useState([]);
    const [datePicker, setDatePicker] = useState(false);
    const [dataFormatada, setDataFormatada] = useState(new Date());

    const [erroDescricaoBoolean, setErroDescricaoBoolean] = useState(false);
    const [erroValorBoolean, setErroValorBoolean] = useState(false);

    const navigation = useNavigation();
    const { setLoad } = useContext(AuthContext);

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
        setDatePicker(false);
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
    }

    const centroDeCustoId = () => {
        centroDeCustoSalvos.map(item => {
            if (item.descricao == centroDeCusto) {
                setCentroDeCustoJson(item)
            }
        })
    };

    useEffect(() => {
        const dataV = new Date(dataVencimento);
        const formatDataVencimento = format(dataV, "dd/MM/yyyy");
        setDataFormatada(formatDataVencimento);
    }, []);

    useEffect(() => {
        getCentroDeCustos();
        centroDeCustoId();
    }, [centroDeCusto]);

    const validarInput = () => {
        if (descricao === '' && valor === '') {

            setErroDescricaoBoolean(true)
            setErroValorBoolean(true)
            return;
        } else if (descricao === '') {

            setErroValorBoolean(false)
            setErroDescricaoBoolean(true)
            return;
        } else if (valor === '') {

            setErroDescricaoBoolean(false)
            setErroValorBoolean(true)
            return;
        } else {
            put();
        }
    };

    const put = async () => {
        try {

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
            await putTitulo(item, novoTitulo);
            console.log("novoTitulo: ", novoTitulo);

            Alert.alert(
                'Aviso',
                'Título atualizado com suecsso!',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
            setLoad(true)
            navigation.navigate("Titulos");
            setTimeout(() => {
                setLoad(false)
            }, 120);

        } catch (error) {
            console.error("Erro: " + error);
            Alert.alert(
                'Aviso',
                'Erro ao atualizar.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
        };
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>

                <Text style={styles.textoTituloSelect}>Tipo</Text>
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
                    defaultOption={{ key: item.tipo, value: item.tipo }}
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
                    defaultOption={{ key: item.id, value: item.centroDeCusto.descricao }}
                />

                <Text style={styles.texto}>Descrção</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Descrção"
                    onChangeText={setDescricao}
                    value={descricao}
                />
                {erroDescricaoBoolean ? <Text style={styles.textError}>Informe a descrição</Text> : ''}

                <Text style={styles.texto}>Valor</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Valor"
                    keyboardType="numeric"
                    onChangeText={setValor}
                    value={valor}
                />
                {erroValorBoolean ? <Text style={styles.textError}>Informe o valor</Text> : ''}

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
                    <TouchableOpacity style={styles.touchableOpacity2} onPress={() => showDatePicker()}>
                        <AntDesign style={styles.iconInput} name="calendar" size={24} color="#FFFFFF" />
                        <TextInput
                            style={styles.textInputDate}
                            placeholder="Data de vencimento"
                            onChangeText={setDataVencimento}
                            value={dataFormatada}
                            dataDetectorTypes={"none"}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.texto}>Observação</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Observação"
                    multiline
                    numberOfLines={5}
                    onChangeText={setObservacao}
                    value={observacao}
                />

                <TouchableOpacity onPress={() => validarInput()} style={styles.touchableOpacity}>
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};