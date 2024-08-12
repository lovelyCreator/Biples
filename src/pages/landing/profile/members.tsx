import React, {useState, useEffect, createRef} from 'react';
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    PanResponder,
    TouchableOpacity, 
    FlatList,
    TextInput,
    findNoneHandle,
    BackHandler,
    Modal
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard';
import CustomMemberCard from '../../../components/customMemberCard';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Members = ({navigation}) => {
    
    const statusBarHeight = getStatusBarHeight();
    const [showModals, setShowModals] = useState(false);
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const backgroundImageRef = createRef()
    const [selected, setSelected] = useState('Chat');
    const friendArray = [
        {
            id: 0,
            avatar: require('../../../../assets/images/friendAvatar2.png'),
            userName: 'Bronxatory2038',
            displayName: 'Member',
            // onlineState: true,
            msgNum: 12,
            dragged: false
        },
        {
            id: 1,
            avatar: require('../../../../assets/images/friendAvatar2.png'),
            userName: 'Bronxatory2038',
            displayName: 'Member',
            // onlineState: true,
            msgNum: 12,
            dragged: false
        },
    ];
    const memberArray = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            userName: 'Bronxatory2038',
            displayName: 'Owner',
            onlineState: false
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            userName: 'Bronxatory2038',
            displayName: 'Member',
            onlineState: false,
            dragged: false
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            userName: 'Bronxatory2038',
            displayName: 'Member',
            onlineState: false,
            dragged: false
        },
    ];
    const [friends, setFriends] = useState(friendArray);
    const [members, setMembers] = useState(memberArray);
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    handleText = (texts):[string] => {
        setText(texts);
    };
    handlePress = () => {
        navigation.navigate('Explorer');
    };
    useEffect(() => {
      const backAction = () => {
        setShowBlur(false);
  
        setTimeout(() => {
          navigation.goBack();
        }, 30); // Delay the back action by one second
  
        return true; // Prevent default behavior (i.e. exit the app)
      };
  
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
      return () => backHandler.remove();
    }, []);
    useFocusEffect(
        React.useCallback(() => {
          let timerId;
            
          if (!showBlur) {
            timerId = setTimeout(() => {
              setShowBlur(true);
            }, 500); // Adjust the delay as needed
          }
        //   console.log(showBlurs)
        //   if (showBlur) setShowblur(!showblur);
          return () => {
            clearTimeout(timerId);
          };
        }, [ showBlur,navigation])
      );
    const renderBlurView = () => {
        console.log(viewRef);
        return (
            <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    // blurRadius={1}
                    // blurType={blurType}
                    blurAmount={9}
                    downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .2)'}
                />
            </View>
        );
    }
    const navigated = () => {
        setSelected('Chat');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoChat');
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
        // navigation.navigate('Explorer')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.goBack();
        }, 30); // Adjust the delay as needed
        return () => {
        clearTimeout(timerId);
        };
    }
    const navigateMyCommunity = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('NoCommunity');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateManageFriend = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('ManageFriend');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
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
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <Modal visible={showModals} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModals(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(15)-statusBarHeight), width: vw(50)}]}>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Members'),setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Members&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Overview'),setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Overview&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('MemberPermission'),setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3), textAlign: 'center'}]}>
                                &nbsp;&nbsp;Community Settings&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = { navigated1}
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Members
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent'}]}
                            onPress = { () => 
                                setShowModals(!showModals)
                            }
                        >
                            <Svg width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1.56147 4.93104C1.25132 4.93104 0.999894 5.18247 0.999894 5.49262C0.999894 5.80277 1.25132 6.05419 1.56147 6.05419C1.87162 6.05419 2.12305 5.80277 2.12305 5.49262C2.12305 5.18247 1.87162 4.93104 1.56147 4.93104Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M1.56147 8.86208C1.25132 8.86208 0.999894 9.1135 0.999894 9.42365C0.999894 9.7338 1.25132 9.98523 1.56147 9.98523C1.87162 9.98523 2.12305 9.7338 2.12305 9.42365C2.12305 9.1135 1.87162 8.86208 1.56147 8.86208Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M1.56147 1.00001C1.25132 1.00001 0.999895 1.25143 0.999895 1.56158C0.999895 1.87173 1.25132 2.12316 1.56147 2.12316C1.87162 2.12316 2.12305 1.87173 2.12305 1.56158C2.12305 1.25143 1.87162 1.00001 1.56147 1.00001Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style = {{width: vw(90), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style = {styles.searchBar}>
                            <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="#4C4C4C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <TextInput
                                onFocus = {() => setIsFocused(true)}
                                onBlur = {() => setIsFocused(false)}
                                style = {styles.input}
                                placeholder = 'Search'
                                placeholderTextColor='#4C4C4C'
                                value = {text}
                                onChangeText = {handleText}
                                keyboardAppearance = "dark"
                                keyboardType = 'default'
                            />
                        </View>
                        <Text style = {[styles.title, {color: '#53FAFB', fontSize: vw(3.3)}]}
                            onPress = {() => {
                                setText('');
                            // navigation.navigate('SearchResultNone')
                        }}
                        >
                            Cancel
                        </Text>
                    </View>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity 
                        style = {[styles.btnStyle, {backgroundColor:'#53FAFB', width: vw(88), borderRadius: vw(5)}]}
                        onPress = {() => setInvite(true)}
                    >
                        <Svg width={vw(4.44)} height={vw(4.7)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.83516 9.66484L15.0246 1.47541M6.93467 9.92071L8.98445 15.1916C9.16503 15.6559 9.25531 15.8881 9.38541 15.9559C9.49819 16.0146 9.63254 16.0147 9.74538 15.9561C9.87556 15.8885 9.96612 15.6564 10.1472 15.1923L15.2873 2.02075C15.4508 1.60178 15.5326 1.39229 15.4879 1.25843C15.449 1.14218 15.3578 1.05095 15.2416 1.01212C15.1077 0.9674 14.8982 1.04915 14.4793 1.21265L1.30773 6.35276C0.843605 6.53388 0.611543 6.62444 0.543914 6.75462C0.485287 6.86746 0.485366 7.00181 0.544126 7.11459C0.611908 7.24469 0.844076 7.33497 1.30841 7.51555L6.57929 9.56533C6.67354 9.60199 6.72067 9.62032 6.76035 9.64862C6.79553 9.67371 6.82629 9.70447 6.85138 9.73965C6.87968 9.77933 6.89801 9.82646 6.93467 9.92071Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.headerTitle, {color:'black'}]}>
                            &nbsp;&nbsp;&nbsp;Send Friend's Invite
                        </Text>
                    </TouchableOpacity>
                    <View style = {styles.ResultTitle}>
                        <Text style = {styles.title}>
                            My Friends
                        </Text>
                        <Text style = {[styles.title, {color: '#53FAFB', fontSize: vw(3.3)}]}
                            onPress = {navigateManageFriend}
                        >
                            Manage Friend's
                        </Text>
                    </View>
                    <View style = {styles.friendData}>
                        {
                            friends.map((item, index)=>
                            <CustomFriendCard
                                key = {index}
                                avatar = {item.avatar}
                                userName = {item.userName}
                                displayName = {item.displayName}
                                onlineState = {item.onlineState}
                                msgNum = {item.msgNum}
                                friends = {friends}
                                setFriends = {setFriends}
                                id = {item.id}
                                dragged = {item.dragged}
                                navigatePress={handleFriendProfile}
                            />
                            )
                        }
                    </View>
                    <View style = {{height: vw(20.8), justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style = {styles.footerBtn}>
                            <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#787878', fontSize: vw(3.9), textAlign: 'center'}}>
                                See All Friends
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.friendData}>
                        <Text style = {[styles.title, {marginBottom: vw(2)}]}>
                            Members
                        </Text>
                        {
                            members.map((item, index)=>
                            <CustomMemberCard
                                key = {index}
                                avatar = {item.avatar}
                                userName = {item.userName}
                                displayName = {item.displayName}
                                onlineState = {item.onlineState}
                                msgNum = {item.msgNum}
                                navigatePress = {handleFriendProfile}
                            />
                            )
                        }
                    </View>
                    <View style = {{height: vw(18)}}/>
                </ScrollView>
                <View style = {[styles.footer, {position: 'absolute', overflow: 'hidden'}]}>
                    <Image source = {require('../../../../assets/images/blur.png')}
                        style={styles.imageStyle}
                        ref={backgroundImageRef}
                        />
                    {showBlur ? renderBlurView() : null}
                    
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigated2}
                    >
                        <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.50008 16.5V10.3333C6.50008 9.86662 6.50008 9.63327 6.59091 9.45501C6.67081 9.29821 6.79829 9.17072 6.95509 9.09083C7.13335 9 7.36671 9 7.83342 9H10.1668C10.6335 9 10.8668 9 11.0451 9.09083C11.2019 9.17072 11.3294 9.29821 11.4093 9.45501C11.5001 9.63327 11.5001 9.86662 11.5001 10.3333V16.5M0.666748 6.91667L8.20008 1.26667C8.48697 1.0515 8.63041 0.943924 8.78794 0.902454C8.927 0.865849 9.07317 0.865849 9.21222 0.902454C9.36976 0.943924 9.5132 1.05151 9.80008 1.26667L17.3334 6.91667M2.33342 5.66667V13.8333C2.33342 14.7668 2.33342 15.2335 2.51507 15.59C2.67486 15.9036 2.92983 16.1586 3.24343 16.3183C3.59995 16.5 4.06666 16.5 5.00008 16.5H13.0001C13.9335 16.5 14.4002 16.5 14.7567 16.3183C15.0703 16.1586 15.3253 15.9036 15.4851 15.59C15.6668 15.2335 15.6668 14.7668 15.6668 13.8333V5.66667L10.6001 1.86667C10.0263 1.43634 9.73944 1.22118 9.42436 1.13824C9.14625 1.06503 8.85392 1.06503 8.57581 1.13824C8.26073 1.22118 7.97385 1.43634 7.40008 1.86667L2.33342 5.66667Z" stroke={selected == 'Home'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Home' ? '#53FAFB' : "#9D9D9D"}]}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigateMyCommunity}
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15 13.1974C16.2132 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2502 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4336C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.6102C14.5681 8.99657 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98772 10 7.91665 10C5.84559 10 4.16665 8.32107 4.16665 6.25C4.16665 4.17893 5.84559 2.5 7.91665 2.5C9.98772 2.5 11.6667 4.17893 11.6667 6.25ZM2.13268 15.782C3.46127 13.7871 5.5578 12.5 7.91665 12.5C10.2755 12.5 12.372 13.7871 13.7006 15.782C13.9917 16.219 14.1372 16.4375 14.1205 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18528C2.5718 17.5 2.26505 17.5 2.04202 17.3313C1.86836 17.2 1.72589 16.9339 1.71285 16.7166C1.69609 16.4375 1.84162 16.219 2.13268 15.782Z" stroke={selected == 'Community'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Community' ? '#53FAFB' : "#9D9D9D"}]}>
                            Community
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigated}
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

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vw(41.1),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        backgroundColor: '#101010',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    searchBar: {
        width: vw(71.1),
        height: vw(10.83),
        backgroundColor: '#202020',
        borderRadius: vw(5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: vw(1.8),
        paddingRight: vw(1.8)
    },
    input: {
        fontFamily: 'TT Firs Neue Trial Regular',
        color: 'white',
        fontSize: vw(3.3),
        width: vw(47.5),
        marginLeft: vw(2.2),
        marginRight: vw(2.2)
    },
    speech: {
        width: vw(10.83),
        height: vw(10.83),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B1B1B',
        borderRadius: vw(5)
    },
    ResultTitle: {
        width: vw(90),
        height: vh(9.27),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white',
    },
    body: {
        width: vw(90),
        // position: 'absolute',
        marginTop: vw(47.1),
        marginBottom: vh(6),
        marginLeft: vw(5)
    },
    btnStyle: {
        flexDirection: 'row',
        borderRadius: vw(10),
        justifyContent:'center',
        alignItems: 'center',
        width: vw(75),
        marginTop: vw(4.44),
        height: vw(12.5)
    },
    friendData: {
        // paddingBottom: vw(90),
        width: vw(90),
        flexDirection: 'column',
        textAlign: 'center'
    },
    footerBtn: {
        width: vw(41.67),
        aspectRatio: 150/40,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: vw(30),
        left: 0,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        backgroundColor: '#E9E9E921',
        flexDirection: 'row'
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
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
        alignItmes: 'flex-start',
        paddingTop: vw(2),
        paddingBottom: vw(2)
    },
    modalItem: {
        marginLeft: vw(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Members;