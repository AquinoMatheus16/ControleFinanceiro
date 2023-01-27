import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#1b6dc1',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        width: "80%",
        minHeight: 500,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,

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
        fontSize: 22,
        marginBottom: 15
    },

    textoTitulo: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 50,
        color: '#1b6dc1'
    },

    touchableOpacityAtualizar: {
        padding: 10,
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#0CD105',
        marginTop: 10,
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
    },

    touchableOpacityAtualizarTexto: {
        fontWeight: "500",
        color:'#FFFFFF'
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

    touchableOpacityDeletarTexto: {
        fontWeight: "500",
        color:'#FFFFFF'
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
        backgroundColor: '#1b6dc1',
        width: 10,
        height: 18,
        marginRight: 5,
        borderRadius: 1,
    },

    bt: {
        flexDirection: "row"
    },

    buttons: {
        alignItems: "center",
    }

});