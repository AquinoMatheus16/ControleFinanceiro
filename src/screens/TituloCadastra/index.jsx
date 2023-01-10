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

export const TituloCadastra = () => {

    const [descricao, setDescricao] = useState("");
    const [observacao, setObservacao] = useState("");
    const [valor, setValor] = useState("");
    const [dataVencimento, setDataVencimento] = useState(new Date());
    const [tipo, setTipo] = useState("");
    const [centroDeCusto, setCentroDeCusto] = useState([]);
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

    const post = async () => {
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
            console.error(error);
            Alert.alert(
                'Aviso',
                'Erro ao cadastrar.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
            return;
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
                />

                <TouchableOpacity onPress={post} style={styles.touchableOpacity}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};
