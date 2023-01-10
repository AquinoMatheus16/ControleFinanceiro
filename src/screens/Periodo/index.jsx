import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getDashBoard } from "../../services/dashboard";
import { styles } from "./styles";

export const Periodo = () => {

    const [inicial, setInicial] = useState([]);
    const [final, setFinal] = useState([]);
    const [data, setData] = useState([]);

    const fetchTotal = async () => {

        const response = await getDashBoard(inicial, final);
        setData(response);
        console.log(response);

    };

    return (

        <View style={styles.containerMian}>

            <Text style={styles.textoTitulo}>Pesquisar por período</Text>

            <Text style={styles.textoNormal}>Período inicial</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite uma data de início'
                    onChangeText={setInicial}
                    value={inicial}
                />
            </View>

            <Text style={styles.textoNormal}>Período final</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite uma data final'
                    onChangeText={setFinal}
                    value={final}
                />
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