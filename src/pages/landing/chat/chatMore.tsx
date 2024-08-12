import React, {useState, useEffect, createRef, useRef} from "react";
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
    PanResponder,
    Dimensions,
    TextInput,
    Animated,
    Modal
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity, View } from 'react-native';r

const ChatMore = ({ navigation }) => {
    const scrollViewRef = useRef();
    const statusBarHeight = getStatusBarHeight();
    const backgroundImageRef = createRef();
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
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
    const [modalData, setModalData] = useState([
        {
            img: <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M14.2845 6.78048L7.47991 12.9481C5.93248 14.3506 3.42359 14.3506 1.87615 12.9481C0.328717 11.5455 0.328718 9.27146 1.87615 7.86888L8.68072 1.70129C9.71234 0.766237 11.3849 0.766237 12.4166 1.70129C13.4482 2.63634 13.4482 4.15236 12.4166 5.08742L5.87884 11.0131C5.36303 11.4807 4.52673 11.4807 4.01092 11.0131C3.49511 10.5456 3.49511 9.7876 4.01092 9.32007L9.7481 4.11995" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>,
            btnName: 'Send a Document',
        },
        {
            img: <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M10.7667 14.5H3.55773C3.08654 14.5 2.85095 14.5 2.74185 14.4068C2.64719 14.326 2.59696 14.2047 2.60673 14.0806C2.61798 13.9376 2.78457 13.771 3.11776 13.4378L9.73116 6.8244C10.0392 6.51639 10.1932 6.36238 10.3708 6.30468C10.527 6.25392 10.6952 6.25392 10.8515 6.30468C11.029 6.36238 11.1831 6.51639 11.4911 6.8244L14.5 9.83333V10.7667M10.7667 14.5C12.0735 14.5 12.7269 14.5 13.226 14.2457C13.665 14.022 14.022 13.665 14.2457 13.226C14.5 12.7269 14.5 12.0735 14.5 10.7667M10.7667 14.5H4.23333C2.92654 14.5 2.27315 14.5 1.77402 14.2457C1.33498 14.022 0.978023 13.665 0.754318 13.226C0.5 12.7269 0.5 12.0735 0.5 10.7667V4.23333C0.5 2.92654 0.5 2.27315 0.754318 1.77402C0.978023 1.33498 1.33498 0.978023 1.77402 0.754318C2.27315 0.5 2.92654 0.5 4.23333 0.5H10.7667C12.0735 0.5 12.7269 0.5 13.226 0.754318C13.665 0.978023 14.022 1.33498 14.2457 1.77402C14.5 2.27315 14.5 2.92654 14.5 4.23333V10.7667M6.33333 4.77778C6.33333 5.63689 5.63689 6.33333 4.77778 6.33333C3.91867 6.33333 3.22222 5.63689 3.22222 4.77778C3.22222 3.91867 3.91867 3.22222 4.77778 3.22222C5.63689 3.22222 6.33333 3.91867 6.33333 4.77778Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>,
            btnName: 'Choose Photo or Video',
        },
        {
            img: <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G clip-path="url(#clip0_193_5689)">
                        <Path d="M2.50001 13.6359C2.87663 13.75 3.38531 13.75 4.25 13.75H10.75C11.6147 13.75 12.1234 13.75 12.5 13.6359M2.50001 13.6359C2.41926 13.6114 2.34458 13.5817 2.27377 13.5456C1.92096 13.3659 1.63413 13.079 1.45436 12.7262C1.25 12.3251 1.25 11.8001 1.25 10.75V4.25C1.25 3.1999 1.25 2.67485 1.45436 2.27377C1.63413 1.92096 1.92096 1.63413 2.27377 1.45436C2.67485 1.25 3.1999 1.25 4.25 1.25H10.75C11.8001 1.25 12.3251 1.25 12.7262 1.45436C13.079 1.63413 13.3659 1.92096 13.5456 2.27377C13.75 2.67485 13.75 3.1999 13.75 4.25V10.75C13.75 11.8001 13.75 12.3251 13.5456 12.7262C13.3659 13.079 13.079 13.3659 12.7262 13.5456C12.6554 13.5817 12.5807 13.6114 12.5 13.6359M2.50001 13.6359C2.50022 13.1301 2.50325 12.8624 2.54804 12.6373C2.7453 11.6455 3.52055 10.8703 4.51227 10.673C4.75377 10.625 5.04418 10.625 5.625 10.625H9.375C9.95582 10.625 10.2462 10.625 10.4877 10.673C11.4795 10.8703 12.2547 11.6455 12.452 12.6373C12.4967 12.8624 12.4998 13.1301 12.5 13.6359M10 5.9375C10 7.31821 8.88071 8.4375 7.5 8.4375C6.11929 8.4375 5 7.31821 5 5.9375C5 4.55679 6.11929 3.4375 7.5 3.4375C8.88071 3.4375 10 4.55679 10 5.9375Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_193_5689">
                            <Rect width="15" height="15" fill="white"/>
                        </ClipPath>
                    </Defs>
                </Svg>
            ,
            btnName: 'Send a Document',
        },
    ]);
    const [isVoice, setIsVoice] = useState(false);
    // const [pin, setPin] = useState(false);
    const [screenY, setScreenY] = useState(new Animated.Value(0));
    const [msgData, setMsgData] = useState(chatModalData);
    const [isCalled, setIsCalled] = useState (callingData);
    const [showModals, setShowModals] = useState(false);
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
    
    useEffect(() => {
        const backAction = () => {
          setShowBlur(false);
    
          setTimeout(() => {
            navigation.goBack();
            setSelected('Chat');
          }, 30); // Delay the back action by one second
    
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
        let timerId: any;
        setSelected('Chat');
            
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
                    style={styles.blurViewStyle}
                    blurAmount={9}
                    // blurType={blurType}
                    // blurRadius={10}
                    downsampleFactor={10}
                    overlayColor={'rgba(18, 18, 18, .2'}
                />
            // </View>
        )
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
    const navigateChat = () => {
        setSelected('Chat')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoChat');
        }, 30); // Adjust the delay as needed
        return () => {
            clearTimeout(timerId);
        };
    }
    const handleChatView = () => {
        setAllView(1)
        Animated.timing(screenY, {
            toValue: -1.35*screenHegiht,
            duration: 50,
            useNativeDriver: true,
        }).start();
    }
    
    const handleFriendProfile = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('FriendProfile');
          }, 50); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateAndAnimateCommunity = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('NoCommunity');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dy) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
                let num =0
                // console.log('onPanResponderRelease', evt, gestureState);
                if (gestureState.dy > 0){
                    console.log('down');
                    setAllView(0);
                    Animated.timing(screenY, {
                    toValue: 0 * screenHegiht,
                    duration: 50,
                    useNativeDriver: true,
                    }).start();
                }
                else {
                    console.log('up');
            }
        }
        })
    ).current;
    const handleChatHidden = () => {
        setAllView(0);
        Animated.timing(screenY, {
        toValue: 0 * screenHegiht,
        duration: 50,
        useNativeDriver: true,
        }).start();        
    }
    const hgt = vh(105);
    const handleCall = () => {
        navigation.navigate('Calling')
        setShowBlur(false);
    }
    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    useEffect(() => {
        scrollToBottom();
    }, [msgData]);

    const handleSend = () => {
    // Logic to send the message
    // Add the new message to the messages array
        setMsgData(prevData =>
            {
                const newData = [...prevData];
                newData.push(
                    {
                        isMyMsg : true,
                        time: 'Today 02:34 AM',
                        message: text,
                    }
                )
                return newData;
            }
        )
        setText('');
        scrollToBottom();
    };
    return(
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <Modal visible={showModals} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModals(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(28)-statusBarHeight), width: vw(50)}]}>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Members'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Members&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Overview'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Overview&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('MemberPermission'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3), textAlign: 'center'}]}>
                                &nbsp;&nbsp;Community Settings&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style = {styles.header}>
                    <View style = {styles.headerTitleBar}>
                        <Text style = {styles.headerTitle}>
                            Chats
                        </Text>
                        <View style = {styles.headerToolBox}>
                            <View style = {styles.searchIcon}>
                                <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <View style = {styles.editIcon}>
                                <Svg width={vw(3.9)} height={vw(3.9)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M13.375 4.875L13.375 0.625H9.125" fill="#53FAFB"/>
                                    <Path d="M13.375 4.875L13.375 0.625M13.375 0.625H9.125M13.375 0.625L7.70833 6.29167M5.58333 2.04167H4.025C2.83489 2.04167 2.23983 2.04167 1.78527 2.27328C1.38543 2.47701 1.06034 2.80209 0.856611 3.20194C0.625 3.6565 0.625 4.25155 0.625 5.44167V9.975C0.625 11.1651 0.625 11.7602 0.856611 12.2147C1.06034 12.6146 1.38543 12.9397 1.78527 13.1434C2.23983 13.375 2.83489 13.375 4.025 13.375H8.55833C9.74844 13.375 10.3435 13.375 10.7981 13.1434C11.1979 12.9397 11.523 12.6146 11.7267 12.2147C11.9583 11.7602 11.9583 11.1651 11.9583 9.975V8.41667" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.chatBar}>
                        <View style = {styles.addChat}>
                            <View style = {styles.addChatIcon}>
                                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M8 15.5V0.5M0.5 8H15.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <Text style = {[styles.headerText, {marginTop: vw(4.2)}]}>
                                Add
                            </Text>
                        </View>
                        <View style = {styles.existingChat}>
                        {
                            chatsRoom.map((item, index) => 
                                <View key = {index} style = {[styles.addChat, {width: vw(18.33)}]}>
                                    <View 
                                        style = {[
                                            styles.addChatIcon, 
                                            {
                                                backgroundColor: 
                                                    item.onlineState == 'notification' ? '#6A6A6A' 
                                                        : item.onlineState == 'offline' || item.onlineState == 'online' ? '#53FAFB' 
                                                        : 'black', 
                                                borderRadius: vw(10), 
                                                justifyContent: 'center', 
                                                alignItems: 'center',
                                                position: 'relative',
                                            }
                                        ]}
                                    >
                                    { item.onlineState === 'online' && 
                                        <View 
                                            style = {{
                                                position: 'absolute',
                                                width: vw(15.5),
                                                height: vw(15.5),
                                                bottom: 0-vw(0.7),
                                                left: 0-vw(0.85),
                                                borderRadius: vw(10),
                                                backgroundColor: '#53FAFB20',
                                            }}
                                        />
                                    }
                                        { item.onlineState == 'online' && 
                                            <View 
                                                style = {{
                                                    position: 'absolute',
                                                    width: vw(18),
                                                    height: vw(18),
                                                    bottom: 0-vw(2),
                                                    left: 0-vw(2),
                                                    borderRadius: vw(10),
                                                    backgroundColor: '#53FAFB10',
                                                }}
                                            />
                                        }
                                        <Image 
                                            source = {item.avatar} 
                                            style = {[
                                                styles.addChatIcon, 
                                                {
                                                    width: vw(13.3), 
                                                    height: vw(13.3), 
                                                    borderWidth: vw(0.3), 
                                                    borderColor: 'black',
                                                }
                                            ]}
                                        />
                                        <View 
                                            style = {{
                                                position: 'absolute',
                                                width: vw(2.8),
                                                height: vw(2.8),
                                                backgroundColor: 
                                                    item.onlineState == 'notification' ? '#FCC145' 
                                                        : item.onlineState == 'offline'? '#FF5252'
                                                        : item.onlineState == 'online' ? '#53FAFB' 
                                                        : '#D0D5DD', 
                                                borderWidth: vw(0.6),
                                                borderColor: 'black',
                                                borderRadius: vw(2),
                                                right: vw(1),
                                                bottom: vw(0.5)
                                            }}
                                        />
                                    </View>
                                    <Text style = {[styles.headerText, {marginTop: vw(4.2)}]}>
                                        {item.name}
                                    </Text>
                                </View>
                            )
                        }
                        </View>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.buttonBar}>
                        {
                            btnNames.map((item, index) => 
                                <TouchableOpacity 
                                    key = { index }
                                    style = {{
                                        backgroundColor: item.state ? '#53FAFB' : 'transparent',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: vw(10),
                                    }}
                                    onPress = {() => {
                                        setBtnNames(preBtn => {
                                            const newBtn = [...preBtn];
                                            for (i = 0; i < btnNames.length; i ++ ) {
                                                newBtn[i].state = false;
                                            }
                                            newBtn[index].state = true;
                                            return newBtn;
                                        })
                                    }}
                                >
                                    <Text 
                                        style ={{
                                            padding: vw(2.63), 
                                            fontFamily: 'TT Firs Neue Trial Medium',
                                            color: item.state ? 'black' : '#606060',
                                            fontSize: vw(3.3),
                                        }}
                                    >
                                        &nbsp;&nbsp;&nbsp;&nbsp;{item.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        style = {{marginBottom: vw(70)}}
                    >
                        <View style = {[styles.archievedBtn]}>
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M2.4 4.33106C2.28519 4.32824 2.20183 4.32191 2.12687 4.30771C1.57151 4.2025 1.13737 3.78904 1.0269 3.26012C1 3.13132 1 2.97644 1 2.66667C1 2.3569 1 2.20201 1.0269 2.07321C1.13737 1.54429 1.57151 1.13083 2.12687 1.02562C2.26211 1 2.42474 1 2.75 1H13.25C13.5753 1 13.7379 1 13.8731 1.02562C14.4285 1.13083 14.8626 1.54429 14.9731 2.07321C15 2.20201 15 2.3569 15 2.66667C15 2.97644 15 3.13132 14.9731 3.26012C14.8626 3.78904 14.4285 4.2025 13.8731 4.30771C13.7982 4.32191 13.7148 4.32824 13.6 4.33106M6.6 7.66667H9.4M2.4 4.33333H13.6V9.8C13.6 10.9201 13.6 11.4802 13.3711 11.908C13.1698 12.2843 12.8485 12.5903 12.4534 12.782C12.0042 13 11.4161 13 10.24 13H5.76C4.58389 13 3.99583 13 3.54662 12.782C3.15148 12.5903 2.83022 12.2843 2.62889 11.908C2.4 11.4802 2.4 10.9201 2.4 9.8V4.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {[styles.buttonText, {fontSize: vw(3.3), color: 'white'}]}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Archieved
                                </Text>
                            </View>
                            <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0}]}>
                                    23
                                </Text>
                            </View> 
                        </View>
                        <View style = {[styles.pinnedStyle, {marginTop: vw(5.3)}]}>
                            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <View style = {styles.startConvBtn}>
                                    <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M4.25726 8.74269L0.976379 12.0236M6.18146 3.53764L5.27617 4.44293C5.20232 4.51678 5.1654 4.5537 5.12333 4.58304C5.08599 4.60908 5.04572 4.63063 5.00334 4.64726C4.95559 4.66599 4.90439 4.67623 4.80199 4.69671L2.67666 5.12177C2.12434 5.23224 1.84818 5.28747 1.71898 5.43307C1.60643 5.55992 1.55503 5.72968 1.57832 5.89766C1.60505 6.09047 1.80419 6.28962 2.20248 6.6879L6.31208 10.7975C6.71036 11.1958 6.9095 11.3949 7.10232 11.4217C7.2703 11.4449 7.44006 11.3935 7.5669 11.281C7.71251 11.1518 7.76774 10.8756 7.87821 10.3233L8.30327 8.19799C8.32375 8.09559 8.33399 8.04438 8.35272 7.99664C8.36934 7.95426 8.3909 7.91398 8.41694 7.87664C8.44628 7.83458 8.4832 7.79765 8.55705 7.72381L9.46233 6.81852C9.50955 6.77131 9.53316 6.7477 9.5591 6.72709C9.58216 6.70878 9.60657 6.69225 9.63213 6.67765C9.66091 6.66121 9.69159 6.64806 9.75296 6.62176L11.1996 6.00175C11.6217 5.82087 11.8327 5.73043 11.9286 5.58428C12.0124 5.45648 12.0424 5.30075 12.012 5.15096C11.9773 4.97967 11.815 4.81732 11.4903 4.49263L8.50735 1.5097C8.18266 1.18501 8.02031 1.02267 7.84902 0.987943C7.69922 0.957578 7.5435 0.987568 7.4157 1.07139C7.26955 1.16725 7.17911 1.37828 6.99823 1.80033L6.37822 3.24702C6.35192 3.30839 6.33877 3.33907 6.32233 3.36785C6.30773 3.39341 6.2912 3.41782 6.27289 3.44087C6.25228 3.46682 6.22867 3.49043 6.18146 3.53764Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {styles.buttonText}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;Pinned Chats
                                    </Text>
                                </View>
                                <Svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M1.6875 5.66406C1.3078 5.66406 1 5.97187 1 6.35156C1 6.73126 1.3078 7.03906 1.6875 7.03906C2.0672 7.03906 2.375 6.73126 2.375 6.35156C2.375 5.97187 2.0672 5.66406 1.6875 5.66406Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.6875 10.4766C1.3078 10.4766 1 10.7844 1 11.1641C1 11.5438 1.3078 11.8516 1.6875 11.8516C2.0672 11.8516 2.375 11.5438 2.375 11.1641C2.375 10.7844 2.0672 10.4766 1.6875 10.4766Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.6875 0.851562C1.30781 0.851562 1 1.15937 1 1.53906C1 1.91876 1.30781 2.22656 1.6875 2.22656C2.0672 2.22656 2.375 1.91876 2.375 1.53906C2.375 1.15937 2.0672 0.851562 1.6875 0.851562Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <View style = {styles.pinArray}>
                                {
                                    pinnedChat.map((item, index) => 
                                        <TouchableOpacity key = {index} style = {styles.dataItem}
                                            onPress = {handleChatView}
                                        >
                                            <View style = {styles.datas}>
                                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1)}]}>
                                                <TouchableOpacity onPress = {handleFriendProfile}>
                                                    <Image source = {item.avatar}
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
                                                    </TouchableOpacity>
                                                    <View 
                                                        style = {{
                                                            position: 'absolute',
                                                            width: vw(2.8),
                                                            height: vw(2.8),
                                                            backgroundColor: 
                                                                item.onlineState == 'notification' ? '#FCC145' 
                                                                    : item.onlineState == 'offline'? '#FF5252'
                                                                    : item.onlineState == 'online' ? '#53FAFB' 
                                                                    : item.onlineState == 'out' ? '#D0D5DD'
                                                                    : 'transparent', 
                                                            borderWidth: item.onlineState != 'signout' ? vw(0.6) : 0,
                                                            borderColor: 'black',
                                                            borderRadius: vw(2),
                                                            right: vw(0),
                                                            bottom: vw(0)
                                                        }}
                                                    />
                                                </View>
                                                <View style = {styles.info}>
                                                    <Text style = {styles.name}>
                                                        {item.name}
                                                    </Text>
                                                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                                        {item.lastMsgImg && 
                                                            <View style = {{marginLeft: vw(3)}}>
                                                                {item.lastMsgImg}
                                                            </View>
                                                        }
                                                        <Text style = {[styles.name, {fontSize: vw(2.8), color: item.name == 'Fernado TOYs' ? 'white': item.lastMsg == 'Calling...' ? '#53FAFB' : '#787878'}]}>
                                                            {item.lastMsg}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style = {styles.itemInfo}>
                                                <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', paddingBottom: vw(1)}]}>
                                                    {item.time}
                                                </Text>
                                                <View style = {{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                    {item.mute && <Svg width={vw(3.9)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M12.4762 3.3721L9.1762 6.6279M9.1762 3.3721L12.4762 6.6279M5.67507 0.857367L3.93394 2.57517C3.83882 2.66902 3.79126 2.71595 3.73575 2.74951C3.68654 2.77926 3.63289 2.80118 3.57677 2.81447C3.51348 2.82947 3.44621 2.82947 3.31169 2.82947H2.3562C2.04817 2.82947 1.89415 2.82947 1.7765 2.88861C1.67301 2.94063 1.58887 3.02365 1.53614 3.12575C1.4762 3.24183 1.4762 3.39378 1.4762 3.69768V6.30232C1.4762 6.60622 1.4762 6.75817 1.53614 6.87425C1.58887 6.97635 1.67301 7.05937 1.7765 7.11139C1.89415 7.17053 2.04817 7.17053 2.3562 7.17053H3.31169C3.44621 7.17053 3.51348 7.17053 3.57677 7.18553C3.63289 7.19882 3.68654 7.22074 3.73575 7.25049C3.79126 7.28405 3.83882 7.33098 3.93394 7.42483L5.67507 9.14263C5.91068 9.37508 6.02848 9.49131 6.12962 9.49916C6.21738 9.50598 6.30314 9.47093 6.36031 9.40489C6.4262 9.32878 6.4262 9.16441 6.4262 8.83567V1.16433C6.4262 0.835592 6.4262 0.671224 6.36031 0.595112C6.30314 0.529071 6.21738 0.494024 6.12962 0.500838C6.02848 0.508691 5.91068 0.624917 5.67507 0.857367Z" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    }
                                                    {
                                                    item.unreadMsg != null ? 
                                                        item.unreadMsg == 0 ?
                                                            <Svg width={vw(4.2)} height={vw(2.2)} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <Path d="M8.9762 1L3.4762 7L0.976196 4.27273" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <Path d="M13.4762 1L7.9762 7" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </Svg>
                                                            :
                                                            <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                                <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0}]}>{item.unreadMsg}</Text>
                                                            </View> 
                                                        :
                                                        null                                             
                                                    }
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                        <View style = {styles.pinnedStyle}>
                            <View style = {[styles.startConvBtn, {backgroundColor: '#202020'}]}>
                                <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4.25726 8.74269L0.976379 12.0236M6.18146 3.53764L5.27617 4.44293C5.20232 4.51678 5.1654 4.5537 5.12333 4.58304C5.08599 4.60908 5.04572 4.63063 5.00334 4.64726C4.95559 4.66599 4.90439 4.67623 4.80199 4.69671L2.67666 5.12177C2.12434 5.23224 1.84818 5.28747 1.71898 5.43307C1.60643 5.55992 1.55503 5.72968 1.57832 5.89766C1.60505 6.09047 1.80419 6.28962 2.20248 6.6879L6.31208 10.7975C6.71036 11.1958 6.9095 11.3949 7.10232 11.4217C7.2703 11.4449 7.44006 11.3935 7.5669 11.281C7.71251 11.1518 7.76774 10.8756 7.87821 10.3233L8.30327 8.19799C8.32375 8.09559 8.33399 8.04438 8.35272 7.99664C8.36934 7.95426 8.3909 7.91398 8.41694 7.87664C8.44628 7.83458 8.4832 7.79765 8.55705 7.72381L9.46233 6.81852C9.50955 6.77131 9.53316 6.7477 9.5591 6.72709C9.58216 6.70878 9.60657 6.69225 9.63213 6.67765C9.66091 6.66121 9.69159 6.64806 9.75296 6.62176L11.1996 6.00175C11.6217 5.82087 11.8327 5.73043 11.9286 5.58428C12.0124 5.45648 12.0424 5.30075 12.012 5.15096C11.9773 4.97967 11.815 4.81732 11.4903 4.49263L8.50735 1.5097C8.18266 1.18501 8.02031 1.02267 7.84902 0.987943C7.69922 0.957578 7.5435 0.987568 7.4157 1.07139C7.26955 1.16725 7.17911 1.37828 6.99823 1.80033L6.37822 3.24702C6.35192 3.30839 6.33877 3.33907 6.32233 3.36785C6.30773 3.39341 6.2912 3.41782 6.27289 3.44087C6.25228 3.46682 6.22867 3.49043 6.18146 3.53764Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {styles.buttonText}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;All Chats
                                </Text>
                            </View>
                            <View style = {styles.pinArray}>
                                {
                                    allChat.map((item, index) => 
                                        <TouchableOpacity key = {index} style = {styles.dataItem}
                                            onPress = {handleChatView}
                                        >
                                            <View style = {styles.datas}>
                                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1)}]}>
                                                <TouchableOpacity onPress = {handleFriendProfile}>
                                                    <Image source = {item.avatar}
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
                                                    </TouchableOpacity>
                                                    <View 
                                                        style = {{
                                                            position: 'absolute',
                                                            width: vw(2.8),
                                                            height: vw(2.8),
                                                            backgroundColor: 
                                                                item.onlineState == 'notification' ? '#FCC145' 
                                                                    : item.onlineState == 'offline'? '#FF5252'
                                                                    : item.onlineState == 'online' ? '#53FAFB' 
                                                                    : item.onlineState == 'out' ? '#D0D5DD'
                                                                    : 'transparent', 
                                                            borderWidth: item.onlineState != 'signout' ? vw(0.6) : 0,
                                                            borderColor: 'black',
                                                            borderRadius: vw(2),
                                                            right: vw(0),
                                                            bottom: vw(0)
                                                        }}
                                                    />
                                                </View>
                                                <View style = {styles.info}>
                                                    <Text style = {styles.name}>
                                                        {item.name}
                                                    </Text>
                                                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                                        {item.lastMsgImg && 
                                                            <View style = {{marginLeft: vw(3)}}>
                                                                {item.lastMsgImg}
                                                            </View>
                                                        }
                                                        <Text style = {[styles.name, {fontSize: vw(2.8),color: item.name == 'Fernado TOYs' ? 'white': item.lastMsg == 'Calling...' ? '#53FAFB' : '#787878'}]}>
                                                            {item.lastMsg}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style = {styles.itemInfo}>
                                                <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', paddingBottom: vw(1)}]}>
                                                    {item.time}
                                                </Text>
                                                <View style = {{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                    {item.mute && <Svg width={vw(3.9)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M12.4762 3.3721L9.1762 6.6279M9.1762 3.3721L12.4762 6.6279M5.67507 0.857367L3.93394 2.57517C3.83882 2.66902 3.79126 2.71595 3.73575 2.74951C3.68654 2.77926 3.63289 2.80118 3.57677 2.81447C3.51348 2.82947 3.44621 2.82947 3.31169 2.82947H2.3562C2.04817 2.82947 1.89415 2.82947 1.7765 2.88861C1.67301 2.94063 1.58887 3.02365 1.53614 3.12575C1.4762 3.24183 1.4762 3.39378 1.4762 3.69768V6.30232C1.4762 6.60622 1.4762 6.75817 1.53614 6.87425C1.58887 6.97635 1.67301 7.05937 1.7765 7.11139C1.89415 7.17053 2.04817 7.17053 2.3562 7.17053H3.31169C3.44621 7.17053 3.51348 7.17053 3.57677 7.18553C3.63289 7.19882 3.68654 7.22074 3.73575 7.25049C3.79126 7.28405 3.83882 7.33098 3.93394 7.42483L5.67507 9.14263C5.91068 9.37508 6.02848 9.49131 6.12962 9.49916C6.21738 9.50598 6.30314 9.47093 6.36031 9.40489C6.4262 9.32878 6.4262 9.16441 6.4262 8.83567V1.16433C6.4262 0.835592 6.4262 0.671224 6.36031 0.595112C6.30314 0.529071 6.21738 0.494024 6.12962 0.500838C6.02848 0.508691 5.91068 0.624917 5.67507 0.857367Z" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    }
                                                    {
                                                    item.unreadMsg != null ? 
                                                        item.unreadMsg === 0 ?
                                                            <Svg width={vw(4.2)} height={vw(2.2)} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <Path d="M8.9762 1L3.4762 7L0.976196 4.27273" stroke="#606060" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <Path d="M13.4762 1L7.9762 7" stroke="#606060" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </Svg>
                                                            :
                                                            <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2), marginLeft: vw(3)}}>
                                                                <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0,}]}>{item.unreadMsg}</Text>
                                                            </View> 
                                                        :
                                                        null                                             
                                                    }
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                        <View style = {[styles.pinArray, {marginLeft: vw(5),  marginTop: vw(4.7)}]}>
                            {
                                isCalled.map((item, index) => 
                                    <TouchableOpacity 
                                        key = {index} 
                                        style = {styles.dataItem}
                                        onPress = { () => {
                                            setIsCalled(preState => {
                                                const newState = [...preState];
                                                for (i =0; i<isCalled.length; i++) {
                                                    newState[i].selected = false;
                                                };
                                                newState[index].selected = true;
                                                return newState;
                                            })
                                        }}
                                    >
                                        <View style = {styles.datas}>
                                            <View 
                                                style = {{
                                                    width: vw(11.1), 
                                                    height: vw(11.1), 
                                                    marginRight: vw(3), 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <View 
                                                    style = {{
                                                        width: vw(4.2),
                                                        height: vw(4.2),
                                                        borderRadius: vw(3),
                                                        borderWidth: vw(0.3),
                                                        borderColor: item.selected ? '#53FAFB' : '#474747',
                                                        backgroundColor: item.selected ? '#53FAFB' : 'transparent',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    {item.selected && <Svg width={vw(2)} height={vw(1.4)} viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M0.5 2.5L2.5 4.5L6.5 0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    }
                                                </View>
                                            </View>
                                            <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                            <TouchableOpacity onPress = {handleFriendProfile}>
                                                <Image source = {item.avatar}
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
                                                </TouchableOpacity>
                                                <View 
                                                    style = {{
                                                        position: 'absolute',
                                                        width: vw(2.8),
                                                        height: vw(2.8),
                                                        backgroundColor: 
                                                            item.onlineState == 'notification' ? '#FCC145' 
                                                                : item.onlineState == 'offline'? '#FF5252'
                                                                : item.onlineState == 'online' ? '#53FAFB' 
                                                                : item.onlineState == 'out' ? '#D0D5DD'
                                                                : 'transparent', 
                                                        borderWidth: item.onlineState != 'signout' ? vw(0.6) : 0,
                                                        borderColor: 'black',
                                                        borderRadius: vw(2),
                                                        right: vw(0),
                                                        bottom: vw(0)
                                                    }}
                                                />
                                            </View>
                                            <View style = {styles.info}>
                                                <Text style = {styles.name}>
                                                    {item.name}
                                                </Text>
                                                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                                    {item.lastMsgImg && 
                                                        <View style = {{marginLeft: vw(3)}}>
                                                            {item.lastMsgImg}
                                                        </View>
                                                    }
                                                    <Text style = {[styles.name, {fontSize: vw(2.8), color: item.name == 'Fernado TOYs' ? 'white': item.lastMsg == 'Calling...' ? '#53FAFB' : '#787878'}]}>
                                                        {item.lastMsg}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style = {styles.itemInfo}>
                                            <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', paddingBottom: vw(1)}]}>
                                                {item.time}
                                            </Text>
                                            <View style = {{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                {item.mute && <Svg width={vw(3.9)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M12.4762 3.3721L9.1762 6.6279M9.1762 3.3721L12.4762 6.6279M5.67507 0.857367L3.93394 2.57517C3.83882 2.66902 3.79126 2.71595 3.73575 2.74951C3.68654 2.77926 3.63289 2.80118 3.57677 2.81447C3.51348 2.82947 3.44621 2.82947 3.31169 2.82947H2.3562C2.04817 2.82947 1.89415 2.82947 1.7765 2.88861C1.67301 2.94063 1.58887 3.02365 1.53614 3.12575C1.4762 3.24183 1.4762 3.39378 1.4762 3.69768V6.30232C1.4762 6.60622 1.4762 6.75817 1.53614 6.87425C1.58887 6.97635 1.67301 7.05937 1.7765 7.11139C1.89415 7.17053 2.04817 7.17053 2.3562 7.17053H3.31169C3.44621 7.17053 3.51348 7.17053 3.57677 7.18553C3.63289 7.19882 3.68654 7.22074 3.73575 7.25049C3.79126 7.28405 3.83882 7.33098 3.93394 7.42483L5.67507 9.14263C5.91068 9.37508 6.02848 9.49131 6.12962 9.49916C6.21738 9.50598 6.30314 9.47093 6.36031 9.40489C6.4262 9.32878 6.4262 9.16441 6.4262 8.83567V1.16433C6.4262 0.835592 6.4262 0.671224 6.36031 0.595112C6.30314 0.529071 6.21738 0.494024 6.12962 0.500838C6.02848 0.508691 5.91068 0.624917 5.67507 0.857367Z" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                }
                                                {
                                                item.unreadMsg != null ? 
                                                    item.unreadMsg == 0 ?
                                                        <Svg width={vw(4.2)} height={vw(2.2)} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M8.9762 1L3.4762 7L0.976196 4.27273" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <Path d="M13.4762 1L7.9762 7" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                        :
                                                        <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                            <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0}]}>{item.unreadMsg}</Text>
                                                        </View> 
                                                    :
                                                    null                                             
                                                }
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style = {{height: vw(20)}}/>
                    </ScrollView>
                </View>
                <View style = {[styles.footer, {position: 'absolute', overflow: 'hidden'}]}>
                    <Image source = {require('../../../../assets/images/blur.png')}
                        style={styles.imageStyle}
                        ref={backgroundImageRef}
                    />
                    {showBlur ? renderBlurView() : null}
                    
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigateHome}
                    >
                        <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.50008 16.5V10.3333C6.50008 9.86662 6.50008 9.63327 6.59091 9.45501C6.67081 9.29821 6.79829 9.17072 6.95509 9.09083C7.13335 9 7.36671 9 7.83342 9H10.1668C10.6335 9 10.8668 9 11.0451 9.09083C11.2019 9.17072 11.3294 9.29821 11.4093 9.45501C11.5001 9.63327 11.5001 9.86662 11.5001 10.3333V16.5M0.666748 6.91667L8.20008 1.26667C8.48697 1.0515 8.63041 0.943924 8.78794 0.902454C8.927 0.865849 9.07317 0.865849 9.21222 0.902454C9.36976 0.943924 9.5132 1.05151 9.80008 1.26667L17.3334 6.91667M2.33342 5.66667V13.8333C2.33342 14.7668 2.33342 15.2335 2.51507 15.59C2.67486 15.9036 2.92983 16.1586 3.24343 16.3183C3.59995 16.5 4.06666 16.5 5.00008 16.5H13.0001C13.9335 16.5 14.4002 16.5 14.7567 16.3183C15.0703 16.1586 15.3253 15.9036 15.4851 15.59C15.6668 15.2335 15.6668 14.7668 15.6668 13.8333V5.66667L10.6001 1.86667C10.0263 1.43634 9.73944 1.22118 9.42436 1.13824C9.14625 1.06503 8.85392 1.06503 8.57581 1.13824C8.26073 1.22118 7.97385 1.43634 7.40008 1.86667L2.33342 5.66667Z" stroke={selected == 'Home'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Home' ? '#53FAFB' : "#9D9D9D"}]}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigateAndAnimateCommunity}
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15 13.1974C16.2132 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2502 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4336C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.6102C14.5681 8.99657 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98772 10 7.91665 10C5.84559 10 4.16665 8.32107 4.16665 6.25C4.16665 4.17893 5.84559 2.5 7.91665 2.5C9.98772 2.5 11.6667 4.17893 11.6667 6.25ZM2.13268 15.782C3.46127 13.7871 5.5578 12.5 7.91665 12.5C10.2755 12.5 12.372 13.7871 13.7006 15.782C13.9917 16.219 14.1372 16.4375 14.1205 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18528C2.5718 17.5 2.26505 17.5 2.04202 17.3313C1.86836 17.2 1.72589 16.9339 1.71285 16.7166C1.69609 16.4375 1.84162 16.219 2.13268 15.782Z" stroke={selected == 'Community'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Community' ? '#53FAFB' : "#9D9D9D"}]}>
                            Community
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigateChat}
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clip-path="url(#clip0_175_4353)">
                                <Path d="M5.07866 9.35717C5.02686 9.02336 4.99999 8.68138 4.99999 8.33317C4.99999 4.65127 8.00439 1.6665 11.7105 1.6665C15.4166 1.6665 18.421 4.65127 18.421 8.33317C18.421 9.1649 18.2677 9.96105 17.9877 10.6953C17.9295 10.8477 17.9004 10.924 17.8872 10.9835C17.8741 11.0425 17.8691 11.084 17.8676 11.1444C17.8662 11.2053 17.8745 11.2725 17.891 11.4068L18.2265 14.1319C18.2628 14.4269 18.281 14.5745 18.2319 14.6817C18.1889 14.7756 18.1125 14.8503 18.0176 14.8911C17.9093 14.9377 17.7622 14.9161 17.4681 14.873L14.8137 14.4839C14.6751 14.4636 14.6058 14.4535 14.5427 14.4538C14.4803 14.4542 14.4371 14.4588 14.376 14.4716C14.3142 14.4846 14.2353 14.5142 14.0775 14.5733C13.3414 14.849 12.5437 14.9998 11.7105 14.9998C11.362 14.9998 11.0197 14.9734 10.6856 14.9226M6.35967 18.3332C8.83042 18.3332 10.8334 16.2811 10.8334 13.7498C10.8334 11.2185 8.83042 9.1665 6.35967 9.1665C3.88892 9.1665 1.88599 11.2185 1.88599 13.7498C1.88599 14.2587 1.96692 14.7481 2.11631 15.2054C2.17946 15.3988 2.21104 15.4954 2.2214 15.5615C2.23222 15.6304 2.23412 15.6691 2.23009 15.7388C2.22623 15.8055 2.20953 15.8809 2.17614 16.0318L1.66669 18.3332L4.16236 17.9923C4.29857 17.9737 4.36668 17.9644 4.42616 17.9648C4.48879 17.9653 4.52203 17.9687 4.58344 17.9809C4.64177 17.9925 4.72849 18.0231 4.90191 18.0843C5.35885 18.2456 5.84928 18.3332 6.35967 18.3332Z" stroke={selected == 'Chat' ? '#53FAFB' : "#9D9D9D"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </G>
                            <Circle cx="17" cy="3" r="3" fill="#53FAFB"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Chat' ? '#53FAFB' : "#9D9D9D"}]}>
                            Chat
                        </Text>

                    </TouchableOpacity>
                </View>
                <Animated.View 
                    {...panResponder.panHandlers}
                    style = {{transform: [{ translateY: screenY }],}}
                >
                    <View style = {styles.chatBackStyle}>
                        <ImageBackground source = {require('../../../../assets/images/chatBackground.png')}
                        >
                            <View style = {styles.topBar}/>
                            <View style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                                // onPress = {handleChatHidden}
                            >
                                <View style = {styles.datas}>
                                    <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                        <TouchableOpacity onPress = {handleFriendProfile}>
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
                                        </TouchableOpacity>
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
                                    <TouchableOpacity 
                                        onPress = {() => setShowModals(!showModals)}
                                    >
                                    <Svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <ScrollView style =  {{width: vw(90), marginLeft: vw(5), marginBottom: pin ? vw(238) : vw(128)}}
                                ref={scrollViewRef}
                                onContentSizeChange={scrollToBottom}
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
                                                {item.avatar && 
                                                    <TouchableOpacity onPress = {handleFriendProfile}>
                                                        <Image source = {item.avatar} style = {{width: vw(9.7), height: vw(9.7), marginRight: vw(3), borderRadius: vw(5)}}/>
                                                    </TouchableOpacity>
                                                }
                                                <View style = {{ flexDirection: 'column', alignItems: item.isMyMsg ? "flex-end" : "flex-start" }}>
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
                                <View style = {{height: vw(10)}}/>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                    <View style = {[styles.foot, {bottom: pin ? vw(155) : vw(45)}]}>
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
                                        style={{ color: 'white', fontSize: vw(3.3) }}
                                        placeholder='Type your message'
                                        placeholderTextColor='#3F3F3F'
                                        value={text}
                                        onChangeText={onchangeText}
                                        onSubmitEditing={handleSend}
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
                                <TouchableOpacity style = {styles.sendBtn}
                                    onPress = {handleSend}
                                >
                                    <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.90359 9.0962L14.6112 1.3886M6.99724 9.33702L8.92642 14.2978C9.09637 14.7348 9.18135 14.9533 9.30379 15.0171C9.40993 15.0724 9.53638 15.0725 9.64259 15.0173C9.7651 14.9536 9.85034 14.7352 10.0208 14.2984L14.8585 1.90186C15.0124 1.50753 15.0893 1.31037 15.0472 1.18439C15.0107 1.07498 14.9248 0.989118 14.8154 0.952568C14.6894 0.91048 14.4923 0.987421 14.0979 1.1413L1.70137 5.97898C1.26455 6.14945 1.04614 6.23468 0.982492 6.3572C0.927315 6.46341 0.927389 6.58985 0.982692 6.69599C1.04649 6.81844 1.26499 6.90341 1.70201 7.07336L6.66277 9.00255C6.75148 9.03704 6.79583 9.05429 6.83318 9.08094C6.86629 9.10455 6.89524 9.1335 6.91885 9.1666C6.94549 9.20395 6.96274 9.24831 6.99724 9.33702Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style = {{width: vw(90),flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <TouchableOpacity
                                    style = {[styles.sendBtn, {backgroundColor: '#242424', marginLeft: vw(0)}]}
                                    onPress = { () => setPin(!pin) }
                                >
                                    <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M14.5826 6.28048L7.77801 12.4481C6.23057 13.8506 3.72168 13.8506 2.17425 12.4481C0.626813 11.0455 0.626813 8.77146 2.17425 7.36888L8.97881 1.20129C10.0104 0.266237 11.683 0.266237 12.7147 1.20129C13.7463 2.13634 13.7463 3.65236 12.7147 4.58742L6.17693 10.5131C5.66112 10.9807 4.82483 10.9807 4.30901 10.5131C3.7932 10.0456 3.7932 9.2876 4.30901 8.82007L10.0462 3.61995" stroke={pin ? "#53FAFB" : "#4C4C4C"} stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <View style = {[styles.speechInput]}>
                                    <Svg width={vw(6.92)} height={vw(6.67)} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M9.75 15.3V8.7M15.25 15.3V8.7M23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Svg width={vw(38.9)} height={vw(4.4)} viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Rect opacity="0.66" x="6" y="4" width="2" height="8" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="12" y="1" width="2" height="14" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="18" y="6" width="2" height="4" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="24" width="2" height="16" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="30" y="1" width="2" height="14" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="36" y="3" width="2" height="10" rx="1" fill="black"/>
                                        <Rect opacity="0.66" x="42" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="48" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="54" y="1" width="2" height="14" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="60" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="66" width="2" height="16" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="72" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="78" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="84" y="7" width="2" height="2" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="90" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="96" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="102" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="108" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="114" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="120" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="126" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                        <Rect opacity="0.66" x="132" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                                    </Svg>
                                    <Text style = {[styles.text, {color: 'black', fontSize: vw(3.3)}]}>
                                        00 : 09
                                    </Text>
                                </View>
                                <TouchableOpacity style = {[styles.sendBtn, {marginLeft: vw(0)}]}
                                    onPress ={() => setIsVoice(!isVoice)}
                                >
                                    <Svg width={vw(5)} height={vw(5.6)} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M17 9.99995V10.9909C17 15.3693 13.4882 18.9187 9.15625 18.9187C4.82427 18.9187 1.3125 15.3693 1.3125 10.9909V9.99995M9.15625 14.9548C6.99026 14.9548 5.23438 13.1801 5.23438 10.9909V5.04507C5.23438 2.85587 6.99026 1.08118 9.15625 1.08118C11.3222 1.08118 13.0781 2.85587 13.0781 5.04507V10.9909C13.0781 13.1801 11.3222 14.9548 9.15625 14.9548Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                            }
                        </View>
                        {pin && 
                            <View style = {styles.pinModal}>
                                {
                                    modalData.map((item, index) =>
                                        <View key = {index} style = {styles.items}>
                                            <View style = {styles.pin}>
                                                {item.img}
                                            </View>
                                            <Text style = {styles.headerText}>
                                                {item.btnName}
                                            </Text>
                                        </View>
                                    )
                                }
                                <TouchableOpacity style = {styles.cancel}
                                    onPress = {() => setPin(false)}
                                >
                                    <Text style = {styles.headerText}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </Animated.View>
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
        marginLeft: vw(5)
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
        backgroundColor: '#202020',
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
        height: vh(110),
        // marginBottom: vw(30)
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
        overflow: 'hidden',
        marginBottom: vw(10)
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
        backgroundColor: '#36363690',
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
        marginTop: vw(3),
    },
    inputBar: {
        width: vw(77.8),
        aspectRatio: 280/40,
        borderRadius: vw(10),
        backgroundColor: '#202020',
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
    speechInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: vw(61.1),
        height: vw(11.1),
        borderRadius: vw(10),
        backgroundColor: '#53FAFB'
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
    foot: {
        position: 'absolute',
        bottom: vw(45),
        width: vw(100),
        height: vw(30),
    },
    pinModal: {
        marginTop: vw(3),
        marginLeft: vw(5),
        width: vw(90),
        height: vw(65),
        backgroundColor: '#5A5A5A20',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: vw(5),
        borderRadius: vw(5)
    },
    items: {
        width: vw(80),
        flexDirection: 'row',
        marginBottom: vw(2),
        alignItems: 'center'
    },
    pin: {
        width: vw(10.3),
        height: vw(10.3),
        backgroundColor: '#53FAFB10',
        borderRadius: vw(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vw(5)
    },
    cancel: {
        width: vw(80),
        aspectRatio: 280/45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
        borderRadius: vw(5)
    },
    modalContainer: {
        backgroundColor: '#00000090',
        width: vw(100),
        height: '100%',
        position: 'absolute',
        top: 0,
        padding: vw(5),
        alignItems: 'flex-end'
    },
    modal: {
        marginTop: vw(40),
        width: vw(44.44),
        height: vw(30.56),
        backgroundColor: '#6C434B',
        borderRadius: vw(5.6),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: vw(2),
        paddingBottom: vw(2)
    },
    modalItem: {
        marginLeft: vw(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ChatMore;