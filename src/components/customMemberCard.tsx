import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomFriendCard = ({ avatar, userName, displayName, onlineState, msgNum, onPress, handlePress, navigatePress}) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#202020'}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <View style = {{position: 'relative'}}>
                        <TouchableOpacity onPress = {navigatePress}>
                        <Image 
                            source = {avatar}
                            style = {styles.avatar}
                        />
                        </TouchableOpacity>
                        <View style = {styles.unreadMsg}/>
                    </View>
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                            {userName}
                        </Text>
                        <View style = {{flexDirection:'row', alignItems: 'center'}}>
                            {onlineState && <View style = {{width: vw(1.7), height: vw(1.7), backgroundColor: '#53FAFB', borderRadius: vw(2), marginRight: vw(1)}}/>}
                            <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: '#565656'}}>
                                {displayName}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.info}>
                    <View style = {styles.online}>
                    <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6 8C3.72408 8 1.70013 9.02042 0.41157 10.604C0.134238 10.9448 -0.00442801 11.1152 0.000107768 11.3455C0.00361208 11.5235 0.12394 11.7479 0.274711 11.8578C0.469861 12 0.740295 12 1.28116 12H10.7188C11.2597 12 11.5301 12 11.7253 11.8578C11.8761 11.7479 11.9964 11.5235 11.9999 11.3455C12.0044 11.1152 11.8658 10.9448 11.5884 10.604C10.2999 9.02042 8.27592 8 6 8Z" fill="#606060"/>
                        <Path d="M6 6C7.78428 6 9.23072 4.65685 9.23072 3C9.23072 1.34315 7.78428 0 6 0C4.21572 0 2.76928 1.34315 2.76928 3C2.76928 4.65685 4.21572 6 6 6Z" fill="#606060"/>
                    </Svg>

                    </View>
                </View>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: vw(5),
        flexDirection: 'row',
        width: vw(90),
        aspectRatio: 320/64,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: vw(2.8),
        paddingLeft: vw(0),
        paddingRight: vw(5),
        marginBottom: vw(2.8),
        // marginLeft: vw(5),
        backgroundColor: '#202020'
    },
    avatar: {
        marginLeft: vw(5),
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8)
    },
    unreadMsg: {
        position: 'absolute',
        bottom: vw(1),
        right: vw(2.5),
        backgroundColor: '#FF5252',
        width: vw(2.2),
        height: vw(2.2),
        borderRadius: vw(2),
        borderWidth: vw(0.6),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(1.7),
        borderColor: 'black',
    },
    info: {
        width: vw(8.3),
        height: vw(8.3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    online: {
        width: vw(8.3),
        height: vw(8.3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        borderRadius: vw(5),
    }
});

export default CustomFriendCard;

