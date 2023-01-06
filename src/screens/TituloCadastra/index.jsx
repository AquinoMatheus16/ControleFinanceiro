import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { SelectList } from 'react-native-dropdown-select-list';
import { postTitulo } from "../../services/titulo";
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { useNavigation } from "@react-navigation/native";

export const TituloCadastra = () => {

    const [descricao, setDescricao] = useState("");
    const [observacao, setObservacao] = useState("");
    const [valor, setValor] = useState("");
    const [dataReferencia, setDataReferencia] = useState("");
    const [dataVencimento, setDataVencimento] = useState("");
    const [dataPagamento, setDataPagamento] = useState("");
    const [tipo, setTipo] = useState("");

    const [centroDeCusto, setCentroDeCusto] = useState([]);
    const [data, setData] = useState([]);
    const [centroDeCustoSalvos, setCentroDeCustoSalvos] = useState([]);
    const [selected, setSelected] = useState("");
    const [centroDeCustoJson, setCentroDeCustoJson] = useState("");

    const [selectedTipo, setSelectedTipo] = useState([]);

    const navigation = useNavigation();

    const selectTipo = [
        { key: '1', value: 'APAGAR' },
        { key: '2', value: 'ARECEBER' }
    ]

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
                dataReferencia: dataReferencia,
                dataVencimento: dataVencimento,
                dataPagamento: dataPagamento,
                centroDeCusto: centroDeCustoJson,
                observacao: observacao
            }
            console.log(novoTitulo);
            JSON.stringify(novoTitulo);

            const formData = new FormData();

            formData.append('titulos', {
                "string": JSON.stringify(novoTitulo),
                type: 'application/json',
                name: 'titulos'
            })

            centroDeCustoId();
            const { data } = postTitulo(novoTitulo);
            // console.log(data);

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
            navigation.goBack();

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

                <Text style={styles.texto}>Data de referência</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Data de referência"
                    onChangeText={setDataReferencia}
                    value={dataReferencia}
                />

                <Text style={styles.texto}>Data de vencimento</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Data de vencimento"
                    onChangeText={setDataVencimento}
                    value={dataVencimento}
                />

                <Text style={styles.texto}>Data de pagamento</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Data de vencimento"
                    onChangeText={setDataPagamento}
                    value={dataPagamento}
                />

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
}