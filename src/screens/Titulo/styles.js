import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        backgroundColor: '#0C609C',
        alignItems: 'center'
    },

    textoTitulo: {
        width: '80%',
        marginTop: 30,
        fontSize: 22,
        textAlign: 'center',
        paddingBottom: 10,
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    touchableOpacity: {
        width: 190,
        height: 45,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },

    touchableOpacityTexto: {
        fontSize: 22
    },

    containerInput: {
        width: '80%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        alignItems: 'center'
    },

    textoTituloInput: {
        color: '#FFFFFF',
        fontSize: 22,
        marginTop: 20
    },

    textInput: {
        width: '100%',
        padding: 10,
        color: '#FFFFFF',
    },

    containerFlatList: {
        // marginBottom: 225,
        // width: 300,
        // height: 390
        marginBottom: 274
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        width: 300,
        justifyContent: "space-between"
    },

    navTouch: {
        backgroundColor: 'gray',
        width: 80,
        height: 30,
        marginTop: 10,
        marginRight: 5,
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        padding: 5
    },

    navTexto: {
        color: '#FFFFFF',
        fontSize: 15
    },

    scroll: {
        width: "80%",
        height: 90,
        flexDirection: "row",
        backgroundColor: 'black'
    },

    nada: {
        width: 300,
        height: 100
    },

    card: {
        width: 380
    }

});