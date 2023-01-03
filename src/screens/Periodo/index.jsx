import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export const Periodo = () => {

    return (

        <View style={styles.containerMian}>

            <Text style={styles.textoTitulo}>Pesquisar por período</Text>

            <Text style={styles.textoNormal}>Período inicial</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                />
            </View>

            <Text style={styles.textoNormal}>Período final</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                />
            </View>

            <TouchableOpacity>
                <View style={styles.containerTouchableOpacity}>
                    <Text style={styles.textoTouchableOpacity}>Pesquisar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
};