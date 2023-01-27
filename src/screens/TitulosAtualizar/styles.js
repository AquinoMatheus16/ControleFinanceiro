import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#1b6dc1',
    },

    containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        padding: 5,
        width: '80%',
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'center'
    },

    texto: {
        fontSize: 22,
        color: '#FFFFFF',
        marginTop: 10
    },

    textoTituloSelect: {
        fontSize: 22,
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 10

    },

    touchableOpacity: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 50
    },

    textDate: {
        fontSize: 25,
        color: '#5EFF00',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
    },

    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },

    containerDataInput: {
        flexDirection: 'row',
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    textInputDate: {
        color: '#FFFFFF'
    },

    iconInput: {
        marginLeft: 10,
        paddingRight: 20,
        paddingBottom: 5
    },

    touchableOpacity2: {
        flexDirection: 'row'
    },

    textError: {
        color: '#F32020',
        marginBottom: 5
    },
});