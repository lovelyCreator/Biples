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

const MemberPermission = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedDesp, setIsFocusedDesp] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const [memberData, setMemberData] = useState({
        avatar: require('../../../../assets/images/follow2.png'),
        name: 'Bronxatory2038',
        role: 'Owner',
        online: 'offline',
    });
    const [permission, setPermission] = useState([
        {
            name: 'Permission 01',
            state: true
        },
        {
            name: 'Permission 02',
            state: true
        },
        {
            name: 'Permission 03',
            state: true
        },
        {
            name: 'Permission 04',
            state: false
        },
    ]);
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
                <View>
                    <View style = {styles. member}>
                        <ImageBackground source = {memberData.avatar} style = {styles.avatar}>
                            <View style = {[styles.online, {backgroundColor: memberData.online == 'offline' ? '#FF5252':
                                    memberData.online == 'online'? '#53FAFB':
                                    memberData.online == 'notification' ? '#FFF505':
                                    memberData.online == 'out' ? '#4D4D4D' :
                                    'transparent'
                                }]}
                            />
                        </ImageBackground>
                        <View style = {styles.info}>
                            <Text style = {styles.maintitle}>
                                {memberData.name}
                            </Text>
                            <Text style = {[styles.maintitle, {fontSize: vw(4.5), color: '#494949', textAlign: 'center'}]}>
                                {memberData.role}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.permission}>
                        {
                            permission.map((item, index) => 
                                <View key ={index} style = { styles.privBtn}>
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
                                        style={[styles.switch, item.state ? styles.switchOn : styles.switchOff]}
                                        onPress={() => {
                                            setPermission(preState => {
                                                const newState = [...preState];
                                                newState[index].state = !(newState[index].state);
                                                return newState;
                                            })
                                        }}
                                        >
                                            <View style={[styles.thumb, item.state ? styles.thumbOn : styles.thumbOff]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    <View style = {{ width: vw(100), alignItems: 'center'}}>
                        <TouchableOpacity 
                            style = {[styles.footerBtn, {backgroundColor: '#53FAFB', borderRadius:vw(3), width: vw(90), aspectRatio: 320/45}]}
                        // onPress={() => {
                        //     setLoadingNumber(loadingNumber+1)
                        // }}
                        >
                            <Text style = {[styles.maintitle, {fontSize: vw(5), color: 'black'}]}>Save</Text>
                        </TouchableOpacity>
                    </View>
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
        width: vw(41.7),
        borderRadius: vw(10),
        aspectRatio: 150/45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
    },
    member: {
        width: vw(100),
        height: vw(70.83),
        paddingBottom: vw(6.7),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: vw(17.8),
        height: vw(17.7),
        marginBottom: vw(4),
        padding: vw(0.5),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    permission: {
        width: vw(100),
        height: vw(58.33),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: vw(14.72)
    },
    privBtn: {
        width: vw(90),
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
    online: {
        width: vw(3.6),
        height: vw(3.6),
        borderRadius: vw(3),
        borderColor: 'black',
        borderWidth: vw(0.5),
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
});

export default MemberPermission;