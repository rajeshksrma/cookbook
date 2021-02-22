import {StyleSheet} from 'react-native';
import {vh, vw, getScreenWidth} from '@utils/dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainView: {
        flex: 1,
        padding: vw(20),
        backgroundColor: 'white'
    },
    imageView:{
        width: getScreenWidth(),
        height: vh(200),
    },
    cookingTimeViewstyle: {
        // height: vh(50),
        width: '100%',
        flexDirection: 'row'
    },
    textHeadingStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: vw(5),
        marginTop: vh(20)
    },
    usernameStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: vw(5)
    },
    textStyle: {
        fontSize: 18,
        padding: vw(5),
        // marginVertical: vh(5)
    },
    cookingTimetStyle: {
        fontSize: 18,
        padding: vw(5),
        marginTop: vh(20)
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
        marginTop: vh(20),
        padding: vw(10)
    },
    flatListView:{
        flex:1,
        marginVertical:vw(5)
        
    },
    dividerStyle:{
        height:vh(1), 
        width:'100%', 
        backgroundColor:'gray', 
        marginVertical:vh(10)
    },
    indicatorStyle:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    reviewsViewStyle:{
        padding:vh(10),
        marginVertical:vh(5),
        borderRadius:vw(10),
        backgroundColor:'#f3f1f1'
    }
})