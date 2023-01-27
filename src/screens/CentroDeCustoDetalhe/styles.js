import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        backgroundColor: '#1b6dc1',
        alignItems: 'center',
    },

    container: {
        width: "80%",
        justifyContent: 'center',
        minHeight: 250,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginTop: 100,

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
        borderBottomColor: '#000000',
        marginBottom: 10
    },

    touchableOpacityAtualizar: {
        padding: 10,
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#1AB115',
        marginTop: 10,
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
    },

    touchableOpacityDeletar: {
        padding: 10,
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#FC0000',
        marginTop: 10,
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
    },

    touchableOpacityTexto: {
        fontWeight: "500",
        color: '#FFFFFF'
    },
});