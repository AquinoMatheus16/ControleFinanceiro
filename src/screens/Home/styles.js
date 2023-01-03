import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


    homeScrollView: {
        flex: 1
    },

    homeContainer: {
        flex: 1,
        backgroundColor: '#0C609C',
        alignItems: 'center'
    },

    homeDashboard: {
        height: 220,
        width: 220,
        marginTop: 20,
        borderRadius: 150,
        backgroundColor: '#FFFFFF'
    },

    homeContainerMain: {
        height: 180,
        width: '80%',
        // backgroundColor: '#FF8800',
        marginTop: 20,
        alignItems: 'center'
    },

    homeTexto: {
        fontSize: 22,
        color: '#FFFFFF'
        // marginTop: 10
    },

    homeTexto2: {
        width: '90%',
        marginTop: 25,
        fontSize: 22,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        textAlign: 'center',
        paddingBottom: 10
    },

    homeNumero: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        paddingLeft: '35%',
        marginTop: 10,
        paddingBottom: 10,
        color: '#FFFFFF'
    },

    homeDivInput: {
        width: '90%',
        // backgroundColor: '#0909',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    homeInput: {
        height: 35,
        width: '90%',
        margin: 5,
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        paddingLeft: 15
    },

    homeIcon: {
        marginTop: 10,
        // backgroundColor: '#030099'
    },

    homeTouchableOpacity: {
        width: 200,
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 40,
        borderRadius: 15,
        alignItems: 'center'
    },

    homeTextoTouchable: {
        fontSize: 17,
        color: '#000000'
    }
});