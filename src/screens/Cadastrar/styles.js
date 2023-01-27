import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#1b6dc1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500
    },

    containerLogin: {
        width: '85%',
        height: '65%',
        backgroundColor: '#1b6dc1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 7,
        marginTop: 50
    },

    entrar: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#ef4036',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        width: 150,
        height: 40,
        borderRadius: 10,
        marginTop: 40,
        color: '#FFFFFF'
    },

    tituloTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 15
    },

    img: {
        width: 150,
        height: 150,
        marginBottom: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 100
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },

});