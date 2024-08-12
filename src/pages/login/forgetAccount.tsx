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

const ForgetAccount = ({ navigation }) => {

    // const useremail = "yazidelkherrati@gmail.com";
    // const message = "The password entered is not matched!"
    // const windowWidth = useWindowDimensions().width;

    // const bottomRef = useRef(null);
    const [isEmail, setIsEmail] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    handleUserEmail = (text) => {
        setUserEmail(text);
        if (text !== '') setIsEmail(true);
        else setIsEmail(false)
    }
    handleNavigate = () => {
        if (isEmail) {
            navigation.goBack();
        }
    }
    handleNavigated = () => {
        if (isEmail) {
            navigation.navigate('Login');
        }
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
                        onPress = {handleNavigate}
                    >
                        <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Forget Account
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.title}>
                    <Text style = {[styles.maintitle, {marginBottom: vw(5)}]}>
                        Forget your account?
                    </Text>
                    <Text style = {styles.subtitle}>
                        We can reset your password now. Make sure {'\n'}
                        you remember or you can reset it again
                    </Text>
                </View>
                <View style = {styles.mainpad}>
                    <CustomInputBox
                        placeholder="Enter your Email"
                        image={require('../../../assets/images/mail.png')}
                        width={vw(90)}
                        height={vw(12.5)}
                        backgroundColor="#202020"
                        onchangeText={this.handleUserEmail}
                        icon={isEmail? require('../../../assets/images/check.png') : ''}
                    />
                    <View style = {styles.continueButton}>
                        <CustomButton
                            navigation={ navigation }
                            title="Next"
                            width={vw(90)}
                            height={'100%'}
                            backgroundColor={isEmail ? "#53FAFB" : "#202020"}  
                            color={isEmail ? 'black' : '#4C4C4C'}
                            fontSize={vw(3.9)}
                            onPress = {() => {
                                if (isEmail){
                                    navigation.navigate('ResetPassword')
                                }
                            }}
                        />
                    </View>
                </View>
                <View style = {{width: vw(100), aspectRatio: 360/260}}/>
                <View style = {styles.footer}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
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
                            onPress = { handleNavigated }
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
    prevButton: {
        width: vw(9),
        aspectRatio: 1/1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff20',
        borderRadius: vw(5),
        padding: vw(2.5)
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
    mainpad: {
        width: vw(100),
        aspectRatio: 360/116,
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
        // marginBottom: vw(13.3),
        position: 'absolute',
        top: vh(105)
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

export default ForgetAccount;