import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Back from '@images/back.svg';
import SignOut from '@images/ic_signout.svg'
import {vh, vw, getScreenWidth} from '@utils/dimension'

export default class CustomHeader extends React.Component {

    render() {
        const { setTitle, onBackPress, hideBack, hideSignOut, onSignOutPress} = this.props
        return (
           <View style={{width:getScreenWidth(), height:vh(50), flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
               {!hideBack && <TouchableOpacity style={{position:'absolute', left:vw(10)}} onPress={onBackPress}>
                <Back width={20} height={20} />
               </TouchableOpacity>}
                <Text style={{fontSize:18, }}>{setTitle}</Text>
                {hideSignOut && <TouchableOpacity style={{position:'absolute', right:vw(10)}} onPress={onSignOutPress}>
                <SignOut width={20} height={20} />
               </TouchableOpacity>}
           </View>
        )
    }
}
