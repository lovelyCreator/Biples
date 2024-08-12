import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomButton = ({ navigation, title, width, height, backgroundColor, color, fontSize, onPress, image }) => {
    const [backcolor, setBackColor] = useState('transparency')
    const avatar = [ 
        <Svg width={vw(5.6)} height={vw(5.8)} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.33329 14.0352C2.3283 13.3625 1.66663 12.2168 1.66663 10.9167C1.66663 8.96369 3.15955 7.35941 5.06641 7.18281C5.45647 4.81011 7.51683 3 9.99996 3C12.4831 3 14.5434 4.81011 14.9335 7.18281C16.8404 7.35941 18.3333 8.96369 18.3333 10.9167C18.3333 12.2168 17.6716 13.3625 16.6666 14.0352M6.66663 13.8333L9.99996 10.5M9.99996 10.5L13.3333 13.8333M9.99996 10.5V18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>,
        <Svg width={vw(6.7)} height={vw(6.9)} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V8.5M8 21.5H7.8C6.11984 21.5 5.27976 21.5 4.63803 21.173C4.07354 20.8854 3.6146 20.4265 3.32698 19.862C3 19.2202 3 18.3802 3 16.7V16.5M21 8.5V8.3C21 6.61984 21 5.77976 20.673 5.13803C20.3854 4.57354 19.9265 4.1146 19.362 3.82698C18.7202 3.5 17.8802 3.5 16.2 3.5H16M21 16.5V16.7C21 18.3802 21 19.2202 20.673 19.862C20.3854 20.4265 19.9265 20.8854 19.362 21.173C18.7202 21.5 17.8802 21.5 16.2 21.5H16M7.5 8.5V10M16.5 8.5V10M11 13.1001C11.8 13.1001 12.5 12.4001 12.5 11.6001V8.5M15.2002 15.7C13.4002 17.5 10.5002 17.5 8.7002 15.7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    ]
    
    return (
            <TouchableOpacity
                style={[styles.button, { width:width, height:height, backgroundColor:backgroundColor, fontFamily: 'Neue-Metana' }]}
                onPress={onPress}
            >
                {image !== null && avatar[image]}
                <View pointerEvents="none">
                    <Text 
                        style={{ 
                            color:color, 
                            fontSize:fontSize, 
                            fontFamily: 
                                image === 0 ? 
                                    'TT Firs Neue Trial Regular' 
                                    : 
                                    'Neue-Metana'
                            
                        }}
                    >
                        &nbsp;&nbsp;{title}&nbsp;&nbsp;
                    </Text>
                </View>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(4.2),
        flexDirection: 'row'
    },
    image: {

    }
});

export default CustomButton;

