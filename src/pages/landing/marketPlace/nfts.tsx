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

const NFTs = ({ navigation }) => {
    const [currentHour, setCurrentHour] = useState('');
    const [currentMinute, setCurrentMinute] = useState('');
    const [currentSecond, setCurrentSecond] = useState('');
  
    const backgroundImageRef = createRef();
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Community');
    const [nftData, setNFTData] = useState([
        {
            hour: currentHour,
            min: currentMinute,
            sec: currentSecond,
            backImg: require('../../../../assets/images/card3.png'),
            name: 'Supernova ITALY †',
            avatar1: require('../../../../assets/images/card9.png'),
            card9: require('../../../../assets/images/follow1.png'),
            member: 'Kemoutyo',
            price: 7.12,
            total: 3212,
            mark: <Svg width={vw(5.9)} height={vw(4.7)} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M16.8553 4.13245H0.472656L4.61737 0H21L16.8553 4.13245ZM16.8553 16.9999H0.472656L4.61737 12.8695H21M4.61737 10.5662H21L16.8553 6.43371H0.472656" fill="#53FAFB"/>
                </Svg>
        },
        {
            hour: currentHour,
            min: currentMinute,
            sec: currentSecond,
            backImg: require('../../../../assets/images/card1.png'),
            name: 'Supernova ITALY †',
            avatar1: require('../../../../assets/images/card9.png'),
            avatar2: require('../../../../assets/images/follow1.png'),
            member: 'Kemoutyo',
            price: 7.12,
            total: 3212,
            mark: <Svg width={vw(5.9)} height={vw(4.7)} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M16.8553 4.13245H0.472656L4.61737 0H21L16.8553 4.13245ZM16.8553 16.9999H0.472656L4.61737 12.8695H21M4.61737 10.5662H21L16.8553 6.43371H0.472656" fill="#53FAFB"/>
                </Svg>
        },
    ])
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          setCurrentHour(now.getHours());
          setCurrentMinute(now.getMinutes());
          setCurrentSecond(now.getSeconds());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
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
    const renderBlurViews = () => {
        return (
            <BlurView
                viewRef={viewRef}
                style={[styles.blurViewStyle, {height: vw(33), backgroundColor: '#00000025', width: vw(90), borderRadius: vw(10)}]}
                blurRadius={10}
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
          setSelected('Home');
        }, 300);
    }
    const navigateDetails = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Details');
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
                                NFTs
                            </Text>
                        </View>
                        <View style = {styles.notification}>
                            <TouchableOpacity 
                                style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                                onPress = { () => {navigation.navigate('CommunitySearch'); 
                                setShowBlur(false)
                            } }
                            >
                                <Svg width={vw(9.4)} height={vw(9.4)} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M23.375 23.375L20.8959 20.8958M22.6667 16.6458C22.6667 19.971 19.971 22.6667 16.6458 22.6667C13.3206 22.6667 10.625 19.971 10.625 16.6458C10.625 13.3206 13.3206 10.625 16.6458 10.625C19.971 10.625 22.6667 13.3206 22.6667 16.6458Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView style = {styles.body}
                    showVerticalScrollIndicator={false}
                >
                    {
                        nftData.map((item, index) =>
                            <TouchableOpacity key = {index} style = {styles.cardBack}
                                onPress={navigateDetails}
                            >
                                <ImageBackground source = {item.backImg}
                                    style = {{width: vw(90), height: vw(96)}}
                                >
                                    <View style = {styles.time}>
                                        <Svg width={vw(5)} height={vw(5.3)} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M8.87406 4.65778V9.49992L12.1022 11.114M16.9443 9.49992C16.9443 13.957 13.3311 17.5702 8.87406 17.5702C4.417 17.5702 0.803833 13.957 0.803833 9.49992C0.803833 5.04285 4.417 1.42969 8.87406 1.42969C13.3311 1.42969 16.9443 5.04285 16.9443 9.49992Z" stroke="white" stroke-width="1.46731" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                        <Text style = {styles.text}>
                                            10h : 29m : 00s
                                        </Text>
                                    </View>
                                    <View style = {styles.cardFooter}>
                                    {showBlur ? renderBlurViews() : null}
                                        <View style = {styles.nftname}>
                                            <Text style = {[styles.title, {fontSize: vw(6.7)}]}>
                                                {item.name}
                                            </Text>
                                            <Image source = {item.avatar1} style = {{marginLeft: vw(10), width: vw(9.4), height: vw(9.4), borderRadius: vw(5)}}/>
                                        </View>
                                        <View style = {styles.nftname}>
                                            <View style = {styles.memberBtn}>
                                                <Image source= {item.avatar2} style = {{marginLeft: vw(2), width: vw(7.5), height: vw(7.5), borderRadius: vw(5)}}/>
                                                <Text style = {[styles.title, {fontSize: vw(2.2), marginLeft: vw(3)}]}>
                                                    {item.member}
                                                </Text>
                                            </View>
                                            <View style = {{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                <View style = {{alignItems: 'flex-end', marginRight: vw(3)}}>
                                                    <Text style = {[styles.title, {fontSize: vw(4), marginLeft: vw(3)}]}>
                                                        {item.price} SOL
                                                    </Text>
                                                    <Text style = {[styles.title, {fontSize: vw(2.8), marginLeft: vw(3)}]}>
                                                        {item.total} USD
                                                    </Text> 
                                                </View>
                                                <Svg width={vw(5.8)} height={vw(4.7)} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M16.8553 4.13245H0.472656L4.61737 0H21L16.8553 4.13245ZM16.8553 16.9999H0.472656L4.61737 12.8695H21M4.61737 10.5662H21L16.8553 6.43371H0.472656" fill="#53FAFB"/>
                                                </Svg>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }
                        {/* <FlatList
                            data={nftData}
                            horizontal = {false}
                            showVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <View style = {styles.cardBack}>
                                    <ImageBackground source = {item.backImg}
                                        style = {{width: vw(90), height: vw(96)}}
                                    >
                                        <View style = {styles.time}>
                                            <Svg width={vw(5)} height={vw(5.3)} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M8.87406 4.65778V9.49992L12.1022 11.114M16.9443 9.49992C16.9443 13.957 13.3311 17.5702 8.87406 17.5702C4.417 17.5702 0.803833 13.957 0.803833 9.49992C0.803833 5.04285 4.417 1.42969 8.87406 1.42969C13.3311 1.42969 16.9443 5.04285 16.9443 9.49992Z" stroke="white" stroke-width="1.46731" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                            <Text style = {styles.text}>
                                                10h : 29m : 00s
                                            </Text>
                                        </View>
                                        <View style = {styles.cardFooter}>
                                            <View style = {styles.nftname}>
                                                <Text style = {[styles.title, {fontSize: vw(6.7)}]}>
                                                    {item.name}
                                                </Text>
                                                <Image source = {item.avatar1} style = {{marginLeft: vw(10), width: vw(9.4), height: vw(9.4), borderRadius: vw(5)}}/>
                                            </View>
                                            <View style = {styles.nftname}>
                                                <View style = {styles.memberBtn}>
                                                    <Image source= {item.avatar2} style = {{marginLeft: vw(2), width: vw(7.5), height: vw(7.5), borderRadius: vw(5)}}/>
                                                    <Text style = {[styles.title, {fontSize: vw(2.2), marginLeft: vw(3)}]}>
                                                        {item.member}
                                                    </Text>
                                                </View>
                                                <View style = {{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                    <View style = {{alignItems: 'flex-end', marginRight: vw(3)}}>
                                                        <Text style = {[styles.title, {fontSize: vw(4), marginLeft: vw(3)}]}>
                                                            {item.price} SOL
                                                        </Text>
                                                        <Text style = {[styles.title, {fontSize: vw(2.8), marginLeft: vw(3)}]}>
                                                            {item.total} USD
                                                        </Text> 
                                                    </View>
                                                    <Svg width={vw(5.8)} height={vw(4.7)} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M16.8553 4.13245H0.472656L4.61737 0H21L16.8553 4.13245ZM16.8553 16.9999H0.472656L4.61737 12.8695H21M4.61737 10.5662H21L16.8553 6.43371H0.472656" fill="#53FAFB"/>
                                                    </Svg>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            }
                        /> */}
                        <View style = {{width: vw(90), height: vw(28.33), flexDirection: 'row', justifyContent: 'center', marginBottom: vw(5.8)}}>
                            <View style = {styles.seeMoreBtn}>
                                <Text style = {[styles.title, {fontSize: vw(2.8), marginLeft: vw(3), color: '#787878'}]}>
                                    See More
                                </Text> 
                            </View>
                        </View>
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
        width: vw(11.1),
        // aspectRatio: 34/34,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: vw(2)
    },
    body: {
        marginTop: vw(27.5),
        marginBottom: vw(8)
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
    cardBack: {
        width: vw(90), 
        height: vw(96),
        borderRadius: vw(10),
        overflow: 'hidden',
        marginBottom: vw(5.8)
    },
    time: {
        flexDirection: 'row',
        marginTop: vw(5),
        marginLeft: vw(5),
        width: vw(34.2),
        padding: vw(2),
        height: vw(9.72),
        borderRadius: vw(5),
        backgroundColor: '#270D6320',
        justifyContent: 'space-around',
        alignItems: 'center'
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
        padding: vw(2.2),
        borderRadius: vw(5),
        borderWidth: vw(0.3),
        borderColor: '#ffffff50',
        marginTop: vw(5.3),
        marginLeft: vw(5.3),
        backgroundColor: '#270D6328',
    },
    seeMoreBtn: {
        width: vw(34.2),
        height: vw(9.7),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: vw(2.2),
        borderRadius: vw(5),
        borderWidth: vw(0.3),
        borderColor: '#323232',
        marginBottom: vw(20)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(2.8)
    },
    cardFooter: {
        position: 'absolute',
        bottom: 0,
        width: vw(90),
        height: vw(33),
        borderRadius: vw(10),
        backgroundColor: '#00000025',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    avatar1: {
    },
    nftname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(75),

    },
    memberBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vw(5),
        backgroundColor: '#ffffff25',
        width: vw(28.3),
        height: vw(9.7)
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

export default NFTs;