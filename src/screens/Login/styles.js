import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#E5E5E5',
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
        alignItems: 'center',
        flexDirection: 'column',
    },

    containerTopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1b6dc1',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    texto: {
        color: '#707070',
        fontWeight: 'bold',
        marginTop: 10,
    },

    entrar: {
        backgroundColor: '#1b6dc1',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        width: 150,
        height: 50,
        borderRadius: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 30
    },

    cadastro: {
        color: '#707070',
        fontWeight: 'bold',
        fontSize: 18,
    },

    logoContainer: {
        width: 200,
        height: 200
    },

    tituloTextoEmail: {
        fontSize: 18,
        color: '#000000',
    },

    tituloTextoSenha: {
        fontSize: 18,
        color: '#000000',
        marginTop: 20
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },

    touchableOpacityCadastro: {
        alignItems: 'center',
    }
});