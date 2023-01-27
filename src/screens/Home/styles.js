import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    homeContainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
    },

    homeDashboardtopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1b6dc1',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    homeContainerMain: {
        height: 400,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    homeTexto: {
        fontSize: 25,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    homeTexto2: {
        width: '90%',
        marginTop: 25,
        fontSize: 22,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        textAlign: 'center',
        paddingBottom: 10
    },

    homeNumero: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: '700',
    },

    homeDivInput: {
        width: '90%',
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
    },

    homeTouchableOpacity: {
        width: 200,
        height: 50,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0D0C0C'
    },

    homeTextoTouchable: {
        fontSize: 17,
        color: 'black'
    },

    dash: {
        height: 100,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },

    dash1: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 30,
    },

    titleDash: {
        color: "black",
        position: "absolute",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        fontSize: 10,
        fontWeight: '900',
        color: '#FFFFFF',
    },

    titleDash2: {
        color: '#FFFFFF',
        marginTop: 5

    },

    titleDash3: {
        flexDirection: 'column',
        alignItems: 'center',
    }

});