import { Text, View } from "react-native";
import { styles } from "./styles";

export const TitulosCard = ({ item }) => {

    return (
        <View style={styles.containerMain}>
            <Text style={styles.texto}>{item.descricao}</Text>
            {/* <Text style={styles.texto}>jjjddd</Text> */}
        </View>
    )
};