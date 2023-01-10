import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#0C609C',
    },

    containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    // containerInput: {
    //     width: '80%',
    //     alignItems: 'center',
    //     padding: 10,
    //     borderRadius: 10
    // },

    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        padding: 5,
        width: '80%',
        marginBottom: 20,
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

    // Date
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
        // padding:5
    },

    iconInput: {
        marginLeft: 10,
        paddingRight: 20,
        paddingBottom: 5
    }

});