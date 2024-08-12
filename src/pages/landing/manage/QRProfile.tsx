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

const QRProfile = ({navigation}) => {
    
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
                            QR Code Profile
                        </Text>
                        <Text>&nbsp;</Text>
                    </View>
                </View>
                <View style = {styles.body}>
                    <Image source = {require('../../../../assets/images/avatar.jpg')}
                        style = {{width: vw(23), height: vw(23), borderRadius: vw(12)}}
                    />
                    <Image source = {require('../../../../assets/images/QRCode.png')}
                        style = {{width: vw(51.1), height: vw(51.1), borderRadius: vw(12), marginTop: vw(10)}}
                    />
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
                    <TouchableOpacity 
                        style = {styles.footerBtn}
                        onPress = {() => navigation.navigate('Scan')}
                    >
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: 'black', fontSize: vw(5.6), textAlign: 'center'}}>
                            Share
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

export default QRProfile;