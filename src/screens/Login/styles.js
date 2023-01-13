import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 500
    },

    containerLogin: {
        width: '85%',
        height: '60%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 7
    },

    containerMain: {
        width: '100%',
        height: '70%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        
    },

    containerTopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#0C609C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25
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
        marginTop: 40,
        color: '#FFFFFF'
    },

    entrar: {
        color: 'white',
        fontWeight: 'bold'
    },

    cadastro: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 40,
        marginBottom: 70
    },

    logoContainer: {
        width: 210,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 100
    },

    imagemLogo: {
        flex: 1,
    },

    tituloTexto: {
        fontSize: 18,
        color: '#000000'
    },

    

});