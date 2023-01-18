import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerMain: {
        backgroundColor: 'gray',
        alignItems: 'center',
        flex: 1
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
        alignItems: 'center'
    },

    textInput: {
        width: '100%',
        padding: 10,
        color: '#FFFFFF',
    },

    containerFlatList: {
        // marginBottom: 225,
        // width: 300,
        height: 450
        // marginBottom: 310
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        width: 300,
        justifyContent: "space-between",
        marginTop: -20
    },

    navTouch: {
        backgroundColor: '#0C609C',
        width: 80,
        height: 30,
        marginTop: 30,
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
        fontSize: 14
    },

    scroll: {
        width: "80%",
        height: 90,
        flexDirection: "row",
        backgroundColor: 'black'
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