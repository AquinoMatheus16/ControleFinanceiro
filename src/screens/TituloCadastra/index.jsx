import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export const TituloCadastra = () => {

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerMain}>
                {/* <View style={styles.containerInput}> */}

                <Text style={styles.texto}>Descrção</Text>
                <TextInput style={styles.textInput} placeholder="Descrção" />

                <Text style={styles.texto}>Observação</Text>
                <TextInput style={styles.textInput} placeholder="Observação" />

                <Text style={styles.texto}>Tipo</Text>
                <TextInput style={styles.textInput} placeholder="Tipo" />

                <Text style={styles.texto}>Valor</Text>
                <TextInput style={styles.textInput} placeholder="Valor" />

                <Text style={styles.texto}>Data de referência</Text>
                <TextInput style={styles.textInput} placeholder="Data de referência" />

                <Text style={styles.texto}>Data de vencimento</Text>
                <TextInput style={styles.textInput} placeholder="Data de vencimento" />

                <Text style={styles.texto}>Centro de custo</Text>
                <TextInput style={styles.textInput} placeholder="Centro de custo" />

                {/* </View> */}
            </View>
        </ScrollView>
    )
}