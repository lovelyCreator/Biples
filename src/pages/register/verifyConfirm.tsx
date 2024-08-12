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

const RegisterVerifyConfirm = ({ navigation }) => {

    useremail = "yazidelkherrati@gmail.com";

    return (
        <View style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style = {{marginTop: vw(20)}}>
                <View style = {styles.titleBar}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => navigation.goBack()}
                    >
                        <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Login or Signup
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.title}>
                    <Text style = {[styles.maintitle, {marginBottom: vw(6)}]}>
                        Verification Completed, {'\n'}
                        Click continue
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
                        title="Continue"
                        width={vw(90)}
                        height={'100%'}
                        backgroundColor="#53FAFB"  
                        color='black'
                        fontSize={vw(3.9)}
                        onPress={() => navigation.navigate('CreateAccountInfo')}
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
        alignItems: 'center'
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

export default RegisterVerifyConfirm;