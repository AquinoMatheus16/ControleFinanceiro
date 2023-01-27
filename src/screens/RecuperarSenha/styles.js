import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    containerLogin: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    enviar: {
        backgroundColor: '#1b6dc1',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 40,
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
        color: '#2F2F2F',
        paddingBottom: 5
    },

    titulo: {
        fontSize: 20,
        color: '#151515',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '500'
    },

    textError: {
        color: '#F32020',
        marginBottom: 5,
        paddingTop: 10
    },

    homeDashboardtopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1b6dc1',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },


});