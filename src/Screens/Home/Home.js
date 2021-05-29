import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';

//Local imports
import styles from './styles';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/DeclarationTypes/MultiLang';
import AlbumList from "../../components/ListsItems/AlbumList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            selected: '',
            isLoading: true,
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
            ]
        }
    }



    onPressAlbumList(data) {
        this.props.navigation.navigate("AlbumView", { item: data })
    }

    componentDidMount() {
        var albumList = this.props.route.params.albumList
        if (albumList.length > 0) {
            this.getAlbumList()
        }
    }

    getAlbumList = () => {
        var albumList = this.props.route.params.albumList

        //var apiUrl = BASE_URL + getLanguages;
        var apiUrl = "https://jsonplaceholder.typicode.com/photos";

        fetch(apiUrl, { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {

                var languageArray = []
                console.log("List : ", JSON.stringify(responseJson))
                if (responseJson.length > 0) {
                    var languageArray = albumList
                    albumList.map(itemValue => {
                        responseJson.map(responseItem => {
                            if (responseItem.albumId === itemValue.id) {
                                languageArray.push({
                                    userId: itemValue.userId,
                                    id: itemValue.id,
                                    title: itemValue.title,
                                    photoTitle: responseItem.title,
                                    url: responseItem.url,
                                    thumbnailUrl: responseItem.thumbnailUrl
                                });
                            }
                        })
                    })
                    alert(JSON.stringify(languageArray))
                    this.setState({
                        albumList: languageArray,
                        isLoading: false
                    })
                }
            })
            .catch(
                (error) => console.log(apiUrl + " dd" + error)
            ); //to catch the errors if any
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Photo Album App</Text>

                <View style={styles.innerContainer}>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => { }}
                        ><Text style={styles.btnTxt}>+ Add Album</Text></TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => { }}
                        ><Text style={styles.btnTxt}>Filter Album</Text></TouchableOpacity>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}  >

                    <View style={{ flex: 1, marginVertical: 10, }}>
                        {this.state.isLoading ?
                            <ActivityIndicator
                                style={{}}
                                size={50}
                                color={'red'}
                            />
                            :
                            <FlatList
                                style={styles.albumList}
                                data={this.state.albumList}
                                keyExtractor={(item, index) => String(index)}
                                renderItem={({ item, index }) => (
                                    <AlbumList
                                        key={index}
                                        item={item}
                                        onPress={() => this.onPressAlbumList(item)}
                                    />
                                )}
                            />
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);