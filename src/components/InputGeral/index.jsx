import { Text, TextInput } from "react-native";
import { styles } from "./styles";

export const InputGeral = ({ placeholder, onChangeText, value, keyboardType, multiline, numberOfLines, onFocus, secureTextEntry }) => {

    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onFocus={onFocus}
            secureTextEntry={secureTextEntry}
        />
    )
};