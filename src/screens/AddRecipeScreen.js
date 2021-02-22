import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import CustomHeader from '@components/CustomHeader';
import styles from '@screenStyles/AddRecipeStyle';
import firebaseApp from '@database/FirebaseConfig';
import * as ImagePicker from 'react-native-image-picker';
import { vh, vw } from '@utils/dimension'

export default class AddRecipeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dishName: '',
            cookingTime: '',
            ingredients: '',
            directions: '',
            imageUri: 'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png'
        }
    }
    getDishes() {
        const { dishName, cookingTime, ingredients, directions } = this.state
        return {
            dishName: dishName,
            cookingTime: cookingTime,
            ingredients: ingredients,
            directions: directions
        }
    }

    onAddRecipe() {
        const { dishName, cookingTime, ingredients, directions } = this.state
        if (dishName.trim() === '') {
            alert('Please add valid input')
            return
        }
        else if (cookingTime.trim() === '') {
            alert('Please add valid input')
            return
        }
        else if (ingredients.trim() === '') {
            alert('Please add valid input')
            return
        }
        else if (directions.trim() === '') {
            alert('Please add valid input')
            return
        }
        else {
            const { route, navigation } = this.props
            const { key } = route.params;
            const _this = this
            var postListRef = firebaseApp.database().ref('cookbook/dishes/');
            postListRef.child(key).push(
                _this.getDishes()
            )
                .then((data) => {
                    navigation.goBack()
                }).catch((error) => {
                    console.log('error ', error)
                })
        }
    }
    onCameraSelected() {
        ImagePicker.launchCamera(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: vh(200),
                maxWidth: vw(200),
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    this.setState({ response: response, imageUri: response.uri })
                }
            })
    }
    onLibrarySelected() {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: vh(200),
                maxWidth: vw(200),
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    this.setState({ response: response, imageUri: response.uri })
                }
            })
    }
    renderCustomHeader() {
        const { navigation } = this.props
        return (<CustomHeader setTitle='Add Recipe'
            onBackPress={() => navigation.goBack()}
            hideBack={false} />)
    }
    renderImageView() {
        const { imageUri } = this.state
        return (
            <TouchableOpacity onPress={() => this.onLibrarySelected()}>
                <ImageBackground source={{ uri: imageUri }} style={styles.imageBgStyle} />
            </TouchableOpacity>
        )
    }
    renderDishData() {
        const { dishName, cookingTime, ingredients, directions } = this.state

        return (
            <View style={styles.mainView}>
                {this.renderImageView()}
                <Text style={styles.headlineText}>{'Dish Name'}</Text>
                <TextInput style={styles.textInput}
                    placeholder={'Add Dish Name'}
                    value={dishName}
                    onChangeText={(v) => this.setState({ dishName: v })}
                />
                <Text style={styles.headlineText}>{'Cooking Time'}</Text>
                <TextInput style={styles.textInput}
                    placeholder={'Add Cooking Time'}
                    value={cookingTime}
                    onChangeText={(v) => this.setState({ cookingTime: v })}
                />
                <Text style={styles.headlineText}>{'Ingredients'}</Text>
                <TextInput multiline={true} style={styles.textInput}
                    placeholder={'Add Ingredients'}
                    value={ingredients}
                    onChangeText={(v) => this.setState({ ingredients: v })}
                />
                <Text style={styles.headlineText}>{'Directions'}</Text>
                <TextInput multiline={true} style={styles.textInput}
                    placeholder={'Add Directions'}
                    value={directions}
                    onChangeText={(v) => this.setState({ directions: v })}
                />
                <TouchableOpacity onPress={() => this.onAddRecipe()} style={styles.buttonStyle}>

                    <Text style={styles.buttonTextStyle}>{'Add Recipe'}</Text>

                </TouchableOpacity>
            </View>
        )
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                {this.renderCustomHeader()}
                <ScrollView>
                    {this.renderDishData()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}