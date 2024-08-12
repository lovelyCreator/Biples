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
    TextInput
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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';

const CELL_COUNT = 5;

const ChannelSetting = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.titleBar}>
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
                    <Text style = {[styles.maintitle, {fontSize: vw(4.4)}]}>
                        Channel Preferences
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View  showsVerticalScrollIndicator={false}>
                    <View style = {styles.title}>
                        <Text style = {[styles.maintitle, {}]}>
                            Choose a setting
                        </Text>
                        <Text style = {styles.subtitle}>
                            The terms and conditions contained in this Agreement 
                            shall constitute the entir
                        </Text>
                    </View>
                </View>
                <View style = {{ width: vw(100), alignItems: 'center'}}>
                    <TouchableOpacity 
                        style = {[styles.footerBtn, {borderColor: isEnabled? '#53FAFB' : 'transparent'}]}
                        onPress={() => {
                            setIsEnabled(true)
                        }}
                    >
                        <View style = {{ width: vw(5), height: vw(5), backgroundColor: '#53FAFB20', borderRadius: vw(3),marginRight: vw(5), justifyContent: 'center', alignItems:'center'}}>
                            {
                                isEnabled &&
                                <View style = {{ width: vw(2.2), height: vw(2.2), backgroundColor: '#53FAFB', borderRadius: vw(3),}}/>
                            }
                        </View>
                        <Text style = {styles.btnText}>Private Channel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[styles.footerBtn, {borderColor: !isEnabled? '#53FAFB' : 'transparent', marginTop: vw(5)}]}
                        onPress={() => {
                            setIsEnabled(false)
                        }}
                    >
                        <View style = {{ width: vw(5), height: vw(5), backgroundColor: '#53FAFB20', borderRadius: vw(3),marginRight: vw(5), justifyContent: 'center', alignItems:'center'}}>
                            {
                                !isEnabled &&
                                <View style = {{ width: vw(2.2), height: vw(2.2), backgroundColor: '#53FAFB', borderRadius: vw(3),}}/>
                            }
                        </View>
                        <Text style = {styles.btnText}>Public Channel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
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
        flexDirection: 'column',
        paddingBottom: vw(7.5),
        paddingTop: vw(8.9)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(6.7),
        fontFamily: 'TT Firs Neue Trial Medium'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        marginTop: vw(2.2),
        color: '#707070',
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial ExtraLight'
        // padding: 10,
        // textAlign: 'center'
    },
    footerBtn: {
        width: vw(90),
        borderRadius: vw(5),
        aspectRatio: 320/55,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
        borderWidth: vw(0.3),
        backgroundColor: '#202020'
    },
    btnText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(4.4),
        color: 'white'
    },
});

export default ChannelSetting;