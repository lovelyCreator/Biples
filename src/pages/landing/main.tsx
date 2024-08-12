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
import CustomCard from "../../components/customCard"; 
import CustomTopCard from "../../components/customTopcard"
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';
import { backgroundColor } from 'react-native';

const Main = ({ navigation }) => {

    const backgroundImageRef = createRef();
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Home');
    const [close, setClose] = useState(false);
    const [bookMark, setBookMark] = useState(false);
    const windowWidth = useWindowDimensions().width;
    const user = {
        avatar: require('../../../assets/images/avatar.jpg'),
        firstName: 'Yazid',
        fullName: 'Yazid KHERRATI',
        unreadMessage: 18,
        state: 'Sign In',
        wallet: '7,197 ETH'
    };
    const helloMessage = "Good Morning!";
    const communitiesArray = [
        {avatar: require('../../../assets/images/card8.png')},
        {avatar: require('../../../assets/images/card9.png')},
        {avatar: require('../../../assets/images/card8.png')},
        {avatar: require('../../../assets/images/card9.png')},
        {avatar: require('../../../assets/images/card8.png')},
        {avatar: require('../../../assets/images/card9.png')},
    ]
    const cardArray = [
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card1.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        },
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card2.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        },
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card3.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        },
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card4.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        },
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card5.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        },
        {
            avatar: require('../../../assets/images/avatar0.png'),
            backgroundImage: require('../../../assets/images/card6.png'),
            avatarName: 'KithunaFowu',
            avatarContent: '1092 People',
            title: 'Wornderl Fukswlh',
            avatar1: require('../../../assets/images/avatar(1).png'),
            avatar2: require('../../../assets/images/avatar(2).png'),
            avatar3: require('../../../assets/images/avatar(3).png'),
            text: '+239\nFriends',
            heartNumber: ['12,8k', '12,8k']
        }
    ]
    topCardArray = [
        {
            avatar: require('../../../assets/images/card9.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: false
        },
        {
            avatar: require('../../../assets/images/card8.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: true
        },
        {
            avatar: require('../../../assets/images/card9.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: false
        },
        {
            avatar: require('../../../assets/images/card8.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: true
        },
        {
            avatar: require('../../../assets/images/card9.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: false
        },
        {
            avatar: require('../../../assets/images/card8.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: true
        },
    ];
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
          setSelected('Home');
            
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
        // console.log(viewRef);
        return (
            // <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
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
    }
    const navigateAndAnimate = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Main');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateAndAnimateCommunity = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Community');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateAccount = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Account');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateTopics = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Topics');
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
          }, 100); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const handleNavigateCommunity = () => {
        // setShowBlurs(true);
            setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('CommunityEmpty');
          }, 100); // Adjust the delay as needed
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
                        <View style = {styles.user}>
                            <TouchableOpacity
                                onPress = {navigateAccount}
                                style = {{borderWidth: vw(0.6), borderColor: '#53FAFB', borderRadius: vw(10)}}
                            >
                                <Image source = {user.avatar} style = {styles.avatarStyle}/>
                            </TouchableOpacity>
                            <View style = {{
                                backgroundColor: '#FF5252', 
                                position: 'absolute', 
                                bottom: vw(6), 
                                right: vw(29), 
                                height: vw(5), 
                                borderRadius: vw(5),
                                borderWidth: vw(0.6),
                                borderColor: 'black',
                                justifyContent: 'center',
                                paddingRight: vw(0.3),
                                paddingLeft: vw(0.3),
                                alignItems: 'center',
                                }}
                            >
                                <Text style = {{
                                    marginLeft: vw(1),
                                    marginRight: vw(1),
                                    color: 'white', 
                                    fontSize: vw(2.5), 
                                    // textAlign: 'center',
                                    fontFamily: 'TT Firs Neue Trial Medium'
                                    }}
                                >
                                +23
                                </Text>
                            </View>
                            <View style = {styles.userfont}>
                                <Text style = {[styles.userfont, {fontSize: vw(2.2), color: "#4C4C4C"}]}>
                                    {helloMessage}
                                </Text>
                                <Text style = {[styles.userfont, {fontSize: vw(3.3), color: "white"}]}>
                                    {user.fullName}
                                </Text>
                            </View>
                        </View>
                        <View style = {styles.notification}>
                            <TouchableOpacity 
                                style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                                onPress = { () => {navigation.navigate('MainSearch'); 
                                setShowBlur(false)
                            } }
                            >
                                <Svg width={vw(9.4)} height={vw(9.4)} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M23.375 23.375L20.8959 20.8958M22.6667 16.6458C22.6667 19.971 19.971 22.6667 16.6458 22.6667C13.3206 22.6667 10.625 19.971 10.625 16.6458C10.625 13.3206 13.3206 10.625 16.6458 10.625C19.971 10.625 22.6667 13.3206 22.6667 16.6458Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style = {{width: vw(9.4), aspectRatio: 1/1, borderRadius: vw(5), backgroundColor: "#212121", justifyContent: 'center', alignItems: 'center'}}
                                onPress = { () => {navigation.navigate('Notifications'); 
                                setShowBlur(false)
                            } }
                            >
                                <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M11.2498 14.25C11.2498 15.4926 10.2424 16.5 8.99979 16.5C7.75715 16.5 6.74979 15.4926 6.74979 14.25M10.3472 4.67892C10.6738 4.34148 10.8748 3.88171 10.8748 3.375C10.8748 2.33947 10.0353 1.5 8.99979 1.5C7.96426 1.5 7.12479 2.33947 7.12479 3.375C7.12479 3.88171 7.32579 4.34148 7.65241 4.67892M13.4998 8.4C13.4998 7.36566 13.0257 6.37368 12.1818 5.64228C11.3379 4.91089 10.1933 4.5 8.99979 4.5C7.80632 4.5 6.66172 4.91089 5.81781 5.64228C4.9739 6.37368 4.49979 7.36566 4.49979 8.4C4.49979 10.1114 4.07539 11.3629 3.54584 12.2585C2.94229 13.2792 2.64052 13.7896 2.65244 13.9115C2.66607 14.051 2.69118 14.095 2.8043 14.1777C2.90317 14.25 3.39992 14.25 4.39343 14.25H13.6061C14.5997 14.25 15.0964 14.25 15.1953 14.1777C15.3084 14.095 15.3335 14.051 15.3471 13.9115C15.3591 13.7896 15.0573 13.2792 14.4537 12.2585C13.9242 11.3629 13.4998 10.1114 13.4998 8.4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Circle cx="2.25" cy="2.25" r="2.25" fill="#53FAFB"/>
                                </Svg>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style = {styles.body}
                >
                    <View style = {[styles.myCommunities, {aspectRatio: close ? 360/112 : 360/266}]}>
                        <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(3.33), paddingLeft: vw(5), paddingRight: vw(5)}}>
                            <Text style = {styles.title}>
                                My Communitites
                            </Text>
                            <Text style = {styles.viewAll}>
                                View All
                            </Text>
                        </View>
                        <View style = {[styles.communities, {}]}>
                            <View style={{width: vw(13.9), height: vw(13.9), backgroundColor: '#0e2223', justifyContent: 'center', alignItems: 'center', borderRadius: vw(2), zIndex: 1}}>
                                <Svg width={vw(4.44)} height={vw(4.44)}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M8 15.5V0.5M0.5 8H15.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <FlatList
                                data={communitiesArray}
                                horizontal
                                style = {{marginLeft: (0-vw(5)), paddingRight: vw(3), width: vw(80), zIndex: 0, paddingLeft: vw(5)}}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress = {() => {
                                            navigation.navigate('CommunityEmpty')
                                            setShowBlur(false)}
                                        }
                                    >
                                        <Image 
                                            source = {item.avatar}
                                            style={{width: vw(13.9), height: vw(13.9), marginLeft: vw(2.8),borderRadius: vw(2) }}
                                            resizeMode="cover"
                                        />
                                        {index  === (communitiesArray.length-1) && <View style = {{width: vw(25)}}/>}
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        { !close  && <View style = {[styles.advert, {marginLeft: vw(5)}]}>
                            <ImageBackground 
                                source = {require('../../../assets/images/advert.png')}
                                style = {[styles.advert, {paddingLeft: vw(4.5),paddingTop: vw(4.8), paddingRight: vw(3.3), paddingBottom: vw(5.3) }]}
                            >
                                <View style = {styles.mainContent}>
                                    <Text style = {styles.middleTitle}>
                                        New NFTs Go{'\n'}
                                        Through to friends.
                                    </Text>
                                    <Text style = {styles.text}>
                                        Let's Start It Together!.
                                    </Text>
                                    <TouchableOpacity
                                        style={[styles.button, { width: vw(17.5), height: vw(5.3), fontFamily: 'Neue-Metana', overflow: 'hidden' }]}
                                        // onPress={onPress}
                                    >
                                    {showBlur ? renderBlurView() : null}
                                        <Svg width={vw(1.8)} height={vw(2)} viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M0.5 6.18722C0.5 6.55949 0.5 6.74562 0.571313 6.84822C0.63344 6.93761 0.728397 6.99292 0.831191 6.9996C0.949185 7.00727 1.09148 6.90402 1.37606 6.69753L5.07944 4.01031C5.31459 3.83968 5.43216 3.75437 5.47314 3.64684C5.50896 3.55283 5.50896 3.44717 5.47314 3.35316C5.43216 3.24563 5.31459 3.16032 5.07944 2.98969L1.37606 0.302474C1.09148 0.0959778 0.949185 -0.00726986 0.831191 0.000398159C0.728397 0.00707865 0.63344 0.0623918 0.571313 0.151778C0.5 0.254382 0.5 0.440515 0.5 0.812781V6.18722Z" fill="#D9D9D9"/>
                                        </Svg>

                                        <Text 
                                            style={{ 
                                                color: 'white', 
                                                fontSize: vw(2), 
                                                fontFamily: 'TT Firs Neue Trial Medium'
                                            }}
                                        >
                                            &nbsp;&nbsp;Subscribe
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style = {styles.close}
                                    onPress = {() => setClose(true)}
                                >
                                    <Svg width={vw(1.8)} height={vw(1.8)} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M5.25631 0.743652L1.15375 4.84622M1.15375 0.743652L5.25631 4.84622" stroke="white" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>}
                    </View>
                    <View style = {styles.recommended}>
                        <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(4.44), paddingRight: vw(5)}}>
                            <Text style = {styles.title}>
                                Recommended
                            </Text>
                            <Text style = {styles.viewAll}>
                                View All
                            </Text>
                        </View>                            
                        <FlatList
                            data={cardArray}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <CustomCard
                                    backgroundImage = {item.backgroundImage}
                                    avatar = {item.avatar}
                                    avatarName = {item.avatarName}
                                    avatarContent = {item.avatarContent}
                                    title = {item.title}
                                    avatar1 = {item.avatar1}
                                    avatar2 = {item.avatar2}
                                    avatar3 = {item.avatar3}
                                    bookMark = {bookMark}
                                    text = {item.text}
                                    heartNumber = {item.heartNumber}
                                    // renderBlurView = {renderBlurView}
                                    // showBlur = {showBlur}
                                    onPress = {navigateTopics}
                                    handlePressed = {() => setBookMark(!bookMark)}
                                />
                            }
                        />
                    </View>
                    <View style = {styles.topCommunities}>
                        <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(3.33), marginLeft: vw(5), paddingRight: vw(5), marginTop: vw(10)}}>
                            <Text style = {styles.title}>
                                Top Communities
                            </Text>
                            <Text style = {styles.viewAll}>
                                View All
                            </Text>
                        </View>
                        <ScrollView style = {styles.scrollStyle}>
                            {
                                topCardArray.map((item, index) => 
                                    <CustomTopCard
                                        key = {index}
                                        avatar={item.avatar}
                                        avatarName={item.avatarName}
                                        avatarContent={item.avatarContent}
                                        joinState={item.joinState}
                                        radius={vw(3)}
                                        backgroundColor='#FFFFFF21'
                                        handlePress = {handleNavigateCommunity}
                                        handleProfilePress = {() => {
                                            navigation.navigate('FriendProfile'),
                                            setShowBlur (false);
                                        }}
                                    />
                                )
                            }
                            <View style = {{height: vw(35)}}/>
                        </ScrollView>
                    </View>
                </ScrollView>
                <View style = {[styles.footer, {position: 'absolute', overflow: 'hidden'}]}>
                    {/* <View style = {{ position: 'relative', bottom: 0, left: 0,width: vw(92.2), height: vw(30), flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', overflow: 'hidden'}}> */}
                        <Image source = {require('../../../assets/images/blur.png')}
                            style={styles.imageStyle}
                            ref={backgroundImageRef}
                            // blurRadius = {20}
                        />
                        {showBlur ? renderBlurView() : null}
                        {/* {renderBlurView()} */}
                        <TouchableOpacity style = {styles.footerIcon}
                            onPress = {() => 
                                setSelected('Home')
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
                            onPress = {() => {
                                setSelected('Community');
                                navigation.navigate('NoCommunity');
                                setShowBlur(false)
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
    userSetting: {
        marginTop: vw(5),
        width: vw(90),
        aspectRatio: 320/148,
        justifyContent: 'center',
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
    avatarStyle: {
        width: vw(9.7), 
        height: vw(9.7), 
        borderRadius: vw(5),
        borderWidth: vw(0.3),
        borderColor: 'black'
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
        marginBottom: vw(10)
    },
    myCommunities: {
        width: vw(100),
        aspectRatio: 360/266,
        marginTop: vw(2)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white'
    },
    viewAll: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#898989'
    },
    communities: {
        width: vw(95),
        aspectRatio: 360/55,
        marginBottom: vw(7.5),
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: vw(5),
        marginRight: vw(0),
        backgroundColor: 'transparent'
    },
    advert: {
        flexDirection: 'row',
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: vw(90),
        aspectRatio: 320/126,
        borderWidth: vw(0.1),
        borderColor: '#ffffff21',
    borderRadius: vw(3)
    },
    mainContent: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    middleTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(3.9)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(2.8)
    },
    close: {
        width: vw(4.44),
        aspectRatio: 1/1,
        backgroundColor: '#FFFFFF21',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(2.3)
    },
    recommended: {
        width: vw(95),
        marginLeft: vw(5)
    },
    topCommunities: {
        width: vw(100),
        aspectRatio: 360/365,
        // paddingTop: vw(5.6),
        // marginTop: vw(2.8)
    },
    topCard: {
        width: vw(90),
        aspectRatio: 320/64,
        borderRadius: vw(5),
        backgroundColor: '#202020'
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
        backgroundColor: '#36363690'
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

export default Main;