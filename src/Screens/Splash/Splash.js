import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    StatusBar
} from 'react-native';
import styles from './styles';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.getAlbumList()
    }

    getAlbumList = () => {

        //var apiUrl = BASE_URL + getLanguages;
        var apiUrl = "https://jsonplaceholder.typicode.com/albums";

        fetch(apiUrl, { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {

                var languageArray = []
                console.log("List : ", JSON.stringify(responseJson))
                if (responseJson.length > 0) {
                    setTimeout(() => {
                        this.props.navigation.replace('Home', { albumList: responseJson })
                    }, 1000);
                }
            })
            .catch(
                (error) => console.log(apiUrl + " dd" + error)
            ); //to catch the errors if any
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => this.props.navigation.replace('Home')}>
                        <Text style={styles.logoText}>Task</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Splash