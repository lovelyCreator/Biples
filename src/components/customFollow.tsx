import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomFollow = ({ avatar, avatarName, avatarContent, followState, onPress, handlePress, navigatePress}) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress = {navigatePress}
                    >
                    <Image 
                        source = {avatar}
                        style = {styles.avatar}
                    />
                    </TouchableOpacity>
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.3), color: 'white'}}>
                            {avatarName}
                        </Text>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: '#565656'}}>
                            {avatarContent}
                        </Text>
                    </View>
                </View>
                {
                    followState ? 
                    <TouchableOpacity style = {{ height: vw(8.33), aspectRatio: 70/30, borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', borderWidth: vw(1), borderColor: '#53FAFB' }}
                        onPress = {onPress}
                    >
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: 'black'}}>
                            Follow
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style = {{ height: vw(8.33), aspectRatio: 80/30, borderRadius: vw(5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderWidth: vw(0.3), borderColor: '#595959' }}
                        onPress = {onPress}
                    >
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: '#595959'}}>
                            Following
                        </Text>
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
        paddingLeft: vw(0),
        paddingRight: vw(0),
        marginBottom: vw(2.8),
        marginLeft: vw(5)
    },
    avatar: {
        width: vw(9.44),
        height: vw(9.44),
        marginRight: vw(2.8)
    },
    avatarInfo: {
        height: vw(9.44),
        justifyContent: 'space-around'
    }
});

export default CustomFollow;

