import {StyleSheet} from 'react-native';
import {vh, vw, getScreenWidth, getScreenHeight} from '@utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },
    
    mainView: {
        flex: 1,
        margin: vw(20),
        padding: vw(10),
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headingTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: vw(20),
    },
    
    textInputStyle: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        color: 'gray',
        marginBottom: vh(50),
    
        
        
    },
    buttonTextStyle: {
        color: 'black',
        fontSize: 16,
    },
    buttonStyle: {
        width: '100%',
        height: vh(40),
        backgroundColor: 'orange',
        borderRadius: vw(15),
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: vh(10),

    },
})