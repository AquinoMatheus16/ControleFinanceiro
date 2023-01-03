import { useContext } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { styles } from "./styles";

export const Conta = () => {
    const { logoutContext } = useContext(AuthContext);
    return (
        <>
        <Text>Conta</Text>
        <TouchableOpacity
                onPress={() => logoutContext()}>
            <View style={styles.botaoEntrar}>
            <Text style={styles.entrar}>Sair</Text>
            </View>
        </TouchableOpacity>
        
        </>
    )
}