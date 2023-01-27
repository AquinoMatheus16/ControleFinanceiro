import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerMain: {
        width: 300,
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',

        // shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 1.84,
        // elevation: 2,        
    },

    texto: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 10,
        width: '100%'
    },

    textoTitulo: {
        fontSize: 22,
        width: '80%',
        textAlign: 'center',
        borderBottomColor: '#000000',
        marginBottom: 25,
        color: '#1b6dc1'
    }
});