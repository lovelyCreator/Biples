import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomTopCards = ({ avatar, avatarName, avatarContent, joinState, radius, handlePress, onPress }) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress = {onPress}
                    >
                    <Image 
                        source = {avatar}
                        style = {styles.avatar}
                    />
                    </TouchableOpacity>
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(4.44), color: 'white'}}>
                            {avatarName}
                        </Text>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(3.3), color: '#565656'}}>
                            {avatarContent}
                        </Text>
                    </View>
                </View>
                {
                    joinState ? 
                    <View style = {{ width: vw(20.8), aspectRatio: 75/30, borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', borderWidth: vw(1), borderColor: '#53FAFB' }}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: 'black'}}>
                            Joined
                        </Text>
                    </View>
                    :
                    <View style = {{ width: vw(16.4), aspectRatio: 59/31, borderRadius: vw(5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderWidth: vw(0.3), borderColor: '#595959' }}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: '#595959'}}>
                            Join
                        </Text>
                    </View>
                }
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: vw(4.44),
        flexDirection: 'row',
        width: vw(90),
        aspectRatio: 320/64,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: vw(2.8),
        paddingLeft: vw(3.6),
        paddingRight: vw(3.6),
        marginBottom: vw(2.8),
        marginLeft: vw(5)
    },
    avatar: {
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8),
        borderRadius: vw(2.8)
    },
    avatarInfo: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: vw(12.5)
    },
});

export default CustomTopCards;

