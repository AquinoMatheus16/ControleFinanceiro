import { Text, View } from "react-native";
import { styles } from "./styles";
import { TitulosCard } from "../../components/TitulosCard/Index";

export const TitulosApagar = () => {

    return (
        <View style={styles.containerMian}>
            <Text style={styles.textoTotal}>Total a pagar</Text>
            <Text style={styles.textoNumero}>1900.00</Text>

            <Text style={styles.textoTitulo}>Títulos a pagar</Text>

            <View style={styles.containerCard}>
                <TitulosCard />
                <TitulosCard />
                <TitulosCard />
                <TitulosCard />
            </View>
        </View>
    )
};