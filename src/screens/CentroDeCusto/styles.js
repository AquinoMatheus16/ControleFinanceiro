import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center'
    },

    textoTitulo: {
        width: '80%',
        marginTop: 15,
        fontSize: 22,
        textAlign: 'center',
        paddingBottom: 10,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    touchableOpacity: {
        width: 150,
        height: 40,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },

    touchableOpacityTexto: {
        fontSize: 20
    },

    containerInput: {
        width: '80%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        alignItems: 'center',
    },

    textInput: {
        width: '100%',
        padding: 10,
        color: '#FFFFFF',
    },

    containerFlatList: {
        height: 450
    },

    containerTopo: {
        width: '100%',
        minHeight: '40%',
        backgroundColor: '#0C609C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: "space-evenly"
    },


});