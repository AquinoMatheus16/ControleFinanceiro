import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { getCentroDeCusto } from "../../services/centroDeCusto";
import { putTitulo } from "../../services/titulo";
import { styles } from "./styles";

export const TitulosAtualizar = ({ route }) => {

    const { item } = route.params;
    const [descricao, setDescricao] = useState(item.descricao);
    const [observacao, setObservacao] = useState(item.observacao);
    const [valor, setValor] = useState("" + item.valor);
    const [dataReferencia, setDataReferencia] = useState(item.dataReferencia);
    const [dataVencimento, setDataVencimento] = useState(item.dataVencimento);
    const [tipo, setTipo] = useState("");

    const [centroDeCusto, setCentroDeCusto] = useState(item.centroDeCusto);
    const [data, setData] = useState([]);
    const [centroDeCustoSalvos, setCentroDeCustoSalvos] = useState([]);
    const [selected, setSelected] = useState("");
    const [centroDeCustoJson, setCentroDeCustoJson] = useState(item.centroDeCusto);

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
    }

    useEffect(() => {
        getCentroDeCustos()
        centroDeCustoId()
    }, [centroDeCusto]);

    const put = async () => {
        try {

            const novoTitulo = {
                descricao: descricao,
                tipo: tipo,
                valor: parseInt(valor),
                dataReferencia: dataReferencia,
                dataVencimento: dataVencimento,
                centroDeCusto: centroDeCustoJson,
            }

            JSON.stringify(novoTitulo);

            const formData = new FormData();

            formData.append('titulos', {
                "string": JSON.stringify(novoTitulo),
                type: 'application/json',
                name: 'titulos'
            })

            centroDeCustoId();
            const { data } = putTitulo(item, novoTitulo);
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
            navigation.goBack();

            console.log("centroDeCusto: ", centroDeCusto);

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

                <Text style={styles.texto}>Observação</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Observação"
                    multiline
                    numberOfLines={5}
                    onChangeText={setObservacao}
                    value={observacao}
                />

                <TouchableOpacity onPress={put} style={styles.touchableOpacity}>
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};