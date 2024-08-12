import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomRoundedButton = ({ title, width, height, backgroundColor, color, fontSize, onPress, navigation }) => {
    const [backcolor, setBackColor] = useState('transparency')
    
    return (
            <TouchableOpacity
                style={[styles.button, { width:width, height:height, backgroundColor:backgroundColor, fontFamily:  title == 'Add Member' ?  'TT Firs Neus Trial Medium' : 'Neue-Metana', borderColor: title == 'Invite' ? "#53FAFB10": "#53FAFB", }]}
                onPress={onPress}
            >
                <View pointerEvents="none">
                    <Text 
                        style={{ 
                            color:color, 
                            fontSize:fontSize, 
                            fontFamily: 'TT Firs Neue Trial Medium'
                            
                        }}
                    >
                        &nbsp;&nbsp;{title}&nbsp;&nbsp;
                    </Text>
                </View>
                {
                    title == "Invite" && <Svg width={vw(3.1)} height={vw(2.8)} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M10 3.5L10 0.5M10 0.5H7M10 0.5L6 4.5M4.5 1.5H3.4C2.55992 1.5 2.13988 1.5 1.81901 1.66349C1.53677 1.8073 1.3073 2.03677 1.16349 2.31901C1 2.63988 1 3.05992 1 3.9V7.1C1 7.94008 1 8.36012 1.16349 8.68099C1.3073 8.96323 1.53677 9.1927 1.81901 9.33651C2.13988 9.5 2.55992 9.5 3.4 9.5H6.6C7.44008 9.5 7.86012 9.5 8.18099 9.33651C8.46323 9.1927 8.6927 8.96323 8.83651 8.68099C9 8.36012 9 7.94008 9 7.1V6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                    
                }
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        borderWidth: vw(0.3),
        flexDirection: 'row'
    }
});

export default CustomRoundedButton;

