import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity, Text, View, Image, FlatList } from 'react-native';
import styles from '@screenStyles/DishDetailScreenStyle';
import CustomHeader from '@components/CustomHeader';
import firebaseApp from '@database/FirebaseConfig'
import AsyncStorage from '@react-native-community/async-storage'


export default class DishDetailScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            reviewData: [],
            uid: '',
            isUserActive: false,
            displayName: '',
            isAllreadyReviewAdded: false,
            isLoading: true,
        }

        
    }

    componentDidMount() {

        this.getUserDetails();

    }

    getUserDetails(){
        AsyncStorage.getItem("isUserActive").then((value) => {
            if (value !== null) {
                this.setState({
                    isUserActive: true,
                    displayName: firebaseApp.auth().currentUser.displayName,
                    uid: firebaseApp.auth().currentUser.uid
                },()=>this.readDishesData())
            }else{
                this.readDishesData()
            }
        })
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

    readDishesData = () => {
        const { uid, reviewData} = this.state
        const { route } = this.props
        const { item, cuisineID } = route.params;
        const _this = this
        this.getUserDetails()
        firebaseApp.database().ref('cookbook/dishes/review/' + item.key).on('value', function (snapshot) {
            // console.log('Response = ', JSON.stringify(_this.snapshotToArray(snapshot)))
            _this.setState({isLoading: false, reviewData: _this.snapshotToArray(snapshot) },()=>_this.compareUser(reviewData))
        });

    }

    compareUser(arr) {
        const { isUserActive, uid} = this.state
        if (isUserActive) {
            let uid = firebaseApp.auth().currentUser.uid
            arr.map((item) => {
                if (item.uid == uid) {
                    this.setState({ isAllreadyReviewAdded: true })
                }

            })
        }
    }

    onAddReview() {
        const { isAllreadyReviewAdded } = this.state
        const { navigation, route } = this.props
        const { item } = route.params;

        if (isAllreadyReviewAdded)
            alert('You have already added review for this dish.')
        else
            navigation.navigate('ReviewScreen', { key: item.key })

    }
    render() {

        const { reviewData, isUserActive, isLoading } = this.state
        const { navigation, route } = this.props
        const { item } = route.params;
        if (isLoading) {
            return (<View style={styles.indicatorStyle}><ActivityIndicator size='small' color='#000' /></View>)
        }
        else {

            return (
                <SafeAreaView style={styles.container}>

                    <CustomHeader setTitle={item.dishName}
                        onBackPress={() => navigation.goBack()} hideBack={false} />
                    <ScrollView>
                        <View>
                            <Image style={styles.imageView} source={{ uri: 'https://picsum.photos/200/300' }} />
                            <View style={styles.mainView}>

                                <View style={styles.cookingTimeViewstyle}>
                                    <Text style={styles.textHeadingStyle}>{'Cooking Time:'}</Text>
                                    <Text style={styles.cookingTimetStyle}>{item.cookingTime} min</Text>
                                </View>
                                <View>
                                    <Text style={styles.textHeadingStyle}>{'Ingredients:'}</Text>
                                    <Text style={styles.textStyle}>{item.ingredients}</Text>
                                    <Text style={styles.textHeadingStyle}>{'Directions:'}</Text>
                                    <Text style={styles.textStyle}>{item.directions}</Text>
                                </View>

                                {isUserActive && <TouchableOpacity onPress={() => this.onAddReview()} style={styles.buttonStyle}>

                                    <Text style={styles.buttonTextStyle}>{'ADD REVIEW'}</Text>

                                </TouchableOpacity>}
                                <View >
                                    {reviewData.length>0 && <Text style={styles.textHeadingStyle}>{'Reviews:'}</Text>}
                                    <FlatList
                                        data={reviewData}
                                        renderItem={({ item }) =>
                                            <View style={styles.reviewsViewStyle}>
                                                <Text style={styles.usernameStyle}>{item.displayName} </Text>
                                                <Text style={styles.textStyle}>{item.review}</Text>
                                            </View>} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )
        }
    }
}

