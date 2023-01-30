import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#E5E5E5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 500
    },

    touchableOpacitySair: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1b6dc1',
        padding: 5,
        width: 170,
        height: 50,
        borderRadius: 10,
        marginTop: 30,
    },

    touchableOpacityTexto: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    homeDashboard: {
        height: 150,
        width: 150,
        marginTop: 50,
        borderRadius: 150,
        backgroundColor: '#fff',
    },

    icon: {
        marginTop: 50,
    },

    meioCima: {
        backgroundColor: '#1b6dc1',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    meioBaixo: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '40%',
        alignItems: 'center'
    },

    inputDados: {
        minWidth: 250,
        height: 30,
        marginTop: 5,
        alignItems: 'center'
    },

    entrar: {
        fontWeight: '900'
    }
})