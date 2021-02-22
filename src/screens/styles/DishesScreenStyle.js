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
    searchView: {
        width:'100%', 
        height: vh(50) , 
        paddingHorizontal:vw(20),
        paddingBottom:vh(10),
        backgroundColor: 'white'
    },
    flatListView:{
        flex:1,
        marginHorizontal:vw(5),
        marginVertical: vh(5)
    },
    imageBgStyle:{
        height: vh(200),
        backgroundColor: 'blue',
        backgroundColor: 'white', 
        width: getScreenWidth()/2.1
    },
    imageBgShadowStyle:{
        backgroundColor: 'rgba(52, 52, 52, 0.3)', 
        justifyContent: 'flex-end', 
        height:vh(200), 
        width: getScreenWidth()/2.1 
    },
    textStyle: {
        color: 'white',
        fontSize: 22,
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
    searchTextStyle:{
        width: '100%', 
        height: '100%',
        paddingHorizontal: vw(10),
        borderWidth:vw(1),
        borderColor:'gray',
        borderRadius:vw(10)

    },
    floatingButton:{
        width: vw(60),
        height: vh(60),
        position: 'absolute',
        bottom: vw(0),
        padding: 3,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'orange',
        borderRadius: vw(35),
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vh(0) },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
   
})