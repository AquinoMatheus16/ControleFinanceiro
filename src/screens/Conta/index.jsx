import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const Conta = () => {

    const navigation = useNavigation();
    const { logoutContext, load } = useContext(AuthContext);
    const [fot, setFot] = useState("");
    const [user, setUser] = useState({});

    const img = async () => {
        const data = await AsyncStorage.getItem("@app_user");
        const usuario = JSON.parse(data);
        setFot(usuario.foto)
        setUser(usuario)
        // console.log('data', data);
        return usuario.id;
    }

    useEffect(() => {
        img();
    }, [load]);

    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.meioCima}>

                <TouchableOpacity>
                    {fot ? <Image source={{ uri: fot }} style={styles.homeDashboard} /> : <EvilIcons name="user" size={170} style={styles.icon} color="#ffffff" />}
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{user.nome}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{user.email}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.meioBaixo}>
                <TouchableOpacity style={styles.touchableOpacitySair} onPress={() => navigation.navigate("Atualizar conta", { user: user })}>
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