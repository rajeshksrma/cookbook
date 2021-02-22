import {StyleSheet} from 'react-native';
import {vh, vw, getScreenWidth, getScreenHeight} from '@utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: vw(10),
        paddingHorizontal: vh(30),
        backgroundColor: 'white'
    },
        headlineText: {
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: vh(30),
            color: 'gray',
    
        },
        textInput: {
            width: '100%',
            height: vh(50),
            fontSize: 17,
            borderBottomWidth: 1,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            // backgroundColor : 'blue',
            marginVertical: vh(7),
            color: 'gray',
            padding: vw(10),
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
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: vh(10),
    
        },
    })