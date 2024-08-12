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
import CustomButton from "../../components/customButton"
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

const CommunityRegister = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedDesp, setIsFocusedDesp] = useState(false);
    const handleText = (text) => {
        setName(text);
    }
    const handleDescription = (text) => {
        setDescription(text);
    }

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
                        Create Community
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View >
                    <View style = {styles.title}>
                        <Text style = {[styles.maintitle, {}]}>
                            Create New Community
                        </Text>
                        <Text style = {styles.subtitle}>
                            The terms and conditions contained in this Agreement 
                            shall constitute the entir
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', width: vw(95), flexWrap: 'wrap', marginLeft: vw(5)}}>
                        <View style = {styles.inputStyle}>
                            <Text style = {[styles.subtitle, {color: '#9D9D9D'}]}>
                                Add name here
                            </Text>
                            <TextInput
                                onFocus = {() => setIsFocusedName(true)}
                                onBlur = {() => setIsFocusedName(false)}
                                style={{ color: 'white', fontSize: name == '' ? vw(3.3) : vw(5) }}
                                placeholder = 'name is here'
                                placeholderTextColor='#9D9D9D'
                                value = {name}
                                onChangeText = {handleText}
                                keyboardAppearance = "dark"
                                keyboardType = 'default'
                            />
                            <View  style = {{ width: vw(90), borderBottomColor: isFocusedName ? '#53FAFB' : '#9D9D9D', height:0, borderBottomWidth: vw(0.6)}}/>
                            <Text style = {styles.subtitle}>
                                The terms and conditions contained in.
                            </Text>
                        </View>
                        <View style = {[styles.inputStyle, {marginTop: vw(10)}]}>
                            <TextInput
                                onFocus = {() => setIsFocusedDesp(true)}
                                onBlur = {() => setIsFocusedDesp(false)}
                                style={{ color: 'white', fontSize: description == '' ? vw(3.3) : vw(5) }}
                                placeholder = 'Description is hesre'
                                placeholderTextColor='#9D9D9D'
                                value = {description}
                                onChangeText = {handleDescription}
                                keyboardAppearance = "dark"
                                keyboardType = 'default'
                            />
                            <View style = {{ width: vw(90), borderBottomColor: isFocusedDesp ? '#53FAFB' : '#9D9D9D', height:0, borderBottomWidth: vw(0.6)}}/>
                            <Text style = {styles.subtitle}>
                                The terms and conditions contained in.
                            </Text>
                        </View>
                    </View>
                    <View style = {{marginTop: vw(30.55), width: vw(100), alignItems: 'center'}}>
                        <TouchableOpacity 
                            style = {[styles.footerBtn, {backgroundColor: name != '' || description!='' ? '#53FAFB': '#212121', borderRadius:vw(3), width: vw(90), aspectRatio: 320/45, }]}
                            onPress={() => {
                                if (name != '' && description!='')
                                    navigation.navigate('CommunityImgRegister');
                            }}
                        >
                            <Text style = {[styles.maintitle, {fontSize: vw(5), color : name != '' || description!='' ? 'black': '#878787'}]}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.comment}>
                    <Text 
                        style = {{ color: '#565656', fontSize: 12, textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular'}}
                    >
                        By creating your account, you agree in the Biples {'\n'}
                        <Text 
                            style = {{ color: 'white' }}
                            onPress = {() => navigation.navigate('PrivatePolicy')}
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
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#151515',
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
        width: vw(41.7),
        borderRadius: vw(10),
        aspectRatio: 150/45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
    },
    comment: {
        // marginTop: 10,
        width: vw(100),
        // height: vw(29.5),
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: vh(100)
    }
});

export default CommunityRegister;