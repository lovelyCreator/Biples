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
    TouchableHighlight,
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
// import { TouchableOpacity, TouchableHighlight } from 'react-native';

const CELL_COUNT = 5;

const CommunityInfoRegister = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const [name, setName] = useState('');
    const [voiceBorder, setVoiceBorder] = useState(true);
    const [description, setDescription] = useState('');
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedDesp, setIsFocusedDesp] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
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
                <ScrollView  showsVerticalScrollIndicator={false}>
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
                                placeholder = 'Name is here'
                                placeholderTextColor='#9D9D9D'
                                value = {name}
                                onChangeText = {handleText}
                                keyboardAppearance = "dark"
                                keyboardType = 'default'
                            />
                            <View style = {{ width: vw(90), borderBottomColor: isFocusedName ? '#53FAFB' : '#9D9D9D', height:0, borderBottomWidth: vw(0.6)}}/>
                            <Text style = {styles.subtitle}>
                                The terms and conditions contained in.
                            </Text>
                            <View style = {{width: vw(90), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableHighlight style = {{width: vw(41.7), aspectRatio: 150/120, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: vw(4.7), marginTop: vw(5.8), borderWidth: vw(0.3), borderColor: !voiceBorder ? '#53FAFB': '#252525', borderRadius: vw(5.6)}}
                                    onPress = {() => setVoiceBorder(false)}
                                >
                                    <Text style = {[styles.subtitle, {color:'white'}]}>
                                        Text
                                    </Text>
                                </TouchableHighlight>
                                <TouchableHighlight style = {{width: vw(41.7), aspectRatio: 150/120, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: vw(4.7), marginTop: vw(5.8), borderWidth: vw(0.3), borderColor: voiceBorder ? '#53FAFB': '#252525', borderRadius: vw(5.6)}}
                                    onPress = {() => setVoiceBorder(true)}
                                >
                                    <Text style = {[styles.subtitle, {color:'white'}]}>
                                        Voice
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style = {[styles.inputStyle, {marginTop: vw(5)}]}>
                            <TextInput
                                onFocus = {() => setIsFocusedDesp(true)}
                                onBlur = {() => setIsFocusedDesp(false)}
                                style={{ color: 'white', fontSize: description == '' ? vw(3.3) : vw(5) }}
                                placeholder = 'Description is here'
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
                    <View style = {styles.bodyBottom}>
                        <View style = {styles.privateStyle}>
                            <TouchableOpacity style = {styles.privBtn}
                                onPress = { () => navigation.navigate('ChannelSetting') }
                            >
                                <View style = {styles.privInfo}>
                                    <Svg width={vw(5.8)} height={vw(5.8)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12.2316 11.6947C12.161 11.4831 12.1257 11.3772 12.1276 11.2907C12.1295 11.1996 12.1417 11.1519 12.1836 11.0711C12.2235 10.9942 12.33 10.895 12.5432 10.6967C13.1318 10.149 13.5 9.36747 13.5 8.5C13.5 6.84315 12.1569 5.5 10.5 5.5C8.84315 5.5 7.5 6.84315 7.5 8.5C7.5 9.36747 7.86818 10.149 8.45681 10.6967C8.66996 10.895 8.77653 10.9942 8.81639 11.0711C8.85832 11.1519 8.87049 11.1996 8.87242 11.2907C8.87426 11.3772 8.83898 11.4831 8.76844 11.6947L7.85099 14.447C7.73249 14.8025 7.67324 14.9803 7.70877 15.1218C7.73987 15.2456 7.81718 15.3529 7.92484 15.4216C8.04783 15.5 8.2352 15.5 8.60994 15.5H12.3901C12.7648 15.5 12.9522 15.5 13.0752 15.4216C13.1828 15.3529 13.2601 15.2456 13.2912 15.1218C13.3268 14.9803 13.2675 14.8025 13.149 14.447L12.2316 11.6947Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {[styles.subtitle, {color:'white', marginTop: 0, marginLeft: vw(2)}]}>
                                        Private Channel
                                    </Text>
                                </View>
                                <Svg width={vw(2)} height={vw(3.1)} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M1 10.5L6 5.5L1 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <Text style = {[styles.subtitle, {marginTop: vw(3), }]}>
                                Only people have an access to see this Channel
                            </Text>
                        </View>
                        <View style = {[styles.privateStyle, {marginTop: vw(5.8)}]}>
                            <View style = {styles.privBtn}>
                                <View style = {styles.privInfo}>
                                    <Svg width={vw(5.3)} height={vw(6.4)} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M18.5 10.4143L10.9059 2.82019C10.387 2.30134 10.1276 2.04191 9.82485 1.85639C9.55644 1.6919 9.2638 1.57069 8.95769 1.4972C8.61243 1.41431 8.24554 1.41431 7.51177 1.41431L3.5 1.41431M0.5 8.11431L0.5 10.0888C0.5 10.578 0.5 10.8226 0.55526 11.0528C0.604254 11.2568 0.685062 11.4519 0.79472 11.6309C0.918403 11.8327 1.09136 12.0057 1.43726 12.3516L9.23726 20.1516C10.0293 20.9436 10.4253 21.3396 10.882 21.488C11.2837 21.6185 11.7163 21.6185 12.118 21.488C12.5747 21.3396 12.9707 20.9436 13.7627 20.1516L16.2373 17.677C17.0293 16.885 17.4253 16.489 17.5737 16.0323C17.7042 15.6307 17.7042 15.198 17.5737 14.7963C17.4253 14.3396 17.0293 13.9436 16.2373 13.1516L8.93726 5.85157C8.59136 5.50566 8.4184 5.33271 8.21657 5.20903C8.03763 5.09937 7.84254 5.01856 7.63846 4.96957C7.40829 4.91431 7.1637 4.91431 6.67452 4.91431H3.7C2.5799 4.91431 2.01984 4.91431 1.59202 5.13229C1.2157 5.32404 0.909734 5.63 0.717987 6.00633C0.5 6.43415 0.5 6.9942 0.5 8.11431Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {[styles.subtitle, {color:'white', marginTop: 0, marginLeft: vw(2)}]}>
                                        Marketplace Statue
                                    </Text>
                                </View>
                                <View style = {styles.switches}>
                                    <TouchableOpacity
                                    style={[styles.switch, isEnabled ? styles.switchOn : styles.switchOff]}
                                    onPress={toggleSwitch}
                                    >
                                        <View style={[styles.thumb, isEnabled ? styles.thumbOn : styles.thumbOff]} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style = {[styles.subtitle, {marginTop: vw(3), }]}>
                                Add link’s NFTs
                            </Text>
                            <View style = {styles.link}>
                                <Text style = {[styles.maintitle, {fontSize: vw(4.4), marginRight: vw(5)}]}>
                                    https://nfts.marketplace.com/hseos
                                </Text>
                                <Svg width={vw(3.9)} height={vw(3.9)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4 1H8.73333C10.2268 1 10.9735 1 11.544 1.29065C12.0457 1.54631 12.4537 1.95426 12.7094 2.45603C13 3.02646 13 3.77319 13 5.26667V10M3.13333 13H8.53333C9.28007 13 9.65344 13 9.93865 12.8547C10.1895 12.7268 10.3935 12.5229 10.5213 12.272C10.6667 11.9868 10.6667 11.6134 10.6667 10.8667V5.46667C10.6667 4.71993 10.6667 4.34656 10.5213 4.06135C10.3935 3.81046 10.1895 3.60649 9.93865 3.47866C9.65344 3.33333 9.28007 3.33333 8.53333 3.33333H3.13333C2.3866 3.33333 2.01323 3.33333 1.72801 3.47866C1.47713 3.60649 1.27316 3.81046 1.14532 4.06135C1 4.34656 1 4.71993 1 5.46667V10.8667C1 11.6134 1 11.9868 1.14532 12.272C1.27316 12.5229 1.47713 12.7268 1.72801 12.8547C2.01323 13 2.3866 13 3.13333 13Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <View style = {{marginTop: vw(3),flexDirection: 'row', maginTop: vw(3), alignItems: 'center'}}>
                                <Text style = {[styles.subtitle, { color: '#707070', marginTop: 0, marginRight: vw(3) }]}>
                                    Powered by
                                </Text>
                                <Svg width={vw(15.6)} height={vw(4.2)} viewBox="0 0 56 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M20.1523 11.1111V3.51208H17.1918V2.72101C19.565 2.72101 21.5786 2.72101 23.9518 2.72101V3.51208H20.9913V11.1111H20.1523ZM30.6129 10.32V11.1111H24.596C24.596 8.31839 24.596 5.51371 24.596 2.72101H30.505V3.51208H25.435V6.52052H30.2773V7.29959H25.435V10.32H30.6129ZM32.2707 2.72101L37.7003 9.52896L37.6524 6.74825V2.72101H38.4914V11.1111H37.988L32.5584 4.36307L32.5824 6.84413V11.1111H31.7433V2.72101H32.2707ZM46.053 4.05144L45.3458 4.44697C44.8544 3.65591 43.8236 3.39222 42.9367 3.38023C41.9059 3.38023 40.5755 3.67988 40.5755 4.91442C40.5755 5.89725 41.6542 6.16094 42.9606 6.38867C44.6147 6.67633 46.2927 7.04789 46.2927 8.83378C46.2807 10.7275 44.4589 11.2429 42.9367 11.2429C41.5223 11.2429 40.084 10.7275 39.4368 9.38513L40.1679 8.98959C40.7433 10.0683 41.9179 10.4399 42.9367 10.4399C43.9674 10.4399 45.4417 10.1642 45.4417 8.82179C45.4537 7.68314 44.1832 7.39548 42.8767 7.16775C41.2946 6.89208 39.7365 6.54449 39.7365 4.91442C39.7125 3.1525 41.5104 2.58917 42.9247 2.58917C44.0753 2.58917 45.3099 2.9008 46.053 4.05144ZM51.0295 2.57718C53.8701 2.58917 55.2845 4.69867 55.2725 6.94002C55.2605 9.13342 53.8701 11.2669 51.0295 11.2669C48.1769 11.2669 46.7745 9.13342 46.7745 6.92803C46.7745 4.56683 48.3087 2.57718 51.0295 2.57718ZM47.6135 6.94002C47.6375 8.77385 48.7402 10.4758 51.0295 10.4758C53.3188 10.4758 54.4215 8.73789 54.4335 6.94002C54.4335 5.05825 53.3188 3.38023 51.0295 3.36825C48.7762 3.36825 47.5896 4.96236 47.6135 6.94002Z" fill="white"/>
                                    <Path d="M6.3307 1.625L0.716553 7.25608H3.17098L4.71134 5.71571V11.1944L6.3307 12.8138V1.625ZM8.13062 1.625L13.7448 7.25608H11.2903L9.74997 5.71571V11.1944L8.13062 12.8138V1.625Z" fill="white"/>
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.comment}>
                        <View style = {{ width: vw(100), alignItems: 'center'}}>
                            <TouchableOpacity 
                                style = {[styles.footerBtn, {backgroundColor: '#53FAFB', borderRadius:vw(3), width: vw(90), aspectRatio: 320/45}]}
                                onPress={() => {
                                    navigation.navigate('CommunityEmpty');
                            }}
                            >
                                <Text style = {[styles.maintitle, {fontSize: vw(5), color: 'black'}]}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{height: vw(5)}}/>
                </ScrollView>
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
    },
    bodyBottom: {
        marginTop: vw(7.3),
        width: vw(90),
        height: vw(82.22),
        marginLeft: vw(5)
    },
    privateStyle: {
        width: vw(90),
        aspectRatio: 318/75,
    },
    privBtn: {
        flexDirection: 'row',
        aspectRatio: 318/45,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
        borderRadius: vw(5),
        backgroundColor: '#202020',
    },
    privInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switches: {
        flexDirection: 'row',
        marginTop: vw(2)
    },
    switch: {
        width: vw(8.3),
        height: vw(4.44),
        borderRadius: vw(2.3),
        borderWidth: vw(0.3),
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(2)
    },
    switchOn: {
        backgroundColor: 'transparent',
        borderColor: '#53FAFB',
    },
    switchOff: {
        backgroundColor: 'transparent',
        borderColor: '#363636',
    },
    thumb: {
        width: vw(3.3),
        height: vw(3.3),
        borderRadius: vw(2),
        backgroundColor: '#53FAFB',
    },
    thumbOn: {
        transform: [{ translateX: vw(2) }],
        backgroundColor: '#53FAFB'
    },
    thumbOff: {
        transform: [{ translateX: 0 - vw(2)}],
        backgroundColor: '#363636'
    },
    link: {
        marginTop: vw(3),
        flexDirection: 'row',
        alignItems: 'center',
        height: vw(7),
        borderBottomWidth: vw(0.3),
        borderBottomColor: '#53FAFB',
    },
});

export default CommunityInfoRegister;