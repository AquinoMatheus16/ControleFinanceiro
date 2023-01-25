import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: 'gray'
    },

    containerLogin: {
        backgroundColor: 'gray',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    input: {
        height: 35,
        width: '90%',
        margin: 12,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 10,
        borderRadius: 10,
        // paddingRight: 8
        paddingLeft:20,
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
        // paddingRight: 8,
        paddingLeft:20,
        marginTop: 30,
        marginBottom: 30,
    },

    atualizar: {
        backgroundColor: '#0C609C',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 50,
        borderRadius: 10,
        color: '#FFFFFF',
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
        fontSize: 20,
        color: 'white'
    },
    titulo: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
        fontWeight: '500'
    },

    homeDashboardtopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#0C609C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        color: '#0C609C'
    },

    viewInput: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },

    butoes: {
        alignItems: 'center',
        width: "80%",
        height: 50,
    }

});