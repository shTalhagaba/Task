import { Platform, StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    heading: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    innerContainer: {
        width: '90%',
        height: 300,
        backgroundColor: '#43adb5',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 40
    },
    totalCount: {
        padding: 15,
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 18
    },
    box: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 100
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    btnTxt: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 2
    },

});
