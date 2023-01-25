import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: 'gray',
    },

    containerLogin: {
        backgroundColor: 'gray',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    enviar: {
        backgroundColor: '#0C609C',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 50,
        borderRadius: 10,
        marginTop: 30,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    imagemLogo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },

    tituloTexto: {
        fontSize: 20,
        color: '#FFFFFF'
    },

    titulo: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '500'
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
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


});