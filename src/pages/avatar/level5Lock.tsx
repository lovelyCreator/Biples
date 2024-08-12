import React, { useState, useEffect, useRef } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    PanResponder,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';


const Level5Lock = ({ navigation }) => {

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style = {styles.container}>
                <View style = {styles.backImgStyle}>
                    <ImageBackground source = {require('../../../assets/images/level5Lock.png')}
                        style = {styles.imgback}
                    >
                        <TouchableOpacity style = {styles.cross}
                            onPress = {() => navigation.goBack()}
                        >
                            <Svg width={vw(3.9)} height={vw(3.9)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M13 1L1 13M1 1L13 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.text}>
                            Wonderfull!{'\n'}
                            You’re almost to get into next level
                        </Text>
                        <View style = {styles.titleBar}>
                            <Svg width={vw(8.9)} height={vw(8.9)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M4.5 29V22M4.5 8V1M1 4.5H8M1 25.5H8M16.4 2.4L13.9721 8.71241C13.5773 9.73893 13.3799 10.2522 13.0729 10.6839C12.8009 11.0666 12.4666 11.4009 12.0839 11.6729C11.6522 11.9799 11.1389 12.1773 10.1124 12.5722L3.8 15L10.1124 17.4278C11.1389 17.8227 11.6522 18.0201 12.0839 18.3271C12.4666 18.5991 12.8009 18.9334 13.0729 19.3161C13.3799 19.7478 13.5773 20.2611 13.9722 21.2876L16.4 27.6L18.8278 21.2876C19.2227 20.2611 19.4201 19.7478 19.7271 19.3161C19.9991 18.9334 20.3334 18.5991 20.7161 18.3271C21.1478 18.0201 21.6611 17.8227 22.6876 17.4278L29 15L22.6876 12.5721C21.6611 12.1773 21.1478 11.9799 20.7161 11.6729C20.3334 11.4009 19.9991 11.0666 19.7271 10.6839C19.4201 10.2522 19.2227 9.73893 18.8278 8.71241L16.4 2.4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {styles.title}>
                                Level 5
                            </Text>
                        </View>
                        <View style = {{width: vw(80), flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style = {{fontSize: vw(3.3), fontFamily: 'TT Firs Neue Trial Regular', color: 'white', marginTop: vw(6.3)}}>
                                Claim reward
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        aspectRatio: 360/780,
        // height: vh(100),
        backgroundColor: '#0F0F0F',
        backgroundImage: 'Radial-gradient(to bottom, #151515, #000000)',
        fontFamily: 'TT Firs Neue Trial Bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(4.4),
        color: 'white',
        textAlign: 'center',
    },
    backImgStyle: {
        width: vw(90),
        height: vw(126),
        borderRadius: vw(11.1)
    },
    imgback: {
        width: vw(90),
        height: vw(126),
        padding: vw(6.1),
        alignItems: 'center',
    },
    cross: {
        alignItems:'flex-end',
        width: vw(80)
    },
    titleBar: {
        alignItems: 'center',
        marginTop: vw(60.82),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(10.7),
        color: 'white',
        textAlign: 'center',
        marginLeft: vw(5)
    },
    btn: {
        width: vw(55.8),
        height: vw(14,72 ),
        alignItems: 'center',
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: 'white',
        marginTop: vw(6.3),
        justifyContent: 'center'
    }
});

export default Level5Lock;