import React, { useState, useEffect, createRef, useRef } from "react";
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
    InteractionManager,
    findNodeHandle,
    BackHandler,
    TextInput,
    Dimensions,
    Animated,
    PanResponder,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native';r

const Calling = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
    // const wid = vw(52) / addedFriends.length;
    const callingState = {
        addPeople: false,
        voice: false,
        amplify: false,
        camera: false,
        call: true,
        chat: false,
    }
    const friendArray  = [
        {
            id: 0,
            avatar: require('../../../../assets/images/follow2.png'),
            online: true,
            name: '@KitshunaFowyu',
            data: '1930 Items - 23.9K Followers',
            added: false
        },
        {
            id: 1,
            avatar: require('../../../../assets/images/follow2.png'),
            online: true,
            name: '@KitshunaFowyu',
            data: '1930 Items - 23.9K Followers',
            added: false
        },
        {
            id: 2,
            avatar: require('../../../../assets/images/follow2.png'),
            online: true,
            name: '@KitshunaFowyu',
            data: '1930 Items - 23.9K Followers',
            added: false
        },
        {
            id: 3,
            avatar: require('../../../../assets/images/follow2.png'),
            online: true,
            name: '@KitshunaFowyu',
            data: '1930 Items - 23.9K Followers',
            added: false
        },
        {
            id: 4,
            avatar: require('../../../../assets/images/follow2.png'),
            online: true,
            name: '@KitshunaFowyu',
            data: '1930 Items - 23.9K Followers',
            added: false
        },
    ];
    const [calling, setCalling] = useState('call');
    const [friendData, setFriendData] = useState(friendArray);
    const [addedFriends, setAddedFriends] = useState([]);
    const [callState, setCallState] = useState(callingState);
    const [time, setTime] = useState('00:04');
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    const [isFocused, setIsFocused] = useState(false);
    const [allView, setAllView] = useState(0);
    const [screenY, setScreenY] = useState(new Animated.Value(0));
    const [text, setText] = useState(text);
    const opacityAnimation = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dy) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
            //     let num =0
            //     // console.log('onPanResponderRelease', evt, gestureState);
            //     if (gestureState.dy > 0){
            //         setCallState(prevState =>{
            //             const newState = {...prevState};
            //             newState.addPeople = !(newState.addPeople);
            //             return newState}
            //         );
            //         console.log('down');
            //         setAllView(0);
            //         Animated.timing(screenY, {
            //           toValue: 0 * screenHegiht,
            //           duration: 50,
            //           useNativeDriver: true,
            //         }).start();
            //         Animated.timing(opacityAnimation, {
            //           toValue: 0,
            //           duration: 200,
            //           useNativeDriver: true,
            //         }).start();
            //     }
            //     else {
            //         setCallState(prevState =>{
            //             const newState = {...prevState};
            //             newState.addPeople = !(newState.addPeople);
            //             return newState}
            //         );
            //         console.log('up')
            //         setAllView(1)
            //         Animated.timing(screenY, {
            //             toValue: -0.88*screenHegiht,
            //             duration: 50,
            //             useNativeDriver: true,
            //         }).start();
            //         Animated.timing(opacityAnimation, {
            //           toValue: 1,
            //           duration: 200,
            //           useNativeDriver: true,
            //         }).start();
            //     }
            },
        })
    ).current;
    const onchangeText = (text) => {
        setText(text);
    }
    useEffect(() => {

        const backAction = () => {
        //   setShowBlur(false);
    
          setTimeout(() => {
            navigation.goBack();
          }, 300); // Delay the back action by one second
    
          return true; // Prevent default behavior (i.e. exit the app)
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
    }, []);
    const handleAddPeople = () => {
        setAllView(1)
        Animated.timing(screenY, {
            toValue: -0.88*screenHegiht,
            duration: 50,
            useNativeDriver: true,
        }).start();
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.addPeople = !(newState.addPeople);
            return newState}
        );
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
    };
    const handleVoice = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.voice = !(newState.voice);
            return newState}
        );
    };
    const handleAmplify = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.amplify = !(newState.amplify);
            return newState}
        );
    };
    const handleCamera = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.camera = !(newState.camera);
            return newState}
        );
    };
    const handleCall = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.call = !(newState.call);
            return newState}
        );
        if (callState.call) {
            setCalling('end');
        } 
        else setCalling('call');
    };
    const handleChat = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.chat = !(newState.chat);
            return newState}
        );
        navigation.navigate('ChatCalling');
    };
    return(
        <SafeAreaView {...panResponder.panHandlers}>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <ImageBackground source = {require('../../../../assets/images/callBackground.png')}
                    style = {{width: vw(100), height: '100%'}}
                >
                    <Animated.View style = {[styles.boxes, { opacity: opacityAnimation}]}/>
                    <View style = {styles.header}>
                        {!callState.addPeople ? <TouchableOpacity style = {styles.backIcon}
                            onPress = {()=> navigation.goBack()}
                        >
                                <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                    <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            :
                            <View style = {{width: vw(8.9)}}/>
                        }
                        {
                            calling == 'call' ? 
                            <Text style = {[styles.headerText, {color: callState.addPeople ? 'black' : 'white'}]}>
                                Calling {time}
                            </Text>
                            :
                            calling == 'addedFriends' ?
                            <View style = {styles.cameraHeader}>
                                <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M3.1 3.1C1.9402 3.1 1 4.0402 1 5.2V10.8C1 11.9598 1.9402 12.9 3.1 12.9H9.4C10.3469 12.9 11.1474 12.2733 11.4094 11.4121M11.5 8L14.044 5.45598C14.3439 5.15612 14.4938 5.00618 14.6225 4.99605C14.7342 4.98726 14.8434 5.03247 14.9161 5.11767C15 5.21585 15 5.42789 15 5.85196V10.148C15 10.5721 15 10.7841 14.9161 10.8823C14.8434 10.9675 14.7342 11.0127 14.6225 11.0039C14.4938 10.9938 14.3439 10.8439 14.044 10.544L11.5 8ZM11.5 8V6.46C11.5 5.28389 11.5 4.69583 11.2711 4.24662C11.0698 3.85148 10.7485 3.53022 10.3534 3.32889C9.90416 3.1 9.31611 3.1 8.14 3.1H6.25M1 1L15 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {styles.subtitle}>&nbsp;&nbsp;Camera is off</Text>
                            </View>
                            :
                            <View style = {{width: vw(10)}}/>
                        }
                        <View style = {{width: vw(8.9)}}/>
                    </View>
                    <View style = {styles.body}>
                        <Image source = {require('../../../../assets/images/calling.png')}
                            style = {{width: vw(33.3), height: vw(33.3), borderRadius: vw(20)}}
                        />
                        <View style = {styles.name}>
                            <Text style = {styles.Title}>
                                Kitshuna Fowyu
                            </Text>
                            <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                <Path d="M5.57446 7.96406L7.16729 9.55688L8.95922 7.76495L10.7512 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                        <Text style = {styles.text}>@KitshunaFowyu</Text>
                    </View>
                    {
                        calling == 'addedFriends' ? 
                            <View style = {{marginTop: vw(8.11), width: vw(100), alignItems: 'center'}}>
                                <Text style = {[styles.subtitle, {fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(3.9)}]}>Rigning...</Text>
                            </View>
                            :
                            calling == 'end' ?
                            <View style = {{marginTop: vw(8.11), width: vw(100), alignItems: 'center'}}>
                                <Text style = {[styles.subtitle, {fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(3.9)}]}>Call Cancelled</Text>
                            </View>
                            :
                            null
                    }
                    {
                        calling == 'call' ?
                        <View style = {styles.footer}>
                            <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.addPeople ? 'white' : '#75757520' }]}
                                onPress = {handleAddPeople}
                            >
                                <Svg width={vw(5.6)} height={vw(5)} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M15.95 16.65V11.55M13.4 14.1H18.5M10 11.55H6.6C5.0158 11.55 4.2237 11.55 3.59888 11.8088C2.76578 12.1539 2.10389 12.8158 1.75881 13.6489C1.5 14.2737 1.5 15.0658 1.5 16.65M12.975 1.59712C14.221 2.1015 15.1 3.32309 15.1 4.74998C15.1 6.17686 14.221 7.39845 12.975 7.90283M11.275 4.74998C11.275 6.62774 9.75277 8.14998 7.875 8.14998C5.99723 8.14998 4.475 6.62774 4.475 4.74998C4.475 2.87221 5.99723 1.34998 7.875 1.34998C9.75277 1.34998 11.275 2.87221 11.275 4.74998Z" stroke={callState.addPeople ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.voice ? 'white' : '#75757520' }]}
                                onPress = {handleVoice}
                            >
                                <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 18V21" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M7.82007 21H16.1801" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.amplify ? 'white' : '#75757520' }]}
                                onPress = {handleAmplify}
                            >
                                <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.875 8.62498H3.5C2.948 8.62498 2.5 9.07298 2.5 9.62498V14.375C2.5 14.927 2.948 15.375 3.5 15.375H5.875L9.854 18.746C10.504 19.297 11.5 18.835 11.5 17.983V6.01698C11.5 5.16498 10.503 4.70298 9.854 5.25398L5.875 8.62498Z" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M15.5371 15.978C16.6991 15.256 17.5001 13.754 17.5001 12.005C17.5001 10.256 16.6991 8.75297 15.5371 8.02197" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M18.505 19.065C20.313 17.51 21.5 14.93 21.5 12.003C21.5 9.07204 20.311 6.49004 18.5 4.93604" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <View style = {styles.camera}>
                                {callState.camera && <Text style = {styles.btnStyle}>&nbsp;&nbsp;Camera is off&nbsp;&nbsp;</Text>}
                                <TouchableOpacity style = {[styles.icon, {marginTop: 0, marginLeft: vw(2), backgroundColor: callState.camera ? 'white' : '#75757520' }]}
                                    onPress = {handleCamera}
                                >
                                    <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M4 4C2.34315 4 1 5.34315 1 7V15C1 16.6569 2.34315 18 4 18H13C14.3527 18 15.4962 17.1048 15.8705 15.8745M16 11L19.6343 7.36569C20.0627 6.93731 20.2769 6.72312 20.4608 6.70865C20.6203 6.69609 20.7763 6.76068 20.8802 6.88238C21 7.02265 21 7.32556 21 7.93137V14.0686C21 14.6744 21 14.9774 20.8802 15.1176C20.7763 15.2393 20.6203 15.3039 20.4608 15.2914C20.2769 15.2769 20.0627 15.0627 19.6343 14.6343L16 11ZM16 11V8.8C16 7.11984 16 6.27976 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7202 4 12.8802 4 11.2 4H8.5M1 1L21 21" stroke={callState.camera ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.icons}>
                                <View style = {{alignItems: 'center'}}>
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.call ? 'red' : '#53FAFB' }]}
                                        onPress = {handleCall}
                                    >
                                        {
                                            callState.call ?
                                            <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M20.535 1.42004L14.535 7.42004M14.535 1.42004L20.535 7.42004M9.76204 12.2831C8.56046 11.0815 7.61168 9.72289 6.91568 8.27327C6.85581 8.14858 6.82588 8.08624 6.80288 8.00735C6.72116 7.72699 6.77986 7.38273 6.94987 7.1453C6.99771 7.07849 7.05487 7.02134 7.16918 6.90702C7.51878 6.55742 7.69359 6.38262 7.80787 6.20684C8.23887 5.54395 8.23887 4.68937 7.80787 4.02648C7.69359 3.8507 7.51879 3.6759 7.16918 3.32629L6.97431 3.13142C6.44287 2.59998 6.17714 2.33426 5.89176 2.18991C5.3242 1.90284 4.65394 1.90284 4.08638 2.18991C3.801 2.33426 3.53527 2.59998 3.00383 3.13142L2.8462 3.28905C2.31657 3.81868 2.05176 4.08349 1.84952 4.44352C1.62509 4.84303 1.46373 5.46352 1.4651 5.92174C1.46632 6.33469 1.54643 6.61691 1.70664 7.18136C2.56761 10.2148 4.19208 13.0771 6.58006 15.4651C8.96804 17.8531 11.8304 19.4775 14.8638 20.3385C15.4282 20.4987 15.7105 20.5788 16.1234 20.5801C16.5816 20.5814 17.2021 20.4201 17.6016 20.1956C17.9617 19.9934 18.2265 19.7286 18.7561 19.199L18.9137 19.0413C19.4452 18.5099 19.7109 18.2442 19.8552 17.9588C20.1423 17.3912 20.1423 16.721 19.8552 16.1534C19.7109 15.868 19.4452 15.6023 18.9137 15.0708L18.7189 14.876C18.3693 14.5264 18.1945 14.3516 18.0187 14.2373C17.3558 13.8063 16.5012 13.8063 15.8383 14.2373C15.6625 14.3516 15.4877 14.5264 15.1381 14.876C15.0238 14.9903 14.9667 15.0474 14.8998 15.0953C14.6624 15.2653 14.3182 15.324 14.0378 15.2423C13.9589 15.2193 13.8966 15.1893 13.7719 15.1295C12.3223 14.4335 10.9636 13.4847 9.76204 12.2831Z" stroke={'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                            :
                                            <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M15.6964 1L19 4.2881M19 4.2881L15.6964 7.57619M19 4.2881H11.4488M8.83145 11.2054C7.69729 10.0765 6.80173 8.80016 6.14478 7.43831C6.08827 7.32117 6.06002 7.2626 6.03831 7.18848C5.96118 6.9251 6.01658 6.60169 6.17706 6.37863C6.22221 6.31586 6.27616 6.26217 6.38406 6.15478C6.71405 5.82634 6.87905 5.66212 6.98692 5.49698C7.39374 4.87423 7.39373 4.07138 6.98692 3.44863C6.87905 3.28349 6.71405 3.11927 6.38406 2.79083L6.20012 2.60776C5.6985 2.10849 5.44769 1.85886 5.17832 1.72326C4.6426 1.45357 4.00994 1.45357 3.47422 1.72326C3.20485 1.85886 2.95404 2.10849 2.45241 2.60776L2.30362 2.75585C1.80371 3.25341 1.55376 3.50219 1.36286 3.84042C1.15103 4.21574 0.998721 4.79867 1.00001 5.22915C1.00117 5.61709 1.07678 5.88223 1.228 6.4125C2.04066 9.26224 3.57399 11.9513 5.828 14.1947C8.082 16.4381 10.7838 17.9642 13.647 18.7731C14.1798 18.9236 14.4461 18.9988 14.8359 19C15.2684 19.0013 15.8541 18.8497 16.2312 18.6388C16.571 18.4488 16.821 18.2001 17.3209 17.7025L17.4697 17.5544C17.9713 17.0551 18.2221 16.8055 18.3584 16.5374C18.6293 16.0042 18.6293 15.3745 18.3584 14.8413C18.2221 14.5732 17.9713 14.3236 17.4697 13.8243L17.2858 13.6413C16.9558 13.3128 16.7908 13.1486 16.6248 13.0412C15.9991 12.6363 15.1925 12.6363 14.5668 13.0412C14.4009 13.1486 14.2359 13.3128 13.9059 13.6413C13.798 13.7486 13.7441 13.8023 13.681 13.8473C13.4569 14.007 13.1319 14.0622 12.8673 13.9854C12.7929 13.9638 12.734 13.9357 12.6163 13.8794C11.248 13.2256 9.96561 12.3342 8.83145 11.2054Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        }
                                    </TouchableOpacity>
                                    <Text style = {[styles.btnStyle, {fontSize: vw(2.8), backgroundColor: 'transparent'}]}>&nbsp;&nbsp;End Call&nbsp;&nbsp;</Text>
                                </View>
                                <View style = {{alignItems: 'center'}}>
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.chat ? 'white' : '#75757520' }]}
                                        onPress = {handleChat}
                                    >
                                        <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M13 17H18C19.657 17 21 15.657 21 14V6C21 4.343 19.657 3 18 3H6C4.343 3 3 4.343 3 6V14C3 15.657 4.343 17 6 17H8V21L13 17" stroke={callState.chat ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <Text style = {[styles.btnStyle, {fontSize: vw(2.8), backgroundColor: 'transparent'}]}>&nbsp;&nbsp;chat&nbsp;&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                        :
                        calling == 'addedFriends' ?
                        <View style = {styles.footer}>
                            <View style = {[styles.camera, {width: vw(90), justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: vw(5)}]}>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.voice ? 'white' : '#75757520', marginTop: 0 }]}
                                    onPress = {handleVoice}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12 18V21" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M7.82007 21H16.1801" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.icon, {marginTop: 0, marginLeft: vw(2), backgroundColor: callState.camera ? 'white' : '#75757520' }]}
                                    onPress = {handleCamera}
                                >
                                    <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M4 4C2.34315 4 1 5.34315 1 7V15C1 16.6569 2.34315 18 4 18H13C14.3527 18 15.4962 17.1048 15.8705 15.8745M16 11L19.6343 7.36569C20.0627 6.93731 20.2769 6.72312 20.4608 6.70865C20.6203 6.69609 20.7763 6.76068 20.8802 6.88238C21 7.02265 21 7.32556 21 7.93137V14.0686C21 14.6744 21 14.9774 20.8802 15.1176C20.7763 15.2393 20.6203 15.3039 20.4608 15.2914C20.2769 15.2769 20.0627 15.0627 19.6343 14.6343L16 11ZM16 11V8.8C16 7.11984 16 6.27976 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7202 4 12.8802 4 11.2 4H8.5M1 1L21 21" stroke={callState.camera ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <View style = {styles.addedPeople}>
                                    {
                                        addedFriends.map((item, index) => 
                                            <Image key = {index} source = {item.avatar} style = {{width: vw(13.1), height: vw(13.1), borderRadius: vw(10), position: 'absolute', left: vw(2), top: (vw(1.8)+index*vw(10))}}/>
                                        )
                                    }
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.addPeople ? 'white' : '#75757520', marginTop: vw(30) }]}
                                        onPress = {handleAddPeople}
                                    >
                                        <Svg width={vw(5.6)} height={vw(5)} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.95 16.65V11.55M13.4 14.1H18.5M10 11.55H6.6C5.0158 11.55 4.2237 11.55 3.59888 11.8088C2.76578 12.1539 2.10389 12.8158 1.75881 13.6489C1.5 14.2737 1.5 15.0658 1.5 16.65M12.975 1.59712C14.221 2.1015 15.1 3.32309 15.1 4.74998C15.1 6.17686 14.221 7.39845 12.975 7.90283M11.275 4.74998C11.275 6.62774 9.75277 8.14998 7.875 8.14998C5.99723 8.14998 4.475 6.62774 4.475 4.74998C4.475 2.87221 5.99723 1.34998 7.875 1.34998C9.75277 1.34998 11.275 2.87221 11.275 4.74998Z" stroke={callState.addPeople ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {styles.icons}>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.amplify ? 'white' : '#75757520' }]}
                                    onPress = {handleAmplify}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.875 8.62498H3.5C2.948 8.62498 2.5 9.07298 2.5 9.62498V14.375C2.5 14.927 2.948 15.375 3.5 15.375H5.875L9.854 18.746C10.504 19.297 11.5 18.835 11.5 17.983V6.01698C11.5 5.16498 10.503 4.70298 9.854 5.25398L5.875 8.62498Z" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M15.5371 15.978C16.6991 15.256 17.5001 13.754 17.5001 12.005C17.5001 10.256 16.6991 8.75297 15.5371 8.02197" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M18.505 19.065C20.313 17.51 21.5 14.93 21.5 12.003C21.5 9.07204 20.311 6.49004 18.5 4.93604" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.call ? 'red' : '#53FAFB' }]}
                                    onPress = {handleCall}
                                >
                                    {
                                        callState.call ?
                                        <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M20.535 1.42004L14.535 7.42004M14.535 1.42004L20.535 7.42004M9.76204 12.2831C8.56046 11.0815 7.61168 9.72289 6.91568 8.27327C6.85581 8.14858 6.82588 8.08624 6.80288 8.00735C6.72116 7.72699 6.77986 7.38273 6.94987 7.1453C6.99771 7.07849 7.05487 7.02134 7.16918 6.90702C7.51878 6.55742 7.69359 6.38262 7.80787 6.20684C8.23887 5.54395 8.23887 4.68937 7.80787 4.02648C7.69359 3.8507 7.51879 3.6759 7.16918 3.32629L6.97431 3.13142C6.44287 2.59998 6.17714 2.33426 5.89176 2.18991C5.3242 1.90284 4.65394 1.90284 4.08638 2.18991C3.801 2.33426 3.53527 2.59998 3.00383 3.13142L2.8462 3.28905C2.31657 3.81868 2.05176 4.08349 1.84952 4.44352C1.62509 4.84303 1.46373 5.46352 1.4651 5.92174C1.46632 6.33469 1.54643 6.61691 1.70664 7.18136C2.56761 10.2148 4.19208 13.0771 6.58006 15.4651C8.96804 17.8531 11.8304 19.4775 14.8638 20.3385C15.4282 20.4987 15.7105 20.5788 16.1234 20.5801C16.5816 20.5814 17.2021 20.4201 17.6016 20.1956C17.9617 19.9934 18.2265 19.7286 18.7561 19.199L18.9137 19.0413C19.4452 18.5099 19.7109 18.2442 19.8552 17.9588C20.1423 17.3912 20.1423 16.721 19.8552 16.1534C19.7109 15.868 19.4452 15.6023 18.9137 15.0708L18.7189 14.876C18.3693 14.5264 18.1945 14.3516 18.0187 14.2373C17.3558 13.8063 16.5012 13.8063 15.8383 14.2373C15.6625 14.3516 15.4877 14.5264 15.1381 14.876C15.0238 14.9903 14.9667 15.0474 14.8998 15.0953C14.6624 15.2653 14.3182 15.324 14.0378 15.2423C13.9589 15.2193 13.8966 15.1893 13.7719 15.1295C12.3223 14.4335 10.9636 13.4847 9.76204 12.2831Z" stroke={'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        :
                                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.6964 1L19 4.2881M19 4.2881L15.6964 7.57619M19 4.2881H11.4488M8.83145 11.2054C7.69729 10.0765 6.80173 8.80016 6.14478 7.43831C6.08827 7.32117 6.06002 7.2626 6.03831 7.18848C5.96118 6.9251 6.01658 6.60169 6.17706 6.37863C6.22221 6.31586 6.27616 6.26217 6.38406 6.15478C6.71405 5.82634 6.87905 5.66212 6.98692 5.49698C7.39374 4.87423 7.39373 4.07138 6.98692 3.44863C6.87905 3.28349 6.71405 3.11927 6.38406 2.79083L6.20012 2.60776C5.6985 2.10849 5.44769 1.85886 5.17832 1.72326C4.6426 1.45357 4.00994 1.45357 3.47422 1.72326C3.20485 1.85886 2.95404 2.10849 2.45241 2.60776L2.30362 2.75585C1.80371 3.25341 1.55376 3.50219 1.36286 3.84042C1.15103 4.21574 0.998721 4.79867 1.00001 5.22915C1.00117 5.61709 1.07678 5.88223 1.228 6.4125C2.04066 9.26224 3.57399 11.9513 5.828 14.1947C8.082 16.4381 10.7838 17.9642 13.647 18.7731C14.1798 18.9236 14.4461 18.9988 14.8359 19C15.2684 19.0013 15.8541 18.8497 16.2312 18.6388C16.571 18.4488 16.821 18.2001 17.3209 17.7025L17.4697 17.5544C17.9713 17.0551 18.2221 16.8055 18.3584 16.5374C18.6293 16.0042 18.6293 15.3745 18.3584 14.8413C18.2221 14.5732 17.9713 14.3236 17.4697 13.8243L17.2858 13.6413C16.9558 13.3128 16.7908 13.1486 16.6248 13.0412C15.9991 12.6363 15.1925 12.6363 14.5668 13.0412C14.4009 13.1486 14.2359 13.3128 13.9059 13.6413C13.798 13.7486 13.7441 13.8023 13.681 13.8473C13.4569 14.007 13.1319 14.0622 12.8673 13.9854C12.7929 13.9638 12.734 13.9357 12.6163 13.8794C11.248 13.2256 9.96561 12.3342 8.83145 11.2054Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.chat ? 'white' : '#75757520' }]}
                                    onPress = {handleChat}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M13 17H18C19.657 17 21 15.657 21 14V6C21 4.343 19.657 3 18 3H6C4.343 3 3 4.343 3 6V14C3 15.657 4.343 17 6 17H8V21L13 17" stroke={callState.chat ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style = {styles.footer}>
                            <View style = {styles.icons}>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.voice ? 'white' : '#75757520' }]}
                                    onPress = {handleVoice}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12 18V21" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M7.82007 21H16.1801" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.call ? 'red' : '#53FAFB' }]}
                                    onPress = {handleCall}
                                >
                                    {
                                        callState.call ?
                                        <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M20.535 1.42004L14.535 7.42004M14.535 1.42004L20.535 7.42004M9.76204 12.2831C8.56046 11.0815 7.61168 9.72289 6.91568 8.27327C6.85581 8.14858 6.82588 8.08624 6.80288 8.00735C6.72116 7.72699 6.77986 7.38273 6.94987 7.1453C6.99771 7.07849 7.05487 7.02134 7.16918 6.90702C7.51878 6.55742 7.69359 6.38262 7.80787 6.20684C8.23887 5.54395 8.23887 4.68937 7.80787 4.02648C7.69359 3.8507 7.51879 3.6759 7.16918 3.32629L6.97431 3.13142C6.44287 2.59998 6.17714 2.33426 5.89176 2.18991C5.3242 1.90284 4.65394 1.90284 4.08638 2.18991C3.801 2.33426 3.53527 2.59998 3.00383 3.13142L2.8462 3.28905C2.31657 3.81868 2.05176 4.08349 1.84952 4.44352C1.62509 4.84303 1.46373 5.46352 1.4651 5.92174C1.46632 6.33469 1.54643 6.61691 1.70664 7.18136C2.56761 10.2148 4.19208 13.0771 6.58006 15.4651C8.96804 17.8531 11.8304 19.4775 14.8638 20.3385C15.4282 20.4987 15.7105 20.5788 16.1234 20.5801C16.5816 20.5814 17.2021 20.4201 17.6016 20.1956C17.9617 19.9934 18.2265 19.7286 18.7561 19.199L18.9137 19.0413C19.4452 18.5099 19.7109 18.2442 19.8552 17.9588C20.1423 17.3912 20.1423 16.721 19.8552 16.1534C19.7109 15.868 19.4452 15.6023 18.9137 15.0708L18.7189 14.876C18.3693 14.5264 18.1945 14.3516 18.0187 14.2373C17.3558 13.8063 16.5012 13.8063 15.8383 14.2373C15.6625 14.3516 15.4877 14.5264 15.1381 14.876C15.0238 14.9903 14.9667 15.0474 14.8998 15.0953C14.6624 15.2653 14.3182 15.324 14.0378 15.2423C13.9589 15.2193 13.8966 15.1893 13.7719 15.1295C12.3223 14.4335 10.9636 13.4847 9.76204 12.2831Z" stroke={'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        :
                                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.6964 1L19 4.2881M19 4.2881L15.6964 7.57619M19 4.2881H11.4488M8.83145 11.2054C7.69729 10.0765 6.80173 8.80016 6.14478 7.43831C6.08827 7.32117 6.06002 7.2626 6.03831 7.18848C5.96118 6.9251 6.01658 6.60169 6.17706 6.37863C6.22221 6.31586 6.27616 6.26217 6.38406 6.15478C6.71405 5.82634 6.87905 5.66212 6.98692 5.49698C7.39374 4.87423 7.39373 4.07138 6.98692 3.44863C6.87905 3.28349 6.71405 3.11927 6.38406 2.79083L6.20012 2.60776C5.6985 2.10849 5.44769 1.85886 5.17832 1.72326C4.6426 1.45357 4.00994 1.45357 3.47422 1.72326C3.20485 1.85886 2.95404 2.10849 2.45241 2.60776L2.30362 2.75585C1.80371 3.25341 1.55376 3.50219 1.36286 3.84042C1.15103 4.21574 0.998721 4.79867 1.00001 5.22915C1.00117 5.61709 1.07678 5.88223 1.228 6.4125C2.04066 9.26224 3.57399 11.9513 5.828 14.1947C8.082 16.4381 10.7838 17.9642 13.647 18.7731C14.1798 18.9236 14.4461 18.9988 14.8359 19C15.2684 19.0013 15.8541 18.8497 16.2312 18.6388C16.571 18.4488 16.821 18.2001 17.3209 17.7025L17.4697 17.5544C17.9713 17.0551 18.2221 16.8055 18.3584 16.5374C18.6293 16.0042 18.6293 15.3745 18.3584 14.8413C18.2221 14.5732 17.9713 14.3236 17.4697 13.8243L17.2858 13.6413C16.9558 13.3128 16.7908 13.1486 16.6248 13.0412C15.9991 12.6363 15.1925 12.6363 14.5668 13.0412C14.4009 13.1486 14.2359 13.3128 13.9059 13.6413C13.798 13.7486 13.7441 13.8023 13.681 13.8473C13.4569 14.007 13.1319 14.0622 12.8673 13.9854C12.7929 13.9638 12.734 13.9357 12.6163 13.8794C11.248 13.2256 9.96561 12.3342 8.83145 11.2054Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.chat ? 'white' : '#75757520' }]}
                                    onPress = {handleChat}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M13 17H18C19.657 17 21 15.657 21 14V6C21 4.343 19.657 3 18 3H6C4.343 3 3 4.343 3 6V14C3 15.657 4.343 17 6 17H8V21L13 17" stroke={callState.chat ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </ImageBackground>
                <Animated.View style = {[styles.addedModal, {transform: [{ translateY: screenY }]}]}>
                    <ImageBackground source = {require('../../../../assets/images/selectFriendBackgrpund.png')}
                        style = {styles.selBack}
                    >
                        <View style = {styles.topBar}/>
                        <View style = {styles.topButton}>
                            <TouchableOpacity style = {styles.downBtn}
                                onPress = {() => {
                                    setCallState(prevState =>{
                                        const newState = {...prevState};
                                        newState.addPeople = !(newState.addPeople);
                                        return newState}
                                    );
                                    console.log('down');
                                    setAllView(0);
                                    Animated.timing(screenY, {
                                    toValue: 0 * screenHegiht,
                                    duration: 50,
                                    useNativeDriver: true,
                                    }).start();
                                    Animated.timing(opacityAnimation, {
                                    toValue: 0,
                                    duration: 200,
                                    useNativeDriver: true,
                                    }).start();
                                    if(addedFriends.length == 0 ){
                                        setCalling('call')
                                    }
                                    else setCalling('addedFriends')
                                }}
                            >
                                <Svg width={vw(3.3)} height={vw(2)} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M1 1L6 6L11 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <View style = {styles.downBtn}>
                                <Svg width={vw(3.9)} height={vw(3.9)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M13 5L13 1M13 1H9M13 1L7.66667 6.33333M5.66667 2.33333H4.2C3.0799 2.33333 2.51984 2.33333 2.09202 2.55132C1.71569 2.74307 1.40973 3.04903 1.21799 3.42535C1 3.85318 1 4.41323 1 5.53333V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13H8.46667C9.58677 13 10.1468 13 10.5746 12.782C10.951 12.5903 11.2569 12.2843 11.4487 11.908C11.6667 11.4802 11.6667 10.9201 11.6667 9.8V8.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                        </View>
                        <View style = {styles.topTitle}>
                            <Text style = {styles.Title}>
                                Select friends
                            </Text>
                            <View style = {styles.inputBar}>
                                <View style = {[styles.msgInput, {borderColor: isFocused ? '#53FAFB' : '#4C4C4C'}]}>
                                    <TouchableOpacity
                                        // onPress = { }
                                    >
                                        <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M13.625 13.625L11.4376 11.4375M13 7.6875C13 10.6215 10.6215 13 7.6875 13C4.75349 13 2.375 10.6215 2.375 7.6875C2.375 4.75349 4.75349 2.375 7.6875 2.375C10.6215 2.375 13 4.75349 13 7.6875Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <TextInput
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        style={[styles.input, { color: 'white', fontSize: vw(3.3) }]}
                                        placeholder='Type your message'
                                        placeholderTextColor='#3F3F3F'
                                        value={text}
                                        onChangeText={onchangeText}
                                        keyboardAppearance="dark"
                                    />
                                </View>
                                <Text style = {[styles.text, {color: '#53FAFB'}]}
                                    onPress = { () => setText('') }
                                >
                                    Cancel
                                </Text>
                            </View>
                        </View>
                        <ScrollView style = {styles.friendsSearchStyle}>
                            {
                                friendData.map((item, index) => 
                                    <View key = {index} style = {styles.friends}>
                                        <View style = {styles. info}>
                                            <View style = {styles.imgInfo}>
                                                <Image style = {styles.avatar} source = {item.avatar}/>
                                                <View style = {styles.online}/>
                                            </View>
                                            <View style = {styles.textInfo}>
                                                <Text style = {[styles.Title, {fontSize: vw(3.9)}]}> {item.name} </Text>
                                                <Text style = {[styles.text, {fontSize: vw(2.8)}]}> {item.data} </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style = {[styles.addBtn, {borderColor: item.added ? '#4B4B4B' : '#181818', backgroundColor: item.added ? 'transparent' : '#53FAFB10'}]}
                                            onPress = {() => {
                                                setFriendData(prevData => {
                                                    const newData = [...prevData];
                                                    newData[index].added = !newData[index].added;
                                                    return newData;
                                                });
                                                if (!item.added) {
                                                    const newItem = item;
                                                    setAddedFriends([...addedFriends, newItem]);
                                                }
                                                else {
                                                    const updateItems = addedFriends.filter(items => items.id !== item.id);
                                                    setAddedFriends(updateItems);
                                                }
                                                console.log(addedFriends)
                                            }}
                                        >
                                            <View style = {styles.btns}>
                                                {
                                                    !item.added ?
                                                    <Svg width={vw(4.2)} height={vw(3.9)} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M12.05 12.85V8.95002M10.1 10.9H14M7.5 8.95002H4.9C3.68855 8.95002 3.08283 8.95002 2.60502 9.14794C1.96795 9.41182 1.4618 9.91797 1.19791 10.555C1 11.0329 1 11.6386 1 12.85M9.775 1.33902C10.7278 1.72472 11.4 2.65888 11.4 3.75002C11.4 4.84117 10.7278 5.77533 9.775 6.16103M8.475 3.75002C8.475 5.18596 7.31094 6.35002 5.875 6.35002C4.43906 6.35002 3.275 5.18596 3.275 3.75002C3.275 2.31408 4.43906 1.15002 5.875 1.15002C7.31094 1.15002 8.475 2.31408 8.475 3.75002Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                    :
                                                    <Svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M10.8235 3.11765H15.0588M10.8235 13V12.1529C10.8235 10.9669 10.8235 10.374 10.5927 9.92096C10.3897 9.5225 10.0657 9.19854 9.66726 8.99552C9.21427 8.76471 8.62127 8.76471 7.43528 8.76471H4.3294C3.1434 8.76471 2.55041 8.76471 2.09742 8.99552C1.69896 9.19854 1.375 9.5225 1.17197 9.92096C0.941162 10.374 0.941162 10.9669 0.941162 12.1529V13M8.35293 3.47059C8.35293 4.83506 7.24681 5.94118 5.88234 5.94118C4.51787 5.94118 3.41175 4.83506 3.41175 3.47059C3.41175 2.10612 4.51787 1 5.88234 1C7.24681 1 8.35293 2.10612 8.35293 3.47059Z" stroke="#676767" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                }
                                            </View>
                                            {item.added && <Text style = {styles.text}>
                                                &nbsp;Added
                                            </Text>}
                                        </TouchableOpacity>
                                    </View> 
                                )
                            }
                        </ScrollView>
                    </ImageBackground>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: 'black'
    },
    header: {
        width: vw(90),
        height: vw(25),
        paddingTop: vw(16.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(5)
    },
    backIcon: {
        width: vw(9.8),
        height: vw(9.8),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    headerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    },
    boxes: {
        opacity: 0,
        position:'absolute',
        width: vw(100), 
        aspectRatio: 360/780, 
        backgroundColor: '#53FAFB', top:0, 
    },
    body: {
        width: vw(100),
        aspectRatio: 360/187,
        marginTop: vw(16.11),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        flexDirection: 'row',
        width: vw(44),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Light',
        fontSize: vw(3.3),
        color: '#979797'
    },
    footer: {
        position: 'absolute',
        bottom: vw(10),
        left: vw(5),
        width: vw(90),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        width: vw(13.9),
        height: vw(13.9),
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(3.6),
        flexDirection: 'row'
    },
    camera: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: vw(3.6),
    },
    btnStyle: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white',
        padding: vw(2.8),
        backgroundColor: '#75757520',
        borderRadius: vw(5)
    },
    icons: {
        width: vw(90),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    addedModal: {
        position: 'absolute',
        width: vw(100),
        borderTopRightRadius: vw(5),
        borderTopLeftRadius: vw(5),
        overflow: 'hidden',
        // opacity: 0.9,
        top: vh(110)
    },
    selBack: {
        width: vw(100),
        height: vh(100)
    },
    topBar: {
        width: vw(22.2), 
        height: vw(0.9),
        backgroundColor: '#BABABA', 
        marginLeft: vw(38.9), 
        marginTop: vw(5),
        borderRadius: vw(1),
    },
    topButton: {
        width:vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: vw(5)
    },
    downBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff20',
        borderRadius: vw(10),
        width: vw(8.89),
        height: vw(8.89)
    },
    topTitle: {
        marginLeft: vw(5),
        width: vw(90),
        marginTop: vw(6.7),
        height: vw(30.4),
    },
    msgInput: {
        width: vw(71.1),
        aspectRatio: 256/40,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: '#101010',
        paddingHorizontal: vw(5.6),
        color: '#4C4C4C',
        backgroundColor: '#181818',
        marginTop: vw(3.6),
        marginBottom: vw(3.6),
    },
    input: {
      fontFamily: 'TT Firs Neue Trial Regular',
      paddingLeft: vw(3),
      paddingRight: vw(3),
      flex: 1,
    },
    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addChat: {
        width: vw(13.9),
        height: vw(21.6),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addChatIcon: {
        width: vw(13.9),
        height: vw(13.9),
        backgroundColor: '#53FAFB20',
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    friendsSearchStyle: {
        width: vw(90),
        marginLeft: vw(5),
    },
    friends: {
        width: vw(90),
        aspectRatio: 329/60,
        backgroundColor: '#181818',
        borderRadius: vw(5),
        padding: vw(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(2.8)
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgInfo: {
        width: vw(11.1),
        height: vw(11.1),
        borderRadius: vw(6),
        marginRight: vw(3)
    },
    avatar: {
        width: vw(11.1),
        height: vw(11.1),
        borderRadius: vw(6)
    },
    online: {
        position: 'absolute',
        width: vw(2.3),
        height: vw(2.3),
        borderWidth: vw(0.3),
        borderColor: 'black',
        borderRadius: vw(2),
        backgroundColor: '#53FAFB',
        right: vw(0.3),
        bottom: vw(0.3)
    },
    addBtn: {
        height: vw(9.44),
        borderRadius: vw(5),
        borderWidth: vw(0.3),
        padding: vw(2.5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    cameraHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: vw(2.1),
        paddingLeft: vw(5),
        paddingRight: vw(5),
        borderRadius: vw(5),
        backgroundColor: '#75757520'
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: vw(3.3),
        color: 'white'
    },
    addedPeople: {
        width: vw(16.7),
        borderRadius: vw(10),
        backgroundColor: '#ffffff05',
        padding: vw(1.6),
        height: vw(52),
        justifyContent: 'flex-end'
    }
});

export default Calling;