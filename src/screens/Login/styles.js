import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        // width: '100%',
        // height: '100%',
        backgroundColor: 'gray',
        // display: 'flex',
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

    texto: {
        color: 'white',
        fontWeight: 'bold'
    },

    entrar: {
        backgroundColor: '#ef4036',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        width: 100,
        height: 30,
        borderRadius: 10,
        marginTop: 40,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    cadastro: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 40,
        marginBottom: 70
    },

    // logoContainer: {
    //     width: 210,
    //     height: 40,
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     marginBottom: 100
    // },

    // imagemLogo: {
    //     flex: 1,
    // },

    tituloTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 30
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },
});