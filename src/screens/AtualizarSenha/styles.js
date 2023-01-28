import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    scrollView:{
        backgroundColor: '#E5E5E5'
    },

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },

    containerLogin: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    input: {
        height: 35,
        width: '90%',
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 10,
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 30,
        marginBottom: 30
    },

    inputToken: {
        height: 35,
        width: '22%',
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 10,
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 30,
        marginBottom: 30,
    },

    atualizar: {
        backgroundColor: '#1b6dc1',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 50,
        borderRadius: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: '25%'
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
        fontSize: 20,
        color: '#363636',
        paddingTop: 10
    },

    titulo: {
        fontSize: 20,
        color: '#141414',
        marginBottom: 20,
        fontWeight: '500'
    },

    homeDashboardtopo: {
        width: '100%',
        height: '40%',
        padding: 40,
        backgroundColor: '#1b6dc1',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        color: '#1b6dc1'
    },

    viewInput: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },

    textInput: {
        borderBottomWidth: 1,
        padding: 5,
        width: '80%',
        marginBottom: 5,
        color: '#353535',
        textAlign: 'center',
    },

});