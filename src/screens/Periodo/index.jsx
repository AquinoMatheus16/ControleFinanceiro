import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getDashBoard } from "../../services/dashboard";
import { styles } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { format } from "date-fns";
import { TitulosCard } from "../../components/TitulosCard";

export const Periodo = () => {

    const [data, setData] = useState(false);
    const [apagar, setApagar] = useState([]);
    const [areceber, setAreceber] = useState([]);
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
        setApagar(response.titulosApagar);
        setAreceber(response.titulosAreceber);
    };
    console.log('response: ', data);

    useEffect(() => {
        fetchTotal();
    }, [data]);

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
            <View style={styles.stilo}>
                <TouchableOpacity onPress={fetchTotal} onPressIn={() => setData(true)}>
                    <View style={styles.containerTouchableOpacity}>
                        <Text style={styles.textoTouchableOpacity}>A pagar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={fetchTotal} onPressIn={() => setData(false)}>
                    <View style={styles.containerTouchableOpacity}>
                        <Text style={styles.textoTouchableOpacity}>A receber</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerCard}>
                <FlatList
                    data={data ? apagar : areceber}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    )
};