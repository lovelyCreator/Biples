import React, { useState, useEffect, useRef, createRef } from 'react'
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
    TextInput,
    BackHandler,
    Animated,
    Dimensions,
    PanResponder,
    Touchable
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../../components/customImageButton'
import CustomInputBox from "../../../components/customInputBox";
import CustomFollow from '../../../components/customFollow'
import { BlurView } from '@react-native-community/blur';
import CustomSwitchButton from "../../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';

const CELL_COUNT = 5;

const MyCommunity = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
    const [screenY, setScreenY] = useState(new Animated.Value(0));
    const [screenX, setScreenX] = useState(new Animated.Value(0));
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Community');
    const [isFocused, setIsFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);
    const [msg, setMsg] = useState('');
    const [pin, setPin] = useState(false);
    const [text, setText] = useState('');
    const [selectedAccount, setSelectedAccount] = useState([]);
    const windowWidth = useWindowDimensions().width;
    const [allView, setAllView] = useState(0);
    const [channel, setChannel] = useState([
        {
            name: 'Voice Channel',
            selected: false,
            mute: true,
            img: <Svg width={vw(3.3)} height={vw(3.9)} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11 6.5V8C11 10.8995 8.76142 13.25 6 13.25M1 6.5V8C1 10.8995 3.23858 13.25 6 13.25M6 13.25V15.5M3.14286 15.5H8.85714M6 10.25C4.81653 10.25 3.85714 9.24264 3.85714 8V2.75C3.85714 1.50736 4.81653 0.5 6 0.5C7.18347 0.5 8.14286 1.50736 8.14286 2.75V8C8.14286 9.24264 7.18347 10.25 6 10.25Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>,            
            back: '#53FAFB20',
            data: [
                {
                    name: 'Hashtag Topic @#987',
                    selected: true,
                }, 
                {
                    name: 'Hashtag Topic @#987',
                    selected: false
                }, 
                {
                    name: 'Hashtag Topic @#987',
                    selected: false
                }
            ]
        },
        {
            name: "Text's Channel",
            selected: false,
            mute: false,
            back: '#53FAFB20',
            img: <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.22222 1.77778H4.73333C3.42654 1.77778 2.77315 1.77778 2.27402 2.0321C1.83498 2.2558 1.47802 2.61276 1.25432 3.0518C1 3.55093 1 4.20432 1 5.51111V11.2667C1 12.5735 1 13.2269 1.25432 13.726C1.47802 14.165 1.83498 14.522 2.27402 14.7457C2.77315 15 3.42654 15 4.73333 15H10.4889C11.7957 15 12.4491 15 12.9482 14.7457C13.3872 14.522 13.7442 14.165 13.9679 13.726C14.2222 13.2269 14.2222 12.5735 14.2222 11.2667V8.77778M8.77778 11.8889H4.11111M10.3333 8.77778H4.11111M14.3166 1.68342C15.2278 2.59464 15.2278 4.07203 14.3166 4.98325C13.4054 5.89447 11.928 5.89447 11.0168 4.98325C10.1055 4.07203 10.1055 2.59464 11.0168 1.68342C11.928 0.772194 13.4054 0.772194 14.3166 1.68342Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>,
            // data: ['Hashtag Topic @#987', 'Hashtag Topic @#987', 'Hashtag Topic @#987']
        },
        {
            name: 'Private Channel',
            selected: false,
            mute: false,
            back: '#202020',
            img: <Svg width={vw(5.3)} height={vw(5.6)} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.5 19C14.4706 19 18.5 14.9706 18.5 10C18.5 5.02944 14.4706 1 9.5 1C4.52944 1 0.5 5.02944 0.5 10C0.5 14.9706 4.52944 19 9.5 19Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M11.0584 11.0752C10.9949 10.8847 10.9632 10.7895 10.9648 10.7116C10.9666 10.6297 10.9775 10.5867 11.0152 10.514C11.0511 10.4448 11.147 10.3555 11.3389 10.177C11.8686 9.68406 12.2 8.98072 12.2 8.2C12.2 6.70883 10.9912 5.5 9.5 5.5C8.00883 5.5 6.8 6.70883 6.8 8.2C6.8 8.98072 7.13137 9.68405 7.66113 10.177C7.85296 10.3555 7.94888 10.4448 7.98475 10.514C8.02248 10.5867 8.03344 10.6297 8.03518 10.7116C8.03683 10.7895 8.00508 10.8847 7.94159 11.0752L7.11589 13.5523C7.00924 13.8723 6.95592 14.0323 6.98789 14.1596C7.01588 14.2711 7.08546 14.3676 7.18235 14.4294C7.29305 14.5 7.46168 14.5 7.79895 14.5H11.2011C11.5383 14.5 11.707 14.5 11.8176 14.4294C11.9145 14.3676 11.9841 14.2711 12.0121 14.1596C12.0441 14.0323 11.9908 13.8723 11.8841 13.5523L11.0584 11.0752Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>,            
            // data: ['Hashtag Topic @#987', 'Hashtag Topic @#987', 'Hashtag Topic @#987']
        },
    ]);
    const [accouts, setAccounts] = useState([
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        },
    ]);
    const handleText = (texts):[string] => {
        setText(texts);
    };
    const onchangeText = (texts):[string] => {
        setMsg(texts);
    };
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
    const navigateMain = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoCommunity');
          }, 300); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateHome = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('Main');
        }, 300); // Adjust the delay as needed
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
    // const handleChatView = (item) => {
    // }
    // const handleChatHidden = () => {
    //     setAllView(0);
    //     Animated.timing(screenY, {
    //     toValue: 0 * screenHegiht,
    //     duration: 50,
    //     useNativeDriver: true,
    //     }).start();        
    // };
    
    // // const [screenY, setScreenY] = useState(new Animated.Value(1));
    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: (evt, gestureState) => {
    //             // console.log('onMoveShouldSetPanResponder', evt, gestureState);
    //             return Math.abs(gestureState.dx) > 2;
    //         },
    //         onPanResponderRelease: (evt, gestureState) => {
    //             let num =0
    //             // console.log('onPanResponderRelease', evt, gestureState);
    //             if (gestureState.dx > 0){
    //                 console.log('left');
    //                 Animated.timing(screenX, {
    //                     toValue: 0,
    //                     duration: 250,
    //                     useNativeDriver: true,
    //                 }).start();
    //             }
    //             else {
    //                 console.log('right')
    //                 // setAllView(1)
    //                 Animated.timing(screenX, {
    //                     toValue: -1*screenWidth,
    //                     duration: 250,
    //                     useNativeDriver: true,
    //                 }).start();
    //             }
    //         },
    //     })
    // ).current;

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.titleBar}>
                    <TouchableOpacity 
                        style = {[styles.prevButton, {backgroundColor: 'transparent'}]}
                        onPress = {navigateMain
                        }
                    >
                        <Svg width={windowWidth*0.02} height={0.033*windowWidth} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontSize: vw(4.4)}]}>
                        My Communitites
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style={styles.searchBar}>
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
                            <TouchableOpacity style={styles.speech}
                                onPress={() =>{
                                    navigation.navigate('SpeechInput');
                                    setShowBlur(false);}
                                }
                            >
                                <Svg width={vw(2.8)} height={vw(3)} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M9 5.5V6C9 8.20914 7.20914 10 5 10C2.79086 10 1 8.20914 1 6V5.5M5 8C3.89543 8 3 7.10457 3 6V3C3 1.89543 3.89543 1 5 1C6.10457 1 7 1.89543 7 3V6C7 7.10457 6.10457 8 5 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        </View> 
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: '#53FAFB'}]}
                            // onPress = { () => 
                            //     navigation.navigate('MainSearch')
                            // }
                        >
                            <Svg width={vw(4.44)} height={vw(3.33)} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M0.928589 2.85714L10.3572 2.85714M10.3572 2.85714C10.3572 4.15896 11.4125 5.21429 12.7143 5.21429C14.0161 5.21429 15.0714 4.15896 15.0714 2.85714C15.0714 1.55533 14.0161 0.5 12.7143 0.5C11.4125 0.5 10.3572 1.55533 10.3572 2.85714ZM5.64287 9.14286L15.0714 9.14286M5.64287 9.14286C5.64287 10.4447 4.58755 11.5 3.28573 11.5C1.98392 11.5 0.928589 10.4447 0.928589 9.14286C0.928589 7.84104 1.98392 6.78571 3.28573 6.78571C4.58755 6.78571 5.64287 7.84104 5.64287 9.14286Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.ResultTitle}>
                        <Text style = {styles.titles}>
                            Result
                        </Text>
                        <Text style = {[styles.titles, {color: '#53FAFB', fontSize: vw(3.3)}]}
                            // onPress = {() => {setFilter([]); navigation.navigate('SearchResultNone')}}
                        >
                            Clear All
                        </Text>
                    </View>
                    <Text style = {[styles.text, {width: vw(90),marginTop: vw(4)}]}>
                        105 Items Found
                    </Text>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        accouts.map((item, index) => 
                        <TouchableOpacity
                            key = {index}
                            style={[styles.button,]}
                            // onPress = {() => {
                            //     setAllView(1);
                            //     setSelectedAccount(item);
                            //     Animated.timing(screenY, {
                            //         toValue: -1.07*screenHegiht,
                            //         duration: 50,
                            //         useNativeDriver: true,
                            //     }).start();
                            //     console.log(selectedAccount);
                            // }}
                        >
                            <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress = {handleFriendProfile}>
                                <Image 
                                    source = {item.avatar}
                                    style = {styles.avatars}
                                />
                                </TouchableOpacity>
                                <View style = {styles.avatarInfo}>
                                    <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                                        {item.name}
                                    </Text>
                                    <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: '#565656'}}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style = {{ width: vw(20.8), aspectRatio: 75/30, borderRadius: vw(5), backgroundColor: '#53FAFB20', justifyContent: 'center', alignItems: 'center' }}
                            
                            >
                                <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: '#53FAFB'}}
                                    // onPress = {onPress}
                                >
                                    Join
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        )
                    }
                    <View style = {{width: vw(100), alignItems: 'center'}}>
                        <TouchableOpacity style = {styles.footerBtn}>
                            <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#787878', fontSize: vw(3.9), textAlign: 'center'}}>
                                See More
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{height: vw(25)}}/>
                </ScrollView>
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
                            onPress = {() => {
                                setSelected('Community');
                                // navigation.navigate('GroupAccount');
                                // setShowBlur(false)
                            }}
                        >
                            <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15 13.1974C16.2132 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2502 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4336C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.6102C14.5681 8.99657 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98772 10 7.91665 10C5.84559 10 4.16665 8.32107 4.16665 6.25C4.16665 4.17893 5.84559 2.5 7.91665 2.5C9.98772 2.5 11.6667 4.17893 11.6667 6.25ZM2.13268 15.782C3.46127 13.7871 5.5578 12.5 7.91665 12.5C10.2755 12.5 12.372 13.7871 13.7006 15.782C13.9917 16.219 14.1372 16.4375 14.1205 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18528C2.5718 17.5 2.26505 17.5 2.04202 17.3313C1.86836 17.2 1.72589 16.9339 1.71285 16.7166C1.69609 16.4375 1.84162 16.219 2.13268 15.782Z" stroke={selected == 'Community'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Community' ? '#53FAFB' : "#9D9D9D"}]}>
                                Community
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.footerIcon}
                            onPress = {() => {
                                setSelected('Chat')
                                navigation.navigate('NoChat');
                                setShowBlur(false)
                            }}
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
            {/* <Animated.View style = {[styles.account, {transform: [{ translateY: screenY }], position: 'absolute'}]}>
                <Animated.View 
                    {...panResponder.panHandlers} 
                    style =  {{flexDirection: 'row', width: vw(100),transform: [{ translateX: screenX }], height: vh(100)}}
                >
                    <View style = {{width: vw(100)}}>
                        <TouchableOpacity 
                            style = {{width: vw(10), alignItems: 'flex-start',marginLeft: vw(5), marginTop: vw(5)}}
                            onPress = {handleChatHidden}
                        >
                            <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.5 5L7.5 10L12.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                            // onPress = {handleChatHidden}
                        >
                            <View style = {styles.datas}>
                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                    {selectedAccount.avatar && <Image source = {selectedAccount.avatar}
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
                                    />}
                                </View>
                                <View style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
                                    <Text style = {styles.name}>
                                        {selectedAccount.name}
                                    </Text>
                                    <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', marginLeft: vw(3)}]}>
                                        {selectedAccount.text}
                                    </Text>
                                </View>
                            </View>
                            <View style = {[styles.itemInfo,{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: vw(21.1)}]}>
                                <TouchableOpacity 
                                    // onPress = {handleCall}
                                >
                                <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M5.78361 6.126C6.33364 7.27158 7.08343 8.34527 8.033 9.29484C8.98256 10.2444 10.0563 10.9942 11.2018 11.5442C11.3004 11.5915 11.3496 11.6152 11.412 11.6334C11.6335 11.6979 11.9056 11.6516 12.0932 11.5172C12.146 11.4794 12.1912 11.4342 12.2815 11.3439C12.5578 11.0676 12.696 10.9295 12.8349 10.8392C13.3587 10.4985 14.0341 10.4985 14.5579 10.8391C14.6968 10.9295 14.835 11.0676 15.1113 11.3439L15.2653 11.4979C15.6852 11.9179 15.8952 12.1279 16.0093 12.3534C16.2362 12.8019 16.2362 13.3316 16.0093 13.7801C15.8952 14.0056 15.6853 14.2156 15.2653 14.6356L15.1407 14.7602C14.7222 15.1787 14.5129 15.388 14.2284 15.5478C13.9126 15.7252 13.4223 15.8527 13.0602 15.8516C12.7338 15.8507 12.5108 15.7874 12.0647 15.6608C9.66755 14.9804 7.40552 13.6966 5.51839 11.8094C3.63125 9.92231 2.34748 7.66028 1.66708 5.26309C1.54048 4.81703 1.47717 4.594 1.4762 4.26766C1.47513 3.90554 1.60264 3.41519 1.78 3.09947C1.93983 2.81495 2.1491 2.60568 2.56764 2.18714L2.69221 2.06256C3.11219 1.64258 3.32218 1.43259 3.54771 1.31852C3.99624 1.09166 4.52592 1.09166 4.97445 1.31852C5.19997 1.43259 5.40996 1.64258 5.82995 2.06256L5.98394 2.21656C6.26023 2.49285 6.39837 2.63099 6.48868 2.7699C6.82928 3.29376 6.82928 3.9691 6.48868 4.49296C6.39837 4.63187 6.26023 4.77002 5.98395 5.0463C5.89361 5.13663 5.84844 5.1818 5.81063 5.2346C5.67628 5.42223 5.62989 5.69429 5.69447 5.91584C5.71265 5.97819 5.7363 6.02746 5.78361 6.126Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                </TouchableOpacity>
                                <Svg width={vw(6.1)} height={vw(4.2)} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M21.1794 4.43137C21.1794 3.82555 21.1794 3.52265 21.0596 3.38238C20.9557 3.26068 20.7998 3.19609 20.6402 3.20865C20.4563 3.22312 20.2421 3.43731 19.8138 3.86569L16.1794 7.5L19.8138 11.1343C20.2421 11.5627 20.4563 11.7769 20.6402 11.7914C20.7998 11.8039 20.9557 11.7393 21.0596 11.6176C21.1794 11.4774 21.1794 11.1744 21.1794 10.5686V4.43137Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.17944 5.3C1.17944 3.61984 1.17944 2.77976 1.50642 2.13803C1.79404 1.57354 2.25299 1.1146 2.81747 0.82698C3.45921 0.5 4.29929 0.5 5.97944 0.5H11.3794C13.0596 0.5 13.8997 0.5 14.5414 0.82698C15.1059 1.1146 15.5648 1.57354 15.8525 2.13803C16.1794 2.77976 16.1794 3.61984 16.1794 5.3V9.7C16.1794 11.3802 16.1794 12.2202 15.8525 12.862C15.5648 13.4265 15.1059 13.8854 14.5414 14.173C13.8997 14.5 13.0596 14.5 11.3794 14.5H5.97944C4.29929 14.5 3.45921 14.5 2.81747 14.173C2.25299 13.8854 1.79404 13.4265 1.50642 12.862C1.17944 12.2202 1.17944 11.3802 1.17944 9.7V5.3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <TouchableOpacity onPress = {() => {navigation.navigate('GroupChat'); setShowBlur(false)}}>
                                    <Svg width={vw(1.1)} height={vw(3.6)} viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.channels}>
                            <View style = {{width: vw(100)}}>
                                <Text style = {[styles.maintitle, {fontSize: vw(5.6), marginLeft: vw(5), marginTop: vw(10)}]}>
                                    All Channels
                                </Text>
                                <View style = {styles.channelStyle}>
                                    {
                                        channel.map((item, index) => 
                                            <View key = {index}>
                                            <View style = {styles.customChannel}>
                                                <TouchableOpacity style = {[styles.channelBox, {width: item.mute? vw(56.7) : vw(69.1), backgroundColor: item.back}]}
                                                    // onPress = { () => {
                                                    //     if (item.name =='Private Channel) {
                                                    //     setShowBlur(false);
                                                    //     let timerId;
                                                    //     timerId = setTimeout(() => {
                                                    //         navigation.navigate('MemberPermission');
                                                    //     }, 300); // Adjust the delay as needed
                                                    //     return () => {
                                                    //     clearTimeout(timerId);
                                                    //     };}}
                                                    // }
                                                >
                                                    <View style ={styles.boxinter}>
                                                        {item.img}
                                                        <Text style = {[styles.subtitle, {marginTop: 0, marginLeft: vw(3), color: 'white', fontSize: vw(3.9)}]}>
                                                            {item.name}
                                                        </Text>
                                                    </View>
                                                    {
                                                        item.selected ?
                                                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                        :
                                                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    }
                                                </TouchableOpacity>
                                                {item.mute && 
                                                    <View style = {{width: vw(9.42), height: vw(9.42), borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Svg width={vw(4.4)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M15 9.17053L10.8 4.82947M10.8 9.17053L15 4.82947M6.34402 12.5235L4.12804 10.2331C4.00697 10.108 3.94644 10.0454 3.8758 10.0007C3.81317 9.96099 3.74489 9.93176 3.67346 9.91403C3.5929 9.89404 3.50729 9.89404 3.33608 9.89404H2.12C1.72796 9.89404 1.53194 9.89404 1.38221 9.81519C1.25049 9.74582 1.14341 9.63514 1.0763 9.499C1 9.34423 1 9.14163 1 8.73643V5.26357C1 4.85837 1 4.65577 1.0763 4.501C1.14341 4.36486 1.25049 4.25418 1.38221 4.18481C1.53194 4.10596 1.72796 4.10596 2.12 4.10596H3.33608C3.50729 4.10596 3.5929 4.10596 3.67346 4.08597C3.74489 4.06824 3.81317 4.03901 3.8758 3.99934C3.94644 3.9546 4.00697 3.89203 4.12804 3.7669L6.34402 1.47649C6.64388 1.16656 6.79382 1.01159 6.92254 1.00112C7.03423 0.992032 7.14338 1.03876 7.21614 1.12682C7.3 1.2283 7.3 1.44746 7.3 1.88577V12.1142C7.3 12.5525 7.3 12.7717 7.21614 12.8732C7.14338 12.9612 7.03423 13.008 6.92254 12.9989C6.79382 12.9884 6.64388 12.8334 6.34402 12.5235Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    </View>
                                                }
                                            </View>
                                            {
                                                item.data && item.data.map((items, indexes) =>
                                                    <View key = {indexes} style = {[styles.elements, {marginTop: indexes == 0 ? vw(5) : vw(3)}]}>
                                                        {
                                                            items.selected ? <View style = {styles.select}/>
                                                            :
                                                            <View style = {{width: vw(1.4)}}/>
                                                        }
                                                        <View style = {[styles.itemElement, {}]}>
                                                            <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <Path d="M7.5 1V1.65M1.65 7.5H1M3.275 3.275L2.88494 2.88494M11.725 3.275L12.1152 2.88494M14 7.5H13.35M6.2 8.475H8.8M7.5 8.475V11.725M9.775 10.6681C10.7591 9.9601 11.4 8.80489 11.4 7.5C11.4 5.34609 9.65391 3.6 7.5 3.6C5.34609 3.6 3.6 5.34609 3.6 7.5C3.6 8.80489 4.24086 9.9601 5.225 10.6681V11.92C5.225 12.6481 5.225 13.0121 5.36669 13.2902C5.49133 13.5348 5.6902 13.7337 5.93481 13.8583C6.2129 14 6.57693 14 7.305 14H7.695C8.42307 14 8.7871 14 9.06519 13.8583C9.3098 13.7337 9.50867 13.5348 9.63331 13.2902C9.775 13.0121 9.775 12.6481 9.775 11.92V10.6681Z" stroke="#8C8C8C" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </Svg>

                                                            <Text style = {[styles.subtitle, {marginTop: 0, marginLeft: vw(2)}]}>
                                                                {items.name}
                                                            </Text>
                                                        </View>
                                                        <Svg width={vw(1.1)} height={vw(3.6)} viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M1.6875 5.8125C1.3078 5.8125 1 6.1203 1 6.5C1 6.8797 1.3078 7.1875 1.6875 7.1875C2.0672 7.1875 2.375 6.8797 2.375 6.5C2.375 6.1203 2.0672 5.8125 1.6875 5.8125Z" stroke="#9D9D9D" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <Path d="M1.6875 10.625C1.3078 10.625 1 10.9328 1 11.3125C1 11.6922 1.3078 12 1.6875 12C2.0672 12 2.375 11.6922 2.375 11.3125C2.375 10.9328 2.0672 10.625 1.6875 10.625Z" stroke="#9D9D9D" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <Path d="M1.6875 1C1.30781 1 1 1.3078 1 1.6875C1 2.0672 1.30781 2.375 1.6875 2.375C2.0672 2.375 2.375 2.0672 2.375 1.6875C2.375 1.3078 2.0672 1 1.6875 1Z" stroke="#9D9D9D" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </Svg>
                                                    </View>
                                                )
                                            }
                                            </View>
                                        )
                                    }
                                </View>
                                <TouchableOpacity style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                                    // onPress = {handleChatHidden}
                                >
                                    <View style = {styles.datas}>
                                        <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                            {selectedAccount.avatar && <Image source = {require('../../../../assets/images/avatar.jpg')}
                                                style = {[
                                                    styles.addChatIcon, 
                                                    {
                                                        width: vw(11.1), 
                                                        height: vw(11.1), 
                                                        borderRadius: vw(7),
                                                        backgroundColor: 'transparent'
                                                        // borderWidth: vw(0.3), 
                                                        // borderColor: 'black',
                                                    }
                                                ]}
                                            />}
                                        </View>
                                        <View style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', marginLeft: vw(3)}]}>
                                                Good Morning!
                                            </Text>
                                            <Text style = {styles.name}>
                                                Yazid KHERRA
                                            </Text>
                                        </View>
                                    </View>
                                    <View style = {[styles.itemInfo,{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: vw(42.1)}]}>
                                        
                                        <TouchableOpacity style = {{ width: vw(20.8), aspectRatio: 75/30, borderRadius: vw(5), backgroundColor: '#53FAFB20', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: '#53FAFB'}}
                                                // onPress = {onPress}
                                            >
                                                Leave
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style = {styles.topBar}/>
                        <TouchableOpacity style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                            // onPress = {handleChatHidden}
                        >
                            <View style = {styles.datas}>
                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                    {selectedAccount.avatar && <Image source = {selectedAccount.avatar}
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
                                    />}
                                </View>
                                <View style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
                                    <Text style = {styles.name}>
                                        {selectedAccount.name}
                                    </Text>
                                    <Text style = {[styles.name, {fontSize: vw(2.8), color: '#787878', marginLeft: vw(3)}]}>
                                        {selectedAccount.text}
                                    </Text>
                                </View>
                            </View>
                            <View style = {[styles.itemInfo,{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: vw(21.1)}]}>
                                <TouchableOpacity 
                                    // onPress = {handleCall}
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
                        </TouchableOpacity>
                        <View style = {styles.channels}>
                            <View style = {{width: vw(100)}}>
                                <View style = {styles.friendsData}>
                                    {selectedAccount.avatar &&<Image style = {styles.avatarStyle}
                                        source = {selectedAccount.avatar}
                                    />}
                                    <View style = {styles.namesInfo}>
                                        <View style = {styles.nameInfo}>
                                            <Text style = {styles.headerTitle}>
                                                {'Kitshuna Fowyu'}&nbsp;&nbsp;
                                            </Text>
                                        </View>
                                        <Text style = {styles.headerText}>
                                            {selectedAccount.name}
                                        </Text>
                                    </View>
                                    <Text style = {styles.contentText}>
                                        {'The terms and conditions contained in this Agreement and understandings, whether oral or written.'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style = {{height: vh(50), width:vw(100)}}/>
                    </View>
                </Animated.View>
                        <View style = {styles.sendMsgBar}>
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
                                        onFocus={() => setMessageFocused(true)}
                                        onBlur={() => setMessageFocused(false)}
                                        style={[styles.input, { color: 'white', fontSize: vw(3.3) }]}
                                        placeholder='Type your message'
                                        placeholderTextColor='#3F3F3F'
                                        value={msg}
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
                        </View>
            </Animated.View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
    },
    titleBar: {
        position: 'absolute',
        paddingTop: vw(17.5),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    title: {
        width: vw(100),
        paddingLeft: vw(6.7),
        flexDirection: 'column',
        paddingBottom: vw(7.5),
        paddingTop: vw(8.9)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(6.7),
        fontFamily: 'TT Firs Neue Trial Medium'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        marginTop: vw(2.2),
        color: '#707070',
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial ExtraLight'
        // padding: 10,
        // textAlign: 'center'
    },
    footerBtn: {
        width: vw(41.7),
        borderRadius: vw(10),
        aspectRatio: 150/45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
        borderWidth: vw(0.3),
        borderColor: '#323232'
    },
    member: {
        width: vw(100),
        height: vw(70.83),
        paddingBottom: vw(6.7),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: vw(17.8),
        height: vw(17.7),
        marginBottom: vw(4),
        padding: vw(0.5),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    permission: {
        width: vw(100),
        height: vw(58.33),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: vw(14.72)
    },
    privBtn: {
        width: vw(90),
        flexDirection: 'row',
        aspectRatio: 318/45,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
        borderRadius: vw(5),
        backgroundColor: '#202020',
    },
    privInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    online: {
        width: vw(3.6),
        height: vw(3.6),
        borderRadius: vw(3),
        borderColor: 'black',
        borderWidth: vw(0.5),
    },
    switches: {
        flexDirection: 'row',
        marginTop: vw(2)
    },
    switch: {
        width: vw(8.3),
        height: vw(4.44),
        borderRadius: vw(2.3),
        borderWidth: vw(0.3),
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(2)
    },
    switchOn: {
        backgroundColor: 'transparent',
        borderColor: '#53FAFB',
    },
    switchOff: {
        backgroundColor: 'transparent',
        borderColor: '#363636',
    },
    thumb: {
        width: vw(3.3),
        height: vw(3.3),
        borderRadius: vw(2),
        backgroundColor: '#53FAFB',
    },
    thumbOn: {
        transform: [{ translateX: vw(2) }],
        backgroundColor: '#53FAFB'
    },
    thumbOff: {
        transform: [{ translateX: 0 - vw(2)}],
        backgroundColor: '#363636'
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
        marginLeft: vw(3.9)
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
    ftBtn: {
        width: vw(41.67),
        aspectRatio: 150/40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderRadius: vw(10),
        borderColor: '#323232',
    },
    header: {
        position: 'absolute',
        top: vw(28),
        width: '100%',
        height: vh(18.2),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
        width: vw(9.44),
        height: vw(9.44),
        borderRadius: vw(5),
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    searchBar: {
        width: vw(66.7),
        height: vw(9.44),
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
        width: vw(5.83),
        height: vw(5.83),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB',
        borderRadius: vw(3)
    },
    ResultTitle: {
        marginTop: vw(4),
        width: vw(90),
        height: vh(2.94),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    titles: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white',
    },
    text: {
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(2.78),
        color: '#656565',
    },
    body: {
        marginTop: vw(66),
    marginBottom: vw(6)
    },
    button: {
        borderRadius: vw(5),
        flexDirection: 'row',
        width: vw(90),
        aspectRatio: 320/64,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: vw(2.8),
        paddingLeft: vw(0),
        paddingRight: vw(0),
        marginBottom: vw(2.8),
        marginLeft: vw(5)
    },
    avatars: {
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8),
        borderRadius: vw(2)
    },
    account: {
        width: vw(100),
        height:vw(200),
        backgroundColor: '#131313',
        top: vh(115),
        borderTopLeftRadius: vw(5),
        borderTopRightRadius: vw(5),
        // alignItems: 'center',
    },
    dataItem: {
        width: vw(90),
        height: vw(11.1),
        marginBottom: vw(5.6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: vw(5)
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: vw(3.9),
        marginLeft: vw(3),
        // width: vw(70)
    },
    channelStyle: {
        flexDirection: 'column',
        width: vw(69.1),
        marginLeft: vw(5)
    },
    customChannel: {
        width: vw(69.1),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vw(5),
        justifyContent: 'space-between'
    },
    channelBox: {
        flexDirection: 'row',
        paddingLeft: vw(3),
        paddingRight: vw(3),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: vw(10),
        height: vw(11.1)
    },
    boxinter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    elements: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: vw(5),
        marginRight: vw(5),
        justifyContent: 'space-between',
    },
    select: {
        width: vw(1.4),
        height: vw(1.4),
        borderRadius: vw(1),
        backgroundColor: '#53FAFB'
    },
    itemElement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:vw(2),
        width: vw(50.3),
        height: vw(9.7),
        borderRadius: vw(5),
        borderWidth: vw(0.3),
        borderColor: '#323232'
    },
    channels: {
        flexDirection: 'row'
    },
    sendMsgBar: {
        marginLeft: vw(5),
        width: vw(90),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vw(10),
        position: 'absolute',
        bottom: vw(20)
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
    friendsData: {
        marginTop: vw(10),
        width: vw(100),
        height: vw(66.1),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarStyle: {
        width: vw(22.2),
        height: vw(22.2),
        borderRadius: vw(4)
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
    headerText: {
        fontFamily: 'TT Firs Neue Trial Light',
        fontSize: vw(3.3),
        color: '#989898',
        textAlign: 'center',
    },
    topBar: {
        width: vw(22.2), 
        height: vw(0.9),
        backgroundColor: '#505050', 
        marginLeft: vw(38.9), 
        marginTop: vw(5),
        borderRadius: vw(1),
    },
});

export default MyCommunity;