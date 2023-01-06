import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const CentroDeCustoCard = ({ item }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Centro De Custo Atualizar", { item: item })}>
            <View style={styles.containerMain}>

                {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                {item?.observacao === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.observacao}</Text>}

            </View>
        </TouchableOpacity>
    )
};