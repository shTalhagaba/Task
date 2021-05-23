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
        setTimeout(() => {
            this.props.navigation.replace('Home')
        }, 2000);
    }

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