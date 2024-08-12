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
    findNodeHandle,
    InteractionManager,
    BackHandler
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'
import { ListItem } from 'react-native-elements';

const Account = ({navigation}) => {
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const backgroundImageRef = createRef()
    
    const [selected, setSelected] = useState('Home');
    const [friendData, setFriendData] = useState({
        avatar: require('../../../../assets/images/avatar.jpg'),
        userName: 'Yazid KHERRATI',
        displayName: '@yazidkherrati',
        online: true,
        btnName: 
            {
                name: '      Connect your wallet',
                avatar:
                    <Svg width={vw(5.6)} height={vw(4.7)} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M19.375 5.21875H0.625M0.625 8.96875H3.95001C4.45644 8.96875 4.70965 8.96875 4.9545 9.0124C5.17183 9.05114 5.38385 9.11533 5.58616 9.20365C5.8141 9.30315 6.02479 9.44361 6.44616 9.72452L6.99134 10.088C7.41271 10.3689 7.6234 10.5094 7.85134 10.6089C8.05366 10.6972 8.26567 10.7614 8.483 10.8001C8.72785 10.8438 8.98106 10.8438 9.48749 10.8438H10.5125C11.0189 10.8438 11.2722 10.8438 11.517 10.8001C11.7343 10.7614 11.9463 10.6972 12.1487 10.6089C12.3766 10.5094 12.5873 10.3689 13.0087 10.088L13.5538 9.72452C13.9752 9.44361 14.1859 9.30315 14.4138 9.20365C14.6162 9.11533 14.8282 9.05114 15.0455 9.0124C15.2903 8.96875 15.5436 8.96875 16.05 8.96875H19.375M0.625 4L0.625 13C0.625 14.0501 0.625 14.5751 0.829363 14.9762C1.00913 15.329 1.29596 15.6159 1.64877 15.7956C2.04985 16 2.5749 16 3.625 16L16.375 16C17.4251 16 17.9502 16 18.3512 15.7956C18.704 15.6159 18.9909 15.329 19.1706 14.9762C19.375 14.5751 19.375 14.0501 19.375 13V4C19.375 2.9499 19.375 2.42485 19.1706 2.02377C18.9909 1.67097 18.704 1.38413 18.3512 1.20436C17.9502 1 17.4251 1 16.375 1L3.625 1C2.5749 1 2.04985 1 1.64877 1.20436C1.29596 1.38413 1.00913 1.67096 0.829363 2.02377C0.625 2.42485 0.625 2.9499 0.625 4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
            },
        text: 'The terms and conditions contained in this Agreement and understandings, whether oral or written.',
        enterDay: 'Member since 2019',
        personalData: [
            {
                name: 'Postes',
                num: 1298
            },
            {
                name: 'Saved',
                num: '90.4K'
            },
            {
                name: 'Followers',
                num: '481.3K'
            },
            {
                name: 'Likes',
                num: '211.1k'
            },
        ]
    });
    const [sortBtn, setSortBtn] = useState([
        {
            mame: 'Items',
            selected: true,
        },
        {
            mame: 'Saved',
            selected: false,
        },
        {
            mame: 'Activity',
            selected: false,
        },
        {
            mame: 'Groups',
            selected: false,
        },
    ])
    const data = [
        { id : '1', avatarUrl: require('../../../../assets/images/card2.png') },
        { id : '2', avatarUrl: require('../../../../assets/images/card6.png') },
        { id : '3', avatarUrl: require('../../../../assets/images/card7.png') },
        { id : '4', avatarUrl: require('../../../../assets/images/card4.png') },
        { id : '5', avatarUrl: require('../../../../assets/images/card10.png') },
        { id : '6', avatarUrl: require('../../../../assets/images/card1.png') },
    ];
    const [nftAvatars, setNftAvatars] = useState(data);
    const friendArray = [
        { left: 10.55, avatarUrl: require('../../../../assets/images/follow2.png') },
        { left: 21.1, avatarUrl: require('../../../../assets/images/card5.png') },
        { left: 31.65, avatarUrl: require('../../../../assets/images/avatar(1).png') },
        { left: 42.2, avatarUrl: require('../../../../assets/images/card10.png') },
        { left: 53.75, avatarUrl: require('../../../../assets/images/card5.png') },
    ];
    const [friendsAvatars, setFriendsAvatars] = useState(friendArray);
    const [wallet, setWallet] = useState(false);
    const [invite, setInvite] = useState(false);
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
            }, 1000); // Adjust the delay as needed
          }
    
          return () => {
            clearTimeout(timerId);
          };
        }, [showBlur])
      );
    // useEffect(() => {
    //     const switchPage = setTimeout(() => {
    //         // console.log('time is ended');
    //         // navigation.navigate('Loading');
    //         setShowBlur(true);
    //     }, 3); // 10 seconds in milliseconds
    
    //     return () => clearTimeout(switchPage);
    //   }, [navigation]);
    const renderBlurView = () => {
        // console.log(viewRef);
        return (
            // <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    // blurRadius={1}
                    // blurType={blurType}
                    blurAmount={9}
                    downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .2)'}
                />
            // </View>
        );
    }
    const navigated = () => {
        setWallet(false);
        setInvite(false);
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.goBack();
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
                navigation.navigate('NoChat');
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
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    {/* <View style = {{backgroundColor: '#101F29', width: vw(33.9), height: vw(33.9), borderRadius: vw(20), top: vw(18), left: vw(15), position: 'absolute', overflow: 'hidden'}}>
                        <Image source = {require('../../../../assets/images/blurref.png')}
                            style={{backgroundColor: '#101F29', width: vw(33.9), height: vw(33.9)}}
                            ref={backgroundImageRef}
                        />
                        {showBlur ? renderBlurView() : null}
                    </View>
                    <View style = {{backgroundColor: '#101F29', width: vw(22.8), height: vw(22.8), borderRadius: vw(20), top: vw(50), right: vw(13), position: 'absolute', overflow: 'hidden'}}>
                        <Image source = {require('../../../../assets/images/blurref.png')}
                            style={{backgroundColor: '#101F29', width: vw(22.8), height: vw(22.8)}}
                            ref={backgroundImageRef}
                        />
                        {showBlur ? renderBlurView() : null}
                    </View> */}
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = { navigated}
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Accounts
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent', alignItems: 'flex-end'}]}
                            onPress = { () => 
                                {navigation.navigate('Settings');
                                setShowBlur(false);}
                            }
                        >
                            <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M7.82924 16.1426L8.31628 17.2379C8.46106 17.564 8.69734 17.841 8.99647 18.0355C9.29559 18.2299 9.6447 18.3334 10.0015 18.3333C10.3582 18.3334 10.7073 18.2299 11.0065 18.0355C11.3056 17.841 11.5419 17.564 11.6866 17.2379L12.1737 16.1426C12.3471 15.7539 12.6387 15.4298 13.007 15.2166C13.3777 15.0028 13.8065 14.9118 14.232 14.9564L15.4237 15.0833C15.7784 15.1208 16.1364 15.0546 16.4543 14.8927C16.7721 14.7309 17.0362 14.4802 17.2144 14.1713C17.3929 13.8625 17.4779 13.5085 17.4592 13.1524C17.4405 12.7962 17.3188 12.4531 17.1089 12.1648L16.4033 11.1953C16.1521 10.8476 16.0178 10.429 16.02 9.99996C16.0199 9.57212 16.1554 9.15525 16.407 8.80922L17.1126 7.83977C17.3225 7.55142 17.4442 7.20835 17.4629 6.85219C17.4816 6.49602 17.3966 6.14208 17.2181 5.83329C17.0399 5.52432 16.7758 5.2737 16.458 5.11182C16.1401 4.94993 15.7821 4.88373 15.4274 4.92126L14.2357 5.04811C13.8102 5.0928 13.3814 5.00173 13.0107 4.78792C12.6417 4.5735 12.35 4.24776 12.1774 3.85737L11.6866 2.762C11.5419 2.43594 11.3056 2.15889 11.0065 1.96446C10.7073 1.77003 10.3582 1.66657 10.0015 1.66663C9.6447 1.66657 9.29559 1.77003 8.99647 1.96446C8.69734 2.15889 8.46106 2.43594 8.31628 2.762L7.82924 3.85737C7.65668 4.24776 7.36497 4.5735 6.99591 4.78792C6.62526 5.00173 6.19647 5.0928 5.77091 5.04811L4.57554 4.92126C4.22081 4.88373 3.86282 4.94993 3.54497 5.11182C3.22711 5.2737 2.96305 5.52432 2.7848 5.83329C2.60632 6.14208 2.52128 6.49602 2.54002 6.85219C2.55876 7.20835 2.68046 7.55142 2.89035 7.83977L3.59591 8.80922C3.84753 9.15525 3.98302 9.57212 3.98295 9.99996C3.98302 10.4278 3.84753 10.8447 3.59591 11.1907L2.89035 12.1601C2.68046 12.4485 2.55876 12.7916 2.54002 13.1477C2.52128 13.5039 2.60632 13.8578 2.7848 14.1666C2.96323 14.4754 3.22732 14.7259 3.54513 14.8878C3.86294 15.0496 4.22084 15.1159 4.57554 15.0787L5.76721 14.9518C6.19276 14.9071 6.62155 14.9982 6.99221 15.212C7.36265 15.4258 7.65571 15.7516 7.82924 16.1426Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M9.99998 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99996C12.5 8.61925 11.3807 7.49996 9.99998 7.49996C8.61926 7.49996 7.49998 8.61925 7.49998 9.99996C7.49998 11.3807 8.61926 12.5 9.99998 12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    <View style = {styles.friendInfo}>
                        <View style = {styles.friend}>
                            <View style = {styles.avatarborder}>
                                <Image
                                    source = {friendData.avatar}
                                    style = {styles.friendAvatar}
                                />
                            </View>
                        </View>
                        <View style = {styles.middle}>
                            <View style = {styles.info}>
                                <View style = {{flexDirection: 'row', alignItems:'center', justifyContent: 'center',}}>
                                    <Text style = {[styles.headerTitle,{fontSize: vw(5)}]}>
                                        {friendData.userName}&nbsp;
                                    </Text>
                                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                        <Path d="M5.5744 7.96406L7.16723 9.55688L8.95916 7.76495L10.7511 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                                <Text style = {[styles.text, {color: '#494949', textAlign: 'center', fontSize: vw(3.3)}]}>
                                    {friendData.displayName}
                                </Text>
                            </View>
                            <Text style = {[styles.text, {textAlign: 'center', marginTop: vw(3)}]}>
                                {friendData.text}
                            </Text>
                            <TouchableOpacity 
                                style = {[styles.btnStyle, {backgroundColor: wallet ? '#53FAFB10' : '#202020', marginLeft: vw(5)}]}
                                onPress = {() => setWallet(!wallet)}
                            >
                                {friendData.btnName.avatar}
                                <Text style = {[styles.headerTitle, {color:'white', fontSize: wallet? vw(3.3) : vw(4.44) }]}>
                                    {
                                        wallet ?
                                        '  920xUwuyebxjHyweuwbx0182  '
                                        :
                                        friendData.btnName.name
                                    }
                                </Text>
                                {
                                    wallet ?
                                    <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M2.525 8.15C2.01246 8.15 1.7562 8.15 1.55405 8.06627C1.28452 7.95462 1.07038 7.74048 0.958733 7.47095C0.875 7.2688 0.875 7.01254 0.875 6.5V2.76C0.875 2.14394 0.875 1.83591 0.994893 1.60061C1.10035 1.39363 1.26863 1.22535 1.47561 1.11989C1.71091 1 2.01894 1 2.635 1H6.375C6.88754 1 7.1438 1 7.34595 1.08373C7.61548 1.19538 7.82962 1.40952 7.94127 1.67905C8.025 1.8812 8.025 2.13746 8.025 2.65M6.485 12H10.115C10.7311 12 11.0391 12 11.2744 11.8801C11.4814 11.7746 11.6496 11.6064 11.7551 11.3994C11.875 11.1641 11.875 10.8561 11.875 10.24V6.61C11.875 5.99394 11.875 5.68591 11.7551 5.45061C11.6496 5.24363 11.4814 5.07535 11.2744 4.96989C11.0391 4.85 10.7311 4.85 10.115 4.85H6.485C5.86894 4.85 5.56091 4.85 5.32561 4.96989C5.11863 5.07535 4.95035 5.24363 4.84489 5.45061C4.725 5.68591 4.725 5.99394 4.725 6.61V10.24C4.725 10.8561 4.725 11.1641 4.84489 11.3994C4.95035 11.6064 5.11863 11.7746 5.32561 11.8801C5.56091 12 5.86894 12 6.485 12Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    :
                                    null
                                }
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.friendFooter}>
                            {
                                friendData.personalData.map((item, index) => 
                                    <View key = {index} style = {[styles.personalInfo, {borderRightColor: index == 3? 'black' : '#4C4C4C'}]}>
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3)}]}>
                                            {item.num}
                                        </Text>
                                        <Text style = {[styles.text, {fontSize: vw(2)}]}>
                                            {item.name}
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                    <View style = {styles.avatarData}>
                        <View style = {styles.sortbtn}>
                            {
                                sortBtn.map((item, index) => 
                                    <TouchableOpacity 
                                        key = {index} 
                                        style = {[styles.btn,{backgroundColor: item.selected ? '#53FAFB10': '#101010'}]}
                                        onPress={() => 
                                            setSortBtn(prevBtn => {
                                                const newBtn = [...prevBtn];
                                                for (i = 0; i< sortBtn.length; i++){
                                                    newBtn[i].selected = false;
                                                }
                                                newBtn[index].selected = !(newBtn[index].selected);
                                        // console.log(newBtn);
                                                return newBtn;
                                            })
                                        }
                                    >
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3)}]}>
                                            {item.mame}
                                        </Text>
                                     </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style = {styles.nftAvatar}>
                            {
                                nftAvatars.map((items, index) =>
                                    
                                        index<3?
                                            <Image source = {items.avatarUrl}
                                                style = {styles.item}
                                                key = {index}
                                            />
                                            :
                                            index == 3 ? 
                                            <Image source = {items.avatarUrl}
                                                style = {[styles.item, {width: vw(57.6), height: vw(57.6)}]}
                                                key = {index}
                                            />
                                            :
                                            index == 4 ?
                                            <View style = {{flexDirection: 'column', width: vw(27.8), height: vw(55.6), marginRight: vw(2), marginBottom: vw(2)}}
                                                key = {index}
                                            >
                                                <Image source = {items.avatarUrl}
                                                    style = {styles.item}
                                                />
                                                <Image source = {nftAvatars[index+1].avatarUrl}
                                                    style = {styles.item}
                                                />
                                            </View>
                                            :
                                            null
                                    
                                )
                            }
                        </View>
                    </View>
                        {
                            invite ? 
                    <View style = {[styles.myfriends, {paddingTop: vw(5), paddingBottom: vw(15.6)}]}>
                                <TouchableOpacity 
                                    style = {[styles.btnStyle, {backgroundColor:'#202020', width: vw(88), borderRadius: vw(5)}]}
                                // onPress = {}
                                >
                                    <Svg width={vw(4.44)} height={vw(4.7)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.83516 9.66484L15.0246 1.47541M6.93467 9.92071L8.98445 15.1916C9.16503 15.6559 9.25531 15.8881 9.38541 15.9559C9.49819 16.0146 9.63254 16.0147 9.74538 15.9561C9.87556 15.8885 9.96612 15.6564 10.1472 15.1923L15.2873 2.02075C15.4508 1.60178 15.5326 1.39229 15.4879 1.25843C15.449 1.14218 15.3578 1.05095 15.2416 1.01212C15.1077 0.9674 14.8982 1.04915 14.4793 1.21265L1.30773 6.35276C0.843605 6.53388 0.611543 6.62444 0.543914 6.75462C0.485287 6.86746 0.485366 7.00181 0.544126 7.11459C0.611908 7.24469 0.844076 7.33497 1.30841 7.51555L6.57929 9.56533C6.67354 9.60199 6.72067 9.62032 6.76035 9.64862C6.79553 9.67371 6.82629 9.70447 6.85138 9.73965C6.87968 9.77933 6.89801 9.82646 6.93467 9.92071Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {[styles.headerTitle, {color:'white'}]}>
                                        &nbsp;&nbsp;&nbsp;Share NFTs Profile
                                    </Text>
                                </TouchableOpacity>
                                <View style = {styles.myfriendsTitle}>
                                    <Text style = {[styles.headerTitle, {fontSize: vw(4.44)}]}>
                                        My Friends
                                    </Text>
                                    <Text style = {[styles.text, {fontSize: vw(3.33)}]}
                                        onPress = {() => {navigation.navigate('FriendSearch');
                                        setShowBlur(false);}}
                                    >
                                        View all
                                    </Text>
                                </View>
                                <View style = {styles.myFriendsArray}>
                                    <View style = {styles.backAvatar}>
                                        <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path opacity="0.5" d="M8.5 1V16M1 8.5H16" stroke="#6A6A6A" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </View>
                                    <View style = {styles.avatarArray}>
                                        {
                                            friendArray.map((item, index) => 
                                                <Image
                                                    key ={index} 
                                                    source = {item.avatarUrl}
                                                    style = {{width: vw(12.5), height: vw(12.5), borderRadius: vw(6.5), position: 'absolute', left: vw(item.left)}}
                                                />
                                            )
                                        }
                                    </View>
                                    <Text style = {[styles.headerTitle, {fontSize: vw(3.9), width: vw(13.9), flexWrap: 'wrap'}]}>
                                        +239 Friends
                                    </Text>
                                </View>
                            </View>
                            :
                            <View style = {styles.myfriends}>
                                <View style = {styles.myfriendsTitle}>
                                    <Text style = {[styles.headerTitle, {fontSize: vw(4.44)}]}>
                                        My Friends
                                    </Text>
                                    <Text style = {[styles.text, {fontSize: vw(3.33)}]}
                                        onPress = {() => {navigation.navigate('FriendSearch');
                                        setShowBlur(false);}}
                                    >
                                        View all
                                    </Text>
                                </View>
                                <View style = {styles.myFriendsArray}>
                                    <View style = {styles.backAvatar}>
                                        <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path opacity="0.5" d="M8.5 1V16M1 8.5H16" stroke="#6A6A6A" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </View>
                                    <View style = {styles.avatarArray}>
                                        {
                                            friendArray.map((item, index) => 
                                                <Image
                                                    key ={index} 
                                                    source = {item.avatarUrl}
                                                    style = {{width: vw(12.5), height: vw(12.5), borderRadius: vw(6.5), position: 'absolute', left: vw(item.left)}}
                                                />
                                            )
                                        }
                                    </View>
                                    <Text style = {[styles.headerTitle, {fontSize: vw(3.9), width: vw(13.9), flexWrap: 'wrap'}]}>
                                        +239 Friends
                                    </Text>
                                </View>
                                <TouchableOpacity 
                                        style = {[styles.btnStyle, {backgroundColor:'#53FAFB', width: vw(88)}]}
                                        onPress = {() => setInvite(true)}
                                    >
                                        <Svg width={vw(4.44)} height={vw(4.7)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M6.83516 9.66484L15.0246 1.47541M6.93467 9.92071L8.98445 15.1916C9.16503 15.6559 9.25531 15.8881 9.38541 15.9559C9.49819 16.0146 9.63254 16.0147 9.74538 15.9561C9.87556 15.8885 9.96612 15.6564 10.1472 15.1923L15.2873 2.02075C15.4508 1.60178 15.5326 1.39229 15.4879 1.25843C15.449 1.14218 15.3578 1.05095 15.2416 1.01212C15.1077 0.9674 14.8982 1.04915 14.4793 1.21265L1.30773 6.35276C0.843605 6.53388 0.611543 6.62444 0.543914 6.75462C0.485287 6.86746 0.485366 7.00181 0.544126 7.11459C0.611908 7.24469 0.844076 7.33497 1.30841 7.51555L6.57929 9.56533C6.67354 9.60199 6.72067 9.62032 6.76035 9.64862C6.79553 9.67371 6.82629 9.70447 6.85138 9.73965C6.87968 9.77933 6.89801 9.82646 6.93467 9.92071Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        <Text style = {[styles.headerTitle, {color:'black'}]}>
                                            &nbsp;&nbsp;&nbsp;Send Friend's Invite
                                        </Text>
                                </TouchableOpacity>
                            </View>
                        }
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
                        onPress = {navigated1}
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
        height: vw(28.9),
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
        backgroundColor: '#131313',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    body: {
        width: vw(100),
        // position: 'absolute',
        marginTop: vw(28.1),
        marginBottom: vw(6),
        paddingLeft: vw(7)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5.6),
        color: 'white',
    },
    foundResult: {
        width: vw(80),
        // marginLeft: vw(5),
        height: vh(24.2),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: vw(20)
    },
    friendInfo: {
        position: 'relative',
        width: vw(90),
        height: vw(94.72),
        paddingTop: vw(3.11),
        paddingBottom: vw(7.22),
        flexDirection: 'column',
        justifyContent: 'space-between',
        // overflow: 'hidden'
    },
    friend: {
        flexDirection: 'column',
        height: vw(22.2),
    alignItems: 'center'
    },
    avatarborder: {width: vw(25.3), 
        height: vw(25.3), 
        backgroundColor: '#131313', 
        borderWidth: vw(1), 
        borderColor: '#53FAFB', 
        borderRadius: vw(15), 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    friendAvatar: {
        width: vw(22),
        height: vw(22),
        borderRadius: vw(15)
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    btnStyle: {
        flexDirection: 'row',
        borderRadius: vw(4.2),
        justifyContent:'center',
        alignItems: 'center',
        width: vw(75),
        marginTop: vw(4.44),
        height: vw(12.5)
    },
    text: {
        fontFamily : 'TT Firs Neue Trial Medium',
        fontSize: vw(2.8),
        color: '#4C4C4C'
    },
    middle: {
        flexDirection: 'column',
        height: vw(39.16),
        width: vw(90),
        justifyContent: 'space-betwen',

    },
    joinDate: {
        flexDirection: 'row',
        marginTop: vw(1),
        width: vw(60),
        justifyContent: 'space-between',
    },
    friendFooter: {
        flexDirection: 'row',
    },
    personalInfo: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: vw(7),
        paddingLeft: vw(7),
        borderRightWidth: 2, 
        borderRightColor: '#4C4C4C'
    },
    avatarData: {
        marginTop: vw(0)
    },
    sortbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: vw(20.83),
        height: vw(9.4),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    nftAvatar: {
        width: vw(90),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: vw(6)
    },
    item: {
        marginRight: vw(2),
        marginBottom: vw(2),
        width: vw(27.8),
        height: vw(27.8),
        borderRadius: vw(5)
    },
    myfriends: {
        height: vw(66.4),
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: vw(11.4),
        paddingBottom: vw(9.2),
        marginBottom: vw(20)
    },
    myfriendsTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(88)
    },
    myFriendsArray: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: vw(88)
    },
    backAvatar: {
        width: vw(12.5),
        height: vw(12.5),
        borderRadius: vw(6.5),
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarArray: {
        position: 'relative',
        // left: vw(12.5),
        width: vw(40),
        bottom: vw(6.5),
        right: vw(18)
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
        height: vw(40),
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

export default Account;