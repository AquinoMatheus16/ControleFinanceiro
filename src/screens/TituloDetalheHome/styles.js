import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#0C609C',
    },

    containerMain: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        width: "80%",
        justifyContent: 'center',
        minHeight: 400,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 30
    },

    texto: {
        fontSize: 20,
        marginBottom: 15
    },

    textoTitulo: {
        marginLeft: '25%',
        fontSize: 22,
        width: '50%',
        textAlign: 'center',
        color: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 10
    }

});