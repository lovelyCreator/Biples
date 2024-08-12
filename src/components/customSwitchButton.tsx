import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, TouchableHighlight } from 'react-native';
import { Link } from "react-router-native";
import { vh, vw } from 'react-native-css-vh-vw';

const CustomSwitchButton = ({ id, title, isSwitch, isState, setIsState }) => {
    // const handlePress = () => {
    //     // Add your custom press behavior here
    //     backgroundColor: 'transparency'
    // };
    const styleArray = [
        {
            backgroundColor: "#53FAFB05",
            width: vw(44),
            height: '100',
            color: "white",
            fontSize: vw(3.3),
        },
        {
            backgroundColor: '#00000000',
            width: vw(44),
            height: '100',
            color: "#606060",
            fontSize: vw(3.3)
        }
    ]
    // const [backcolor, setBackColor] = useState('transparency')
    return (
        <TouchableOpacity
            style={[styles.button, { 
                width: styleArray[isSwitch].width, 
                height: styleArray[isSwitch].height, 
                backgroundColor: styleArray[isSwitch].backgroundColor,
            }]}
            onPress={() => {
                if (title === "Email Address") setIsState(state => {
                    return 0
                })
                else if (title === "Phone Number") setIsState(state => {
                    return 1
                })
            }}
        >
        <View
            component={TouchableOpacity}
        >
            <View pointerEvents="none">
                <Text style={{ 
                    fontSize: styleArray[isSwitch].fontSize,
                    color: styleArray[isSwitch].color,
                    fontFamily: 'TT Firs Neue Trial Regular', }}
                >
                    {title}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(22),
    },
    yourClass: {
        color: 'blue', // Define the desired color for the link
    },
});

export default CustomSwitchButton;

