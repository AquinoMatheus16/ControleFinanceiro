import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: 'gray',
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
        height: 400,
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
    },

    containerTopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#0C609C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texto: {
        color: 'white',
        fontWeight: 'bold'
    },

    entrar: {
        backgroundColor: '#0C609C',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        width: 150,
        height: 50,
        borderRadius: 10,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    cadastro: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },

    logoContainer: {
        width: 200,
        height: 200
    },

    // imagemLogo: {
    //     flex: 1,
    // },

    tituloTexto: {
        fontSize: 18,
        color: '#FFFFFF',
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },

    touch: {
        marginTop: 20,
        marginBottom: 35,
        alignItems: 'center',
    }
});