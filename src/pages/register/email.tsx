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
    BackHandler
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
import PhoneInput from 'react-native-phone-input'; 
// import CountryPicker from 'react-native-country-picker-modal-fix'; 
import RadialGradient from 'react-native-radial-gradient';

const RegisterEmail = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(0);
    const [isSwitch, setIsSwitch] = useState(0)
    handleEmail = (text) => {
        setEmail(text)
    }
    switchButtonArray = [
        {title: "Email Address"},
        {title: "Phone Number"}
    ]
    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
        console.log(phoneNumber);
    };
    handlePrivacyNavigate = () => {
        navigation.navigate('PrivatePolicy')
    }

    // useEffect(() => {
    //     const backAction = () => {
    //         navigation.navigate('LoadingEnd'); // Prevent default behavior (i.e. exit the app)
    //     };
    
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
    //     return () => backHandler.remove();
    // }, []);
    return (
        <View style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style={styles.emailset}>                
                    <View className='Welcome'
                        style = {{marginTop: vw(39)}}
                    >
                        <Text style={{ color: 'white', fontSize: vw(5.6),textAlign: 'center', fontFamily: 'Neue-Metana'}}>
                            Welcome,
                            {'\n'}Login or Signup.
                        </Text>
                    </View>
                    <View style={{marginTop: vw(19)}}/>
                    <View className='loading_action'
                        style={{width: '100%', aspectRatio:360/198, flexDirection: 'col', justifyContent: 'flex-start', alignItems: 'center'}}
                    >
                        <View className='registe_login_button'
                            style={{width: vw(88), aspectRatio:320/34, flexDirection: 'row', borderRadius: vw(13.9)}}
                        >
                        {
                            switchButtonArray.map((item, index) =>
                                <CustomSwitchButton
                                    key = {index}
                                    id = {index}
                                    isSwitch = {isEmail === index ? 0 : 1}
                                    title={item.title}
                                    isState = {isEmail}
                                    setIsState = {setIsEmail}
                                /> 
                        )
                        }
                        </View>
                        <View style={styles.mainStyle}>
                        {
                            isEmail == 0 ? (
                                <CustomInputBox
                                    placeholder="Type your Email"
                                    image={require('../../../assets/images/mail.png')}
                                    width={vw(90)}
                                    height={vw(12.5)}
                                    backgroundColor="#202020"
                                    onchangeText={this.handleEmail}
                            />) : (
                                <View style={{color: 'white', fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(4.4)}}>
                                <PhoneInput
                                    initialCountry="fr"
                                    value={phoneNumber}
                                    onChangePhoneNumber={handlePhoneNumberChange}
                                    keyboardType="phone-pad"                                    
                                    textProps={{ style: { color: 'white', fontSize: vw(3.8), fontFamily: 'TT Firs Neue Trial Regular'} }}
                                    style={{
                                        backgroundColor: '#202020',
                                        borderRadius: vw(4.2),
                                        paddingLeft: vw(8),
                                        width: vw(90),
                                        height: vw(12.5),
                                        marginBottom: vw(0.5)
                                    }}
                                    // textInputStyle={styles.textInputStyle}
                                />
                                </View>
                            )
                        }
                            <View style={{width: vw(90), height:vw(2.8)}}/>
                            {
                                isEmail == 0 ?
                                (<CustomButton
                                    navigation={navigation}
                                    title="Continue"
                                    // onPress={() => console.log('My Button pressed')}
                                    width={vw(90)}
                                    height={vw(12.5)}
                                    backgroundColor={(email !== '') ? "#53FAFB" : "#282828"}
                                    color={(email !== '') ? "black" : "#6D6D6D"}
                                    fontSize={vw(3.9)}
                                    onPress = {() => {
                                        if (email.length > 5 ) {
                                            navigation.navigate('Verify')
                                        }
                                    }}
                                />) : (
                                <CustomButton
                                    navigation={navigation}
                                    title="Continue"
                                    // onPress={() => console.log('My Button pressed')}
                                    width={vw(90)}
                                    height={vw(12.5)}
                                    backgroundColor={((phoneNumber !== '+') && (phoneNumber !== '')) ? "#53FAFB" : "#282828"}
                                    color={((phoneNumber !== '+') && (phoneNumber !== '')) ? "black" : "#6D6D6D"}
                                    fontSize={vw(3.9)}
                                    onPress = {() => {
                                        if (phoneNumber.length > 8) {
                                            navigation.navigate('Verify')
                                        }
                                    }}
                                />
                                )

                            }
                        </View>
                    </View>
                </View>
                <View style = {{position: 'absolute', top: vh(58)}}>
                <View className='small_text'
                    style = {{marginTop: vw(33)}}
                >
                    <Text style={{ color: 'white', fontSize: vw(3.6), textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular', width: vw(100)}}>
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
                    style = {{marginTop: vw(16), marginLeft: vw(10)}}
                >
                    <Text style={{ color: '#565656', fontSize: vw(3.3), textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular'}}>
                        By creating your account, you agree in the Biples {'\n'}
                        <Text 
                            style = {{ color: 'white' }}
                            onPress = { handlePrivacyNavigate }
                        >
                            Privacy policy 
                        </Text>
                        &nbsp;and&nbsp;
                        <Text 
                            style = {{ color: 'white' }}
                        > 
                            Terms & Conditions
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
        backgroundColor: '#151515',
        color: 'white'
    },
    text: {
        marginTop: vw(5),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    emailset: {
        width: vw(100),
        aspectRatio: '360/586',
    },
    loading: {
        width: '100',
        height: vw(10),
        flexDirection: 'row',
        justfiyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    imgbuttonStyle: {
        marginLeft: vw(10),
        marginTop: vw(8),
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: vw(80),
        height: vw(15.3)        
    },
    mainStyle: {
        marginTop: vw(11),
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        // position: 'absolute',
        // top: vh(28.8),
        // left: vw(5)
    },
    textInputStyle: {
      color: '#FFF',
      borderBottomWidth: vw(0.3),
      borderBottomColor: 'rgba(255, 255, 255, 0.3)',
      marginBottom: vw(5.6),
    },
});

export default RegisterEmail;