import {StyleSheet} from 'react-native';
import {vh, vw} from '@utils/dimension'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainView: {
        flex:1,
        justifyContent: 'center',
        margin: vw(10),
        paddingHorizontal: vh(30),
        backgroundColor: 'white'
    },
    imageBgStyle:{
        height: vh(200),
        backgroundColor: 'blue',
        borderRadius: vw(10),
        resizeMode:'cover',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        
    },
        headlineText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'gray',
            marginTop: vh(15),
            marginBottom: vh(5)
        },
        textInput: {
            width: '100%',
            fontSize: 17,
            borderBottomWidth: vw(1),
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            marginVertical: vh(5),
            color: 'gray',
        },
        textStyle: {
            color: 'gray',
            fontSize: 15,
            fontWeight: 'bold',
            marginVertical: vh(30),
        },
        buttonTextStyle: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
        },
        buttonStyle: {
            width: '100%',
            height: vh(50),
            backgroundColor: 'orange',
            borderRadius: vw(15),
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: vh(20)
        },
    })