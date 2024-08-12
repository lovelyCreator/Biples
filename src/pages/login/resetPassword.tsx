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

const ResetPassword = ({ navigation }) => {

    const useremail = "yazidelkherrati@gmail.com";
    const message = "The password entered is not matched!"
    const windowWidth = useWindowDimensions().width;

    // const bottomRef = useRef(null);
    const [isPassword, setIsPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    handlePassword = (text) => {
        setPassword(text);
        if (text !== '') setIsPassword(true);
        else setIsPassword(false);
    }
    handleConfirmPassword = (text) => {
        setConfirmPassword(text);
        // console.log('text', confirmPassword, 'password', password);
        if (text == password) setIsPasswordMatch(true);
        else setIsPasswordMatch(false);
        // console.log(isPasswordMatch)
    }

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
                        <Svg width={windowWidth*0.02} height={0.033*windowWidth} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Reset Password
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.title}>
                    <Text style = {[styles.maintitle, {marginBottom: vw(5)}]}>
                        Reset Password
                    </Text>
                    <Text style = {styles.subtitle}>
                        You can reset your password now. Make sure {'\n'}
                        you remember or you can reset it again.
                    </Text>
                </View>
                <View style = {styles.mainpad}>              
                    <CustomInputBox
                        placeholder="Type your password"
                        image={require('../../../assets/images/lock.png')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor="#202020"
                        icon={isVisiblePassword ? require('../../../assets/images/eyeoff.png') : require('../../../assets/images/eyeoff.png')}
                        onchangeText={this.handlePassword}
                        isVisiblePassword={isVisiblePassword}
                        setIsVisiblePassword={setIsVisiblePassword}
                    />   
                    <View style = {{width: vw(100), aspectRatio: 360/13}}/>
                    <CustomInputBox
                        placeholder="Type your password"
                        image={require('../../../assets/images/lock.png')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor="#202020"
                        icon={isPasswordMatch && password !== '' ? require('../../../assets/images/check.png') : null}
                        onchangeText={this.handleConfirmPassword}
                        isVisiblePassword={isVisiblePassword}
                        setIsVisiblePassword={setIsVisiblePassword}
                    />
                    <View style = {{width: vw(100), aspectRatio: 360/13, marginTop: vw(5)}}/>
                    <Text style = {styles.text, isPasswordMatch ? {color: '#53FAFB'}: {color: '#FF5252'}}>
                        {isPasswordMatch ? 'Great. Your Password is matched!' :  'Your Password is not matched'}
                    </Text>
                    <View style = {styles.continueButton}>
                        <CustomButton
                            navigation={navigation}
                            title="confirm"
                            width={vw(90)}
                            height={'100%'}
                            backgroundColor={isPassword ? "#53FAFB" : "#202020"}   
                            color={isPassword ? 'black' : '#4C4C4C'}
                            fontSize={vw(3.9)}
                            onPress={() => {
                                if (isPasswordMatch && password !== '')
                                    navigation.navigate('ResetLoading')
                            }}
                        />
                    </View>
                </View>
                <View style = {{width: vw(100), aspectRatio: 360/179}}/>
                <View style = {styles.footer}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Svg width={vw(5.3)} height={vw(5.3)} viewBox='0 0 19 19' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M18.2083 9.5L4.74998 9.5" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M9.5 14.25L4.75 9.5L9.5 4.75" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    <Text style = {styles.confirmQuestion}>
                        &nbsp;Back to 
                        <Text 
                            style = {[styles.confirmQuestion, {color: "#53FAFB"}]}
                            onPress = {() =>
                                navigation.navigate('Login')
                            }
                        >
                            &nbsp;Login
                        </Text>
                    </Text>
                </View>
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
    titleBar: {
        paddingTop: vw(17.5),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    title: {
        width: vw(100),
        paddingLeft: vw(6.7),
        aspectRatio: 360/256,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: vw(2.8)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        marginTop: vw(11.1),
        color: '#4C4C4C',
        fontSize: vw(3.6),
        fontFamily: 'TT Firs Neue Trial Regular'
        // padding: 10,
        // textAlign: 'center'
    },
    text: {
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial Regular',
        textAlign: 'center'
    },
    mainpad: {
        width: vw(100),
        aspectRatio: 360/200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButton: {
        width: vw(100),
        height: vw(12.5),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(7)
    },
    footer: {
        // margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: vw(100),
        aspectRatio: 360/17,
        // marginBottom: vw(13.3)
        position: 'absolute',
        top: vh(101)
    },
    arrow: {
        marginRight: vw(1.4)
    },
    compareName: {
        color: '#FF5252',
        textAlign: 'center',
        marginBottom: vw(29.2),
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    confirmQuestion: {
        // margin: 10,
        fontSize: vw(3.3),
        flexDirection: 'row',
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default ResetPassword;