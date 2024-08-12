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

const Tickets = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const btnArray = [
        {
            name: 'Opened',
            state: true
        },
        {
            name: 'Pending',
            state: false
        },
        {
            name: 'Closed',
            state: false
        },
    ];
    const allData = [
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 'NEW'
        },
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 'NEW'
        },
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 'NEW'
        },
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 'NEW'
        },
    ];
    const pinedData = [
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 12
        },
        {
            avatar: require('../../../../assets/images/avatar0.png'),
            onlineState: 'online',
            name: 'User name',
            lastMsg: "Topic's Title of Ticket is here",
            time: 'Today 12 : 12 PM',
            num: 'NEW'
        },
    ];
    const [allChat, setAllChat] = useState(allData);
    const [pinnedChat, setPinnedChat] = useState(pinedData);
    const [btnNames, setBtnNames] = useState(btnArray);
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    
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
    // useFocusEffect(
    //     React.useCallback(() => {
    //     let timerId;
    //     setSelected('Home');
            
    //     if (!showBlur) {
    //         timerId = setTimeout(() => {
    //         setShowBlur(true);
    //         }, 500); // Adjust the delay as needed
    //     }
    //     //   console.log(showBlur)
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    //     }, [showBlur])
    // );
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
        // setShowBlur(false);
        // let timerId;
        // timerId = setTimeout(() => {
        //     navigation.navigate('GroupAccount');
        // }, 30); // Adjust the delay as needed
        // return () => {
        //     clearTimeout(timerId);
        // };
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
                    <View style = {styles.userInfo}>
                        <TouchableOpacity 
                            style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                            // onPress = { () => {navigation.navigate('CommunitySearch'); 
                            // setShowBlur(false)
                        // } }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style = {styles.user}>
                            <Text style = {[styles.title, {fontSize: vw(5.6)}]}>
                                My Tickets
                            </Text>
                        </View>
                        <View style = {styles.notification}>
                            <TouchableOpacity 
                                style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                            //     onPress = { () => {navigation.navigate('CommunitySearch'); 
                            //     setShowBlur(false)
                            // } }
                            >
                                <Svg width={vw(9.4)} height={vw(9.4)} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M23.375 23.375L20.8959 20.8958M22.6667 16.6458C22.6667 19.971 19.971 22.6667 16.6458 22.6667C13.3206 22.6667 10.625 19.971 10.625 16.6458C10.625 13.3206 13.3206 10.625 16.6458 10.625C19.971 10.625 22.6667 13.3206 22.6667 16.6458Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#53FAFB", justifyContent: 'center', alignItems: 'center'}}
                                onPress = { () => {navigation.navigate('CreateTickets'); 
                                // setShowBlur(false)
                            } }
                            >
                                <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M8 15.5V0.5M0.5 8H15.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
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
                    showsVerticalScrollIndicator={false}>
                        <View style = {styles.pinnedStyle}>
                            <View style = {[styles.startConvBtn, {width: vw(34.72)}]}>
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
                                                    <Image source = {item.avatar}
                                                        style = {[
                                                            styles.addChatIcon, 
                                                            {
                                                                width: vw(11.1), 
                                                                height: vw(11.1), 
                                                                borderRadius: vw(5),
                                                                backgroundColor: 'transparent'
                                                                // borderWidth: vw(0.3), 
                                                                // borderColor: 'black',
                                                            }
                                                        ]}
                                                    />
                                                    <View 
                                                        style = {{
                                                            position: 'absolute',
                                                            width: vw(2),
                                                            height: vw(2),
                                                            backgroundColor: 
                                                                item.onlineState == 'notification' ? '#FCC145' 
                                                                    : item.onlineState == 'offline'? '#FF5252'
                                                                    : item.onlineState == 'online' ? '#53FAFB' 
                                                                    : 'transparent', 
                                                            borderRadius: vw(2),
                                                            right: vw(0.8),
                                                            bottom: vw(0.8)
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
                                                    item.num == 'NEW' ? 
                                                    <View style = {{borderRadius: vw(5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                        <Text style = {[styles.name, {fontSize: vw(2.8), color: '#53FAFB', textAlign: 'center', marginLeft: 0, backgroundColor: 'transparent'}]}>{item.num}</Text>
                                                    </View> 
                                                        :
                                                        <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                            <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0}]}>{item.num}</Text>
                                                        </View>                                             
                                                    }
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                        <View style = {[styles.pinnedStyle, {marginTop: vw(3.8)}]}>
                            <View style = {[styles.startConvBtn, {backgroundColor: '#202020', marginTop: vw(0)}]}>
                                <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4.25726 8.74269L0.976379 12.0236M6.18146 3.53764L5.27617 4.44293C5.20232 4.51678 5.1654 4.5537 5.12333 4.58304C5.08599 4.60908 5.04572 4.63063 5.00334 4.64726C4.95559 4.66599 4.90439 4.67623 4.80199 4.69671L2.67666 5.12177C2.12434 5.23224 1.84818 5.28747 1.71898 5.43307C1.60643 5.55992 1.55503 5.72968 1.57832 5.89766C1.60505 6.09047 1.80419 6.28962 2.20248 6.6879L6.31208 10.7975C6.71036 11.1958 6.9095 11.3949 7.10232 11.4217C7.2703 11.4449 7.44006 11.3935 7.5669 11.281C7.71251 11.1518 7.76774 10.8756 7.87821 10.3233L8.30327 8.19799C8.32375 8.09559 8.33399 8.04438 8.35272 7.99664C8.36934 7.95426 8.3909 7.91398 8.41694 7.87664C8.44628 7.83458 8.4832 7.79765 8.55705 7.72381L9.46233 6.81852C9.50955 6.77131 9.53316 6.7477 9.5591 6.72709C9.58216 6.70878 9.60657 6.69225 9.63213 6.67765C9.66091 6.66121 9.69159 6.64806 9.75296 6.62176L11.1996 6.00175C11.6217 5.82087 11.8327 5.73043 11.9286 5.58428C12.0124 5.45648 12.0424 5.30075 12.012 5.15096C11.9773 4.97967 11.815 4.81732 11.4903 4.49263L8.50735 1.5097C8.18266 1.18501 8.02031 1.02267 7.84902 0.987943C7.69922 0.957578 7.5435 0.987568 7.4157 1.07139C7.26955 1.16725 7.17911 1.37828 6.99823 1.80033L6.37822 3.24702C6.35192 3.30839 6.33877 3.33907 6.32233 3.36785C6.30773 3.39341 6.2912 3.41782 6.27289 3.44087C6.25228 3.46682 6.22867 3.49043 6.18146 3.53764Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {styles.buttonText}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;All Tickets
                                </Text>
                            </View>
                            <View style = {styles.pinArray}>
                                {
                                    allChat.map((item, index) => 
                                        <View key = {index} style = {styles.dataItem}>
                                            <View style = {styles.datas}>
                                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1)}]}>
                                                    <Image source = {item.avatar}
                                                        style = {[
                                                            styles.addChatIcon, 
                                                            {
                                                                width: vw(11.1), 
                                                                height: vw(11.1), 
                                                                borderRadius: vw(5)
                                                                // borderWidth: vw(0.3), 
                                                                // borderColor: 'black',
                                                            }
                                                        ]}
                                                    />
                                                    <View 
                                                        style = {{
                                                            position: 'absolute',
                                                            width: vw(2),
                                                            height: vw(2),
                                                            backgroundColor: 
                                                                item.onlineState == 'notification' ? '#FCC145' 
                                                                    : item.onlineState == 'offline'? '#FF5252'
                                                                    : item.onlineState == 'online' ? '#53FAFB' 
                                                                    : item.onlineState == 'out' ? '#D0D5DD'
                                                                    : 'transparent',
                                                            borderRadius: vw(2),
                                                            right: vw(0.8),
                                                            bottom: vw(0.8)
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
                                                    item.num == 'NEW' ? 
                                                    <View style = {{borderRadius: vw(5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                        <Text style = {[styles.name, {fontSize: vw(2.8), color: '#53FAFB', textAlign: 'center', marginLeft: 0, backgroundColor: 'transparent'}]}>{item.num}</Text>
                                                    </View> 
                                                        :
                                                        <View style = {{borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', paddingRight: vw(1.5), paddingLeft: vw(2),paddingTop: vw(0.3), marginLeft: vw(3)}}>
                                                            <Text style = {[styles.name, {fontSize: vw(2.8), color: 'black', textAlign: 'center', marginLeft: 0}]}>{item.num}</Text>
                                                        </View>                                             
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                            </View>
                            <View style = {{height: vw(40)}}/>
                        </View>
                    </ScrollView>
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
        width: vw(100),
        aspectRatio: 360/23,
        top: vw(17),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold'
        // padding: 10,
        // textAlign: 'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white'
    },
    userInfo: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'start',
    },
    userfont: {
        marginLeft: vw(3),
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    notification: {
        flexDirection: 'row',
        width: vw(21.1),
        aspectRatio: 76/34,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: vw(2)
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
        marginTop: vw(35),
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
        width: vw(25.83),
        height: vw(9.72),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderColor: '#323232',
        borderRadius: vw(10),
    },
    buttonText: {
        fontFamily: 'Poppins-Light',
        color: '#787878',
        fontSize: vw(2.8)
    },
    pinArray: {
        marginTop: vw(6.4),   
    },
    dataItem: {
        width: vw(90),
        height: vw(17.5),
        marginBottom: vw(2.8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: vw(5),
        borderRadius: vw(10),
        paddingLeft: vw(3),
        paddingRight: vw(3), 
        borderRadius: vw(5),
        backgroundColor: '#202020',   
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    name: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: vw(3.9),
        marginLeft: vw(3),
        // width: vw(70)
    },
    itemInfo: {
        justifyContent: 'center',
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
        backgroundColor: '#22222285',
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

export default Tickets;