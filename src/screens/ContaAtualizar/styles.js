import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#1b6dc1'
    },

    containerMain: {
        minHeight: 725,
        backgroundColor: '#1b6dc1',
        alignItems: 'center',
    },

    textoTitulo: {
        color: '#FFFFFF',
        marginTop: 30,
        marginBottom: 40,
        fontSize: 22,
        fontWeight: '800',
    },

    texto: {
        fontSize: 22,
        color: '#FFFFFF',
        marginTop: 10
    },

    enviar: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 40,
        borderRadius: 10,
        marginTop: 30,
        color: '#000000',
        fontWeight: 'bold'
    },

    homeDashboard: {
        height: 150,
        width: 150,
        marginTop: 50,
        borderRadius: 150,
        backgroundColor: '#fff',
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },
});