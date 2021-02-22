import React from 'react';
import { SafeAreaView, Alert, Text, TextInput, ActivityIndicator, View } from 'react-native';
import CustomHeader from '@components/CustomHeader';
import styles from '@screenStyles/SignupScreenStyle';
import firebaseApp from '@database/FirebaseConfig'

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    registerUser = () => {
        if(this.state.email === '' && this .state.password === ''){
            Alert.alert('Enter details to signup!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebaseApp.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: this.state.displayName
                })
                alert('User registered successfully!')
                this.setState({
                    isLoading: false,
                    displayName: '',
                    email: '',
                    password: ''
                })
                this.props.navigation.navigate('Login')
            })
            .catch(error => this.setState({ errorMessage: error.message}))
        }
    }

    render() {
        const {displayName, email, password} = this.state

        if(this.state.isLoading){
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return (
            <SafeAreaView style={styles.container}>
                <CustomHeader setTitle={'SIGNUP'}
                        onBackPress={ ()=>this.props.navigation.goBack()}
                        hideBack={false}/>
               
                <View style={styles.mainView}>
                
                    <Text style={styles.headlineText}>Create Your Account</Text>

                    <TextInput style={styles.textInput} 
                    placeholder={'Name'}
                    value={displayName}
                    onChangeText={(v) => this.setState({ displayName: v })}
                    />

                    <TextInput style={styles.textInput} 
                    placeholder={'email Address'}
                    value={email}
                    onChangeText={(v) => this.setState({ email: v })}
                    />

                    <TextInput style={styles.textInput} 
                    placeholder={'Password'}
                    value={password}
                    onChangeText={(v) => this.setState({ password: v })}
                    secureTextEntry={true}
                    />
                    <Text onPress={() => this.props.navigation.goBack()} style={styles.textStyle}>Already have Account? Login!</Text>
                    <View style={styles.buttonStyle}>
                        <Text onPress={() => this.registerUser()} style={styles.buttonTextStyle}>SIGNUP</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

