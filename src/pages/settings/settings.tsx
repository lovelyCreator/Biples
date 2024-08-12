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
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../components/customButton"
import CustomRoundedButton from "../../components/customRoundedButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
import CustomSettingButton from "../../components/customSettingButton"; 
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

const Settings = ({ navigation }) => {

    const [isLogout, setIsLogout] = useState(false);
    const windowWidth = useWindowDimensions().width;
    const user = {
        avatar: require('../../../assets/images/myimage1.png'),
        firstName: 'Yazid',
        fullName: 'Yazid KHERRATI',
        unreadMessage: 18,
        state: 'Sign In',
        wallet: '7,197 ETH'
    };
    const helloMessage = "Good Morning!";
    const accountarray = [
        {
            name: 'Account Preferences',
            navigate: 'Preferences'
        }, 
        {
            name: 'Notifications',
            navigate: 'Notifications'
        }, 
        {
            name: 'Messages',
            navigate: 'Messages'
        }, 
        {
            name: 'Communities',
            navigate: 'Communities'
        }, 
        {
            name: 'Saved',
            navigate: 'Saved'
        },
    ];
    const apparray = ['Sign & Security', 'Data Privacy', 'Languages', 'Display', 'Devices'];
    const othersarray = ['Invite Friends', 'Switch Accounts', 'Close Account']
    const array3 = ['Privacy Policy', 'Infos & Help'];
    handleLogout = () => {
        // navigation.navigate('Register');
        setIsLogout(!isLogout);
    };
    const handleLogoutModal = () => {
        setIsLogout(!isLogout);
    };
    handleCancel = () => {
        setIsLogout(false);
    };
    handleNavigate = () => {
        navigation.navigate('Loading');
    }

    return (
        <SafeAreaView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                
                <Modal visible={isLogout} transparent={true}>
                    <StatusBar 
                        translucent backgroundColor={'rgba(10, 10, 10, 0.7)'}
                    />
                    <View style={styles.modalContainer}>
                        <View style = {styles.modalBody}>
                            <Text style = {styles.modalTitle}>
                                Logout
                            </Text>
                            <Text style = {styles.modalContent}>
                                Are you sure, you want to log out?
                            </Text>
                            <View style = {styles.modalButtons}>
                                <CustomRoundedButton
                                    navigation={navigation}
                                    title="Cancel"
                                    width={vw(37.2)}
                                    height={vw(13.3)}
                                    backgroundColor={'transparent'}  
                                    color={'#53FAFB'}
                                    fontSize={vw(3.9)}
                                    onPress = {handleCancel}
                                />
                                <CustomRoundedButton
                                    title="Logout"
                                    width={vw(37.2)}
                                    height={vw(13.3)}
                                    backgroundColor="#53FAFB"  
                                    color='black'
                                    fontSize={vw(3.9)}
                                    onPress={handleNavigate}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style = {styles.header}>
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
                        Account Settings
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    <View style = {styles.userSetting}>
                        <View style = {styles.userInfo}>
                            <View style = {styles.user}>
                                <Image source = {user.avatar} style = {styles.avatarStyle}/>
                                <View style = {styles.userfont}>
                                    <Text style = {[styles.userfont, {fontSize: vw(2.2), color: "#4C4C4C"}]}>
                                        {helloMessage}
                                    </Text>
                                    <Text style = {[styles.userfont, {fontSize: vw(3.3), color: "white"}]}>
                                        {user.fullName}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style = {styles.wallet}
                                // onPress = {navigation.navigate('Overview')}
                            >
                                <Svg width={vw(4.2)} height={vw(3.3)} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M14 3.8125H1M1 6.3125H3.30534C3.65646 6.3125 3.83203 6.3125 4.00179 6.3416C4.15247 6.36742 4.29947 6.41022 4.43974 6.4691C4.59778 6.53543 4.74385 6.62907 5.036 6.81635L5.414 7.05865C5.70615 7.24593 5.85222 7.33957 6.01026 7.4059C6.15053 7.46478 6.29753 7.50758 6.44821 7.5334C6.61797 7.5625 6.79354 7.5625 7.14466 7.5625H7.85534C8.20646 7.5625 8.38203 7.5625 8.55179 7.5334C8.70247 7.50758 8.84946 7.46478 8.98974 7.4059C9.14778 7.33957 9.29385 7.24593 9.586 7.05865L9.96399 6.81635C10.2561 6.62907 10.4022 6.53543 10.5603 6.4691C10.7005 6.41022 10.8475 6.36742 10.9982 6.3416C11.168 6.3125 11.3435 6.3125 11.6947 6.3125H14M1 3L1 9C1 9.70006 1 10.0501 1.14169 10.3175C1.26633 10.5527 1.4652 10.7439 1.70981 10.8638C1.9879 11 2.35193 11 3.08 11L11.92 11C12.6481 11 13.0121 11 13.2902 10.8638C13.5348 10.7439 13.7337 10.5527 13.8583 10.3175C14 10.0501 14 9.70007 14 9V3C14 2.29994 14 1.9499 13.8583 1.68251C13.7337 1.44731 13.5348 1.25608 13.2902 1.13624C13.0121 1 12.6481 1 11.92 1L3.08 1C2.35193 1 1.9879 1 1.70981 1.13624C1.4652 1.25608 1.26633 1.44731 1.14169 1.68251C1 1.9499 1 2.29993 1 3Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                
                                <Text style = {[styles.userfont, {fontSize: vw(2.8), color: "black"}]}>
                                    {user.wallet}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style= {{marginTop: vw(8.1), marginBottom:vw(5.6), fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: '#4C4C4C'}}>
                            Promoted
                        </Text>
                        <View style = {styles.upgrade}>
                            <Text style = {[styles. modalTitle, {fontFamily: 'TT Firs Neue Trial Regular'}]}>
                                Upgrade to PRO 🍪
                            </Text>
                            <Svg width={vw(5.83)} height={vw(5.83)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M8 15.5L13 10.5L8 5.5" stroke="#797979" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                    </View>
                    <View style = {styles.accountSetting}>
                        <Text style = {styles.settingtext}>
                            Account settings
                        </Text>
                        <View style = {styles.settingpanel}>
                        {
                            accountarray.map((item, index) => 
                                <CustomSettingButton
                                    key = {index}
                                    navigation = {navigation}
                                    title = {item.name}
                                    avatarName = {index}
                                    navigateName = {item.navigate}
                                />
                            )
                        }
                        </View>
                    </View>
                    <View style = {styles.appSetting}>
                        <Text style = {styles.settingtext}>
                            App Settings
                        </Text>
                        <View style = {styles.settingpanel}>
                        {
                            apparray.map((item, index) => 
                                <CustomSettingButton
                                    key = {index}
                                    navigation = {navigation}
                                    title = {item}
                                    avatarName = {index+5}
                                    navigateName = ''
                                />
                            )
                        }
                        </View>
                    </View>
                    <View style = {styles.wallets}>
                        <Text style = {styles.settingtext}>
                            Wallet
                        </Text> 
                        <View style = {[styles.settingpanel, {aspectRatio: 320/51}]}>                   
                            <TouchableOpacity
                                style={styles.button}
                                // onPress={() => navigation.navigate(navigateName);}
                            >
                                <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <View style={{backgroundColor: '#0E51B4', width: vw(7), height: vw(7), borderRadius: vw(3.6), overflow: 'hidden'}}>
                                        <Svg width={vw(7.2)} height={vw(6.94)} viewBox="0 0 26 25" fill="none">
                                            {/* <Rect x="0.875" width={vw(6.94)} height={vw(6.94)} rx={vw(3.6)} fill="#0E51B4"/> */}
                                            <Path d="M15.5972 10.3976V8.45356C15.5972 7.99148 15.5972 7.76044 15.4999 7.61846C15.4148 7.4944 15.2831 7.41013 15.1349 7.3849C14.9652 7.35602 14.7554 7.45284 14.3358 7.64648L9.40779 9.92097C9.03361 10.0937 8.84653 10.18 8.7095 10.3139C8.58837 10.4323 8.4959 10.5768 8.43917 10.7364C8.375 10.917 8.375 11.123 8.375 11.5351V14.2865M15.875 14.0087H15.8806M8.375 12.1754L8.375 15.8421C8.375 16.4644 8.375 16.7755 8.4961 17.0132C8.60263 17.2222 8.77261 17.3922 8.98168 17.4988C9.21936 17.6199 9.5305 17.6199 10.1528 17.6199H16.5972C17.2195 17.6199 17.5306 17.6199 17.7683 17.4988C17.9774 17.3922 18.1474 17.2222 18.2539 17.0132C18.375 16.7755 18.375 16.4644 18.375 15.8421V12.1754C18.375 11.5531 18.375 11.242 18.2539 11.0043C18.1474 10.7952 17.9774 10.6253 17.7683 10.5187C17.5306 10.3976 17.2195 10.3976 16.5972 10.3976L10.1528 10.3976C9.5305 10.3976 9.21936 10.3976 8.98168 10.5187C8.77261 10.6253 8.60263 10.7952 8.4961 11.0043C8.375 11.242 8.375 11.5531 8.375 12.1754ZM16.1528 14.0087C16.1528 14.1622 16.0284 14.2865 15.875 14.2865C15.7216 14.2865 15.5972 14.1622 15.5972 14.0087C15.5972 13.8553 15.7216 13.731 15.875 13.731C16.0284 13.731 16.1528 13.8553 16.1528 14.0087Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </View>
                                    <Text 
                                        style = {styles.text}
                                    >
                                        connect your wallet
                                    </Text>
                                    <Text 
                                        style = {[styles.text, {color: '#696969'}]}
                                    >
                                        XKSGhgajday...
                                    </Text>
                                </View>
                                <Svg width={vw(5.83)} height={vw(5.83)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M8 15.5L13 10.5L8 5.5" stroke="#797979" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {styles.others}>
                        <Text style = {styles.settingtext}>
                            Others
                        </Text>
                        <View style = {[styles.settingpanel, {aspectRatio: 320/136}]}>
                        {
                            othersarray.map((item, index) => 
                                <CustomSettingButton
                                    key = {index}
                                    navigation = {navigation}
                                    title = {item}
                                    avatarName = {index+11}
                                    navigateName = ''
                                />
                            )
                        }
                        </View>
                    </View>
                    <View style = {{marginTop: vw(5)}}>
                        <View style = {[styles.settingpanel, {aspectRatio: 320/96}]}>
                        {
                            array3.map((item, index) => 
                                <CustomSettingButton
                                    key = {index}
                                    navigation = {navigation}
                                    title = {item}
                                    avatarName = {index+14}
                                    navigateName = 'Overview'
                                />
                            )
                        }
                        </View>
                    </View>
                    <View style = {{height: vw(15)}}/>
                </ScrollView>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {styles.logout}
                        onPress = {handleLogout}
                    >
                        <Text style = {[styles.footerText, {fontSize: vw(3.9)}]}>
                            Logout &nbsp;&nbsp;&nbsp;
                        </Text>
                        <Svg width={vw(4.72)} height={vw(4.44)} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M3.77719 11.9357C3.77719 12.2122 3.77719 12.3505 3.78953 12.4707C3.89192 13.4686 4.61361 14.2929 5.58924 14.5263C5.70674 14.5544 5.84383 14.5727 6.1179 14.6092L11.3067 15.3011C12.7837 15.498 13.5222 15.5965 14.0954 15.3686C14.5986 15.1685 15.0178 14.8015 15.2826 14.3291C15.5843 13.7911 15.5843 13.046 15.5843 11.5559V4.44408C15.5843 2.95399 15.5843 2.20894 15.2826 1.67091C15.0178 1.19853 14.5986 0.831546 14.0954 0.63145C13.5222 0.403541 12.7837 0.502009 11.3067 0.698945L6.1179 1.39078C5.8438 1.42733 5.70675 1.4456 5.58924 1.47371C4.61361 1.70709 3.89192 2.5314 3.78953 3.52931C3.77719 3.64951 3.77719 3.78777 3.77719 4.0643M8.50004 4.85144L11.6486 8M11.6486 8L8.50004 11.1486M11.6486 8H1.41577" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.footerText}>
                        Biples Version 1.0 &copy; 2024
                    </Text>
                </View>
            </View>
        </SafeAreaView>
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
    header: {
        position: 'absolute',
        width: vw(100),
        aspectRatio: 360/23,
        top: vw(17),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold'
        // padding: 10,
        // textAlign: 'center'
    },
    body: {
        marginTop: vw(27.5),
        marginBottom: vw(22.5),
    },
    userSetting: {
        marginTop: vw(5),
        width: vw(90),
        aspectRatio: 320/148,
        justifyContent: 'center',
    },
    userInfo: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'start',
    },
    userfont: {
        marginLeft: vw(3),
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    avatarStyle: {
        width: vw(9.7), 
        height: vw(9.7), 
        borderRadius: vw(5)
    },
    wallet: {
        flexDirection: 'row',
        width: vw(27.8),
        aspectRatio: 100/30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#53FAFB",
        borderRadius: vw(2)
    },
    upgrade: {
        width: vw(90),
        aspectRatio: 320/45,
        padding: vw(3.9),
        paddingLeft: vw(5),
        backgroundColor: '#53FAFB08',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: vw(4),
        marginBottom: vw(2.2)
    },
    accountSetting: {
        width: vw(90),
        aspectRatio: 320/272
    },
    settingtext: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.5),
        marginTop: vw(4.7),
        marginBottom: vw(4.7),
        color: 'white'
    },
    settingpanel: {
        width: vw(90),
        aspectRatio: 320/217,
        padding: vw(3.9),
        paddingLeft: vw(5),
        backgroundColor: '#202020',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: vw(4),
    },
    button: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: vw(80),
        marginBottom: vw(4.2)
    },
    text: {
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        marginLeft: vw(4)
    },
    footer: {
        position: 'absolute',
        bottom: vw(4.44),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: vw(5)
    },
    logout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: vw(90),
        aspectRatio: 320/40,
        backgroundColor: '#FF5252',
        color: 'white',
        borderRadius: vw(3)
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        paddingBottom: vw(10),
        paddingLeft: vw(1)
    },
    modalBody: {
        width: vw(90),
        backgroundColor: '#202020',
        flexDirection: 'column',
        alignItems: 'center',
        aspectRatio: 327/188,
        borderRadius: vw(5),
        justifyContent: 'space-around',
        padding: vw(4)
    },
    modalTitle: {
        fontSize: vw(3.6), 
        fontFamily: 'TT Firs Neue Trial Bold', 
        color: 'white'
    },
    modalContent: {
        fontSize: vw(3.9), 
        fontFamily: 'TT Firs Neue Trial Medium', 
        color: 'white'
    },
    modalButtons: {
        flexDirection: 'row', 
        width: vw(77.5), 
        justifyContent: 'space-between'
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    }
});

export default Settings;