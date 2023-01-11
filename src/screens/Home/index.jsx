import { FlatList, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { getDashBoardTotal } from "../../services/dashboard";

export const Home = ({ navigation }) => {

    const [total, setTotal] = useState({});
    const { load } = useContext(AuthContext);

    const fetchTotal = async () => {

        const total = await getDashBoardTotal();
        setTotal(total);

    };

    useEffect(() => {
        setTimeout(() => {
            fetchTotal();
        }, 100);
    }, [load]);

    return (

        <View style={styles.homeContainer}>

            <View style={styles.homeDashboard}>

            </View>

            <View style={styles.homeContainerMain}>
                <Text style={styles.homeTexto}>Saldo</Text>
                <Text style={styles.homeNumero}>R$: {total?.saldo}</Text>

                <Text style={styles.homeTexto2}>Pesquisar</Text>

                {/* <View style={styles.homeDivInput}>
                    <EvilIcons style={styles.homeIcon} name="search" size={30} color="white" />
                    <TextInput
                        style={styles.homeInput}
                        placeholder="Pesquisar"
                        placeholderTextColor="#c5c5c5"
                    />
                </View> */}

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