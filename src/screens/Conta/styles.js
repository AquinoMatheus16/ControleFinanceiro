import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#0C609C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500
    },
    botaoEntrar: {
        backgroundColor: '#ef4036',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 100,
        height: 30,
        borderRadius: 10,
        marginTop: 30,
        color: '#FFFFFF'
    },
    entrar: {
        color: 'black',
        fontWeight: 'bold'
    },
    homeDashboard: {
        height: 220,
        width: 220,
        marginTop: 20,
        borderRadius: 150,
        backgroundColor: 'white'
    }
})