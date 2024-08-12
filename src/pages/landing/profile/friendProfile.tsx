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

const FriendProfile = ({navigation}) => {
    
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const backgroundImageRef = createRef()
    const [selected, setSelected] = useState('Home');
    const [friendData, setFriendData] = useState({
        avatar: require('../../../../assets/images/follow2.png'),
        userName: 'Kitshuna Fowyu',
        displayName: '@KitshunaFowyu',
        online: true,
        btnName: [
            {
                name: 'Add Friend',
                avatar: <Svg width={vw(3.6)} height={vw(3.3)} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6.5 7.94444H4.025C3.25744 7.94444 2.87366 7.94444 2.56137 8.04013C1.85825 8.25558 1.30802 8.81136 1.09473 9.52159C1 9.83703 1 10.2247 1 11M10.35 11V7.66667M8.7 9.33333H12M7.875 3.5C7.875 4.88071 6.7669 6 5.4 6C4.0331 6 2.925 4.88071 2.925 3.5C2.925 2.11929 4.0331 1 5.4 1C6.7669 1 7.875 2.11929 7.875 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,
                navigationName: 'Account',
            }, {
                name: 'message',
                navigationName: 'FriendProfile',
            }
        ],
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
        { id : '1', avatarUrl: require('../../../../assets/images/card2.png'), value: '1' },
        { id : '2', avatarUrl: require('../../../../assets/images/card6.png'), value: '1' },
        { id : '3', avatarUrl: require('../../../../assets/images/card7.png'), value: '1' },
        { id : '4', avatarUrl: require('../../../../assets/images/card4.png'), value: '2' },
        { id : '5', avatarUrl: require('../../../../assets/images/card10.png'), value: '1' },
        { id : '6', avatarUrl: require('../../../../assets/images/card1.png'), value: '1' },
        { id : '7', avatarUrl: require('../../../../assets/images/card8.png'), value: '1' },
        { id : '8', avatarUrl: require('../../../../assets/images/card5.png'), value: '1' },
        { id : '9', avatarUrl: require('../../../../assets/images/card9.png'), value: '1' },
      ];
    const [nftAvatars, setNftAvatars] = useState(data);
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
            }, 300); // Adjust the delay as needed
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
        console.log(viewRef);
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
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = {navigated1 }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Friend's Profile
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: '#101010', alignItems: 'flex-end'}]}
                            // onPress = { () => 
                            //     navigation.navigate('QRProfile')
                            // }
                        >
                            <Svg width={vw(1.1)} height={vw(4.44)} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.125 7.25008C1.64174 7.25008 1.24999 7.64183 1.24999 8.12508C1.24999 8.60833 1.64174 9.00009 2.125 9.00009C2.60825 9.00009 3 8.60833 3 8.12508C3 7.64183 2.60825 7.25008 2.125 7.25008Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 13.3751C1.64174 13.3751 1.24999 13.7669 1.24999 14.2501C1.24999 14.7334 1.64174 15.1251 2.12499 15.1251C2.60825 15.1251 3 14.7334 3 14.2501C3 13.7669 2.60825 13.3751 2.125 13.3751Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 1.12504C1.64174 1.12504 1.24999 1.51679 1.24999 2.00005C1.24999 2.4833 1.64174 2.87505 2.125 2.87505C2.60825 2.87505 3 2.4833 3 2.00005C3 1.51679 2.60825 1.12504 2.125 1.12504Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    <View style = {styles.friendInfo}>
                        <View style = {styles.friend}>
                            {/* <View style = {{borderRadius: vw(11.3), overflow:'hidden'}}> */}
                            <Image
                                source = {friendData.avatar}
                                style = {styles.friendAvatar}
                            />
                            <View style = {styles.onlineState}/>
                            {/* </View> */}
                            <View style = {styles.info}>
                                <View style = {{flexDirection: 'row', alignItems:'center'}}>
                                    <Text style = {[styles.headerTitle,{fontSize: vw(5)}]}>
                                        {friendData.userName}&nbsp;
                                    </Text>
                                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                        <Path d="M5.5744 7.96406L7.16723 9.55688L8.95916 7.76495L10.7511 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                                <Text style = {[styles.text, {color: '#979797', fontFamily: 'TT Firs Neue Trial Light', fontSize: vw(3.3)}]}>
                                    {friendData.displayName}
                                </Text>
                                <View style = {styles.btnsStyle}>
                                    {
                                        friendData.btnName.map((item, index) => 
                                        <TouchableOpacity 
                                            key = {index}
                                            style = {[styles.btnStyle, {backgroundColor: index == 0? '#53FAFB' : '#202020'}]}
                                            onPress = {() => {navigation.navigate(item.navigationName);
                                                setShowBlur(false);}}
                                        >
                                            {item.avatar}
                                            <Text style = {[styles.text, {color: index == 0? 'black' : 'white'}]}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                    }
                                </View>
                            </View>
                        </View>
                        <View style = {styles.middle}>
                            <Text style = {styles.text}>
                                {friendData.text}
                            </Text>
                            <View style = {styles.joinDate}>
                                <Text style = {styles.text}>
                                    {friendData.enterDay}
                                </Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.16722 9.10501L5.43278 9.83946C4.41872 10.8535 2.7746 10.8535 1.76054 9.83946C0.746485 8.8254 0.746485 7.18128 1.76054 6.16722L2.49499 5.43278M9.10501 6.16722L9.83946 5.43278C10.8535 4.41872 10.8535 2.7746 9.83946 1.76054C8.8254 0.746485 7.18128 0.746485 6.16722 1.76054L5.43278 2.49499M3.98234 7.61765L7.61766 3.98233" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {[styles.text, {marginLeft: vw(1), color: 'white', fontFamily: 'TT Firs Neue Trial Light'}]}>
                                        Tuerp.1lsuy
                                    </Text>
                                </View>
                            </View>
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
                                        style = {[styles.btn,{backgroundColor: item.selected ? '#53FAFB10': 'transparent'}]}
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
                                        <Text style = {{
                                                fontSize: vw(3.3), 
                                                marginRight: vw(1), 
                                                color: item.selected ? 'white': '#606060',
                                                fontFamily: item.selected ? 'TT Firs Neue Trial Medium': 'TT Firs Neue Trial Light'
                                            }}
                                        >
                                            {item.mame}
                                        </Text>
                                     </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style = {styles.nftAvatar}>
                            {
                                nftAvatars.map((items, index) =>
                                    
                                        index<3 || index>5 ?
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
        backgroundColor: '#202020',
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
        marginBottom: vw(8),
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
    text: {
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(3.3),
        color: '#656565',
        width: vw(85)
    },
    friendInfo: {
        width: vw(90),
        height: vw(74.72),
        paddingTop: vw(8.33),
        paddingBottom: vw(7.22),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    friend: {
        flexDirection: 'row',
        height: vw(22.2),
        marginBottom: vw(6.7)
    },
    friendAvatar: {
        width: vw(22.2),
        height: vw(22.2),
        borderRadius: vw(15)
    },
    onlineState: {
        backgroundColor: '#53FAFB',
        width: vw(4.56),
        height: vw(4.56),
        borderRadius: vw(3),
        borderWidth: vw(0.3),
        borderColor: 'black',
        right: vw(5),
        top: vw(16)
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    btnsStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // width: vw(18.6),
        // marginLeft: vw(4),
    },
    btnStyle: {
        height: vw(8.33),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vw(2),
        paddingLeft: vw(4),
        paddingRight: vw(4),
        flexDirection: 'row',
        borderRadius: vw(10),
        justifyContent:'center',
    },
    text: {
        fontFamily : 'TT Firs Neue Trial Medium',
        fontSize: vw(2.8),
        color: '#4C4C4C'
    },
    middle: {
        flexDirection: 'column',
        height: vw(13.6),
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
        width: vw(90),
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
        marginTop: vw(6),
        marginBottom: vw(20)
    },
    item: {
        marginRight: vw(2),
        marginBottom: vw(2),
        width: vw(27.8),
        height: vw(27.8),
        borderRadius: vw(5)
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
        backgroundColor: '#22222295',
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
        top:0,
        bottom:0
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    }
});

export default FriendProfile;