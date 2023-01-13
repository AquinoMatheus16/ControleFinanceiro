import { Text, TextInput } from "react-native";
import { styles } from "./styles";

export const InputGeral = ({ placeholder, onChangeText, value, multiline, numberOfLines }) => {

    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
        />
    )
};