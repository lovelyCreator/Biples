import React, { useState, useEffect } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton';
import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const Register = ({ navigation }) => {

    handlePrivacyNavigate = () => {
        navigation.navigate('PrivatePolicy')
    }

    return (
        <View> 
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View  style={styles.container}>
                <ImageBackground 
                    style={styles.imageBackground} 
                    source={require('../../../assets/images/loading_background.png')}
                />
            </View>
            <View style = {{position: 'absolute', bottom: vw(10)}}>
                <View className='loading_action'
                    style={{width: '100%', aspectRatio:360/108, flexDirection: 'col', justifyContent: 'center', alignItems: 'center'}}
                >
                    <View className='registe_login_button'
                        style={{width: vw(88), aspectRatio:297/46, flexDirection: 'row', backgroundColor: '#2B2B2B', borderRadius: vw(4.2), borderWidth: vw(0.3), borderColor: '#808080', opacity: 0.85}}
                    >
                        <CustomButton
                            navigation={navigation}
                            title="Register"
                            width={vw(44)}
                            height={'100'}
                            backgroundColor="#53FAFB"
                            color="#2E2E2E"
                            fontSize={vw(3.9)}
                            navigateName = 'Email'
                        />
                        <CustomButton
                            navigation={navigation}
                            title="Sign In"
                            width={vw(44)}
                            height={'100'}
                            backgroundColor="#00000000"  
                            color='white'
                            fontSize={vw(3.9)}
                            navigateName = "BackLogin"
                        />
                    </View>
                    <View className='small_text'
                        style = {{marginTop: vw(12)}}
                    >
                        <Text style={{ fontFamily: 'TT Firs Neue Trial Regular', color: 'white', fontSize: vw(3.6), textAlign: 'center', }}>
                            Or continue with
                        </Text>
                    </View>
                </View>
                <View style={styles.imgbuttonStyle}>
                    <CustomImageButton
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(15.3)}
                        height={vw(15.3)}
                        backgroundColor="#191919"
                        image={require('../../../assets/images/wallet1.png')}
                        link="/register/wallet"
                    />
                    <CustomImageButton
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(15.3)}
                        height={vw(15.3)}
                        backgroundColor="#191919"
                        image={require('../../../assets/images/wallet2.png')}
                        link="/register/wallet"
                    />
                    <CustomImageButton
                        // onPress={() => console.log('My Button pressed')}
                        width={vw(15.3)}
                        height={vw(15.3)}
                        backgroundColor="#191919"
                        image={require('../../../assets/images/wallet3.png')}
                        link="/register/wallet"
                    />
                    <CustomImageButton
                        width={vw(15.3)}
                        height={vw(15.3)}
                        backgroundColor="#191919"
                        image={require('../../../assets/images/metamask.png')}
                        link="/register/wallet"
                    />
                </View>
                <View className='small_text'
                    style = {{marginTop: vw(16)}}
                >
                    <Text style={{ color: '#565656', fontSize: vw(3.3), textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular'}}>
                        By creating your account, you agree in the Biples {'\n'}
                        <Text 
                            style = {{ color: 'white', fontFamily: 'TT Firs Neue Trial Regular' }}
                            onPress = { handlePrivacyNavigate }
                        >
                            Privacy policy 
                        </Text>
                        &nbsp;and&nbsp;
                        <Text 
                            style = {{ color: 'white', fontFamily: 'TT Firs Neue Trial Regular' }}
                        > 
                            Terms & Conditions
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(100),
        height: '100%',
        backgroundColor: '#050505',
        color: 'white'
    },
    text: {
        marginTop: vh(5),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    imageBackground: {
        width: vw(100),
        aspectRatio: '360/590',
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
        height: vw(15.25)
        
    },
});

export default Register;