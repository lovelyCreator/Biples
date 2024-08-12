import React, {useState} from 'react';
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    PanResponder,
    TouchableOpacity, 
    FlatList,
    TextInput
} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'

const Scan = ({navigation}) => {
    
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = { () => 
                                navigation.goBack()
                            }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Scan QR
                        </Text>
                        <Text>&nbsp;</Text>
                    </View>
                </View>
                <View style = {styles.body}>
                        <Svg width={vw(61.7)} height={vw(61.7)} viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M65.0772 4H62.6341C42.1102 4 31.8483 4 24.0092 7.99643C17.1138 11.5118 11.5076 17.1211 7.99421 24.0203C4 31.8638 4 42.1314 4 62.6667V65.1111M65.0772 224H62.6341C42.1102 224 31.8483 224 24.0092 220.004C17.1138 216.488 11.5076 210.879 7.99421 203.98C4 196.136 4 185.869 4 165.333V162.889M223.878 65.1111V62.6667C223.878 42.1314 223.878 31.8638 219.884 24.0203C216.37 17.1211 210.764 11.5118 203.869 7.99643C196.03 4 185.768 4 165.244 4H162.801M223.878 162.889V165.333C223.878 185.869 223.878 196.136 219.884 203.98C216.37 210.879 210.764 216.488 203.869 220.004C196.03 224 185.768 224 165.244 224H162.801M4 114H4.12216M58.9695 114H59.0916M168.908 114H169.031M113.939 114H114.061M223.878 114H224" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    <View style = {styles.foundResult}>
                        <Text style = {styles.title}>
                            Place QR code here
                        </Text>
                        <Text style = {[styles.text, {flexWrap: 'wrap', textAlign: 'center', marginTop: vh(3.07)}]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </Text>
                    </View>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {styles.footerBtn}
                        onPress = {() => navigation.navigate('FriendProfile')}
                    >
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: 'black', fontSize: vw(5.6), textAlign: 'center'}}>
                            Scan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vw(28.9),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    body: {
        width: vw(100),
        // position: 'absolute',
        paddingTop: vw(51.1),
        marginBottom: vh(12.11),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5.6),
        color: 'white',
    },
    foundResult: {
        width: vw(80),
        // marginLeft: vw(5),
        height: vh(24.2),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: vw(20)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#656565',
        width: vw(85)
    },
    footer: {
        position: 'absolute',
        bottom: vw(0),
        width: vw(100),
        marginBottom: vw(16),
        paddingTop: vw(4),
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    footerBtn: {
        width: vw(48),
        aspectRatio: 173/46,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        backgroundColor: '#53FAFB',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Scan;