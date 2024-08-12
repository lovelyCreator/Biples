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
    Touchable, 
    Modal
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle, ClipPath, Defs, Rect } from 'react-native-svg';
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

const CommunityEmpty = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const scrollY = new Animated.Value(0);
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
    const [showModal, setShowModal] = useState(false);
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
    const [selectedAccount, setSelectedAccount] = useState(
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: '@KitshunaFowyu',
            text: '121,9k Items – 23,9K Active',
        });
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
        {
            name: 'Create Channel',
            selected: false,
            mute: false,
            back: '#202020',
            img: <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M8 15.5V0.5M0.5 8H15.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
            ,            
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
    const [navi, setNavi] = useState(0);
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
    // const navigateAndAnimate = () => {
    //     setShowBlur(false);
    //     let timerId;
    //     timerId = setTimeout(() => {
    //     navigation.navigate('Main');
    //       }, 30); // Adjust the delay as needed
    //       return () => {
    //         clearTimeout(timerId);
    //       };
    // };
    // const navigateMain = () => {
    //     setSelected('Community');
    //     // setShowBlur(false);
    //     // let timerId;
    //     // timerId = setTimeout(() => {
    //     //     navigation.navigate('NoCommunity');
    //     //   }, 300); // Adjust the delay as needed
    //     //   return () => {
    //     //     clearTimeout(timerId);
    //     //   };
    // }
    // const navigateHome = () => {
    //     setShowBlur(false);
    //     let timerId;
    //     timerId = setTimeout(() => {
    //         navigation.navigate('Main');
    //     }, 300); // Adjust the delay as needed
    //     return () => {
    //     clearTimeout(timerId);
    //     };
    // }
    const handleChatView = (item) => {
    }
    const handleChatHidden = () => {
        // navigation.navigate('Tickets')
    };
    
    let num =0
    // const [screenY, setScreenY] = useState(new Animated.Value(1));
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dx) > 2;
            },
            onPanResponderRelease: (evt, gestureState) => {
                // console.log('onPanResponderRelease', evt, gestureState);
                if (gestureState.dx > 0){
                    if (navi >0) {
                        setNavi(navi-1);
                        num = num -1;
                    }
                    else (num =0)
                    console.log(num);
                    Animated.timing(screenX, {
                        toValue: 0,
                        duration: 250,
                        useNativeDriver: true,
                    }).start();
                }
                else {
                    setNavi(navi+1)
                    num = num+1
                    if (num >1) num =num
                    console.log(num)
                    // setAllView(1)
                    Animated.timing(screenX, {
                        toValue: -1*screenWidth,
                        duration: 250,
                        useNativeDriver: true,
                    }).start();
                }
                if (num > 1) {
                    navigation.navigate('MainNFTs')
                }
            },
        })
    ).current;

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
    return (
        <View style = {styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <Modal visible={showModal} transparent={true}>
                <TouchableOpacity style={styles.modalContainer}
                    onPress = {() => setShowModal(false)}
                >
                <StatusBar translucent backgroundColor = '#00000090'/>
                    <View style = {[styles.modal, {marginTop: (vw(23))}]}>
                        <View style = {styles.modalItem}>
                            <Svg width={vw(3.3)} height={vw(3.6)} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M4.12948 1.12023C4.67755 0.71894 5.32833 0.5 6 0.5C6.88406 0.5 7.7319 0.879285 8.35702 1.55442C8.98214 2.22955 9.33333 3.14522 9.33333 4.1C9.33333 5.36046 9.48344 6.35073 9.69356 7.11945M2.81037 3.05434C2.71592 3.39036 2.66667 3.74244 2.66667 4.1C2.66667 5.95411 2.23359 7.22358 1.74981 8.06325C1.34174 8.77153 1.1377 9.12566 1.14518 9.22446C1.15346 9.33384 1.17492 9.37556 1.25654 9.44095C1.33025 9.5 1.66255 9.5 2.32714 9.5H8.77778M4.5301 11.9C4.92184 12.2734 5.43642 12.5 6 12.5C6.56358 12.5 7.07816 12.2734 7.4699 11.9M11 11.9L1 1.1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                            &nbsp;&nbsp;Unfollow&nbsp;&nbsp;
                            </Text>
                        </View>
                        <TouchableOpacity style = {styles.modalItem}
                            onPress = {() => navigation.navigate('Tickets')}
                        >
                            <Svg width={vw(3.9)} height={vw(3.1)} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M5.8 3V2.375M5.8 5.8125V5.1875M5.8 8.625V8M2.92 0.5H11.08C11.7521 0.5 12.0881 0.5 12.3448 0.636242C12.5706 0.756084 12.7542 0.947309 12.8692 1.18251C13 1.4499 13 1.79993 13 2.5V3.3125C11.8402 3.3125 10.9 4.29188 10.9 5.5C10.9 6.70812 11.8402 7.6875 13 7.6875V8.5C13 9.20007 13 9.5501 12.8692 9.81749C12.7542 10.0527 12.5706 10.2439 12.3448 10.3638C12.0881 10.5 11.7521 10.5 11.08 10.5H2.92C2.24794 10.5 1.91191 10.5 1.65521 10.3638C1.42942 10.2439 1.24584 10.0527 1.13079 9.81749C1 9.5501 1 9.20007 1 8.5V7.6875C2.1598 7.6875 3.1 6.70812 3.1 5.5C3.1 4.29188 2.1598 3.3125 1 3.3125V2.5C1 1.79993 1 1.4499 1.13079 1.18251C1.24584 0.947309 1.42942 0.756084 1.65521 0.636242C1.91191 0.5 2.24794 0.5 2.92 0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                            &nbsp;&nbsp;Open Ticket&nbsp;&nbsp;
                            </Text>
                        </TouchableOpacity>
                        <View style = {styles.modalItem}>
                            <Svg width={vw(3.6)} height={vw(2.8)} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6.5 4.11258V6.33429M6.5 8.556H6.50536M5.75797 1.2753L1.35039 9.16605C1.10592 9.60372 0.983683 9.82256 1.00175 10.0022C1.01751 10.1588 1.0967 10.3012 1.2196 10.3938C1.36052 10.5 1.60449 10.5 2.09242 10.5H10.9076C11.3955 10.5 11.6395 10.5 11.7804 10.3938C11.9033 10.3012 11.9825 10.1588 11.9982 10.0022C12.0163 9.82256 11.8941 9.60372 11.6496 9.16605L7.24203 1.2753C6.99843 0.839197 6.87663 0.621146 6.71773 0.547911C6.57912 0.48403 6.42088 0.48403 6.28227 0.547911C6.12337 0.621146 6.00157 0.839197 5.75797 1.2753Z" stroke="#FF5252" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.text, {color:'#FF5252', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                            &nbsp;&nbsp;Report&nbsp;&nbsp;
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Animated.View style = {[styles.account, ]}>
                <Animated.View 
                    {...panResponder.panHandlers} 
                    style =  {{flexDirection: 'row', width: vw(100),transform: [{ translateX: screenX }], height: vh(100)}}
                >
                    <View >
                        <View style = {styles.topBar}/>
                        <TouchableOpacity style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                            onPress = {handleChatHidden}
                        >
                            <View style = {styles.datas}>
                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                    {selectedAccount.avatar && 
                                        <TouchableOpacity onPress = {() => navigation.navigate('FriendProfile')}>
                                            <Image source = {selectedAccount.avatar}
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
                                    }
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
                                <TouchableOpacity onPress = {() => { setShowModal(!showModal)}}>
                                <Svg width="4" height="13" viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.channels}>
                            <View style = {{width: vw(100)}}>
                                <View style = {styles.friendsData}>
                                    {selectedAccount.avatar &&
                                        <TouchableOpacity onPress = {() => navigation.navigate('FriendProfile')}>
                                            <Image style = {styles.avatarStyle}
                                            source = {selectedAccount.avatar}
                                        />
                                        </TouchableOpacity>
                                    }
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
                    <View style = {{width: vw(100)}}
                    >
                        <TouchableOpacity 
                            style = {{width: vw(10), alignItems: 'flex-start',marginLeft: vw(5), marginTop: vw(5)}}
                            // onPress = {handleChatHidden}
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
                                    {selectedAccount.avatar && 
                                        <TouchableOpacity onPress = {() => navigation.navigate('FriendProfile')}>
                                            <Image source = {selectedAccount.avatar}
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
                                        }
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
                                <TouchableOpacity onPress = {() => { setShowModal(!showModal)}}>
                                    <Svg width={vw(1.1)} height={vw(3.6)} viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style ={{flexDirection: 'row', justifyContent: 'space-between', alginItems: 'flex-end'}}>
                            <ScrollView style = {styles.channels}
                                contentContainerStyle={{ flexGrow: 1 }}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                                    { useNativeDriver: true }
                                )}
                                scrollEventThrottle={16}
                                showsVerticalScrollIndicator = {false}
                            >
                                {/* <View style = {{width: vw(70)}}>
                                    <Text style = {[styles.maintitle, {fontSize: vw(5.6), marginLeft: vw(5), marginTop: vw(10)}]}>
                                        MarketPlace
                                    </Text>
                                    <View style = {styles.channelStyle}>
                                        <View style = {styles.customChannel}>
                                            <TouchableOpacity style = {[styles.channelBox, {width: vw(69.1), backgroundColor: '#53FAFB10'}]}
                                                onPress = { () => {
                                                    if (item.name =='Create Channel') {
                                                        navigation.navigate('Details')
                                                    };}}
                                            >
                                                <View style ={styles.boxinter}>
                                                    <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M18.5 10.4143L10.9059 2.82019C10.387 2.30134 10.1276 2.04191 9.82485 1.85639C9.55644 1.6919 9.2638 1.57069 8.95769 1.4972C8.61243 1.41431 8.24554 1.41431 7.51177 1.41431L3.5 1.41431M0.5 8.11431L0.5 10.0888C0.5 10.578 0.5 10.8226 0.55526 11.0528C0.604254 11.2568 0.685062 11.4519 0.79472 11.6309C0.918403 11.8327 1.09136 12.0057 1.43726 12.3516L9.23726 20.1516C10.0293 20.9436 10.4253 21.3396 10.882 21.488C11.2837 21.6185 11.7163 21.6185 12.118 21.488C12.5747 21.3396 12.9707 20.9436 13.7627 20.1516L16.2373 17.677C17.0293 16.885 17.4253 16.489 17.5737 16.0323C17.7042 15.6307 17.7042 15.198 17.5737 14.7963C17.4253 14.3396 17.0293 13.9436 16.2373 13.1516L8.93726 5.85157C8.59136 5.50566 8.4184 5.33271 8.21657 5.20903C8.03763 5.09937 7.84254 5.01856 7.63846 4.96957C7.40829 4.91431 7.1637 4.91431 6.67452 4.91431H3.7C2.5799 4.91431 2.01984 4.91431 1.59202 5.13229C1.2157 5.32404 0.909734 5.63 0.717987 6.00633C0.5 6.43415 0.5 6.9942 0.5 8.11431Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                    <Text style = {[styles.subtitle, {marginTop: 0, marginLeft: vw(3), color: 'white', fontSize: vw(3.9)}]}>
                                                        MarketPlace
                                                    </Text>
                                                </View>
                                                <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </Svg>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View> */}
                                <View style = {{width: vw(70)}}>
                                    <Text style = {[styles.maintitle, {fontSize: vw(5.6), marginLeft: vw(5)}]}>
                                        All Channels
                                    </Text>
                                    <View style = {styles.channelStyle}>
                                        {
                                            channel.map((item, index) => 
                                                <View key = {index}>
                                                <View style = {styles.customChannel}>
                                                    <TouchableOpacity style = {[styles.channelBox, {width: item.mute? vw(56.7) : vw(69.1), backgroundColor: item.back}]}
                                                        onPress = { () => {
                                                            if (item.name =='Create Channel') {
                                                                navigation.navigate('CommunityInfoRegister')
                                                            };}}
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
                                    <TouchableOpacity style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(4.05), marginBottom: vw(5.8)}]}
                                        // onPress = {handleChatHidden}
                                    >
                                        <View style = {styles.datas}>
                                            <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                                {selectedAccount.avatar && 
                                                <TouchableOpacity onPress = {() => navigation.navigate('FriendProfile')}>
                                                    <Image source = {require('../../../../assets/images/avatar.jpg')}
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
                                                    />
                                                </TouchableOpacity>
                                                }
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
                                {/* <View style = {{height: vw(500)}}/> */}
                            </ScrollView>
                            <View style = {{width: vw(13.33), height: vw(125.4), backgroundColor: '#313131', borderTopLeftRadius: vw(5), borderBottomLeftRadius: vw(5)}}/>
                        </View>
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
        backgroundColor: '#131313',
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
        backgroundColor: '#181818',
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
        backgroundColor: '#131313',
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
        backgroundColor: '#202020',
        top: vw(14.44),
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
        flexDirection: 'column',
    },
    sendMsgBar: {
        // marginLeft: vw(5),
        width: vw(100),
        paddingRight: vw(10),
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: vw(10),
        position: 'absolute',
        bottom: vw(20),
        backgroundColor: '#202020'
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
    pinModal: {
    marginTop: vw(5),
        marginLeft: vw(10),
        width: vw(90),
        height: vw(65),
        backgroundColor: '#212121',
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
        backgroundColor: '#323232',
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

export default CommunityEmpty;