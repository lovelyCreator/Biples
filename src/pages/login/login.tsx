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
import CustomLoadButton from "../../components/customLoadButton"
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

const Login = ({ navigation }) => {

    const useremail = "yazidelkherrati@gmail.com";
    const username = "Yazid KHERRATI";
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(0);
    const [isVerify, setIsVerify] = useState(true);
    const [password, setPassword] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    
    handleEmail = (text) => {
        setEmail(text);
    }
    handlePassword = (text) => {
        setPassword(text);
    }
    handleFaceLoginButton = () => {
        setIsVerify(!isVerify);
    }
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
                        Welcome Back, {'\n'}
                        Login Now!
                    </Text>
                </View>
                <View style={[styles.mainStyle, isEnabled ? {marginTop: vw(4)} : { marginTop: vw(20),}]}>
                    <CustomInputBox
                        placeholder="Enter your Email"
                        image={require('../../../assets/images/mail.png')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor="#1E1E1E"
                        onchangeText={this.handleEmail}
                    />
                    <View style = {{wdith: vw(100), aspectRatio: 360/13}}/>
                    <CustomInputBox
                        placeholder="Enter your password"
                        image={require('../../../assets/images/lock.png')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor="#1E1E1E"
                        icon={isVisiblePassword ? require('../../../assets/images/eyeoff.png') : require('../../../assets/images/eyeoff.png')}
                        onchangeText={this.handlePassword}
                        isVisiblePassword={isVisiblePassword}
                        setIsVisiblePassword={setIsVisiblePassword}
                    />
                    <View style={{width: vw(90), height:vw(2.8)}}/>
                    <View style = {styles.switches}>
                        <TouchableOpacity
                        style={[styles.switch, isEnabled ? styles.switchOn : styles.switchOff]}
                        onPress={toggleSwitch}
                        >
                            <View style={[styles.thumb, isEnabled ? styles.thumbOn : styles.thumbOff]} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: vw(3.3), fontFamily: 'TT Firs Neue Trial Regular', marginLeft: vw(3)}}>
                            Remember your login?
                        </Text>
                    </View>
                    <CustomButton
                        navigation={navigation}
                        title="Log in"
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor={(email !== '' || password !== '') ? "#53FAFB" : "#202020"}
                        color={(email !== '' || password !== '') ? "black" : "#6D6D6D"}
                        fontSize={vw(3.9)}
                        onPress={() => { if (email !== '' || password !== '') navigation.navigate('Main')}}
                    />
                    <Text 
                        style={[styles.text, {marginTop: vw(6.1)}]}
                        onPress = {() => {
                            // console.log('Recovery account');
                            
                            navigation.navigate('ForgetAccount');
                        }}
                    >
                        Recovery account?
                    </Text>
                    {
                        isEnabled ?
                        <View style={styles.loginButton}>
                            <CustomLoadButton
                                navigation={ navigation }
                                title={'Enable Face ID to login fast?'}
                                width={vw(90)}
                                height={vw(12.5)}
                                backgroundColor={"#202020"}  
                                color={'white'}
                                fontSize={vw(3.3)}
                                image={4}
                                onPress = {handleFaceLoginButton}
                            />
                            {
                                !isVerify && (email !== '' || password !== '') ?
                                    <Text 
                                        style={[styles.text, {marginTop: vw(5.6), color: "#FF5252", marginLeft: vw(10)}]}
                                    >
                                        Incorrect email or password
                                    </Text>
                                : null
                            }
                        </View>
                        : null
                    }
                </View>
                <View style = {styles.footer}>
                    <View className='small_text'
                        style = {isEnabled ? {marginTop: vw(5)} : {marginTop: vw(15)}}
                    >
                        <Text style={[styles.text, {color: 'white', marginRight: 0}, isEnabled ? {marginTop: vw(0)} : {marginTop: vw(6.1)}]}>
                            Or continue with
                        </Text>
                    </View>
                    <View style={styles.imgbuttonStyle}>
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={vw(15.3)}
                            height={vw(15.3)}
                            backgroundColor="#202020"
                            image={require('../../../assets/images/wallet1.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={vw(15.3)}
                            height={vw(15.3)}
                            backgroundColor="#202020"
                            image={require('../../../assets/images/wallet2.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={vw(15.3)}
                            height={vw(15.3)}
                            backgroundColor="#202020"
                            image={require('../../../assets/images/wallet3.png')}
                            link="/register/wallet"
                        />
                        <CustomImageButton
                            width={vw(15.3)}
                            height={vw(15.3)}
                            backgroundColor="#202020"
                            image={require('../../../assets/images/metamask.png')}
                            link="/register/wallet"
                        />
                    </View>        
                    <View className='small_text'
                        style = {{width: vw(100), aspectRatio: 360/80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Text style={{ color: 'white', fontSize: vw(3.3), textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular'}}>
                            Don't have and account?&nbsp;
                            <Text 
                                style = {{ color: '#53FAFB' }}
                                onPress = {() => navigation.navigate('Email')}
                            >
                                Register 
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010',
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
    imgbuttonStyle: {
        marginLeft: vw(10),
        marginTop: vw(4),
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: vw(80),
        height: vw(15.3)        
    },
    mainStyle: {
        color: 'white',
        width: vw(100),
        marginLeft: vw(5),
        flexDirection: 'column',
        flexDirection: 'column',
        justifyContent: 'center',
        // position: 'absolute',
        // top: vh(28.8),
        // left: vw(5)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#53FAFB',
        textAlign: 'center',
        marginRight: vw(10)
    },
    textInputStyle: {
      color: '#FFF',
      borderBottomWidth: vw(0.3),
      borderBottomColor: 'rgba(255, 255, 255, 0.3)',
      marginBottom: vw(5.6),
    },
    footer: {
        positon: 'absolute',
        bottom: vw(5)
    },
    loginButton: {
        width: vw(90),
        aspectRatio: 360/127,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    switches: {
        flexDirection: 'row',
        marginTop: vw(2)
    },
    switch: {
        width: vw(8.3),
        height: vw(4.44),
        borderRadius: vw(2.3),
        borderWidth: vw(0.3),
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(5)
    },
    switchOn: {
        backgroundColor: 'transparent',
        borderColor: '#53FAFB',
    },
    switchOff: {
        backgroundColor: 'transparent',
        borderColor: '#363636',
    },
    thumb: {
        width: vw(3.3),
        height: vw(3.3),
        borderRadius: vw(2),
        backgroundColor: '#53FAFB',
    },
    thumbOn: {
        transform: [{ translateX: vw(2) }],
        backgroundColor: '#53FAFB'
    },
    thumbOff: {
        transform: [{ translateX: 0 - vw(2)}],
        backgroundColor: '#363636'
    }
});

export default Login;