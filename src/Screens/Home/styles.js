import { Platform, StyleSheet, Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    heading: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10
    },
    innerContainer: {
        width: '90%',
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    totalCount: {
        padding: 15,
        fontWeight: 'bold',
        color: "#000",
        fontSize: 18,
        backgroundColor: '#fff'
    },
    box: {
        marginTop: 20,
        alignItems: 'center',
        flex: 1
    },
    btn: {
        width: 140,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 2,
        color: "#000",
    },
    dropDownContainer: {
        height: 40,
        marginTop: 10,
        borderRadius: 7,
    },
    dropDownItem: {
        justifyContent: 'flex-start',
    },
    albumList: {
        padding: 10,
    },
});
