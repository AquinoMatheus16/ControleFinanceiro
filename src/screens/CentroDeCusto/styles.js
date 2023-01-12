import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        backgroundColor: '#0C609C',
        alignItems: 'center'
    },

    textoTitulo: {
        width: '80%',
        marginTop: 30,
        fontSize: 22,
        textAlign: 'center',
        paddingBottom: 10,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    touchableOpacity: {
        width: 190,
        height: 45,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 25
    },

    touchableOpacityTexto: {
        fontSize: 22
    },

    containerInput: {
        width: '80%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        alignItems: 'center',
        marginBottom: 5
    },

    textoTituloInput: {
        color: '#FFFFFF',
        fontSize: 22,
        marginTop: 50
    },

    textInput: {
        width: '100%',
        padding: 10,
        color: '#FFFFFF',
    },

    containerFlatList: {
        marginBottom: 274
    }

});