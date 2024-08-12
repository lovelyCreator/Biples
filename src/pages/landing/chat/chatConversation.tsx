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
    InteractionManager,
    findNodeHandle,
    BackHandler,
    TextInput
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native';r

const ChatConversation = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const [clientInfo, setClientInfo] = useState({
        avatar: require('../../../../assets/images/follow2.png'),
        name: 'Kitshuna Fowyu',
        username: '@KitshunaFowyu',
        content: 'The terms and conditions contained in this Agreement and understandings, whether oral or written.'
    });
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
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [pin, setPin] = useState(false);
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
    const onchangeText = (text) => {
        setText(text);
    }
    return(
        <SafeAreaView>
            <StatusBar backgroundColor = 'black'/>
            <View style = {styles.container}>
                <View style = {styles.chatBackStyle}>
                    <ImageBackground source = {require('../../../../assets/images/chatBackground.png')}
                        style = {styles.chatBackImg}
                    >
                        <View style = {styles.topBar}/>
                        <View style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}>
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
                                <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M5.78361 6.126C6.33364 7.27158 7.08343 8.34527 8.033 9.29484C8.98256 10.2444 10.0563 10.9942 11.2018 11.5442C11.3004 11.5915 11.3496 11.6152 11.412 11.6334C11.6335 11.6979 11.9056 11.6516 12.0932 11.5172C12.146 11.4794 12.1912 11.4342 12.2815 11.3439C12.5578 11.0676 12.696 10.9295 12.8349 10.8392C13.3587 10.4985 14.0341 10.4985 14.5579 10.8391C14.6968 10.9295 14.835 11.0676 15.1113 11.3439L15.2653 11.4979C15.6852 11.9179 15.8952 12.1279 16.0093 12.3534C16.2362 12.8019 16.2362 13.3316 16.0093 13.7801C15.8952 14.0056 15.6853 14.2156 15.2653 14.6356L15.1407 14.7602C14.7222 15.1787 14.5129 15.388 14.2284 15.5478C13.9126 15.7252 13.4223 15.8527 13.0602 15.8516C12.7338 15.8507 12.5108 15.7874 12.0647 15.6608C9.66755 14.9804 7.40552 13.6966 5.51839 11.8094C3.63125 9.92231 2.34748 7.66028 1.66708 5.26309C1.54048 4.81703 1.47717 4.594 1.4762 4.26766C1.47513 3.90554 1.60264 3.41519 1.78 3.09947C1.93983 2.81495 2.1491 2.60568 2.56764 2.18714L2.69221 2.06256C3.11219 1.64258 3.32218 1.43259 3.54771 1.31852C3.99624 1.09166 4.52592 1.09166 4.97445 1.31852C5.19997 1.43259 5.40996 1.64258 5.82995 2.06256L5.98394 2.21656C6.26023 2.49285 6.39837 2.63099 6.48868 2.7699C6.82928 3.29376 6.82928 3.9691 6.48868 4.49296C6.39837 4.63187 6.26023 4.77002 5.98395 5.0463C5.89361 5.13663 5.84844 5.1818 5.81063 5.2346C5.67628 5.42223 5.62989 5.69429 5.69447 5.91584C5.71265 5.97819 5.7363 6.02746 5.78361 6.126Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
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
                        <View style = {styles.friendsData}>
                            <Image style = {styles.avatarStyle}
                                source = {clientInfo.avatar}
                            />
                            <View style = {styles.namesInfo}>
                                <View style = {styles.nameInfo}>
                                    <Text style = {styles.headerTitle}>
                                        {clientInfo.name}&nbsp;&nbsp;
                                    </Text>
                                    <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                        <Path d="M5.57446 7.96406L7.16729 9.55688L8.95922 7.76495L10.7512 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                                <Text style = {styles.headerText}>
                                    {clientInfo.username}
                                </Text>
                            </View>
                            <Text style = {styles.contentText}>
                                {clientInfo.content}
                            </Text>
                            <TouchableOpacity style = {styles.profileBtn}>
                                <Svg width={vw(4.2)} height={vw(4.44)} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M2.82141 13.2069C3.24723 12.2036 4.24145 11.5 5.4 11.5H9.6C10.7586 11.5 11.7528 12.2036 12.1786 13.2069M10.3 6.25C10.3 7.7964 9.0464 9.05 7.5 9.05C5.9536 9.05 4.7 7.7964 4.7 6.25C4.7 4.7036 5.9536 3.45 7.5 3.45C9.0464 3.45 10.3 4.7036 10.3 6.25ZM14.5 8C14.5 11.866 11.366 15 7.5 15C3.63401 15 0.5 11.866 0.5 8C0.5 4.13401 3.63401 1 7.5 1C11.366 1 14.5 4.13401 14.5 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', color: 'black', fontSize: vw(2.8)}}>
                                    &nbsp;&nbsp;View Profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style = {styles.footer}>
                        <View style = {[styles.msgInput, {borderColor: isFocused ? '#53FAFB' : '#4C4C4C'}]}>
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
                </View>
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
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white',
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
        fontFamily: 'TT Firs Neue Trial Light',
        fontSize: vw(3.3),
        color: '#989898',
        textAlign: 'center',
    },
    body: {
        width: vw(100),
        marginTop: vw(60),
        // flexDirection: 'column',
        // alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Poppins-Light',
        color: '#787878',
        fontSize: vw(2.8)
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
        marginTop: vw(20),
        borderTopRightRadius: vw(5),
        borderTopLeftRadius: vw(5),
        overflow: 'hidden',
        height: vh(100)
    },
    chatBackImg: {
        height: '100%'
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
    friendsData: {
        width: vw(100),
        height: vw(66.1),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarStyle: {
        width: vw(22.2),
        height: vw(22.2),
        borderRadius: vw(15)
    },
    contentText: {
        width: vw(62),
        flexWrap: 'wrap',
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(2.8),
        color: '#5D5D5D',
        textAlign: 'center'
    },
    nameInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileBtn: {
        width: vw(27.8),
        height: vw(8.3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vw(5)
    },
    footer: {
        position: 'absolute',
        bottom: vw(2),
        width: vw(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    msgInput: {
        width: vw(90),
        aspectRatio: 320/40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: '#101010',
        paddingHorizontal: vw(5.6),
        color: '#4C4C4C',
        marginTop: vw(3.6),
        marginBottom: vw(3.6),
    },
    input: {
      fontFamily: 'TT Firs Neue Trial Regular',
      paddingLeft: vw(3),
      paddingRight: vw(3),
      flex: 1,
    },
    msgTool: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: vw(11.7)
    },
    pinModal: {
        width: vw(90),
        height: vw(65),
        backgroundColor: '#5A5A5A15',
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
        backgroundColor: '#53FAFB06',
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
});

export default ChatConversation;