import React, { useState, useEffect } from 'react'
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
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import RadialGradient from 'react-native-radial-gradient';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LottieView from 'lottie-react-native';

const CELL_COUNT = 5;

const ResetLoading = ({ navigation }) => {

    useremail = "yazidelkherrati@gmail.com";

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.titleBar}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => 
                            navigation.goBack()
                        }
                    >
                        <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Successfully
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.title}>
                    <Svg  style={{ marginBottom: vw(5) }}
                        width={vw(11.6)} height={vw(10.5)} viewBox='0 0 42 38' fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path d="M32.9402 12.8179L17.997 12.8281L16.1062 19.3364H30.9576L27.1046 32.5212L15.1736 32.5721C12.9056 32.5823 11.2594 30.4061 11.8914 28.2248L20.0612 0H8.15559L0.357841 26.7162C-1.28835 32.3632 2.95199 38.0102 8.83852 38L37.1856 37.9541L41.3087 24.0099C42.96 18.419 38.7706 12.8128 32.9402 12.8179Z" fill="#53FAFB"/>
                        <Path d="M20.1323 25.7784H18.8429L19.7195 22.8479H22.65L22.2423 24.2087C21.962 25.1414 21.1058 25.7784 20.1323 25.7784Z" fill="white"/>
                        <Path d="M25.0354 25.7784H23.6288L24.5054 22.8479H27.4359L26.9925 24.3208C26.7326 25.1872 25.9375 25.7784 25.0303 25.7784" fill="white"/>
                    </Svg>

                    <Text style = {[styles.maintitle, {marginBottom: vw(6)}]}>
                        Successfully, {'\n'}
                        Back to login now.
                    </Text>
                    <Text style = {styles.subtitle}>
                        We have sent the verification OTP {'\n'}
                        to {useremail}
                    </Text>
                </View>
                <View style = {styles.confirm}>
                    <LottieView source={require('../../../assets/images/check_animation.json')} 
                        autoPlay 
                        loop={false} 
                        style={{
                            width:vw(60),
                            aspectRatio: 1/1
                        }}
                    />
                </View>
                <View style = {styles.continueButton}>
                    <CustomButton
                        navigation={navigation}
                        title="Back Login"
                        width={vw(90)}
                        height={'100%'}
                        backgroundColor="#53FAFB"  
                        color='black'
                        fontSize={vw(3.9)}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View style = {{width: vw(100), height: vw(56.5)}}/>
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
        paddingTop: vw(20)
    },
    titleBar: {
        paddingTop: vw(16),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    prevButton: {
        width: vw(9),
        aspectRatio: 1/1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff20',
        borderRadius: vw(5),
    },
    prevImage: {
        width: '20%',
        height: '40%',
        resizeMode: 'contain',
        borderRadius: vw(9)
    },
    title: {
        padding: vw(5),
        width: vw(100),
        justfiyContent: 'center',
        aspectRatio: 360/155,
        marginTop: vw(1)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5.6),
        fontFamily: 'Neue-Metana'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        color: '#4C4C4C',
        fontSize: vw(3.9),
        fontFamily: 'TT Firs Neue Trial Regular'
        // padding: 10,
        // textAlign: 'center'
    },
    confirm: {
        width: vw(100),
        aspectRatio: 360/285,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButton: {
        width: vw(100),
        height: vw(12.5),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ResetLoading;