import React, {useState, useEffect} from 'react'
import {
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    ImageBackground 
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useFocusEffect } from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';

const LoadingEnd = ({navigation}) => {
    
    useEffect(() => {
        const switchPage = setTimeout(() => {
            console.log('time is ended');
            navigation.navigate('Email');
        }, 3000); // 10 seconds in milliseconds

        return () => clearTimeout(switchPage);
    }, []);
    return (
        <View style={styles.container}>
            
            <ImageBackground className = 'land_mark'
                style={styles.imageBackground} 
                source={require('../../../assets/images/land_mark.png')}
            >

            {/* <StatusBar barStyle="dark-content" /> {'#000'} */}
                <Svg className = 'loading_blue_mark'
                    style = {{marginTop: vw(42.5)}}
                    width={vw(18.3)} height={vw(16.7)} viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <Path d="M51.4449 20.2387L28.1072 20.2548L25.1542 30.5311H48.3486L42.3311 51.3492L23.6975 51.4297C20.1555 51.4458 17.5845 48.0096 18.5715 44.5654L31.3308 0H12.7371L0.558863 42.1835C-2.0121 51.0998 4.61032 60.0161 13.8037 60L58.0752 59.9276L64.5146 37.9104C67.0935 29.0826 60.5507 20.2307 51.4449 20.2387Z" fill="#53FAFB"/>
                    <Path d="M31.4424 40.7033H29.4286L30.7976 36.0762H35.3744L34.7377 38.2248C34.2999 39.6974 32.9627 40.7033 31.4424 40.7033Z" fill="white"/>
                    <Path d="M39.0994 40.7033H36.9026L38.2716 36.0762H42.8484L42.156 38.4018C41.75 39.7698 40.5083 40.7033 39.0915 40.7033" fill="white"/>
                </Svg>
                <Text style={styles.text}>
                    Redirecting...
                </Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151515',
        width: vw(100),
        // aspectRatio: 3/7
        height: '100%',
    },
    text: {
        marginTop: vh(5),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        bottom: vh(5),
    }
});

export default LoadingEnd;