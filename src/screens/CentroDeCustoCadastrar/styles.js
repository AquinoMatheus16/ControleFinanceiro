import { StyleSheet } from 'react-native';

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

    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        padding: 5,
        width: '80%',
        marginBottom: 5,
        color: '#FFFFFF',
        textAlign: 'center'
    },

    texto: {
        fontSize: 22,
        color: '#FFFFFF',
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

    textError: {
        // alignSelf: 'flex-start',
        color: '#F32020',
        marginBottom: 5
    },
});