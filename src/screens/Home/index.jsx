import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getDashBoardTotal } from "../../services/dashboard";
import { VictoryPie, VictoryTheme, VictoryTooltip } from "victory-native";
import { getTitulo } from "../../services/titulo";
import { ConverterValor } from "../../common/ConverterValor";

export const Home = ({ navigation }) => {

    const [total, setTotal] = useState({});
    const [titulos, setTitulos] = useState([]);
    const { load } = useContext(AuthContext);

    const fetchTotal = async () => {

        const total = await getDashBoardTotal();
        setTotal(total);

    };

    const cor = [
        { key: '1', value: '#47B2F9' },
        { key: '2', value: '#104BA4' },
    ]

    const valorDash1 = [
        { key: '1', label: "A receber", value: total?.totalAreceber },
        { key: '2', label: "A pagar", value: total?.totalApagar },
    ]

    const valorDash2 = [
        { key: '1', label: "A pagar", value: total?.totalApagar },
        { key: '2', label: "A receber", value: total?.totalAreceber },
    ]

    const valorDashTitulo = [
        { key: '1', label: titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("APAGAR")).length, value: titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("APAGAR")).length },
        { key: '2', label: titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("ARECEBER")).length, value: titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("ARECEBER")).length },
    ]

    const fetchData = async () => {
        const tituloList = await getTitulo();
        setTitulos(tituloList);
    };

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
                <Text style={styles.homeNumero}>R$: {<ConverterValor valor={""+(Math.floor(total?.saldo * 100).toFixed(0) / 100).toFixed(2)}/>}</Text>

                <View style={styles.dash1}>

                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                colorScale={cor.map(color => color.value)}
                                data={valorDash2} x="label" y="value"
                                style={{
                                    labels: {
                                        fill: '#000000',
                                        angle: -90
                                    },
                                    data: {
                                        stroke: 'none'
                                    }
                                }}
                                labelComponent={
                                    <VictoryTooltip renderInPortal={false} />
                                }
                            />
                            <Text style={styles.titleDash}>R$: {<ConverterValor valor={""+(Math.floor(total?.totalApagar * 100).toFixed(0) / 100).toFixed(2)}/>}</Text>
                        </View>
                        <Text style={styles.titleDash2}>A pagar</Text>
                    </View>

                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                colorScale={cor.map(color => color.value)}
                                data={valorDashTitulo} x="label" y="value"
                                style={{
                                    labels: {
                                        fill: '#000000',
                                        angle: -90
                                    },
                                    data: {
                                        stroke: 'none'
                                    }
                                }}
                                labelComponent={
                                    <VictoryTooltip renderInPortal={false} />
                                }
                            />
                            <Text style={styles.titleDash}>{titulos.filter((titulo) => !titulo?.dataPagamento).length}</Text>
                        </View>
                        <Text style={styles.titleDash2}>Títulos</Text>
                    </View>

                    <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                colorScale={cor.map(color => color.value)}
                                data={valorDash1} x="label" y="value"
                                style={{
                                    labels: {
                                        fill: '#000000',
                                        angle: -90
                                    },
                                    data: {
                                        stroke: 'none'
                                    }
                                }}
                                labelComponent={
                                    <VictoryTooltip renderInPortal={false} />
                                }
                            />
                            <Text style={styles.titleDash}>R$: {<ConverterValor valor={""+(Math.floor(total?.totalAreceber * 100).toFixed(0) / 100).toFixed(2)}/>}</Text>
                        </View>
                        <Text style={styles.titleDash2}>A receber</Text>
                    </View>
                </View>
            </View>


            <View style={styles.homeContainerMain}>

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