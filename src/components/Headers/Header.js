import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import Colors from '../../common/Colors';



export const Header = (props) => (

    <View style={{ ...styles.container, ...props.containerStyle }}>
        <View style={styles.textView}>
            <Text style={{ ...styles.title, ...props.titleStyle }}>{props.title}</Text>
        </View>
    </View>

)

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: Colors.goldenYellow,
        justifyContent: "center",
        alignSelf: 'center',

        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 28,
    },
    icons: {
        marginLeft: '5%',
        marginTop: 30,
        alignSelf: 'center',
    },
    textView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: '-5%'
    },
    RightIconContainer: {
        alignSelf: 'center',
        marginRight: 5
    },
    rightIcon: {
        marginRight: 12
    },
});

