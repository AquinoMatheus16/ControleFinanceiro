import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#1b6dc1',
    },

    containerMain: {
        marginTop: '20%',
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
        marginBottom: 30,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },

    texto: {
        fontSize: 20,
        marginBottom: 15
    },

    textoTitulo: {
        fontSize: 22,
        width: '100%',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 10,
        color: '#1b6dc1'
    }

});