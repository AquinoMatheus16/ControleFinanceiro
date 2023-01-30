import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getUsuarioId } from "../../services/usuario";

export const Conta = () => {

    const navigation = useNavigation();
    const { logoutContext, load } = useContext(AuthContext);
    const [usuario, setUsuario] = useState({});

    const buscarUsuario = async () => {
        const user = await AsyncStorage.getItem("@app_user");
        const usuario = JSON.parse(user);
        const data = await getUsuarioId(usuario?.id);
        setUsuario(data);
    }

    useEffect(() => {
        buscarUsuario();
    }, [load]);

    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.meioCima}>

                <TouchableOpacity>
                    {usuario?.foto ? <Image source={{ uri: usuario?.foto }} style={styles.homeDashboard} /> : <EvilIcons name="user" size={170} style={styles.icon} color="#ffffff" />}
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{usuario?.nome}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{usuario?.email}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.meioBaixo}>
                <TouchableOpacity style={styles.touchableOpacitySair} onPress={() => navigation.navigate("Atualizar conta", { user: usuario })}>
                    <Text style={styles.touchableOpacityTexto}>Editar conta</Text>
                    <FontAwesome5 name="user-edit" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacitySair} onPress={() => logoutContext()}>
                    <Text style={styles.touchableOpacityTexto}>Sair</Text>
                    <MaterialIcons name="logout" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

        </View>
    );
}