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
import LinearGradient from 'react-native-linear-gradient';
import CustomPreferences from "../../components/customPreferences"; 
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

const Preferences = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const user = {
        avatar: require('../../../assets/images/image1.png'),
        firstName: 'Yazid',
        fullName: 'Yazid KHERRATI',
        unreadMessage: 18,
        state: 'Sign In',
        wallet: '7,197 ETH'
    };
    const helloMessage = "Good Morning!";
    const accountarray = ['Account Preferences', 'Notifications', 'Messages', 'Communities', 'Saved'];
    const apparray = ['Sign & Security', 'Data Privacy', 'Languages', 'Display', 'Devices'];
    const othersarray = ['Invite Friends', 'Switch Accounts', 'Close Account']
    const array3 = ['Privacy Policy', 'Infos & Help'];
    handlePassword = (text) => {
        setPassword(text);
        if (text !== '') setIsPassword(true);
        else setIsPassword(false);
    };
    handleConfirmPassword = (text) => {
        setConfirmPassword(text);
        // console.log('text', confirmPassword, 'password', password);
        if (text == password) setIsPasswordMatch(true);
        else setIsPasswordMatch(false);
        // console.log(isPasswordMatch)
    };
    handleLogout = () => {
        navigation.navigate('Register');
    };
    const preferences1 = [
        {title: 'Edite Profile',
        content: "Account Preferences"},
        {title: 'Change Password',
        content: "Account Preferences"},
        {title: 'Tittle 01',
        content: "Account Preferences"},
    ];
    const preferences2 = [
        {title: 'Tittle 01',
        content: "Account Preferences"},
        {title: 'Tittle 01',
        content: "Account Preferences"},
    ];
    return (
        <SafeAreaView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.header}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => 
                            navigation.navigate('Settings')
                        }
                    >
                        <Svg width={windowWidth*0.02} height={0.033*windowWidth} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Account Preferences
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    <View style = {{ marginBottom: vw(8)}}>
                        <Text style = {[styles.text, {marginBottom: vw(6.4)}]}>
                            Account Preferences
                        </Text>
                        <Text style = {[styles.text, {marginBottom: vw(11.4)}]}>
                            You can reset your password now. Make sure{'\n'}
                            you remember or you can reset it again.
                        </Text>
                        {
                            preferences1.map((item, index) => 
                                <CustomPreferences 
                                    key = {index}
                                    navigation = { navigation }
                                    navigate = ''
                                    title = {item.title}
                                    content = { item.content }
                                />
                            )
                        }
                    </View>
                    <View>
                        <Text style = {[styles.text, {marginBottom: vw(6.4)}]}>
                            Account Preferences
                        </Text>
                        <Text style = {[styles.text, {marginBottom: vw(11.4)}]}>
                            You can reset your password now. Make sure{'\n'}
                            you remember or you can reset it again.
                        </Text>
                        {
                            preferences2.map((item, index) => 
                                <CustomPreferences
                                    key = {index}
                                    navigation = { navigation }
                                    navigate = ''
                                    title = {item.title}
                                    content = { item.content }
                                />
                            )
                        }
                    </View>
                </ScrollView>
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
        paddingRight: vw(5),
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold'
        // padding: 10,
        // textAlign: 'center'
    },
    body: {
        marginTop: vw(35.5),
    },
    button: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: vw(90),
        marginBottom: vw(5.6)
    },
    text: {
        color: '#6E6E6E',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        paddingLeft: vw(2)
    }
});



export default Preferences;