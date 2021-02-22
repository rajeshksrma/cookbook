import React from 'react';
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import styles from '@screenStyles/HomeScreenStyle';
import CustomHeader from '@components/CustomHeader';
import firebaseApp from '@database/FirebaseConfig'
import AsyncStorage from '@react-native-community/async-storage'


export default class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            uid: '',
            isUserActive: false,
            displayName: '',
            isLoading: true,
        }
    }
    signOut = () => {
        firebaseApp.auth().signOut().then(() => {
            AsyncStorage.removeItem('isUserActive')
            this.props.navigation.navigate('Login')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    componentDidMount() {
        const _this = this
        AsyncStorage.getItem("isUserActive").then((value) => {
            if (value !== null) {
                _this.setState({
                    isUserActive: true,
                    displayName: firebaseApp.auth().currentUser.displayName,
                    uid: firebaseApp.auth().currentUser.uid
                })
            }
        })
        this.readRecipeData()
    }

    snapshotToArray = obj => {
        let returnArr = [];
        obj.forEach(childSnapshot => {
            let item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });
        return returnArr;
    };

    readRecipeData = () => {
        const _this = this
        firebaseApp.database().ref('cookbook/').on('value', function (snapshot) {
            // console.log('Response = ', JSON.stringify(_this.snapshotToArray(snapshot)))
            _this.setState({ isLoading: false, data: _this.snapshotToArray(snapshot) })
        });
    }

    render() {
        const { data, isUserActive, isLoading } = this.state
        const { navigation } = this.props
        if (isLoading) {
            return (<View style={styles.indicatorStyle}><ActivityIndicator size='small' color='#000' /></View>)
        }
        else {
            return (
                <SafeAreaView style={styles.container}>

                    <CustomHeader setTitle={'Cuisine'}
                        onBackPress={() => {}}
                        hideBack={true} hideSignOut={true}
                        onSignOutPress={()=> this.signOut()}
                    />

                    <View style={styles.mainView}>
                        {/* <Text style={styles.userText}>Hello, {isUserActive ? displayName : 'Guest'}</Text> */}
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <View style={styles.flatListView}>
                                    <ImageBackground style={styles.imageBgStyle} source={{ uri: 'https://picsum.photos/200/300' }}>
                                        <TouchableOpacity activeOpacity={1} onPress={() => {
                                            navigation.navigate('DishesScreen', { name: item.name, key: item.key, item: item })
                                        }}
                                            style={styles.imageBgShadowStyle}>
                                            <Text style={styles.textStyle}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>}
                            keyExtractor={(item, index) => index}
                        />
                    </View>

                </SafeAreaView>
            )
        }
    }
}

