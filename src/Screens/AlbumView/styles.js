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
        height: screenHeight / 4,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 1
    },
    inner2Container: {
        width: '90%',
        height: screenHeight / 8,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 1
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
    viewStyle: {
        flex: 1.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTextStyle: {
        fontSize: 13,
        color: '#000',
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8
    },
    view2Style: {
        flex: 3.5,
        backgroundColor: 'rgba(0,0,0,0.15)',
        margin: 7,
        borderRadius: 10
    },
    view3Style: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view3TextStyle: {
        fontSize: 13,
        color: '#000',
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8
    }
});
