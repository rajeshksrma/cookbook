import React from 'react';
import { SafeAreaView, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '@screenStyles/LoginScreenStyle'
import CustomHeader from '@components/CustomHeader';
import firebaseApp from '@database/FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage'


export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false

    }
  }

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Please enter email and password.')
    } else {
      this.setState({ isLoading: true, })
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          AsyncStorage.setItem('isUserActive', 'true')
          this.setState({
            isLoading: false,
            email: '',
            password: ''
          })
          this.props.navigation.navigate('Home')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }


  render() {
    const { email, password } = this.state
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader setTitle={'LOGIN'} hideBack={true} />
        <View style={styles.mainView}>

          <Text style={styles.headlineText}>{'Log-In'}</Text>

          <TextInput style={styles.textInput}
            placeholder={'email Address'}
            value={email}
            onChangeText={(v) => this.setState({ email: v })} />

          <TextInput style={styles.textInput}
            placeholder={'Password'}
            value={password}
            onChangeText={(v) => this.setState({ password: v })}
            secureTextEntry={true} />

          <TouchableOpacity

            onPress={() => this.userLogin()}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>

          </TouchableOpacity>

          <Text onPress={() => navigation.navigate('Home')} style={styles.guestTextStyle}>{'GUEST LOGIN'}</Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={styles.signupTextStyle}>{"Don't have account? Sign Up"}</Text>


        </View>
      </SafeAreaView>
    )
  }
}

