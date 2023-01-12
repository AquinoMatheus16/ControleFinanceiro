import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getDashBoard } from "../../services/dashboard";
import { styles } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { format } from "date-fns";

export const Periodo = () => {

    const [data, setData] = useState([]);
    const [dataInicial, setDataInicial] = useState(new Date());
    const [dataFinal, setDataFinal] = useState(new Date());

    const [datePickerInicial, setDatePickerInicial] = useState(false);
    const [datePickerFinal, setDatePickerFinal] = useState(false);

    const [dataFormatadaInicial, setDataFormatadaInicial] = useState('');
    const [dataFormatadaFinal, setDataFormatadaFinal] = useState('');

    function dataInicialSelect(event, value) {
        setDataInicial(value);
        const dataI = new Date(dataInicial)
        const formatDataInicial = format(dataI, "dd/MM/yyyy");
        setDataFormatadaInicial(formatDataInicial);
        setDatePickerInicial(false);
    };

    function dataFinalSelect(event, value) {
        setDataFinal(value);
        const dataF = new Date(dataFinal)
        const formatDataFinal = format(dataF, "dd/MM/yyyy");
        setDataFormatadaFinal(formatDataFinal);
        setDatePickerFinal(false);
    };

    const fetchTotal = async () => {
        const response = await getDashBoard(dataFormatadaInicial, dataFormatadaFinal);
        setData(response);
        console.log('response: ', response);
    };

    return (

        <View style={styles.containerMian}>

            <Text style={styles.textoTitulo}>Pesquisar por período</Text>

            <Text style={styles.textoNormal}>Período inicial</Text>
            {datePickerInicial && (
                <DateTimePicker
                    style={styles.datePicker}
                    testID="dateTimePicker"
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    value={dataInicial}
                    onChange={dataInicialSelect}
                />
            )}
            <View style={styles.containerDataInput}>
                <TouchableOpacity style={styles.touchableOpacity2} onPress={() => setDatePickerInicial(true)}>
                    <AntDesign style={styles.iconInput} name="calendar" size={24} color="#000000" />
                    <TextInput
                        style={styles.textInputDate}
                        placeholder={"Digite uma data de início"}
                        defaultValue={""}
                        value={dataFormatadaInicial}
                        dataDetectorTypes={"none"}
                        editable={false}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.textoNormal}>Período final</Text>
            {datePickerFinal && (
                <DateTimePicker
                    style={styles.datePicker}
                    testID="dateTimePicker"
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    value={dataFinal}
                    onChange={dataFinalSelect}
                />
            )}
            <View style={styles.containerDataInput}>
                <TouchableOpacity style={styles.touchableOpacity2} onPress={() => setDatePickerFinal(true)}>
                    <AntDesign style={styles.iconInput} name="calendar" size={24} color="#000000" />
                    <TextInput
                        style={styles.textInputDate}
                        placeholder={"Digite uma data final"}
                        defaultValue={""}
                        value={dataFormatadaFinal}
                        dataDetectorTypes={"none"}
                        editable={false}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={fetchTotal}>
                <View style={styles.containerTouchableOpacity}>
                    <Text style={styles.textoTouchableOpacity}>Pesquisar</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.containerMain}>

                <Text style={styles.textoTitulo}>{data?.saldo}</Text>
                <Text style={styles.textoTitulo}>{data?.totalApagar}</Text>
                <Text style={styles.textoTitulo}>{data?.totalAreceber}</Text>

                {/* {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                {item?.valor === null ? "" : <Text style={styles.texto}>Valor: {item?.valor}</Text>}

                {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimneto: {formatdataVencimento}</Text>} */}

            </View>

        </View>
    )
};