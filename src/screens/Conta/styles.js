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

    touchableOpacitySair: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0C609C',
        padding: 5,
        width: 100,
        height: 40,
        borderRadius: 10,
        marginTop: 30,
    },

    touchableOpacityTexto: {
        color: '#FFFFFF',
        fontSize: 18,
    },

    homeDashboard: {
        height: 150,
        width: 150,
        marginTop: 20,
        borderRadius: 150,
        backgroundColor: 'white'
    },

    meioCima: {
        backgroundColor: '#0C609C',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    meioBaixo: {
        backgroundColor: 'gray',
        width: '100%',
        height: '40%',
        alignItems: 'center'
    },

    inputDados: {
        minWidth: 250,
        height: 30,
        marginTop: 20,
        alignItems: 'center'
    }
})