import { FlatList, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { getDashBoardTotal } from "../../services/dashboard";
import { VictoryPie, VictoryTheme } from "victory-native";
import { getTitulo } from "../../services/titulo";
import { getCentroDeCusto } from "../../services/centroDeCusto";

export const Home = ({ navigation }) => {

    const [total, setTotal] = useState({});
    const [titulos, setTitulos] = useState([]);
    const [title, setTitle] = useState([]);
    const [centroCusto, setCentroCusto] = useState([]);
    const [centro, setCentro] = useState([]);
    const { load } = useContext(AuthContext);

    const fetchTotal = async () => {

        const total = await getDashBoardTotal();
        setTotal(total);

    };

    const fetchData = async () => {

        const tituloList = await getTitulo();
        setTitulos(tituloList);
        const apagar = titulos.filter((numero) => numero?.tipo.endsWith("APAGAR"));
        const areceber = titulos.filter((numero) => numero?.tipo.endsWith("ARECEBER"));
        setTitle([apagar?.length, areceber?.length]);

    };
    console.log("setTitle", title);

    // const fetchDataCentro = async () => {

    //     const centroList = await getCentroDeCusto();
    //     setCentro(centroList);
    //     const apagar = centro.filter((numero) => numero?.descricao);
    //     const areceber = centro.filter((numero) => numero?.descricao);
    //     setCentroCusto([apagar.length, areceber.length]);

    // };
    // console.log("setTitle",title);


    useEffect(() => {
        setTimeout(() => {
            fetchData();
            fetchTotal();
        }, 100);
    }, [load]);

    return (

        <View style={styles.homeContainer}>

            <View style={styles.homeDashboardtopo}>

                <Text style={styles.homeTexto}>Saldo</Text>
                <Text style={styles.homeNumero}>R$: {(Math.floor(total?.saldo * 100).toFixed(0) / 100).toFixed(2)}</Text>

                <View style={styles.dash1}>

                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                data={title} x="quarter" y="earnings"
                                style={{
                                    labels: {
                                        display: 'none'
                                    }
                                }}
                            />
                            <Text style={styles.titleDash}>{titulos.length}</Text>
                        </View>
                        <Text style={styles.titleDash2}>Títulos</Text>
                    </View>
                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                data={titulos.map((numero) => numero.valor)} x="quarter" y="earnings"
                                style={{
                                    labels: {
                                        display: 'none'
                                    }
                                }}
                            />
                            <Text style={styles.titleDash}>R$: {(Math.floor(total?.totalApagar * 100).toFixed(0) / 100).toFixed(2)}</Text>
                        </View>
                        <Text style={styles.titleDash2}>A pagar</Text>
                    </View>
                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                data={titulos.map((numero) => numero.valor)} x="quarter" y="earnings"
                                style={{
                                    labels: {
                                        display: 'none'
                                    }
                                }}
                            />
                            <Text style={styles.titleDash}>R$: {(Math.floor(total?.totalAreceber * 100).toFixed(0) / 100).toFixed(2)}</Text>
                        </View>
                        <Text style={styles.titleDash2}>A receber</Text>
                    </View>
                </View>
            </View>


            <View style={styles.homeContainerMain}>

                {/* <View style={styles.homeDivInput}>
                    <EvilIcons style={styles.homeIcon} name="search" size={30} color="white" />
                    <TextInput
                        style={styles.homeInput}
                        placeholder="Pesquisar"
                        placeholderTextColor="#c5c5c5"
                    />
                </View> */}

                <Text style={styles.homeTexto2}>Pesquisar</Text>

                <TouchableOpacity onPress={() => navigation.navigate('TitulosApagar')}>
                    <View style={styles.homeTouchableOpacity}>
                        <Text style={styles.homeTextoTouchable}>Títulos a pagar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TitulosAreceber')}>
                    <View style={styles.homeTouchableOpacity}>
                        <Text style={styles.homeTextoTouchable}>Títulos a receber</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Periodo')}>
                    <View style={styles.homeTouchableOpacity}>
                        <Text style={styles.homeTextoTouchable}>Período</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
};