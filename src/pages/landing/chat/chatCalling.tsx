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
    useWindowDimensions,
    FlatList,
    InteractionManager,
    findNodeHandle,
    BackHandler,
    Dimensions,
    TextInput,
    Animated,
    Modal,
    PanResponder
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native';r

const ChatCalling = ({ navigation }) => {
    
    const [modalHeight, setModalHeight] = useState(vw(38.9));
    const backgroundImageRef = createRef();
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
    const callingState = {
        addPeople: false,
        voice: false,
        amplify: false,
        camera: false,
        call: true,
        chat: false,
    }
    const chatsArray = [
        {
            avatar: require('../../../../assets/images/card7.png'),
            onlineState: 'notification',
            name: 'Elrollx'
        },
        {
            avatar: require('../../../../assets/images/card10.png'),
            onlineState: 'offline',
            name: 'Toyaw'
        },
        {
            avatar: require('../../../../assets/images/card10.png'),
            onlineState: 'online',
            name: 'Lithoy'
        },
        {
            avatar: require('../../../../assets/images/card2.png'),
            onlineState: 'out',
            name: 'Fereom'
        },
    ]
    const btnArray = [
        {
            name: 'Chat',
            state: true
        },
        {
            name: 'Status',
            state: false
        },
        {
            name: 'Calls',
            state: false
        },
    ];
    const allData = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'out',
            name: 'Alex Linderson',
            lastMsg: 'Last active 2h ago',
            lastMsgImg: <Svg width={vw(2.8)} height={vw(3.3)} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M9.00012 5.99995V6.50155C9.00012 8.71773 7.31583 10.5143 5.23816 10.5143C3.16048 10.5143 1.4762 8.71773 1.4762 6.50155V5.99995M5.23816 8.50793C4.19932 8.50793 3.35718 7.60964 3.35718 6.50155V3.49198C3.35718 2.38388 4.19932 1.4856 5.23816 1.4856C6.277 1.4856 7.11914 2.38388 7.11914 3.49198V6.50155C7.11914 7.60964 6.277 8.50793 5.23816 8.50793Z" stroke="#797C7B" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>,            
            time: 'Yesterday',
            viewed: true,
            unreadMsg: 0,
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'offline',
            name: 'T2OORO Grow',
            lastMsg: 'Reacted :joy: to a File',
            time: 'Yesterday',
            viewed: true,
            unreadMsg: 0,
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'notification',
            name: 'T2OORO Grow',
            lastMsgImg: <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M10.651 5.44397L6.05 10.21C5.00368 11.2939 3.30726 11.2939 2.26094 10.21C1.21462 9.12618 1.21462 7.3689 2.26094 6.28504L6.86195 1.51898C7.55949 0.796408 8.69044 0.796408 9.38799 1.51898C10.0855 2.24155 10.0855 3.41307 9.38799 4.13564L4.96741 8.7148C4.61864 9.07609 4.05316 9.07609 3.70439 8.7148C3.35562 8.35351 3.35562 7.76775 3.70439 7.40647L7.58367 3.38802" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>,
            lastMsg: 'Sent you an attachment',
            time: 'Yesterday',
            viewed: true,
            unreadMsg: 0
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Recording...',
            time: '2 min ago',
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Calling...',
            time: '2 min ago',
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            onlineState: 'online',
            name: 'Fernado TOYs',
            lastMsg: 'Reply: On est la !!',
            time: '2 min ago',
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Recording...',
            time: '2 min ago',
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Recording...',
            time: '2 min ago',
            unreadMsg: 23
        }
    ];
    const pinedData = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Mussa OUEL',
            lastMsg: 'Active Now',
            time: '2 min ago',
            mute: true,
            unreadMsg: 3
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'DramatiKa FELHO',
            lastMsg: 'Typing...',
            time: '2 min ago',
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'offline',
            name: 'T2OORO Grow',
            lastMsg: 'Draft: https://emojipedia.org/super-bowl',
            time: 'Yesterday',
            unreadMsg: 0
        }
    ];
    const callingData = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Calling...',
            time: '2 min ago',
            selected: false,
            unreadMsg: 23
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Dramatika FELHO',
            lastMsg: 'Calling...',
            time: '2 min ago',
            selected: true,
            unreadMsg: 23
        },
    ];
    const chatModalData = [
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'Hello, is anyone here?🔥',
        },
        {
            date: 'Today 03:12 AM'
        },
        {
            isMyMsg : false,
            message: 'Hello, is anyone here?🔥',
        },
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'I have some questions 🥵 It’s a good time to send you !!! \n\nBy the way my name is Alex and I want to contact you urgently ...',
        },
        {
            isMyMsg : false,
            avatar: require('../../../../assets/images/follow2.png'),
            time: 'Today 02:34 AM',
            message: 'Thanks a lot',
        },
        {
            isMyMsg : true,
            time: 'Sent 10 min ago',
            message: 'Sure sure, I’m being happy to help each others ! Why not ask me...',
        },
        {
            isMyMsg : true,
            msgImg: [
                {
                    url: require('../../../../assets/images/card4.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                }, 
                {
                    url: require('../../../../assets/images/card4.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                },
            ],
        },
        {
            isMyMsg : true,
            time: 'Sent 10 min ago',
            msgImg: [
                {
                    url: require('../../../../assets/images/messageImage.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                },
            ],
        },
        {
            isMyMsg : false,
            msgSpeech: {state: 'pasued', times: '0:20', speeds: 'X1.5'},
        },
        {
            isMyMsg : false,
            msgSpeech: {state: 'play', times: '0:09'}
        },
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'Thanks a lot'
        },
    ];
    const [clientData, setClientData] = useState({
        avatar: require('../../../../assets/images/follow2.png'),
        name: 'Mussa OUEL',
        onlineState: 'online',
        time: 'Active Now'
    });
    const [isVoice, setIsVoice] = useState(false);
    const [callState, setCallState] = useState(callingState);
    const [screenY, setScreenY] = useState(new Animated.Value(0));
    const [msgData, setMsgData] = useState(chatModalData);
    const [isCalled, setIsCalled] = useState (callingData);
    const [allChat, setAllChat] = useState(allData);
    const [pinnedChat, setPinnedChat] = useState(pinedData);
    const [btnNames, setBtnNames] = useState(btnArray);
    const [chatsRoom, setChatsRoom] = useState(chatsArray);
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    const [isFocused, setIsFocused] = useState(false);
    const [pin, setPin] = useState(false);
    const [text, setText] = useState('');
    const [allView, setAllView] = useState(0);
    const [isCalling, setIsCalling] = useState(true);
    const [calling, setCalling] = useState(true);
    const [drag, setDrag] = useState(false);
    useEffect(() => {
        const backAction = () => {
          setShowBlur(false);
    
          setTimeout(() => {
            navigation.goBack();
            setSelected('Home');
          }, 300); // Delay the back action by one second
    
          return true; // Prevent default behavior (i.e. exit the app)
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
    }, []);
    const onchangeText = (text) => {
        setText(text);
    }
    useFocusEffect(
        React.useCallback(() => {
        let timerId;
        setSelected('Home');
            
        if (!showBlur) {
            timerId = setTimeout(() => {
            setShowBlur(true);
            }, 500); // Adjust the delay as needed
        }
        //   console.log(showBlur)
        return () => {
            clearTimeout(timerId);
        };
        }, [showBlur])
    );
    const renderBlurView = () => {
        return (
                <BlurView
                    viewRef={viewRef}
                    style={[styles.blurViewStyle, {width: vw(100), height: vh(108)}]}
                    blurAmount={9}
                    blurType={blurType}
                    // blurRadius={10}
                    downsampleFactor={10}
                    overlayColor={'rgba(0,0,0'}
                />
            // </View>
        );
    }
    // const navigateBack = () => {
    //     setShowBlur(false);
    //     let timerId;
    //     timerId = setTimeout(() => {
    //         navigation.navigate('FriendProfile');
    //       }, 30); // Adjust the delay as needed
    //       return () => {
    //         clearTimeout(timerId);
    //       };
    // }
    const navigated = () => {
        // setWallet(false);
        // setInvite(false);
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('FriendProfile');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
        };
    }
    const navigateHome = () => {
        setSelected('Home')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('Main');
        }, 30); // Adjust the delay as needed
        return () => {
            clearTimeout(timerId);
        };
    }
    const navigateGroupChat = () => {
        setSelected('Community')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('GroupChat');
        }, 30); // Adjust the delay as needed
        return () => {
            clearTimeout(timerId);
        };
    }
    const navigateChat = () => {
        setSelected('Chat')
        // setShowBlur(false);
        // let timerId;
        // timerId = setTimeout(() => {
        //     navigation.navigate('GroupAccount');
        // }, 30); // Adjust the delay as needed
        // return () => {
        //     clearTimeout(timerId);
        // };
    }
    const handleChatView = () => {
        setAllView(1)
        Animated.timing(screenY, {
            toValue: -1.07*screenHegiht,
            duration: 50,
            useNativeDriver: true,
        }).start();
    }
    const handleChatHidden = () => {
        setAllView(0);
        Animated.timing(screenY, {
        toValue: 0 * screenHegiht,
        duration: 50,
        useNativeDriver: true,
        }).start();        
    };
    const handleAddPeople = () => {
        setCallState(prevState =>{
            const newState = {...prevState};
            newState.addPeople = !(newState.addPeople);
            return newState}
        );
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
        // setCalling(!calling);
        setSelected('Community')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('GroupChat');
        }, 30); // Adjust the delay as needed
        return () => {
            clearTimeout(timerId);
        };
    };
    
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dy) > 5;
            },
            onPanResponderMove(e, gestureState) {
                if (gestureState.dy > 0)
                {
                    if (gestureState.dy > vw(40)) {
                        setDrag(true);
                    }
                    else {
                        setDrag(false);
                    }
                    setModalHeight(gestureState.dy + vw(38.9));
                }
                else{
                    if (gestureState.dy < -vw(30)) {
                        setDrag(false);
                    }
                    else {
                        setDrag(true);
                    }
                    setModalHeight(vw(127.8)+gestureState.dy);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if(gestureState.dy>0){
                    if (gestureState.dy > vw(30)) {
                        setModalHeight(vw(127.8));
                    }
                    else {
                        setModalHeight(vw(38.9));
                    }
                }
                else {
                    if (gestureState.dy < -vw(30)) {
                        setModalHeight(vw(38.9));
                    }
                    else {
                        setModalHeight(vw(127.8));
                    }
                }
                console.log('--------------->',modalHeight)
            },
        })
    ).current;
    return(
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View {...panResponder.panHandlers} style = {{zIndex: 1, }}>
                {
                    calling ?
                    !drag ?
                    <View style = {styles.callBack}>
                    {/* <Image source = {require('../../../../assets/images/blur.png')}
                        style={{width: vw(100), height: vh(110), position: 'absolute', top: 0, left: 0}}
                        ref={backgroundImageRef}
                    /> */}
                    {showBlur ? renderBlurView() : null}
                        <View style = {[styles.callModalStyle, {height: modalHeight}]}>
                            <ImageBackground source = {require('../../../../assets/images/chatCallBackImg.png')}
                                style = {[styles.callbackImg, {height: modalHeight}]}
                                resizeMode="cover"
                            >
                                <View style = {styles.callData}>
                                    <View style = {styles.callInfos}>
                                        <Image style = {styles.callAvatar}
                                            source = {require('../../../../assets/images/calling.png')}
                                        />
                                        <View style = {styles.callInfo}>
                                            <View style = {styles.callName}>
                                                <Text style = {[styles.headerTitle, {fontSize: vw(5), marginRight: vw(2)}]}>Kitshuna Fowyu</Text>
                                                <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                                <Path d="M5.57422 7.96406L7.16705 9.55688L8.95898 7.76495L10.7509 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                                                </Svg>
                                            </View>
                                            <Text style = {[styles.headerText, {color: 'white', fontSize: vw(3.3)}]}>Calling 00:04</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity 
                                        onPress = {navigateGroupChat}
                                    >
                                        <Svg width={vw(10)} height={vw(10)} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="18" cy="18" r="17.5" stroke="white"/>
                                            <Path d="M15.1427 11.5714H14.9999C13.7997 11.5714 13.1997 11.5714 12.7413 11.805C12.3381 12.0104 12.0103 12.3382 11.8048 12.7414C11.5713 13.1998 11.5713 13.7999 11.5713 15V15.1428M15.1427 24.4286H14.9999C13.7997 24.4286 13.1997 24.4286 12.7413 24.195C12.3381 23.9896 12.0103 23.6617 11.8048 23.2585C11.5713 22.8002 11.5713 22.2001 11.5713 21V20.8571M24.4284 15.1428V15C24.4284 13.7999 24.4284 13.1998 24.1949 12.7414C23.9894 12.3382 23.6616 12.0104 23.2584 11.805C22.8 11.5714 22.2 11.5714 20.9999 11.5714H20.857M24.4284 20.8571V21C24.4284 22.2001 24.4284 22.8002 24.1949 23.2585C23.9894 23.6617 23.6616 23.9896 23.2584 24.195C22.8 24.4286 22.2 24.4286 20.9999 24.4286H20.857" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                                <View style = {styles.callToolBox}>
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
                                    <TouchableOpacity style = {[styles.icon, {marginTop: 0, marginLeft: vw(2), backgroundColor: callState.camera ? 'white' : '#75757520' }]}
                                        onPress = {handleCamera}
                                    >
                                        <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M4 4C2.34315 4 1 5.34315 1 7V15C1 16.6569 2.34315 18 4 18H13C14.3527 18 15.4962 17.1048 15.8705 15.8745M16 11L19.6343 7.36569C20.0627 6.93731 20.2769 6.72312 20.4608 6.70865C20.6203 6.69609 20.7763 6.76068 20.8802 6.88238C21 7.02265 21 7.32556 21 7.93137V14.0686C21 14.6744 21 14.9774 20.8802 15.1176C20.7763 15.2393 20.6203 15.3039 20.4608 15.2914C20.2769 15.2769 20.0627 15.0627 19.6343 14.6343L16 11ZM16 11V8.8C16 7.11984 16 6.27976 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7202 4 12.8802 4 11.2 4H8.5M1 1L21 21" stroke={callState.camera ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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

                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    :
                    <View style = {styles.bigCallModal}>
                    {/* <Image source = {require('../../../../assets/images/blur.png')}
                        style={{width: vw(100), height: vh(110), position: 'absolute', top: 0, left: 0}}
                        ref={backgroundImageRef}
                    /> */}
                    {showBlur ? renderBlurView() : null}
                        <ImageBackground source = {require('../../../../assets/images/clientImg.png')}
                            style = {[styles.bigCallImg, {height: modalHeight}]}
                            resizeMode="cover"
                        >
                            <View style = {[styles.bigCallData]}>
                                <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.amplify ? 'white' : '#75757550' }]}
                                    onPress = {handleAmplify}
                                >
                                    <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.875 8.62498H3.5C2.948 8.62498 2.5 9.07298 2.5 9.62498V14.375C2.5 14.927 2.948 15.375 3.5 15.375H5.875L9.854 18.746C10.504 19.297 11.5 18.835 11.5 17.983V6.01698C11.5 5.16498 10.503 4.70298 9.854 5.25398L5.875 8.62498Z" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M15.5371 15.978C16.6991 15.256 17.5001 13.754 17.5001 12.005C17.5001 10.256 16.6991 8.75297 15.5371 8.02197" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M18.505 19.065C20.313 17.51 21.5 14.93 21.5 12.003C21.5 9.07204 20.311 6.49004 18.5 4.93604" stroke={callState.amplify ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress = {navigateGroupChat}
                                >
                                    <Svg width={vw(10)} height={vw(10)} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Circle cx="18" cy="18" r="17.5" stroke="white"/>
                                        <Path d="M15.1427 11.5714H14.9999C13.7997 11.5714 13.1997 11.5714 12.7413 11.805C12.3381 12.0104 12.0103 12.3382 11.8048 12.7414C11.5713 13.1998 11.5713 13.7999 11.5713 15V15.1428M15.1427 24.4286H14.9999C13.7997 24.4286 13.1997 24.4286 12.7413 24.195C12.3381 23.9896 12.0103 23.6617 11.8048 23.2585C11.5713 22.8002 11.5713 22.2001 11.5713 21V20.8571M24.4284 15.1428V15C24.4284 13.7999 24.4284 13.1998 24.1949 12.7414C23.9894 12.3382 23.6616 12.0104 23.2584 11.805C22.8 11.5714 22.2 11.5714 20.9999 11.5714H20.857M24.4284 20.8571V21C24.4284 22.2001 24.4284 22.8002 24.1949 23.2585C23.9894 23.6617 23.6616 23.9896 23.2584 24.195C22.8 24.4286 22.2 24.4286 20.9999 24.4286H20.857" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.bigCallToolBox}>
                                <Image style = {styles.myCallAvatar}
                                    source = {require('../../../../assets/images/myImg.png')}
                                />
                                <View style = {styles.bigCallTool}>
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.addPeople ? 'white' : '#75757550', marginTop: vw(2) }]}
                                        onPress = {handleAddPeople}
                                    >
                                        <Svg width={vw(5.6)} height={vw(5)} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.95 16.65V11.55M13.4 14.1H18.5M10 11.55H6.6C5.0158 11.55 4.2237 11.55 3.59888 11.8088C2.76578 12.1539 2.10389 12.8158 1.75881 13.6489C1.5 14.2737 1.5 15.0658 1.5 16.65M12.975 1.59712C14.221 2.1015 15.1 3.32309 15.1 4.74998C15.1 6.17686 14.221 7.39845 12.975 7.90283M11.275 4.74998C11.275 6.62774 9.75277 8.14998 7.875 8.14998C5.99723 8.14998 4.475 6.62774 4.475 4.74998C4.475 2.87221 5.99723 1.34998 7.875 1.34998C9.75277 1.34998 11.275 2.87221 11.275 4.74998Z" stroke={callState.addPeople ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {[styles.icon, {marginTop: 0, marginLeft: vw(2), backgroundColor: callState.camera ? 'white' : '#75757550', marginTop: vw(2) }]}
                                        onPress = {handleCamera}
                                    >
                                        <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M4 4C2.34315 4 1 5.34315 1 7V15C1 16.6569 2.34315 18 4 18H13C14.3527 18 15.4962 17.1048 15.8705 15.8745M16 11L19.6343 7.36569C20.0627 6.93731 20.2769 6.72312 20.4608 6.70865C20.6203 6.69609 20.7763 6.76068 20.8802 6.88238C21 7.02265 21 7.32556 21 7.93137V14.0686C21 14.6744 21 14.9774 20.8802 15.1176C20.7763 15.2393 20.6203 15.3039 20.4608 15.2914C20.2769 15.2769 20.0627 15.0627 19.6343 14.6343L16 11ZM16 11V8.8C16 7.11984 16 6.27976 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7202 4 12.8802 4 11.2 4H8.5M1 1L21 21" stroke={callState.camera ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.voice ? 'white' : '#75757550', marginTop: vw(2) }]}
                                        onPress = {handleVoice}
                                    >
                                        <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 15V15C10.343 15 9 13.657 9 12V6C9 4.343 10.343 3 12 3V3C13.657 3 15 4.343 15 6V12C15 13.657 13.657 15 12 15Z" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M18 10V12C18 15.314 15.314 18 12 18V18C8.686 18 6 15.314 6 12V10" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M12 18V21" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M7.82007 21H16.1801" stroke={callState.voice ? 'black' : 'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {[styles.icon, {backgroundColor: callState.call ? 'red' : '#53FAFB', marginTop: vw(2) }]}
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
                                </View>
                            </View>
                        </ImageBackground>

                    </View>
                    :null
                }
                    <Animated.View 
                        // {...panResponder.panHandlers}
                        style = {{transform: [{ translateY: screenY }],}}
                    >
                        <View style = {styles.chatBackStyle}>
                            <View>
                                <View style = {styles.topBar}/>
                                <View style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                                    // onPress = {handleChatHidden}
                                >
                                    <View style = {styles.datas}>
                                        <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                            <Image source = {clientData.avatar}
                                                style = {[
                                                    styles.addChatIcon, 
                                                    {
                                                        width: vw(11.1), 
                                                        height: vw(11.1), 
                                                        borderRadius: vw(3),
                                                        backgroundColor: 'transparent'
                                                        // borderWidth: vw(0.3), 
                                                        // borderColor: 'black',
                                                    }
                                                ]}
                                            />
                                        </View>
                                        <View style = {styles.info}>
                                            <Text style = {styles.name}>
                                                {clientData.name}
                                            </Text>
                                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                                <View 
                                                    style = {{
                                                        width: vw(2.8),
                                                        height: vw(2.8),
                                                        backgroundColor: 
                                                            clientData.onlineState == 'notification' ? '#FCC145' 
                                                                : clientData.onlineState == 'offline'? '#FF5252'
                                                                : clientData.onlineState == 'online' ? '#53FAFB' 
                                                                : clientData.onlineState == 'out' ? '#D0D5DD'
                                                                : 'transparent', 
                                                        borderWidth: clientData.onlineState != 'signout' ? vw(0.6) : 0,
                                                        borderColor: 'black',
                                                        borderRadius: vw(2),
                                                        marginLeft: vw(3),
                                                    }}
                                                />
                                                <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', marginLeft: vw(1)}]}>
                                                    {clientData.time}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {[styles.itemInfo,{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: vw(21.1)}]}>
                                        <TouchableOpacity 
                                            onPress = {handleCall}
                                        >
                                        <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M5.78361 6.126C6.33364 7.27158 7.08343 8.34527 8.033 9.29484C8.98256 10.2444 10.0563 10.9942 11.2018 11.5442C11.3004 11.5915 11.3496 11.6152 11.412 11.6334C11.6335 11.6979 11.9056 11.6516 12.0932 11.5172C12.146 11.4794 12.1912 11.4342 12.2815 11.3439C12.5578 11.0676 12.696 10.9295 12.8349 10.8392C13.3587 10.4985 14.0341 10.4985 14.5579 10.8391C14.6968 10.9295 14.835 11.0676 15.1113 11.3439L15.2653 11.4979C15.6852 11.9179 15.8952 12.1279 16.0093 12.3534C16.2362 12.8019 16.2362 13.3316 16.0093 13.7801C15.8952 14.0056 15.6853 14.2156 15.2653 14.6356L15.1407 14.7602C14.7222 15.1787 14.5129 15.388 14.2284 15.5478C13.9126 15.7252 13.4223 15.8527 13.0602 15.8516C12.7338 15.8507 12.5108 15.7874 12.0647 15.6608C9.66755 14.9804 7.40552 13.6966 5.51839 11.8094C3.63125 9.92231 2.34748 7.66028 1.66708 5.26309C1.54048 4.81703 1.47717 4.594 1.4762 4.26766C1.47513 3.90554 1.60264 3.41519 1.78 3.09947C1.93983 2.81495 2.1491 2.60568 2.56764 2.18714L2.69221 2.06256C3.11219 1.64258 3.32218 1.43259 3.54771 1.31852C3.99624 1.09166 4.52592 1.09166 4.97445 1.31852C5.19997 1.43259 5.40996 1.64258 5.82995 2.06256L5.98394 2.21656C6.26023 2.49285 6.39837 2.63099 6.48868 2.7699C6.82928 3.29376 6.82928 3.9691 6.48868 4.49296C6.39837 4.63187 6.26023 4.77002 5.98395 5.0463C5.89361 5.13663 5.84844 5.1818 5.81063 5.2346C5.67628 5.42223 5.62989 5.69429 5.69447 5.91584C5.71265 5.97819 5.7363 6.02746 5.78361 6.126Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        </TouchableOpacity>
                                        <Svg width={vw(6.1)} height={vw(4.2)} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M21.1794 4.43137C21.1794 3.82555 21.1794 3.52265 21.0596 3.38238C20.9557 3.26068 20.7998 3.19609 20.6402 3.20865C20.4563 3.22312 20.2421 3.43731 19.8138 3.86569L16.1794 7.5L19.8138 11.1343C20.2421 11.5627 20.4563 11.7769 20.6402 11.7914C20.7998 11.8039 20.9557 11.7393 21.0596 11.6176C21.1794 11.4774 21.1794 11.1744 21.1794 10.5686V4.43137Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M1.17944 5.3C1.17944 3.61984 1.17944 2.77976 1.50642 2.13803C1.79404 1.57354 2.25299 1.1146 2.81747 0.82698C3.45921 0.5 4.29929 0.5 5.97944 0.5H11.3794C13.0596 0.5 13.8997 0.5 14.5414 0.82698C15.1059 1.1146 15.5648 1.57354 15.8525 2.13803C16.1794 2.77976 16.1794 3.61984 16.1794 5.3V9.7C16.1794 11.3802 16.1794 12.2202 15.8525 12.862C15.5648 13.4265 15.1059 13.8854 14.5414 14.173C13.8997 14.5 13.0596 14.5 11.3794 14.5H5.97944C4.29929 14.5 3.45921 14.5 2.81747 14.173C2.25299 13.8854 1.79404 13.4265 1.50642 12.862C1.17944 12.2202 1.17944 11.3802 1.17944 9.7V5.3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        <Svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </View>
                                </View>
                                <ScrollView style =  {{width: vw(90), marginLeft: vw(5), marginBottom: vw(128)}}
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        msgData.map((item, index)  => 
                                            <View key={index}>
                                                {item.date ?
                                                <Text key = {index} style = {[styles.name, {width: vw(90), marginTop: vw(3.1), textAlign: 'center', marginBottom: vw(3.9)}]}>
                                                    {item.date}
                                                </Text>
                                                :
                                                <View key = {index} style = {{ marginTop: vw(3.3), flexDirection: 'row', justifyContent: item.isMyMsg ? 'flex-end' : 'flex-stat'}}>
                                                    {item.avatar && <Image source = {item.avatar} style = {{width: vw(9.7), height: vw(9.7), marginRight: vw(3), borderRadius: vw(5)}}/>}
                                                    <View style = {{flexDirection: 'column', alignItems: item.isMyMsg ? 'flex-end' : 'flex-stat'}}>
                                                        <View style = {{ maxWidth: item.msgImg? vw(75) : vw(58.3), flexDirection: 'row', borderRadius: vw(5), padding: item.msgImg ? 0 : vw(2.5), paddingLeft: item.msgImg ? 0 : item.msgImg ? 0 : vw(5), paddingRight: vw(5), backgroundColor: item.isMyMsg ? '#181818' : '#53FAFB', justifyContent: 'space-between'}}>
                                                            {
                                                                item.msgImg && 
                                                                    <View style = {{height: vw(36.11), flexDirection: 'row', justifyContent: 'space-between'}}>
                                                                        {item.msgImg.map((items, indexs) => 
                                                                            <ImageBackground key = {indexs} style = {{height: vw(36.11), borderRadius: vw(5), width: item.time ? vw(52.2) :vw(36.1), marginRight: item.time? 0 : vw(3), marginLeft: item.time? vw(5) : 0, }}
                                                                                source = {items.url}
                                                                            >
                                                                            {
                                                                                items.selected && <Text style = {[styles.text, {color: item.isMyMsg? 'white': 'black',}]}>
                                                                                    {items. urlData}
                                                                                </Text>
                                                                            }
                                                                            </ImageBackground>
                                                                        )}
                                                                    </View>
                                                            }
                                                            {
                                                                item.message && <Text style = {[styles.text, {color: item.isMyMsg? 'white': 'black',}]}>
                                                                    {item.message}
                                                                </Text>
                                                            }
                                                            {
                                                                item.msgSpeech && (
                                                                    <>
                                                                    {
                                                                        item.msgSpeech?.state ? 
                                                                        <Svg width={vw(5.8)} height={vw(5.8)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <Path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            <Path d="M8 7.46533C8 6.98805 8 6.74941 8.09974 6.61618C8.18666 6.50007 8.31971 6.42744 8.46438 6.4171C8.63038 6.40525 8.83112 6.53429 9.23261 6.79239L13.9532 9.82706C14.3016 10.051 14.4758 10.163 14.5359 10.3054C14.5885 10.4298 14.5885 10.5702 14.5359 10.6946C14.4758 10.837 14.3016 10.949 13.9532 11.1729L9.23261 14.2076C8.83112 14.4657 8.63038 14.5948 8.46438 14.5829C8.31971 14.5726 8.18666 14.4999 8.09974 14.3838C8 14.2506 8 14.012 8 13.5347V7.46533Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        </Svg>
                                                                        :
                                                                        <Svg width={vw(6.94)} height={vw(6.94)} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <Path d="M10 15.5V9.5M15 15.5V9.5M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        </Svg>
                                                                    }
                                                                    <Svg width={vw(22.5)} height={vw(4.7)} viewBox="0 0 81 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <Rect opacity="0.66" x="0.5" y="4.5" width="2" height="8" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="6.5" y="1.5" width="2" height="14" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="12.5" y="6.5" width="2" height="4" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="18.5" y="0.5" width="2" height="16" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="24.5" y="1.5" width="2" height="14" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="30.5" y="3.5" width="2" height="10" rx="1" fill="black"/>
                                                                        <Rect opacity="0.66" x="36.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="42.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="48.5" y="1.5" width="2" height="14" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="54.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="60.5" y="0.5" width="2" height="16" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="66.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="72.5" y="6.5" width="2" height="4" rx="1" fill="#00C1C3"/>
                                                                        <Rect opacity="0.66" x="78.5" y="7.5" width="2" height="2" rx="1" fill="#00C1C3"/>
                                                                    </Svg>
                                                                    <Text style = {[styles.text, {color: item.isMyMsg? 'white': 'black',}]}>
                                                                        {item.msgSpeech?.times}
                                                                    </Text>
                                                                    </>
                                                                )
                                                            }
                                                        </View>
                                                    {item.time && <Text style = {[styles.text, {color: '#797C7B', marginTop: vw(2)}]}>{item.time}</Text>}

                                                    </View>
                                                    {item.msgSpeech?.speeds && <View style = {{width: vw(9.4), height: vw(9.4), justifyContent: 'center', alignItems: 'center'}}>
                                                        <Text style = {styles.text}>{item.msgSpeech?.speeds}</Text>
                                                    </View>}
                                                </View>}
                                            </View>    
                                        )
                                    }
                                    
                                    <View style = {{height: vw(20)}}/>
                                </ScrollView>
                            </View>
                        </View>
                        <View style = {styles.foot}>
                            <View style = {styles.footerBar}>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View style = {{width: vw(9.4), height: vw(9.4), justifyContent: 'center', alignItems: 'center', backgroundColor: '#7C7C7C30',borderRadius: vw(10)}}>
                                        <Svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Circle cx="15.485" cy="7.02662" r="2.0265" fill="#C4C4C4"/>
                                        <Circle cx="8.99989" cy="2.97328" r="2.0265" fill="#F1F1F1"/>
                                        <Circle cx="2.51527" cy="7.02662" r="2.0265" fill="#C4C4C4"/>
                                        </Svg>
                                    </View>
                                    <Text style = {[styles.text,{color: '#979797', marginLeft: vw(2)}]}>Mussa OUEL is typing...</Text>
                                </View>
                                <View style = {{width: vw(9.4), height: vw(9.4), justifyContent: 'center', alignItems: 'center', backgroundColor: '#7C7C7C30',borderRadius: vw(10)}}>
                                    <Svg width={vw(3.3)} height={vw(1.67)} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1 0.5L6 5.5L11 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                            </View>
                            <View style = {styles.sendMsgBar}>
                                { !isVoice ? 
                                <View style = {[styles.inputBar, {borderColor: isFocused ? '#53FAFB' : '#4C4C4C'}]}>
                                    <View style = {[styles.msgInput]}>
                                        <TouchableOpacity
                                            onPress = { () => setPin(!pin) }
                                        >
                                            <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M14.5826 6.28048L7.77801 12.4481C6.23057 13.8506 3.72168 13.8506 2.17425 12.4481C0.626813 11.0455 0.626813 8.77146 2.17425 7.36888L8.97881 1.20129C10.0104 0.266237 11.683 0.266237 12.7147 1.20129C13.7463 2.13634 13.7463 3.65236 12.7147 4.58742L6.17693 10.5131C5.66112 10.9807 4.82483 10.9807 4.30901 10.5131C3.7932 10.0456 3.7932 9.2876 4.30901 8.82007L10.0462 3.61995" stroke={pin ? "#53FAFB" : "#4C4C4C"} stroke-linecap="round" stroke-linejoin="round"/>
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
                                    <View style = {styles.msgTool}>
                                        <TouchableOpacity
                                            onPress = { () => setIsVoice(!isVoice) }
                                        >
                                            <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M14.7177 7.99998V8.77776C14.7177 12.2142 11.5677 15 7.68195 15C3.79624 15 0.64624 12.2142 0.64624 8.77776V7.99998M7.68195 11.8889C5.73909 11.8889 4.1641 10.496 4.1641 8.77776V4.1111C4.1641 2.39289 5.73909 1 7.68195 1C9.62481 1 11.1998 2.39289 11.1998 4.1111V8.77776C11.1998 10.496 9.62481 11.8889 7.68195 11.8889Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            // onPress = { () => setPin(!pin) }
                                        >
                                            <Svg width={vw(5.3)} height={vw(4.44)} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M1.02515 5.69901C1.02515 5.44088 1.02515 5.31181 1.03754 5.2031C1.15711 4.15462 2.11173 3.32518 3.31847 3.2213C3.44359 3.21053 3.60015 3.21053 3.91327 3.21053C4.03393 3.21053 4.09425 3.21053 4.14547 3.20783C4.79952 3.17341 5.37224 2.81475 5.61665 2.28653C5.63579 2.24516 5.65368 2.19853 5.68946 2.10526C5.72524 2.012 5.74313 1.96537 5.76227 1.924C6.00667 1.39578 6.5794 1.03711 7.23344 1.0027C7.28466 1 7.34123 1 7.45438 1H11.557C11.6702 1 11.7268 1 11.778 1.0027C12.432 1.03711 13.0048 1.39578 13.2492 1.924C13.2683 1.96537 13.2862 2.012 13.322 2.10526C13.3577 2.19853 13.3756 2.24516 13.3948 2.28653C13.6392 2.81475 14.2119 3.17341 14.8659 3.20783C14.9172 3.21053 14.9775 3.21053 15.0981 3.21053C15.4113 3.21053 15.5678 3.21053 15.693 3.2213C16.8997 3.32518 17.8543 4.15462 17.9739 5.2031C17.9863 5.31181 17.9863 5.44088 17.9863 5.69901V11.4632C17.9863 12.7012 17.9863 13.3202 17.709 13.793C17.4651 14.209 17.0759 14.5471 16.5971 14.7591C16.0529 15 15.3405 15 13.9156 15H5.09582C3.67095 15 2.95851 15 2.41429 14.7591C1.93557 14.5471 1.54636 14.209 1.30244 13.793C1.02515 13.3202 1.02515 12.7012 1.02515 11.4632V5.69901Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                                <Path d="M9.50571 11.6842C11.3792 11.6842 12.8979 10.3646 12.8979 8.73684C12.8979 7.10906 11.3792 5.78947 9.50571 5.78947C7.63224 5.78947 6.11349 7.10906 6.11349 8.73684C6.11349 10.3646 7.63224 11.6842 9.50571 11.6842Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style = {styles.sendBtn}>
                                        <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M6.90359 9.0962L14.6112 1.3886M6.99724 9.33702L8.92642 14.2978C9.09637 14.7348 9.18135 14.9533 9.30379 15.0171C9.40993 15.0724 9.53638 15.0725 9.64259 15.0173C9.7651 14.9536 9.85034 14.7352 10.0208 14.2984L14.8585 1.90186C15.0124 1.50753 15.0893 1.31037 15.0472 1.18439C15.0107 1.07498 14.9248 0.989118 14.8154 0.952568C14.6894 0.91048 14.4923 0.987421 14.0979 1.1413L1.70137 5.97898C1.26455 6.14945 1.04614 6.23468 0.982492 6.3572C0.927315 6.46341 0.927389 6.58985 0.982692 6.69599C1.04649 6.81844 1.26499 6.90341 1.70201 7.07336L6.66277 9.00255C6.75148 9.03704 6.79583 9.05429 6.83318 9.08094C6.86629 9.10455 6.89524 9.1335 6.91885 9.1666C6.94549 9.20395 6.96274 9.24831 6.99724 9.33702Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style = {[styles.inputBar, {borderColor: isFocused ? '#53FAFB' : '#4C4C4C'}]}>
                                    <TouchableOpacity
                                        onPress = { () => setPin(!pin) }
                                    >
                                        <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M14.5826 6.28048L7.77801 12.4481C6.23057 13.8506 3.72168 13.8506 2.17425 12.4481C0.626813 11.0455 0.626813 8.77146 2.17425 7.36888L8.97881 1.20129C10.0104 0.266237 11.683 0.266237 12.7147 1.20129C13.7463 2.13634 13.7463 3.65236 12.7147 4.58742L6.17693 10.5131C5.66112 10.9807 4.82483 10.9807 4.30901 10.5131C3.7932 10.0456 3.7932 9.2876 4.30901 8.82007L10.0462 3.61995" stroke={pin ? "#53FAFB" : "#4C4C4C"} stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <View style = {[styles.msgInput]}>
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
                                    <View style = {styles.msgTool}>
                                        <TouchableOpacity
                                            // onPress = { () => setPin(!pin) }
                                        >
                                            <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M14.7177 7.99998V8.77776C14.7177 12.2142 11.5677 15 7.68195 15C3.79624 15 0.64624 12.2142 0.64624 8.77776V7.99998M7.68195 11.8889C5.73909 11.8889 4.1641 10.496 4.1641 8.77776V4.1111C4.1641 2.39289 5.73909 1 7.68195 1C9.62481 1 11.1998 2.39289 11.1998 4.1111V8.77776C11.1998 10.496 9.62481 11.8889 7.68195 11.8889Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            // onPress = { () => setPin(!pin) }
                                        >
                                            <Svg width={vw(5.3)} height={vw(4.44)} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M1.02515 5.69901C1.02515 5.44088 1.02515 5.31181 1.03754 5.2031C1.15711 4.15462 2.11173 3.32518 3.31847 3.2213C3.44359 3.21053 3.60015 3.21053 3.91327 3.21053C4.03393 3.21053 4.09425 3.21053 4.14547 3.20783C4.79952 3.17341 5.37224 2.81475 5.61665 2.28653C5.63579 2.24516 5.65368 2.19853 5.68946 2.10526C5.72524 2.012 5.74313 1.96537 5.76227 1.924C6.00667 1.39578 6.5794 1.03711 7.23344 1.0027C7.28466 1 7.34123 1 7.45438 1H11.557C11.6702 1 11.7268 1 11.778 1.0027C12.432 1.03711 13.0048 1.39578 13.2492 1.924C13.2683 1.96537 13.2862 2.012 13.322 2.10526C13.3577 2.19853 13.3756 2.24516 13.3948 2.28653C13.6392 2.81475 14.2119 3.17341 14.8659 3.20783C14.9172 3.21053 14.9775 3.21053 15.0981 3.21053C15.4113 3.21053 15.5678 3.21053 15.693 3.2213C16.8997 3.32518 17.8543 4.15462 17.9739 5.2031C17.9863 5.31181 17.9863 5.44088 17.9863 5.69901V11.4632C17.9863 12.7012 17.9863 13.3202 17.709 13.793C17.4651 14.209 17.0759 14.5471 16.5971 14.7591C16.0529 15 15.3405 15 13.9156 15H5.09582C3.67095 15 2.95851 15 2.41429 14.7591C1.93557 14.5471 1.54636 14.209 1.30244 13.793C1.02515 13.3202 1.02515 12.7012 1.02515 11.4632V5.69901Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                                <Path d="M9.50571 11.6842C11.3792 11.6842 12.8979 10.3646 12.8979 8.73684C12.8979 7.10906 11.3792 5.78947 9.50571 5.78947C7.63224 5.78947 6.11349 7.10906 6.11349 8.73684C6.11349 10.3646 7.63224 11.6842 9.50571 11.6842Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style = {styles.sendBtn}>
                                        <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M6.90359 9.0962L14.6112 1.3886M6.99724 9.33702L8.92642 14.2978C9.09637 14.7348 9.18135 14.9533 9.30379 15.0171C9.40993 15.0724 9.53638 15.0725 9.64259 15.0173C9.7651 14.9536 9.85034 14.7352 10.0208 14.2984L14.8585 1.90186C15.0124 1.50753 15.0893 1.31037 15.0472 1.18439C15.0107 1.07498 14.9248 0.989118 14.8154 0.952568C14.6894 0.91048 14.4923 0.987421 14.0979 1.1413L1.70137 5.97898C1.26455 6.14945 1.04614 6.23468 0.982492 6.3572C0.927315 6.46341 0.927389 6.58985 0.982692 6.69599C1.04649 6.81844 1.26499 6.90341 1.70201 7.07336L6.66277 9.00255C6.75148 9.03704 6.79583 9.05429 6.83318 9.08094C6.86629 9.10455 6.89524 9.1335 6.91885 9.1666C6.94549 9.20395 6.96274 9.24831 6.99724 9.33702Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                                }
                            </View>
                        </View>
                    </Animated.View>
                
                    {/* <View style = {{width: vw(100), height: vh(110), position: 'absolute', top: 0, backgroundColor: '#ffffff30'}}/> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010'
    },
    header: {
        position: 'absolute',
        top: 0,
        width: vw(100),
        height: vw(54.72),
        marginLeft: vw(5),
        zIndex: 0
    },
    headerTitleBar: {
        width: vw(90),
        flexDirection: 'row',
        paddingTop: vw(10.83),
        height: vw(32.78),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(6.7),
        color: 'white',
    },
    headerToolBox: {
        width: vw(21.1),
        height: vw(9.4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchIcon: {
        width: vw(9.4),
        height: vw(9,4),
        backgroundColor: '#131313',
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    editIcon: {
        width: vw(9.4),
        height: vw(9,4),
        backgroundColor: '#53FAFB',
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center'
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
    headerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.1),
        color: '#989898',
    },
    chatBar: {
        width: vw(90),
        height: vw(19.2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        width: vw(100),
        marginTop: vw(60),
        zIndex: 0
        // flexDirection: 'column',
        // alignItems: 'center'
    },
    existingChat: {
        flexDirection: 'row',
        width: vw(74)
    },
    archievedBtn: {
        marginTop: vw(6.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(90), 
        height: vw(11.1),
        marginLeft: vw(5), 
        justifyContent: 'space-between', 
        backgroundColor: '#32323250',
        borderRadius: vw(10),
        paddingLeft: vw(3.9),
        paddingRight: vw(3.9),
    },
    buttonBar: {
        flexDirection: 'row',
        width: vw(90),
        height: vw(9.44),
        marginLeft: vw(5),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pinnedStyle: {
        marginTop: vw(6.7),
        width: vw(90),
        marginLeft: vw(5),
    },
    startConvBtn: {
        // marginTop: vw(30),
        width: vw(34.72),
        height: vw(9.72),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderColor: '#323232',
        borderRadius: vw(10)
    },
    buttonText: {
        fontFamily: 'Poppins-Light',
        color: '#787878',
        fontSize: vw(2.8)
    },
    pinArray: {
        marginTop: vw(6.4)
    },
    dataItem: {
        width: vw(90),
        height: vw(11.1),
        marginBottom: vw(5.6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginRight: vw(5)
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    name: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: vw(3.9),
        marginLeft: vw(3),
        // width: vw(70)
    },
    itemInfo: {
        justifyContent: 'flex-end',
        height: vw(9),
        alignItems: 'stretch'
    },
    chatBackStyle: {
        width: vw(100),
        borderTopRightRadius: vw(5),
        borderTopLeftRadius: vw(5),
        overflow: 'hidden'
    },
    topBar: {
        width: vw(22.2), 
        height: vw(0.9),
        backgroundColor: '#505050', 
        marginLeft: vw(38.9), 
        marginTop: vw(5),
        borderRadius: vw(1),
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: vw(2.8),
        flexWrap: 'wrap'
    },
    footer: {
        position: 'absolute',
        top: vh(95.56),
        width: vw(92.2),
        left: vw(3.9),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#22222285',
        borderRadius: vw(5)
    },
    footerIcon: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vw(12.5)
    },
    footerBar: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(5),
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        backgroundColor: '#E9E9E921',
        flexDirection: 'row'
    },
    imageStyle: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      resizeMode: 'cover',
      width: null,
      height: null,
    },
    blurViewStyle: {
        position: 'absolute',
        bottom: 0,
        width: vw(92.2),
        height: vw(20),
        left: 0,
        top: 0,
        right: 0
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    },
    sendMsgBar: {
        marginLeft: vw(5),
        width: vw(90),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vw(3)
    },
    inputBar: {
        width: vw(77.8),
        aspectRatio: 280/40,
        borderRadius: vw(10),
        backgroundColor: '#181818',
        borderWidth: vw(0.3),
        borderColor: '#4C4C4C',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: vw(2),
        paddingRight: vw(2),
        justifyContent: 'space-between'
    },
    msgInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: vw(60.2),
    },
    msgTool: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(10.7)
    },
    sendBtn: {
        width: vw(11.1),
        height: vw(11.1),
        backgroundColor: '#53FAFB',
        borderRadius: vw(7),
        marginLeft: vw(6),
        justifyContent: 'center',
        alignItems: 'center'
    },
    callBack: {
        width: vw(100),
        height: vh(110),
        position: 'absolute',
        top: 0,
        // backgroundColor: '#00000030',
        zIndex: 1
    },
    callModalStyle: {
        width: vw(90),
        // height: vw(38.9),
        position: 'absolute',
        top: vw(18),
        marginLeft: vw(5),
        borderRadius: vw(10),
        zIndex: 1,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    callbackImg: {
        width: vw(90),
        height: vw(38.9),
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: vw(3),
        paddingBottom: vw(3),
        alignItems: 'center',
        zIndex: 10
    },
    callData: {
        width:vw(85),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:vw(5),
    },
    callInfos: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callInfo: {
        marginLeft: vw(2),
    },
    callAvatar: {
        width: vw(13.9),
        height: vw(13.9),
    },
    callName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    callToolBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(85)
    },
    icon: {
        width: vw(13.9),
        height: vw(13.9),
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    bigCallModal: {
        position: 'absolute',
        top: vw(0),
        paddingTop: vw(32),
        width: vw(100),
        height: vh(115),
        paddingLeft: vw(5),
        paddingRight: vw(5),
        // borderRadius: vw(10),
        // backgroundColor: '#31313190',
        // backgroundColor: '#00000030',
        zIndex: 1
    },
    bigCallImg: {
        width: vw(90),
        height: vw(127.8),
        zIndex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bigCallData: {
        width: vw(80),
        marginTop: vw(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bigCallToolBox: {
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: vw(5),
    },
    bigCallTool: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    myCallAvatar: {
        width: vw(28.6),
        height: vw(36.1),
        borderRadius: vw(5)
    },
    foot: {
        position: 'absolute',
        bottom: vw(45),
        width: vw(100),
        height: vw(30),
    },
});

export default ChatCalling;