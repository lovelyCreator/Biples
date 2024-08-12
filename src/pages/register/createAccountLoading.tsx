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
    TouchableOpacity, 
    useWindowDimensions
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';

const CELL_COUNT = 5;

const CreateAccountLoading = ({ navigation }) => {

    const useremail = "yazidelkherrati@gmail.com";
    const username = "Yazid KHERRATI";
    useEffect(() => {
        const switchPage = setTimeout(() => {
            console.log('time is ended');
            navigation.navigate('SelectAvatar')
        }, 3000); // 10 seconds in milliseconds
    
        return () => clearTimeout(switchPage);
    }, []);

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.title}>
                    <Svg  style={{ marginBottom: vw(5) }}
                        width={vw(11.6)} height={vw(10.5)} viewBox='0 0 42 38' fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path d="M32.9402 12.8179L17.997 12.8281L16.1062 19.3364H30.9576L27.1046 32.5212L15.1736 32.5721C12.9056 32.5823 11.2594 30.4061 11.8914 28.2248L20.0612 0H8.15559L0.357841 26.7162C-1.28835 32.3632 2.95199 38.0102 8.83852 38L37.1856 37.9541L41.3087 24.0099C42.96 18.419 38.7706 12.8128 32.9402 12.8179Z" fill="#53FAFB"/>
                        <Path d="M20.1323 25.7784H18.8429L19.7195 22.8479H22.65L22.2423 24.2087C21.962 25.1414 21.1058 25.7784 20.1323 25.7784Z" fill="white"/>
                        <Path d="M25.0354 25.7784H23.6288L24.5054 22.8479H27.4359L26.9925 24.3208C26.7326 25.1872 25.9375 25.7784 25.0303 25.7784" fill="white"/>
                    </Svg>
                    <Text style = {[styles.maintitle, {marginBottom: vw(5)}]}>
                        Congratulations! {'\n'}
                        We're you creating {'\n'}
                        account.
                    </Text>
                </View>
                <View style = {styles.mainpad}> 
                    <Text style = {styles.subtitle}>
                        Hi, {username}
                    </Text>
                    <View style = {{height: vw(10.8)}}/>
                    <Text style = {styles.text}>
                        Please wait a while {'\n'}
                        we're verification your information
                    </Text>
                </View>
                <View style = {styles.footer}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#151515',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: vw(18.3),
        width: vw(100),
        marginLeft: vw(15),
        aspectRatio: 360/127
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold',
        lineHeight: vw(6.8)
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        color: 'white',
        fontSize: vw(3.6),
        fontFamily: 'NeueMetanaNext-SemiBold'
        // padding: 10,
        // textAlign: 'center'
    },
    text: {
        color: '#4C4C4C',
        fontSize: vw(3.6),
        fontFamily: 'TT Firs Neue Trial Regular',
        textAlign: 'center'
    },
    mainpad: {
        width: vw(100),
        aspectRatio: 360/483,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        // margin: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: vw(100),
        height: vw(29.7)
    }
});

export default CreateAccountLoading;