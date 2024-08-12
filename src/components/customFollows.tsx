import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomFollows = ({ avatar, avatarName, avatarContent, followState, onPress, handlePress, navigatePress}) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#202020'}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress = {navigatePress}>
                    <Image 
                        source = {avatar}
                        style = {styles.avatar}
                    />
                    </TouchableOpacity>
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                            {avatarName}
                        </Text>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.8), color: '#565656'}}>
                            {avatarContent}
                        </Text>
                    </View>
                </View>
                {
                    followState ? 
                    <TouchableOpacity 
                        style = {{ width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: '#53FAFB10', justifyContent: 'center', alignItems: 'center',  }}
                        onPress = {onPress}
                    >
                        <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M14.5 7.5C14.5 11.0899 11.5899 14 8 14C7.1354 14 6.31022 13.8312 5.55563 13.5247C5.41121 13.4661 5.339 13.4368 5.28063 13.4237C5.22353 13.4109 5.18128 13.4062 5.12276 13.4062C5.06294 13.4062 4.99778 13.417 4.86747 13.4388L2.29788 13.867C2.0288 13.9119 1.89426 13.9343 1.79697 13.8926C1.71182 13.856 1.64396 13.7882 1.60744 13.703C1.56571 13.6057 1.58813 13.4712 1.63298 13.2021L2.06124 10.6325C2.08296 10.5022 2.09382 10.4371 2.09382 10.3772C2.09381 10.3187 2.08913 10.2765 2.07633 10.2194C2.06325 10.161 2.03392 10.0888 1.97527 9.94437C1.66881 9.18978 1.5 8.3646 1.5 7.5C1.5 3.91015 4.41015 1 8 1C11.5899 1 14.5 3.91015 14.5 7.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style = {{ width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: '#53FAFB10', justifyContent: 'center', alignItems: 'center',  }}
                        onPress = {onPress}
                    >
                        <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M14.5 7.5C14.5 11.0899 11.5899 14 8 14C7.1354 14 6.31022 13.8312 5.55563 13.5247C5.41121 13.4661 5.339 13.4368 5.28063 13.4237C5.22353 13.4109 5.18128 13.4062 5.12276 13.4062C5.06294 13.4062 4.99778 13.417 4.86747 13.4388L2.29788 13.867C2.0288 13.9119 1.89426 13.9343 1.79697 13.8926C1.71182 13.856 1.64396 13.7882 1.60744 13.703C1.56571 13.6057 1.58813 13.4712 1.63298 13.2021L2.06124 10.6325C2.08296 10.5022 2.09382 10.4371 2.09382 10.3772C2.09381 10.3187 2.08913 10.2765 2.07633 10.2194C2.06325 10.161 2.03392 10.0888 1.97527 9.94437C1.66881 9.18978 1.5 8.3646 1.5 7.5C1.5 3.91015 4.41015 1 8 1C11.5899 1 14.5 3.91015 14.5 7.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                }
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
        paddingLeft: vw(2),
        paddingRight: vw(2),
        marginBottom: vw(2.8),
        marginLeft: vw(5)
    },
    avatar: {
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8)
    }
});

export default CustomFollows;

