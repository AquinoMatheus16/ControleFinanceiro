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
        marginBottom: 300
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        width: 300,
        justifyContent: "space-between"
    },

    navTouch: {
        backgroundColor: 'gray',
        width: 70,
        height: 30,
        marginTop:10,
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5
    },

    navTexto: {
        color: '#FFFFFF',
        fontSize: 15
    }

});