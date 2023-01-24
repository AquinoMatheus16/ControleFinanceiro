import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
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
    const [dash, setDash] = useState([]);

    const [dataFinal, setDataFinal] = useState(new Date());
    const [datePickerFinal, setDatePickerFinal] = useState(false);
    const [dataFormatadaFinal, setDataFormatadaFinal] = useState('');
    const [dataFinalApi, setDataFinalApi] = useState('');

    const [dataInicial, setDataInicial] = useState(new Date());
    const [datePickerInicial, setDatePickerInicial] = useState(false);
    const [dataFormatadaInicial, setDataFormatadaInicial] = useState('');
    const [dataInicialApi, setDataInicialApi] = useState('');

    function dataInicialSelect(event, value) {
        setDatePickerInicial(false);
        setDataInicial(value);
        const formatDataInicialMostrar = format(new Date(value), "dd/MM/yyyy");
        const formatDataInicialApi = format(new Date(value), "yyyy-MM-dd");
        setDataFormatadaInicial(formatDataInicialMostrar);
        setDataInicialApi(formatDataInicialApi);
    };

    function dataFinalSelect(event, value) {
        setDatePickerFinal(false);
        setDataFinal(value);
        const formatDataFinalMostrar = format(new Date(value), "dd/MM/yyyy");
        const formatDataFinalApi = format(new Date(value), "yyyy-MM-dd 23:59:59");
        setDataFormatadaFinal(formatDataFinalMostrar);
        setDataFinalApi(formatDataFinalApi);
    };

    const fetchTotal = async () => {
        const response = await getDashBoard(dataInicialApi, dataFinalApi);
        setApagar(response.titulosApagar);
        setAreceber(response.titulosAreceber);
        setDash(response)
    };

    useEffect(() => {
        fetchTotal();
    }, [data]);

    return (

        <View style={styles.containerMian}>

            <Text style={styles.textoTitulo}>Pesquisar por data de vencimento</Text>

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
                    <AntDesign style={styles.iconInput} name="calendar" size={24} color="#ffffff" />
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
                    <AntDesign style={styles.iconInput} name="calendar" size={24} color="#ffffff" />
                    <TextInput
                        style={styles.textInputDate}
                        placeholder={"Digite uma data final      "}
                        defaultValue={""}
                        value={dataFormatadaFinal}
                        dataDetectorTypes={"none"}
                        editable={false}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.stilo}>
                <TouchableOpacity onPress={() => fetchTotal()} onPressIn={() => setData(true)}>
                    <View style={styles.containerTouchableOpacity}>
                        <Text style={styles.textoTouchableOpacity}>A pagar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => fetchTotal()} onPressIn={() => setData(false)}>
                    <View style={styles.containerTouchableOpacity}>
                        <Text style={styles.textoTouchableOpacity}>A receber</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.valores}>
                <View style={styles.valor}>
                    <Text >Total A pagar: {dash?.totalApagar}</Text>
                </View>
                <View style={styles.valor}>
                    <Text >Total A receber: {dash?.totalAreceber}</Text>
                </View>
                <View style={styles.valor}>
                    <Text >Saldo: {dash?.saldo}</Text>
                </View>
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