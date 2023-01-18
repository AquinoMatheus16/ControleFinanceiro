import { Text, View, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';
import { getTitulo } from "../../services/titulo";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TitulosCard } from "../../components/TitulosCard";
import { AuthContext } from "../../contexts/AuthContext";

export const Titulos = () => {

    const [titulos, setTitulos] = useState([]);
    const [itemFiltrado, setItemFiltrado] = useState([]);
    const [busca, setBusca] = useState("");
    const [ativa, setAtiva] = useState("Todos");
    const navigation = useNavigation();

    const { load } = useContext(AuthContext);

    const fetchData = async () => {
        const tituloList = await getTitulo();
        setTitulos(tituloList);
        setItemFiltrado(tituloList);
    };

    useEffect(() => {
        setItemFiltrado(titulos)

    }, []);

    useEffect(() => {
        setTimeout(() => {
            fetchData();

        }, 250);
    }, [load]);

    useEffect(() => {
        const resultado = titulos.filter((titulo) =>
            titulo.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setItemFiltrado(resultado)

    }, [busca]);

    function filtrarPorPagamento(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) === 'string' && isNaN(value.dataPagamento)) {
            return value.tipo.endsWith("APAGAR");
        }
    }

    function filtrarPorRecebidos(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) === 'string' && isNaN(value.dataPagamento)) {
            return value.tipo.endsWith("ARECEBER");
        }
    }

    function filtrarPorNaoPagamento(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) !== 'string') {
            return value.tipo.endsWith("APAGAR");
        }
    }

    function filtrarPorNaoRecebimento(value) {
        if ('dataPagamento' in value && typeof (value.dataPagamento) !== 'string') {
            return value.tipo.endsWith("ARECEBER");
        }
    }

    function filtrarPorVencimento(value) {
        var str = value.dataVencimento;
        var date = new Date(str.split('/').reverse().join('/'));
        var novaData = new Date();
        if (date < novaData) {
            return date;
        }
    }

    return (

        <View style={styles.containerMain}>
            <View style={styles.containerTopo}>

                <Text style={styles.textoTitulo}>Títulos</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Titulos Cadastra")} style={styles.touchableOpacity}>
                    <Text style={styles.touchableOpacityTexto}>Cadastar</Text>
                </TouchableOpacity>

                {/* <KeyboardAvoidingView behavior="padding" style={styles.containerInput}>
                    <EvilIcons name="search" size={24} color="#FFFFFF" />
                    <TextInput
                        style={styles.textInput} placeholder="Pequisar"
                        value={busca}
                        onChangeText={e => setBusca(e)}
                    />
                </KeyboardAvoidingView> */}
                

                {/* <View style={styles.nav}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => setAtiva("Todos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Vencidos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Vencidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Apagar")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>A pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Pagos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Pagos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Areceber")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>A receber</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Recebidos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Recebidos</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View> */}
                
                <View style={styles.containerInput}>
                    <EvilIcons name="search" size={24} color="#FFFFFF" />
                    <TextInput
                        style={styles.textInput} placeholder="Pequisar"
                        value={busca}
                        onChangeText={e => setBusca(e)}
                    />
                </View>
            </View>

            <View style={styles.containerFlatList}>

            <View style={styles.nav}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => setAtiva("Todos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Vencidos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Vencidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Apagar")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>A pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Pagos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Pagos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Areceber")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>A receber</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAtiva("Recebidos")} style={styles.navTouch}>
                            <Text style={styles.navTexto}>Recebidos</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {ativa === "Todos" && <FlatList
                    data={itemFiltrado}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {ativa === "Apagar" && <FlatList
                    data={itemFiltrado?.filter(filtrarPorNaoPagamento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {ativa === "Pagos" && <FlatList
                    data={itemFiltrado?.filter(filtrarPorPagamento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {ativa === "Vencidos" && <FlatList
                    data={itemFiltrado?.filter(filtrarPorVencimento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {ativa === "Areceber" && <FlatList
                    data={itemFiltrado?.filter(filtrarPorNaoRecebimento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {ativa === "Recebidos" && <FlatList
                    data={itemFiltrado?.filter(filtrarPorRecebidos)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />}
            </View>
        </View>

    )
};