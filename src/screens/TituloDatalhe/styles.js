import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: 'gray',
    },

    container: {
        width: "100%",
        height: 600,
        justifyContent: 'center',
        backgroundColor: '#008C8C',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    containerTopo: {
        width: "100%",
        height: 120
    },

    texto: {
        fontSize: 22,
        marginBottom: 15
    },

    textoTitulo: {
        marginLeft: '25%',
        fontSize: 30,
        width: '50%',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 50
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
    },

    marcar: {
        backgroundColor: '#fff',
        width: 85,
        height: 20,
        marginLeft: "70%",
        marginTop: -5,
        marginBottom: 5,
        flexDirection: "row",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'gray',
    },

    marcarPago: {
        backgroundColor: '#fff',
        width: 60,
        height: 20,
        marginLeft: "80%",
        marginTop: -5,
        marginBottom: 5,
        flexDirection: "row",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'gray'
    },

    marcador: {
        backgroundColor: '#0C609C',
        width: 10,
        height: 18,
        marginRight: 5,
        borderRadius: 1,
    },

    bt: {
        flexDirection: "row"
    }

});