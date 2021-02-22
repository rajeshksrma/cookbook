import {StyleSheet} from 'react-native';
import {vh, vw, getScreenWidth, getScreenHeight} from '@utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },
    
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    childView:{
        flex: 1
    },
    userText: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft : vw(10),
        color: 'black',

    },
    headlineText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: vw(20),
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',

    },
    flatListView:{
        flex:1,
        marginVertical:vw(5)
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
    imageBgShadowStyle:{
        backgroundColor: 'rgba(52, 52, 52, 0.6)', 
        justifyContent: 'center', 
        height:vh(200), 
        width:getScreenWidth() 
    },
    textStyle: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: vh(10),
        alignSelf: 'center',
        padding: vw(5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 1,
    },
    buttonTextStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonStyle: {
        width: '35%',
        height: vh(50),
        backgroundColor: 'orange',
        borderRadius: vw(15),
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: vh(10),

    },
    indicatorStyle:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})