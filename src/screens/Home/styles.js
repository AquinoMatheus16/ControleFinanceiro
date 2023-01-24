import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    homeContainer: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },

    homeDashboardtopo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#0C609C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    homeContainerMain: {
        height: '60%',
        width: '100%',
        // backgroundColor: '#FF8800',
        marginTop: 20,
        alignItems: 'center'
    },

    homeTexto: {
        fontSize: 25,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        // marginTop: 10
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
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
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
        // backgroundColor: "green",
        marginTop: 30,
    },

    // dash1: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     // backgroundColor: "green",
    //     width: '33%',
    //     height: 300,
    // },

    // dash2: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     // backgroundColor: "gray",
    //     width: '33%',
    //     height: 300,
    // },
    // dash3: {
    //     alignItems: 'center',
    //     backgroundColor: "red",
    //     width: '33%',
    //     height: 200,
    //     marginBottom: 20
    // },
    titleDash: {
        color: "black",
        position: "absolute",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        fontSize: 10,
        fontWeight: '900',
        color: '#FFFFFF',
        // backgroundColor: "gray",
    },
    
    titleDash2: {
        color: '#FFFFFF',
        
    },
    
    titleDash3: {
        flexDirection: 'column',
        alignItems: 'center',
        
    }

});