import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#0C609C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500
    },

    containerLogin: {
        width: '85%',
        height: '65%',
        backgroundColor: '#0C609C',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 7
    },

    input: {
        height: 35,
        width: '90%',
        margin: 12,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        padding: 10,
        borderRadius: 10,
        // paddingRight: 8
        paddingLeft:20
    },

    botaoEntrar: {
        backgroundColor: '#ef4036',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 100,
        height: 30,
        borderRadius: 10,
        marginTop: 30,
        color: '#FFFFFF'
    },

    entrar: {
        color: 'white',
        fontWeight: 'bold'
    },

    logoContainer: {
        width: 210,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 100
    },

    imagemLogo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },

    tituloTexto: {
        fontSize: 18,
        color: '#000000'
    },
    titulo: {
        fontSize: 20,
        color: '#000000',
        marginTop: 20,
        marginBottom: 20
    }

});