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
    },

    touchableOpacityAtualizar: {
        padding: 10,
        alignItems: 'center'
    },

    touchableOpacityAtualizarTexto: {
        width: '50%',
        backgroundColor: '#0CD105',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        color: '#FFFFFF'
    },

    touchableOpacityDeletar: {
        padding: 10,
        alignItems: 'center'
    },

    touchableOpacityDeletarTexto: {
        width: '50%',
        backgroundColor: '#FC0000',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        color: '#FFFFFF'
    },

    touchableOpacityPagar: {
        alignItems: 'center'
    },

    touchableOpacityPagarTexto: {
        width: '50%',
        backgroundColor: '#FC0000',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        color: '#FFFFFF'
    }

});