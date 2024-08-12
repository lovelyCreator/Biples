import React, { useState, useEffect, createRef } from "react";
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
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native';r

const Chats = ({ navigation }) => {
    const backgroundImageRef = createRef();
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
            name: 'All Chats',
            state: true
        },
        {
            name: 'Archived',
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
            onlineState: 'offline',
            name: 'T2OORO Grow',
            lastMsg: 'Reacted 😂 to a File',
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
            lastMsg: 'Draft: https://emojipedia.org/super-bowl',
            time: '2 min ago',
            unreadMsg: 12
        }
    ];
    const pinedData = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            onlineState: 'online',
            name: 'Mussa OUEL',
            lastMsg: 'Tape here to start conversation',
            time: 'Active Now',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            onlineState: 'signout',
            name: 'Fernado TOYs',
            lastMsg: 'Yazid: On est la !!',
            time: '2 min ago',
            mute: true,
            unreadMsg: 3
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
    const [allChat, setAllChat] = useState(allData);
    const [pinnedChat, setPinnedChat] = useState(pinedData);
    const [btnNames, setBtnNames] = useState(btnArray);
    const [chatsRoom, setChatsRoom] = useState(chatsArray);
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    
    useEffect(() => {
        const backAction = () => {
          setShowBlur(false);
    
          setTimeout(() => {
            navigation.goBack();
            setSelected('Chat');
          }, 300); // Delay the back action by one second
    
          return true; // Prevent default behavior (i.e. exit the app)
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
    }, []);
    useFocusEffect(
        React.useCallback(() => {
        let timerId;
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
    const renderBlurView = () => {
        return (
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    blurAmount={9}
                    blurType={blurType}
                    // blurRadius={10}
                    downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .2'}
                />
            // </View>
        );
    const navigated = () => {
        setWallet(false);
        setInvite(false);
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('FriendProfile');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigated2 = () => {
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
    const navigated1 = () => {
            setSelected('Chat')
            setShowBlur(false);
            let timerId;
            timerId = setTimeout(() => {
                navigation.navigate('GroupAccount');
            }, 30); // Adjust the delay as needed
            return () => {
            clearTimeout(timerId);
            };
        }
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
    const handleChatMore = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('ChatMore');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    return(
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
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
                                                    borderColor: '#101010',
                                                    backgroundColor: 'transparent'
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
                                                        : item.onlineState == 'out' ? '#D0D5DD'
                                                        : 'transparent',
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
                    style = {{marginBottom: vw(17)}}
                    >
                        <View style = {styles.pinnedStyle}>
                            <View style = {styles.startConvBtn}>
                                <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4.25726 8.74269L0.976379 12.0236M6.18146 3.53764L5.27617 4.44293C5.20232 4.51678 5.1654 4.5537 5.12333 4.58304C5.08599 4.60908 5.04572 4.63063 5.00334 4.64726C4.95559 4.66599 4.90439 4.67623 4.80199 4.69671L2.67666 5.12177C2.12434 5.23224 1.84818 5.28747 1.71898 5.43307C1.60643 5.55992 1.55503 5.72968 1.57832 5.89766C1.60505 6.09047 1.80419 6.28962 2.20248 6.6879L6.31208 10.7975C6.71036 11.1958 6.9095 11.3949 7.10232 11.4217C7.2703 11.4449 7.44006 11.3935 7.5669 11.281C7.71251 11.1518 7.76774 10.8756 7.87821 10.3233L8.30327 8.19799C8.32375 8.09559 8.33399 8.04438 8.35272 7.99664C8.36934 7.95426 8.3909 7.91398 8.41694 7.87664C8.44628 7.83458 8.4832 7.79765 8.55705 7.72381L9.46233 6.81852C9.50955 6.77131 9.53316 6.7477 9.5591 6.72709C9.58216 6.70878 9.60657 6.69225 9.63213 6.67765C9.66091 6.66121 9.69159 6.64806 9.75296 6.62176L11.1996 6.00175C11.6217 5.82087 11.8327 5.73043 11.9286 5.58428C12.0124 5.45648 12.0424 5.30075 12.012 5.15096C11.9773 4.97967 11.815 4.81732 11.4903 4.49263L8.50735 1.5097C8.18266 1.18501 8.02031 1.02267 7.84902 0.987943C7.69922 0.957578 7.5435 0.987568 7.4157 1.07139C7.26955 1.16725 7.17911 1.37828 6.99823 1.80033L6.37822 3.24702C6.35192 3.30839 6.33877 3.33907 6.32233 3.36785C6.30773 3.39341 6.2912 3.41782 6.27289 3.44087C6.25228 3.46682 6.22867 3.49043 6.18146 3.53764Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {styles.buttonText}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Pinned Chats
                                </Text>
                            </View>
                            <View style = {styles.pinArray}>
                                {
                                    pinnedChat.map((item, index) => 
                                        <TouchableOpacity key = {index} style = {styles.dataItem}
                                            onPress = {handleChatMore}
                                        >
                                            <View style = {styles.datas}>
                                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1)}]}>
                                                    <TouchableOpacity onPress = {() => {navigation.navigate('FriendProfile'), setShowBlur(false)}}>
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
                                                                    : 'transparent', 
                                                            borderWidth: item.onlineState != 'out' ? vw(0.6) : 0,
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
                                            onPress = {handleChatMore}
                                            // onPress = {() =>{
                                            //     setSelected('Community');
                                            //     navigation.navigate('ChatConversation');
                                            //     setShowBlur(false);}
                                            // }
                                        >
                                            <View style = {styles.datas}>
                                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1)}]}>
                                                    <TouchableOpacity onPress = {() => {navigation.navigate('FriendProfile'), setShowBlur(false)}}>
                                                    <Image source = {item.avatar}
                                                        style = {[
                                                            styles.addChatIcon, 
                                                            {
                                                                width: vw(11.1), 
                                                                height: vw(11.1), 
                                                                borderRadius: vw(3)
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
                            <View style = {{height: vw(40)}}/>
                        </View>
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
        // flexDirection: 'column',
        // alignItems: 'center'
    },
    existingChat: {
        flexDirection: 'row',
        width: vw(74)
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
        marginRight: vw(5),
        borderRadius: vw(10)
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
    footer: {
        position: 'absolute',
        bottom: vw(5.56),
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
    }
});

export default Chats;