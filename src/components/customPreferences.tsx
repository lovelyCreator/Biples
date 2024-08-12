import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Rect } from 'react-native-svg';

const CustomPreferences = ({ navigation, navigateName, title, content }) => {
    return (
            <View style = {styles.contain}>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={() => navigation.navigate(navigateName);}
                >
                    <View style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text style={[styles.text, {fontSize: vw(5), color: 'white', marginBottom: vw(1)}]}>
                            {title}
                        </Text>
                        <Text 
                            style = {styles.text}
                        >
                            {content}
                        </Text>
                    </View>
                    <Svg width={vw(5.83)} height={vw(5.83)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M8 15.5L13 10.5L8 5.5" stroke="#797979" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>

                </TouchableOpacity>
            </View>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: vw(90),
        marginBottom: vw(5.6)
    },
    text: {
        color: '#6E6E6E',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        paddingLeft: vw(2)
    }
});

export default CustomPreferences;

