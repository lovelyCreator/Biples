import React, { useState, useEffect, useRef } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'

const Font = () => {

    handleUserName = (text) => {
        setUserName(text);
        if (text !== '') setIsName(true);
        else setIsName(false);
    }
    handlePassword = (text) => {
        setPassword(text);
    }
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };

    return (
        <ScrollView>
            <Text style = {styles.container}>Hello Neue Metana</Text>
            <Text style = {styles.font1}>Hello Neue Metana</Text>
            <Text style = {styles.font3}>Hello Neue Metana</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'TT Firs Neue Trial Bold',
        fontSize: 16,
    },
    font1: {
        fontFamily: 'Neue-Metana',
        fontSize: 16,
    },
    font3: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: 16,
    }
});

export default Font;