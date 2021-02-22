import React from 'react';
import { ImageBackground, SafeAreaView, 
    Text, ActivityIndicator,
    TextInput, TouchableOpacity, View, Image, FlatList } from 'react-native';
import styles from '@screenStyles/DishesScreenStyle';
import CustomHeader from '@components/CustomHeader';
import firebaseApp from '@database/FirebaseConfig'
import AsyncStorage from '@react-native-community/async-storage'
import Plus from '@images/ic_plus.svg'


export default class DishesScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchData: [],
            uid: '',
            isUserActive: false,
            displayName: '',
            search: '',
            isLoading: true
        }
    }
   
componentDidMount() {
        AsyncStorage.getItem("isUserActive").then((value) => {
            if (value !== null) {
                this.setState({
                    isUserActive:true,
                    displayName: firebaseApp.auth().currentUser.displayName,
                    uid: firebaseApp.auth().currentUser.uid
                })
            }
        })
        this.readDishesData()
}
snapshotToArray = obj => {
    let returnArr = [];
  
    obj.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
  
    return returnArr;
  };

readDishesData=()=> {
    const {route} = this.props
    const { key } = route.params;
    const _this = this
    firebaseApp.database().ref('cookbook/dishes/'+key).on('value', function (snapshot) {
        // console.log('Response = ',JSON.stringify(_this.snapshotToArray(snapshot)))
        _this.setState({isLoading:false, data:_this.snapshotToArray(snapshot), searchData:_this.snapshotToArray(snapshot)})
    });
}

onSearch = text => {    
    this.setState({search:text})
    const {searchData} = this.state

    var result = searchData.filter(item => item.dishName
        .toLowerCase()
        .includes(text.toLowerCase())); 
    this.setState({ data: result });  
  };

render() {

    const {data, search, isUserActive, isLoading} = this.state
    const {navigation, route} = this.props
    const { name, key } = route.params;

    if(isLoading){
        return(
            <ActivityIndicator/>
        )
    }else{

    return (
        <SafeAreaView style={styles.container}>

            <CustomHeader setTitle={name}
                onBackPress={() => this.props.navigation.goBack()}
                hideBack={false}/>
            
                <View style={styles.mainView}>
                   <View style={styles.searchView}>
                        <TextInput style={styles.searchTextStyle}
                            placeholder={'Search'}
                            value={search}
                            onChangeText={(v) => this.onSearch(v)} />
                       
                   </View>
                    <FlatList
                        data = {data}
                        numColumns={2}
                        renderItem={({item}) =>
                            <View style={styles.flatListView}>
                                    <ImageBackground style={styles.imageBgStyle} source={{ uri: 'https://picsum.photos/200/300' }}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('DishDetailScreen',{item:item, cuisineID: key})} style={styles.imageBgShadowStyle}>
                                        <Text numberOfLines={1} style={styles.textStyle}>{item.dishName}</Text>
                                    </TouchableOpacity>
                                </ImageBackground>

                            </View>}
                        keyExtractor={(item,index)=>index}
                    />
                {isUserActive && <TouchableOpacity onPress={() => navigation.navigate('AddRecipe',{key:key})} style={styles.floatingButton}>
                <View style={styles.floatingButton}>
                <Plus width={24} height={24}  />
                </View>
                </TouchableOpacity>}
                </View>
            
        </SafeAreaView>
    )
    }
}
}

