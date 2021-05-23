import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
//Local imports
import styles from './styles';

import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/DeclarationTypes/MultiLang';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}  >

                    <Text style={styles.heading}>Counter App</Text>

                    <View style={styles.innerContainer}>
                        <Text style={styles.totalCount}>Total Count:</Text>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.btn}
                                onPress={() => this.props.setDECREMENT()}
                            ><Text style={styles.btnTxt}>--</Text></TouchableOpacity>
                            <View style={{ width: 60, height: 40, backgroundColor: 'grey', alignSelf: 'center', borderRadius: 10, marginLeft: 10, marginRight: 10 }}><Text style={{ textAlign: 'center', marginTop: 8 }}>{this.props.counter}</Text></View>
                            <TouchableOpacity
                                onPress={() => this.props.setINCREMENT()}
                                style={styles.btn}><Text style={styles.btnTxt}>+</Text></TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = ({ Language }) => ({
    counter: Language.counter
})

const mapDispatchToProps = (dispatch) => ({
    setINCREMENT: () => dispatch({ type: Actions.INCREMENT }),
    setDECREMENT: () => dispatch({ type: Actions.DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);