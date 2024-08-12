
import React, { useState, useEffect, createRef } from 'react';
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
    FlatList,
    InteractionManager,
    Switch,
    findNodeHandle,
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
import { Icon } from 'react-native-elements';
import CustomCard from "../../../components/customCard"; 
import CustomTopCard from "../../../components/customTopcard"
import CustomRoundedButton from "../../../components/customRoundedButton"
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';
// import { backgroundColor, TouchableOpacity } from 'react-native';

const BuyConfirm = ({ navigation }) => {
    useEffect(() => {
      const backAction = () => {
        setTimeout(() => {
          navigation.goBack();
        }, 300); // Delay the back action by one second
  
        return true; // Prevent default behavior (i.e. exit the app)
      };
  
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
      return () => backHandler.remove();
    }, []);

    return (
        <SafeAreaView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.btns}>
                    <TouchableOpacity style = {styles.btn}>
                        <Svg width={vw(6.2)} height={vw(4.7)} viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M17.119 4.13245H0.736328L4.88104 0H21.2637L17.119 4.13245ZM17.119 16.9999H0.736328L4.88104 12.8695H21.2637M4.88104 10.5662H21.2637L17.119 6.43371H0.736328" fill="#53FAFB"/>
                        </Svg>
                        <Text style = {styles.btnText}> 12.02 SOL</Text>
                        <Text style = {{width: vw(6.2)}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn}>
                        <Text style = {styles.btnText}> 30 Days</Text>
                    </TouchableOpacity>
                    <Text style = {[styles.btnText, {color: 'white', textAlign: 'center'}]}>
                        {"Are you sure you want to buy \nfrom [Community Name] for 12.02 SOL?"}
                    </Text>
                    <View style = {styles.btnArray}>
                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3)}]}>
                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: '#53FAFB'}]}> Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), backgroundColor: '#53FAFB'}]}
                            onPress = {() => navigation.navigate('BuyLoading')}
                        >
                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: 'black', fontFamily: 'TT Firs Neue Trial DemiBold'}]}> Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    btns: {
        width: vw(80),
        height: vw(71.1),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: vw(80),
        aspectRatio: 286/45,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: vw(15),
        borderWidth: vw(0.3),
        borderColor: '#686868',
        flexDirection: 'row'
    },
    OpacityBtn: {
        width: vw(42.2),
        aspectRatio: 152/45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(15),
        borderWidth: vw(0.3),
        borderColor: '#53FAFB',
        flexDirection: 'row'
    },
    btnText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.9),
        color: 'white'
    },
    btnArray: {
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default BuyConfirm;