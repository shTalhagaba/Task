import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Colors from '../../common/Colors';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const AlbumList = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}
            key={props.key}
        >
            <View style={styles.containerView}>
                <Image
                    source={{ uri: props.item.thumbnailUrl }}
                    resizeMode="cover"
                    style={{
                        height: 140,
                        width: 140,
                    }}
                />
            </View>
            <View style={styles.mainView}>
                <View style={{}}>
                    <Text style={styles.title}
                        numberOfLines={1}
                    >{props.item.thumbnailUrl} </Text>
                </View>
                {/* <View style={styles.subView}>
                    <Text style={styles.description}>Album Owner: {props.item.owner} </Text>
                    <Text style={styles.description}>Email: {props.item.email} </Text>
                    <Text style={styles.description}>Website: {props.item.website} </Text>

                </View> */}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 40,
        height: 140,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
        borderWidth: 0.5,
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 5,
        flexDirection: 'row'
    },
    containerView: {
        width: screenWidth / 2,
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 7,
        flex: 1.5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    mainView: {
        flex: 2,
        margin: 7,
        flexDirection: 'column'
    },
    subView: {
        marginTop: 10
    },
    flatlist: {
        padding: 20,
    },
    officeList: {
        width: '92%',
        height: 83,
        borderColor: Colors.black,
        borderWidth: 1.5,
        borderRadius: 6,
        alignSelf: 'flex-end',
        marginBottom: 15,
    },
    imgContainer: {
        width: 58,
        height: 58,
        backgroundColor: "yellow",
        borderColor: Colors.black,
        borderWidth: 2,
        borderRadius: 50,
        position: 'absolute',
        left: -28,
        top: 10.5
    },
    title: {
        fontSize: 18,
        marginTop: 7,
    },
    description: {
        fontSize: 12,
        marginTop: 5,
        color: 'rgba(0,0,0,0.5)'
    },
    rightIcon: {
        position: 'absolute',
        right: 15,
        marginTop: 29
    },
    officeIcon: {
        alignSelf: 'center',
        marginTop: 8
    },
});
export default AlbumList

