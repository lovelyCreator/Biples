import React, { useState, useEffect, createRef } from 'react';
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
    Switch,
    findNodeHandle,
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
import { Icon } from 'react-native-elements';
import CustomCard from "../../../components/customCard"; 
import CustomTopCard from "../../../components/customTopcard"
import CustomRoundedButton from "../../../components/customRoundedButton"
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';
// import { backgroundColor, TouchableOpacity } from 'react-native';

const Ranking = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Community');
    const [rankingArray, setRankingArray] = useState([
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
        {
            number: 1,
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kemoutyo',
            email: '@yazidkherrati',
            percent: 23,
            sol: 182.29
        },
    ]);
    const [NFTImgArray, setNFTImgArray] = useState([
        require('../../../../assets/images/NFT1.png'),
        require('../../../../assets/images/NFT2.png'),
        require('../../../../assets/images/NFT3.png'),
    ]);
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
    useFocusEffect(
        React.useCallback(() => {
          let timerId;
          setSelected('Community');
            
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
                blurType={blurType}
                // blurRadius={10}
                downsampleFactor={10}
                overlayColor={'rgba(50, 50, 50, .2'}
            />
        );
    }
    const navigateAndAnimate = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Main');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    };
    const navigateChat = () => {
        
        setSelected('Chat')
        setShowBlur(false)
        timerId = setTimeout(() => {
        navigation.navigate('NoChat');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateHome = () => {
        
        setSelected('Home')
        setShowBlur(false)
        timerId = setTimeout(() => {
        navigation.navigate('Main');
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
    const navigateBack = () => {
        setShowBlur(false);
  
        setTimeout(() => {
          navigation.goBack();
          setSelected('Community');
        }, 300);
    }
    const handleFriendProfile = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('FriendProfile');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    return (
        <SafeAreaView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.header}>
                    <View style = {styles.userInfo}>
                        <TouchableOpacity 
                            style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                            onPress = {navigateBack}
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style = {styles.user}>
                            <Text style = {[styles.title, {fontSize: vw(5.6)}]}>
                                Ranking
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
                                // onPress = { () => {navigation.navigate('Notifications'); 
                                // setShowBlur(false)
                            // } }
                            >
                                <Svg width={vw(4.44)} height={vw(3.3)} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M0.928589 2.85714L10.3572 2.85714M10.3572 2.85714C10.3572 4.15896 11.4125 5.21429 12.7143 5.21429C14.0161 5.21429 15.0714 4.15896 15.0714 2.85714C15.0714 1.55533 14.0161 0.5 12.7143 0.5C11.4125 0.5 10.3572 1.55533 10.3572 2.85714ZM5.64287 9.14286L15.0714 9.14286M5.64287 9.14286C5.64287 10.4447 4.58755 11.5 3.28573 11.5C1.98392 11.5 0.928589 10.4447 0.928589 9.14286C0.928589 7.84104 1.98392 6.78571 3.28573 6.78571C4.58755 6.78571 5.64287 7.84104 5.64287 9.14286Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {{width: vw(90), marginTop: vw(9), padding: vw(3.3), backgroundColor: '#39393952', borderRadius: vw(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: vw(6.1)}}>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.4 4.33106C2.28519 4.32824 2.20183 4.32191 2.12687 4.30771C1.57151 4.2025 1.13737 3.78904 1.0269 3.26012C1 3.13132 1 2.97644 1 2.66667C1 2.3569 1 2.20201 1.0269 2.07321C1.13737 1.54429 1.57151 1.13083 2.12687 1.02562C2.26211 1 2.42474 1 2.75 1H13.25C13.5753 1 13.7379 1 13.8731 1.02562C14.4285 1.13083 14.8626 1.54429 14.9731 2.07321C15 2.20201 15 2.3569 15 2.66667C15 2.97644 15 3.13132 14.9731 3.26012C14.8626 3.78904 14.4285 4.2025 13.8731 4.30771C13.7982 4.32191 13.7148 4.32824 13.6 4.33106M6.6 7.66667H9.4M2.4 4.33333H13.6V9.8C13.6 10.9201 13.6 11.4802 13.3711 11.908C13.1698 12.2843 12.8485 12.5903 12.4534 12.782C12.0042 13 11.4161 13 10.24 13H5.76C4.58389 13 3.99583 13 3.54662 12.782C3.15148 12.5903 2.83022 12.2843 2.62889 11.908C2.4 11.4802 2.4 10.9201 2.4 9.8V4.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.3)}]}>Archived</Text>
                        </View>
                        <View style = {{backgroundColor: '#53FAFB', width: vw(6.94), height: vw(4.44), justifyContent: 'center', alignItems: 'center', borderRadius: vw(5)}}>
                            <Text style = {[styles.userfont, {color: 'black', fontSize: vw(2.8), marginLeft: 0}]}>23</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            rankingArray.map((item, index) =>
                                <View key ={index} style = {{width: vw(90), padding: vw(3.3), backgroundColor: '#39393953', borderRadius: vw(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: vw(2.8)}}>
                                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.3), color: 'white', marginRight: vw(2)}]}>1</Text>
                                    <TouchableOpacity onPress = {handleFriendProfile}>
                                        <Image source = {item.avatar}
                                            style = {{width: vw(7.5), height: vw(7.5)}}
                                        />
                                    </TouchableOpacity>
                                    <View style = {styles.info}>
                                        <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.3)}]}>{item.name}</Text>
                                        <Text style = {[styles.userfont, {color: '#4B4B4B', fontSize: vw(2.2)}]}>{item.email}</Text>
                                    </View>
                                </View>
                                <View style = {{backgroundColor: '#53FAFB10', width: vw(12.92), height: vw(6), justifyContent: 'center', alignItems: 'center', borderRadius: vw(5), flexDirection: 'row'}}>
                                    <Svg width={vw(2)} height={vw(1.1)} viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.04322 2.93612L3.58164 0.693843C3.73741 0.556246 3.98997 0.556246 4.14574 0.693843L6.68416 2.93612C6.83993 3.07371 6.83993 3.2968 6.68416 3.4344C6.52839 3.572 6.27584 3.572 6.12007 3.4344L3.86369 1.44127L1.60731 3.4344C1.45154 3.572 1.19899 3.572 1.04322 3.4344C0.887449 3.2968 0.887449 3.07371 1.04322 2.93612Z" fill="#50FFFF"/>
                                    </Svg>
                                    <Text style = {[styles.userfont, {color: '#53FAFB', fontSize: vw(2.8), marginLeft: 0, padding: vw(1)}]}>{item.percent}%</Text>
                                </View>
                                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Svg width={vw(3.9)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.2842 2.43087H0.647217L3.0853 0H12.7222L10.2842 2.43087ZM10.2842 10H0.647217L3.0853 7.57033H12.7222M3.0853 6.21544H12.7222L10.2842 3.78456H0.647217" fill="#50FFFF"/>
                                    </Svg>
                                    <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.9), marginLeft: vw(2)}]}>{item.sol} SOL</Text>
                                </View>
                            </View>
                        )
                        }
                        {/* <FlatList
                            data={rankingArray}
                            horizontal = {false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <View style = {{width: vw(90), padding: vw(3.3), backgroundColor: '#39393938', borderRadius: vw(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: vw(2.8)}}>
                                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.3), color: 'white', marginRight: vw(2)}]}>1</Text>
                                        
                                            <Image source = {item.avatar}
                                                style = {{width: vw(7.5), height: vw(7.5)}}
                                            />
                                        <View style = {styles.info}>
                                            <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.3)}]}>{item.name}</Text>
                                            <Text style = {[styles.userfont, {color: '#4B4B4B', fontSize: vw(2.2)}]}>{item.email}</Text>
                                        </View>
                                    </View>
                                    <View style = {{backgroundColor: '#53FAFB10', width: vw(12.92), height: vw(6), justifyContent: 'center', alignItems: 'center', borderRadius: vw(5), flexDirection: 'row'}}>
                                        <Svg width={vw(2)} height={vw(1.1)} viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.04322 2.93612L3.58164 0.693843C3.73741 0.556246 3.98997 0.556246 4.14574 0.693843L6.68416 2.93612C6.83993 3.07371 6.83993 3.2968 6.68416 3.4344C6.52839 3.572 6.27584 3.572 6.12007 3.4344L3.86369 1.44127L1.60731 3.4344C1.45154 3.572 1.19899 3.572 1.04322 3.4344C0.887449 3.2968 0.887449 3.07371 1.04322 2.93612Z" fill="#50FFFF"/>
                                        </Svg>
                                        <Text style = {[styles.userfont, {color: '#53FAFB', fontSize: vw(2.8), marginLeft: 0, padding: vw(1)}]}>{item.percent}%</Text>
                                    </View>
                                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Svg width={vw(3.9)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M10.2842 2.43087H0.647217L3.0853 0H12.7222L10.2842 2.43087ZM10.2842 10H0.647217L3.0853 7.57033H12.7222M3.0853 6.21544H12.7222L10.2842 3.78456H0.647217" fill="#50FFFF"/>
                                        </Svg>
                                        <Text style = {[styles.userfont, {color: 'white', fontSize: vw(3.9), marginLeft: vw(2)}]}>{item.sol} SOL</Text>
                                    </View>
                                </View>
                            }
                        /> */}
                        <View style = {{height: vw(20)}}/>
                    </ScrollView>
                </View>
                <View style = {[styles.footer, {position: 'absolute', overflow: 'hidden'}]}>
                    {/* <View style = {{ position: 'relative', bottom: 0, left: 0,width: vw(92.2), height: vw(30), flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', overflow: 'hidden'}}> */}
                        <Image source = {require('../../../../assets/images/blur.png')}
                            style={styles.imageStyle}
                            ref={backgroundImageRef}
                            // blurRadius = {20}
                        />
                        {showBlur ? renderBlurView() : null}
                        {/* {renderBlurView()} */}
                        <TouchableOpacity style = {styles.footerIcon}
                            onPress = {navigateHome
                            }
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
                    {/* </View> */}
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    // blurView: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    // },
    body: {
        marginTop: vw(27.5),
        marginBottom: vw(6)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white'
    },
    viewAll: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(4.44),
        color: '#898989',
    },
    backImg: {
        width: vw(100),
        height: vw(43.9),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    communities: {
        width: vw(95),
        height: vw(56.7),
        marginBottom: vw(7.5),
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: vw(5),
        marginRight: vw(0),
    },
    topSeller: {
        width: vw(62.8),
        height: vw(56,7),
        borderRadius: vw(5.6),
        overflow: 'hidden',
        marginRight: vw(2.8),
        padding: vw(3.9),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1F1F1F'
    },
    topSellerInfo: {
        width: '100%',
        height: vw(9.4),
        flexDirection: 'row',
        alignItems: 'center',
    },
    topAvatar: {
        width: vw(9.4),
        height: vw(9.4),
        position: 'relative'
    },
    itemAvatar: {
        width: vw(9.4),
        height: vw(9.4),
        borderRadius: vw(5)
    },
    topOnline: {
        position: 'absolute',
        bottom: vw(0.5),
        right: vw(0.5)
    },
    topImgs:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    itemImg: {
        width: vw(17),
        height: vw(17),
        borderRadius: vw(3),
        marginBottom: vw(1)
    },
    nftImg: {
        width: vw(27.9),
        height: vw(46.94),
        marginRight: vw(2.8)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(2.8)
    },
    footer: {
        bottom: vw(5.56),
        width: vw(92.2),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: vw(5),
        overflow: 'hidden',
        backgroundColor: '#36363690',
        position: 'absolute'
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
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
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
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: vw(92.2),
        height: vw(20)
    },
});

export default Ranking;