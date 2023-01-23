import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';

export const Conta = () => {
    const { logoutContext } = useContext(AuthContext);
    const [fot, setFot] = useState("");
    const [avatar, setAvatar] = useState({});

    const img = async () => {
        const data = await AsyncStorage.getItem("@app_user");
        const usuario = JSON.parse(data);
        setFot(usuario.foto)
        setAvatar(usuario)
        return usuario.id;
    }

    useEffect(() => {
        setTimeout(() => {
            img();
        }, 100);
    }, []);

    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.meioCima}>

                <TouchableOpacity>
                    <View >
                        {fot ? <Image source={{ uri: fot }} style={styles.homeDashboard} /> : <EvilIcons name="user" size={200} style={styles.icon} color="#ffffff" />}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{avatar.nome}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.inputDados}>
                        <Text style={styles.entrar}>{avatar.email}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.meioBaixo}>
                <TouchableOpacity style={styles.touchableOpacitySair} onPress={() => logoutContext()}>
                    <Text style={styles.touchableOpacityTexto}>Sair</Text>
                    <MaterialIcons name="logout" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

        </View>
    )
}