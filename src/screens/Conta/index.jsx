import AsyncStorage from "@react-native-async-storage/async-storage"
import { async } from "q";
import { useContext, useEffect, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { Source } from "webpack-sources";
import { AuthContext } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { imgUsuario } from '../../img/usuario.png'

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
                        <Image source={{ uri: fot ? fot : null }} style={styles.homeDashboard} />
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
                
                
                <TouchableOpacity
                    onPress={() => logoutContext()}>
                    <View style={styles.botaoEntrar}>
                        <Text style={styles.entrar}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}