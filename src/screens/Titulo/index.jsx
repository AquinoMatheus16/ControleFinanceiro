import { Text, View, TouchableOpacity, TextInput, FlatList, Button } from "react-native";
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

    // console.log(itemFiltrado)


    function filtrarPorPagamento(value) {
        if ('dataPagamento' in value && typeof(value.dataPagamento) === 'string' && isNaN(value.dataPagamento)) {
             return value;
        } 
    } 

    function filtrarPorNaoPagamento(value) {
        if ('dataPagamento' in value && typeof(value.dataPagamento) === null && !isNaN(value.dataPagamento)) {
             return value;
        } 
    } 

    function filtrarPorVencimento(value) {
        if ('dataVencimento' in value && typeof(value.dataPagamento) > new Date()) {
             return value;
        } 
    } 

    return (

        <View style={styles.containerMain}>
            <Text style={styles.textoTitulo}>Títulos</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Titulos Cadastra")} style={styles.touchableOpacity}>
                <Text style={styles.touchableOpacityTexto}>Cadastar</Text>
            </TouchableOpacity>

            <Text style={styles.textoTituloInput}>Pequisar</Text>

            <View style={styles.containerInput}>
                <EvilIcons name="search" size={24} color="#FFFFFF" />
                <TextInput
                    style={styles.textInput} placeholder="Pequisar"
                    value={busca}
                    onChangeText={e => setBusca(e)}
                />
            </View>

            <View style={styles.nav}>
                <TouchableOpacity onPress={() => setAtiva("Todos")} style={styles.navTouch}>
                    <Text style={styles.navTexto}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAtiva("Apagar")} style={styles.navTouch}>
                    <Text style={styles.navTexto}>A pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAtiva("Pagos")} style={styles.navTouch}>
                    <Text style={styles.navTexto}>Pagos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAtiva("Vencidos")} style={styles.navTouch}>
                    <Text style={styles.navTexto}>Vencidos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerFlatList}>
                {/* <FlatList
                    data={itemFiltrado}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                /> */}

                {ativa === "Todos" && <FlatList
                    data={itemFiltrado}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />}
                {ativa === "Apagar" && <FlatList
                    data={itemFiltrado.filter(filtrarPorNaoPagamento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />}
                {ativa === "Pagos" && <FlatList
                    data={itemFiltrado.filter(filtrarPorPagamento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />}
                {ativa === "Vencidos" && <FlatList
                    data={itemFiltrado.filter(filtrarPorVencimento)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TitulosCard item={item} />}
                />}
                {/* {ativa === "Aulas" && <AulasRender />}
                {ativa === "Alunos" && <AlunosAvaliacaoRender />}
                {ativa === "Turmas" && <TurmasRender />} */}
            </View>
        </View>

    )
};