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
    TouchableOpacity
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../../components/customImageButton'
import CustomInputBox from "../../../components/customInputBox";
import CustomSwitchButton from "../../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import RadialGradient from 'react-native-radial-gradient';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LottieView from 'lottie-react-native';

const CELL_COUNT = 5;

const BuyLoading = ({ navigation }) => {

    useremail = "yazidelkherrati@gmail.com";

    const [loadingState, setLoadingState] = useState(false);
    useEffect(() => {
        const switchPage = setTimeout(() => {
            console.log('time is ended');
            navigation.navigate('NoCommunity');
        }, 3000); // 10 seconds in milliseconds

        return () => clearTimeout(switchPage);
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <View style = {styles.confirm}>
                    <LottieView source={require('../../../../assets/images/check_animation.json')} 
                        autoPlay 
                        loop={false} 
                        style={{
                            width:vw(60),
                            aspectRatio: 1/1
                        }}
                    />
                </View>
                <View style = {styles.title}>
                    <Text style = {[styles.maintitle, {marginBottom: vw(3), textAlign: 'center'}]}>
                        Place a bid Success
                    </Text>
                    <Text style = {styles.subtitle}>
                        You have successfully bid on the item {'\n'}and it will be on the list
                    </Text>
                </View>
                <View style = {{width: vw(100), height: vw(56.5)}}/>
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
        alignItems: 'center'
    },
    title: {
        padding: vw(5),
        width: vw(100),
        justfiyContent: 'center',
        aspectRatio: 360/155,
        marginTop: vw(1)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'TT Firs Neue Trial Bold'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        color: 'white',
        fontSize: vw(3.9),
        fontFamily: 'TT Firs Neue Trial Regular',
        textAlign: 'center',
        // padding: 10,
        // textAlign: 'center'
    },
    confirm: {
        marginTop: vw(60),
        width: vw(100),
        height: vw(40.6),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default BuyLoading;