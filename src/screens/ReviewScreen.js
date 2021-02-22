import React from 'react';
import {SafeAreaView,TouchableOpacity, Text, Alert, TextInput, View} from 'react-native';
import styles from '@screenStyles/ReviewScreenStyle';
import CustomHeader from '@components/CustomHeader';
import firebaseApp from '@database/FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage'


export default class ReviewScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            review: '',
            uid: '',
            isUserActive: false,
            displayName: '',
        }
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
    }
    onAddReview() {
        const { review, uid, displayName} = this.state
        const { route } = this.props
        const { key } = route.params;
        const _this = this
        var postListRef = firebaseApp.database().ref('cookbook/dishes/review/'+key);
        postListRef.push(
            {review,  uid, displayName}
        )
            .then((data) => {
                _this.readReviewData()
            }).catch((error) => {
                console.log('error ', error)
            })
    }
    readReviewData() {
        firebaseApp.database().ref('cookbook/dishes/review/').on('value', function (snapshot) {
            // console.log('Response = ', JSON.stringify(snapshot.val()))
        });
    }

onSubmit() {
    const { review } = this.state
    const {navigation} = this.props
    if(review.trim()===''){
        alert('Please add valid input')
        return  } 
        else {
    this.onAddReview()
    navigation.goBack()
        }
}

render() {

    const {review} = this.state
   
    return (
        <SafeAreaView style={styles.container}>

            <CustomHeader setTitle={'ADD REVIEW'}
                onBackPress={() => this.props.navigation.goBack()}
                hideBack={false}/>
            
                <View style={styles.mainView}>
               
                  <Text style={styles.headingTextStyle}>{'Add Review'}</Text>
                    <TextInput multiline={true} style={styles.textInputStyle}
                        placeholder={'Add Review'}
                        value={review}
                        onChangeText={(v) => this.setState({ review: v })}
                    />
                <TouchableOpacity onPress={() => this.onSubmit()} style={styles.buttonStyle}>
                
                        <Text style={styles.buttonTextStyle}>{'SUBMIT'}</Text>
            
                </TouchableOpacity>
                </View>
            
        </SafeAreaView>
    )
}
}

