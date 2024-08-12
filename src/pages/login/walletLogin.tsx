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
    useWindowDimensions,
    Modal,
    FlatList,
    Dimensions
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Ellipse, Defs, Filter, FeBlend, FeFlood, FeGaussianBlur, ClipPath, Rect } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomLoadButton from "../../components/customLoadButton"
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
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;

const WalletLogin = ({ navigation }) => {

    const [userIndex, setUserIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isSwitchUser, setIsSwitchUser] = useState(false);

    const user = [
        {
            avatar: require('../../../assets/images/image1.png'),
            firstName: 'Yazid',
            fullName: 'Yazid KHERRATI',
            unreadMessage: 18,
            state: 'Sign In'
        },
        {
            avatar: require('../../../assets/images/image2.png'),
            firstName: 'Samad',
            fullName: 'Samad BENBOU',
            unreadMessage: 18,
            state: 'Logged out'
        },
    ];

    const handleLoginButton = () => {
        navigation.navigate('Login')
    }
    const handleLoadingModal = () => {
        setIsLoading(!isLoading);
        setTimeout(() => {
          setIsLoading(false);
          setIsSwitchUser(true);
        }, 3000);
    };
    const handleSwithModal = () => {
        setIsSwitchUser(!isSwitchUser);
        // if(userIndex < 1) {
        //     setUserIndex(userIndex + 1);
        // }
        // e
    }

    return (
        <ScrollView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <Modal visible={isLoading} transparent={true}>
                    <View style={styles.modalContainer}>
                        <Image source = {require('../../../assets/images/switchLoading.png')}
                            style = {{width: vw(37.8), height: vw(37.5)}}
                        />
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isSwitchUser}
                    onRequestClose={() => {
                    setIsSwitchUser(!isSwitchUser);
                    }}
                >
                    <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.75)' }]}>
                        <View style={[styles.modalView, {top: vw(120), backgroundColor: '#151515', width: vw(90), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style = {[styles.imageletter, {paddingRight: vw(40), marginLeft: 0, marginBottom: vw(7)}]}> Switch Profile </Text>
                            {user.map((item, index) => 
                                <View style={styles.imageButton} key={index}>
                                    <Image source = {item.avatar} style = {{width: vw(10.6), height: vw(10.6), borderRadius: vw(6)}}/>
                                    
                                    <Text style={styles.imageletter}
                                        onPress={() => {
                                            if(index === 1) {
                                                setIsClick(!isClick);
                                                setIsGallery(!isGallery);
                                            }
                                        }}
                                    >
                                        {item.fullName}
                                    </Text>
                                    {
                                        item.state === 'Sign In' ?
                                        <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <G clip-path="url(#clip0_5_7426)">
                                                <Path d="M4.6875 7.5L6.5625 9.375L10.3125 5.625M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                            </G>
                                            <Defs>
                                                <ClipPath id="clip0_5_7426">
                                                    <Rect width={vw(4.2)} height={vw(4.2)} fill="white"/>
                                                </ClipPath>
                                            </Defs>
                                        </Svg>
                                        :
                                        <View style = {{width: vw(4.2), aspectRatio: 1/1}}/>
                                    }
                                </View>
                            )} 
                            <View style={{height: vw(5)}}/>
                            <CustomLoadButton
                                navigation={ navigation }
                                title="&nbsp;&nbsp;&nbsp;Login into another Account"
                                width={vw(80)}
                                height={vw(12.5)}
                                backgroundColor={"#202020"}  
                                color={'#8A8A8A'}
                                fontSize={vw(3.9)}
                                image={3}
                                onPress = {handleSwithModal}
                            />
                            
                        </View>
                    </View>
                </Modal>
                <View style = {styles.title}>
                    <Svg  style={{ marginBottom: vw(5) }}
                        width={vw(11.6)} height={vw(10.5)} viewBox='0 0 42 38' fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path d="M32.9402 12.8179L17.997 12.8281L16.1062 19.3364H30.9576L27.1046 32.5212L15.1736 32.5721C12.9056 32.5823 11.2594 30.4061 11.8914 28.2248L20.0612 0H8.15559L0.357841 26.7162C-1.28835 32.3632 2.95199 38.0102 8.83852 38L37.1856 37.9541L41.3087 24.0099C42.96 18.419 38.7706 12.8128 32.9402 12.8179Z" fill="#53FAFB"/>
                        <Path d="M20.1323 25.7784H18.8429L19.7195 22.8479H22.65L22.2423 24.2087C21.962 25.1414 21.1058 25.7784 20.1323 25.7784Z" fill="white"/>
                        <Path d="M25.0354 25.7784H23.6288L24.5054 22.8479H27.4359L26.9925 24.3208C26.7326 25.1872 25.9375 25.7784 25.0303 25.7784" fill="white"/>
                    </Svg>
                    <Text style = {[styles.maintitle, {marginBottom: vw(5)}]}>
                        Hi {user[userIndex].firstName} {'\n'}
                        How are you today?
                    </Text>
                </View>
                <View style={styles.avatar}>
                    <View style={isLoading || isSwitchUser ? {overflow: 'hidden', borderRadius: vw(9.2), width: vw(30.6)} : {overflow: 'hidden', borderRadius: vw(24), width: vw(43.3)}}>
                        <ImageBackground source={user[userIndex].avatar} style={isLoading || isSwitchUser ? styles.avatarSquare : styles.avatarImage}/>
                    </View>
                    <Text style = {[styles.unreadMessage, isLoading || isSwitchUser ? {top: vw(5.6), right: vw(5.6), backgroundColor: '#FF2A43', borderWidth: 0} : {top: vw(2.8), right: vw(2.8), backgroundColor: '#53FAFB'}]}>
                        {user[userIndex].unreadMessage}
                    </Text>
                </View>
                <View style={styles.loginButton}>
                    <CustomLoadButton
                        navigation={ navigation }
                        title={'Log in'}
                        width={vw(80)}
                        height={vw(12.5)}
                        backgroundColor={"#53FAFB"}  
                        color={'black'}
                        fontSize={vw(3.9)}
                        image={1}
                        onPress = {handleLoginButton}
                    />
                    <Text 
                        style={styles.text}
                        onPress = {() => {
                            navigation.navigate('RecoveryAccount');
                        }}
                    >
                        Recovery account?
                    </Text>
                </View>
                <View style = {styles.logOut}>
                    <Text 
                        style = {[styles.text, {fontSize: vw(3.9), color: '#FF5252', marginRight: vw(5)}]}
                        onPress = {() => {
                            navigation.navigate('Loading');
                        }}
                    >
                        Logout
                    </Text>
                    <Svg width={vw(4.4)} height={vw(4.7)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3.36142 12.4357C3.36142 12.7122 3.36142 12.8505 3.37375 12.9707C3.47614 13.9686 4.19784 14.7929 5.17347 15.0263C5.29097 15.0544 5.42806 15.0727 5.70213 15.1092L10.8909 15.8011C12.3679 15.998 13.1064 16.0965 13.6796 15.8686C14.1828 15.6685 14.602 15.3015 14.8669 14.8291C15.1685 14.2911 15.1685 13.546 15.1685 12.0559V4.94408C15.1685 3.45399 15.1685 2.70894 14.8669 2.17091C14.602 1.69853 14.1828 1.33155 13.6796 1.13145C13.1064 0.903541 12.3679 1.00201 10.8909 1.19895L5.70213 1.89078C5.42803 1.92733 5.29098 1.9456 5.17347 1.97371C4.19784 2.20709 3.47614 3.0314 3.37375 4.02931C3.36142 4.14951 3.36142 4.28777 3.36142 4.5643M8.08426 5.35144L11.2328 8.5M11.2328 8.5L8.08426 11.6486M11.2328 8.5H1" stroke="#FF5252" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </View>
                <View style = {styles.footer}>
                    <View style = {styles.switchUser}>
                        <View 
                            style = {[styles.footerAvatar, {backgroundColor: '#202020'}]}
                        />
                        <Image 
                            source = {user[userIndex].avatar}
                            style = {[styles.footerAvatar, {position: 'absolute', left: vw(9)}]}
                        />
                    </View>
                    <Text 
                        style = {[styles.text, {color: 'white', marginTop: vw(1)}]}
                        onPress = {handleLoadingModal}
                    >
                        Switch or add other account
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: vw(18.3),
        width: vw(100),
        marginLeft: vw(15),
        aspectRatio: 360/104
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold',
        lineHeight: vw(6.8)
        // padding: 10,
        // textAlign: 'center'
    },
    avatar: {
        width: vw(43.3),
        aspectRatio: 1/1,
        backgroundColor: 'black',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(14.16),
        marginBottom: vw(8.06),
        // overflow: 'hidden'
    },
    avatarImage: {
        width: vw(43.3),
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarSquare: {
        width: vw(30.6),
        aspectRatio: 1/1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadMessage: {
        position: 'absolute',
        color: 'black',
        width:  vw(8.3),
        aspectRatio: 1/1,
        paddingTop: vw(2),
        textAlign: 'center',
        borderRadius: vw(5),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(2.8),
        borderColor: 'black',
        borderWidth: vw(1),
    },
    loginButton: {
        width: vw(100),
        aspectRatio: 360/82,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#53FAFB',
    },
    logOut: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: vw(100),
        aspectRatio: 360/225,
    },
    footer: {
        width: vw(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: vw(11.1)
    },
    footerAvatar: {
        width: vw(8.3), 
        // aspectRatio: 1/1, 
        height: vw(8.3),
        borderRadius: vw(5), 
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'rgba(20, 20, 20, 0.75)',
    },
    switchUser: {
        width: vw(20),
        height: vw(8.3),
        position: 'relative',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    imageButton: {
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: vw(5)
    },
    imageletter: {
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.9),
        // textAlign: 'center',
        marginLeft: vw(5),
        marginRight: vw(5)
    },
    centeredView: {
        width: vw(100),
        aspectRatio: 360/780,
    },
    modalView: {
      margin: vw(5.6),
      borderRadius: vw(5),
      padding: vw(5),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        // height: vw(0.7),
      },
      userAvatar: {
        width: vw(10.6),
        aspectRatio: 1/1,
        borderRadius: vw(6),
        overflow: 'hidden'
      },
      shadowOpacity: 0.25,
      shadowRadius: vw(1.1),
      elevation: 5,
    },
});

export default WalletLogin;