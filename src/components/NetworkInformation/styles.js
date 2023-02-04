import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerComponent: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3846D4',
        position: 'absolute',
    },

    conatinerIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerComponentUnconnected: {
        width: '80%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B60D0D',
        position: 'absolute',
        borderRadius: 10
    },

    textMessageConnection: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 10
    },

    modal: {
        width: '100%',
        height: 10,
        justifyContent: 'flex-start',
        margin: 0,
    },

    modalUnconnected: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },

    containerReconecte: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }

});