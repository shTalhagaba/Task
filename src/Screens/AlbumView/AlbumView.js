import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';

//Local imports
import styles from './styles';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/DeclarationTypes/MultiLang';
import AlbumDetailList from "../../components/ListsItems/AlbumDetailList";

class AlbumView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            selected: '',
            albumList: [
                {
                    icon: 'guitar',
                    title: 'Album 1',
                    owner: 'Owener',
                    email: 'sample1@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 2',
                    owner: 'Owener',
                    email: 'sample2@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 3',
                    owner: 'Owener',
                    email: 'sample3@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 4',
                    owner: 'Owener',
                    email: 'sample4@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 5',
                    owner: 'Owener',
                    email: 'sample5@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 6',
                    owner: 'Owener',
                    email: 'sample6@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 7',
                    owner: 'Owener',
                    email: 'sample7@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 8',
                    owner: 'Owener',
                    email: 'sample8@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 9',
                    owner: 'Owener',
                    email: 'sample9@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
                {
                    icon: 'guitar',
                    title: 'Album 9',
                    owner: 'Owener',
                    email: 'sample9@example.com',
                    status: 'ok',
                    website: 'www.example.com'
                },
            ]
        }
    }

    onPressAlbumList(data) {
        //   this.props.navigation.navigate("AlbumView", { item: data })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Photo Album App</Text>

                <View style={styles.inner2Container}>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => { }}
                        ><Text style={styles.btnTxt}>Album Title</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.viewStyle}>
                        <Text style={styles.viewTextStyle}>Previous</Text>
                    </View>
                    <View style={styles.view2Style}></View>
                    <View style={styles.view3Style}>
                        <Text style={styles.view3TextStyle}>Next</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}  >

                    <View >
                        <FlatList
                            numColumns={2}
                            style={styles.albumList}
                            data={this.state.albumList}
                            renderItem={({ item }) => (
                                <AlbumDetailList
                                    item={item}
                                    onPress={() => this.onPressAlbumList(item)}
                                />
                            )}
                            keyExtractor={item => item.id}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);