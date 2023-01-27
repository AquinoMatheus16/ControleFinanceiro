import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getDashBoardTotal } from "../../services/dashboard";
import { VictoryPie, VictoryTheme } from "victory-native";
import { getTitulo } from "../../services/titulo";

export const Home = ({ navigation }) => {

    const [total, setTotal] = useState({});
    const [titulos, setTitulos] = useState([]);
    const { load } = useContext(AuthContext);

    const fetchTotal = async () => {

        const total = await getDashBoardTotal();
        setTotal(total);

    };

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
                <Text style={styles.homeNumero}>R$: {(Math.floor(total?.saldo * 100).toFixed(0) / 100).toFixed(2)}</Text>

                <View style={styles.dash1}>

                <View style={styles.titleDash3}>
                        <View style={styles.dash}>
                            <VictoryPie
                                width={170}
                                innerRadius={50}
                                theme={VictoryTheme.material}
                                data={[(Math.floor(total?.totalAreceber * 100).toFixed(0) / 100).toFixed(2), (Math.floor(total?.totalApagar * 100).toFixed(0) / 100).toFixed(2)]} x="quarter" y="earnings"
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
                                data={[titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("APAGAR")).length,
                                titulos.filter((titulo) => !titulo?.dataPagamento && titulo?.tipo.endsWith("ARECEBER")).length
                                ]} x="quarter" y="earnings"
                                style={{
                                    labels: {
                                        display: 'none'
                                    }
                                }}
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
                                data={[(Math.floor(total?.totalApagar * 100).toFixed(0) / 100).toFixed(2), (Math.floor(total?.totalAreceber * 100).toFixed(0) / 100).toFixed(2)]} x="quarter" y="earnings"
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