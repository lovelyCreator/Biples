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

const MainNFTs = ({ navigation }) => {
    const backgroundImageRef = createRef();
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Community');
    const [isSeeSelected, setIsSeeSelected] = useState(false);
    const [isTopTrand, setIsTopTrand] = useState(false);
    const windowWidth = useWindowDimensions().width;
    const [sortBtn, setSortBtn] = useState([
        {
            name: 'Games',
            selected: false,
        },
        {
            name: 'Music',
            selected: false,
        },
        {
            name: 'Art',
            selected: false,
        },
        {
            name: 'Abstract',
            selected: false,
        },
    ]);
    const user = {
        avatar: require('../../../../assets/images/avatar.jpg'),
        firstName: 'Yazid',
        fullName: 'Yazid KHERRATI',
        unreadMessage: 18,
        state: 'Sign In',
        wallet: '7,197 ETH'
    };
    const exploreArray = [
        {
            backavatar: require('../../../../assets/images/communityBackground.png'),
            avatar: require('../../../../assets/images/card9.png')
        },
        {
            backavatar: require('../../../../assets/images/communityBackground.png'),
            avatar: require('../../../../assets/images/card9.png')
        },
        {
            backavatar: require('../../../../assets/images/communityBackground2.png'),
            avatar: require('../../../../assets/images/card9.png')
        },
    ];
    const topArray = [
        {
            backavatar: require('../../../../assets/images/communityBackground.png'),
            avatar: require('../../../../assets/images/card9.png'),
            description: "The terms and conditions contained in this Agreement shall constitute the entire all previous agreements oral or written.",
            readMore: 'true',
            members: '1.5k Members',
            online: '920 Online',
            avatars: [require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png')
            ],
            mutalNum: '+239',
            mutalText: 'Mutual Friends Joined',
            isShowMore: false,
        },
        {
            backavatar: require('../../../../assets/images/communityBackground.png'),
            avatar: require('../../../../assets/images/card9.png'),
            description: "The terms and conditions contained in this Agreement shall constitute the entire all previous agreements oral or written.",
            readMore: 'true',
            members: '1.5k Members',
            online: '920 Online',
            avatars: [require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png')
            ],
            mutalNum: '+239',
            mutalText: 'Mutual Friends Joined',
            isShowMore: false,
        },
        {
            backavatar: require('../../../../assets/images/communityBackground2.png'),
            avatar: require('../../../../assets/images/card9.png'),
            description: "The terms and conditions contained in this Agreement shall constitute the entire all previous agreements oral or written.",
            readMore: 'true',
            members: '1.5k Members',
            online: '920 Online',
            avatars: [require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png'),
                require('../../../../assets/images/avatar(2).png')
            ],
            mutalNum: '+239',
            mutalText: 'Mutual Friends Joined',
            isShowMore: false,
        },
    ];
    const [topData, setTopData] = useState(topArray);
    const helloMessage = "Good Morning!";
    const communitiesArray = [
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
    ];
    const [backImgArray, setBackImgArray] = useState([
        require('../../../../assets/images/market3.png'),
        require('../../../../assets/images/market2.png'),
        require('../../../../assets/images/market1.png'),
    ]);
    const [topSellerArray, setTopSellerArray] = useState([
        {
            avatar: require('../../../../assets/images/avatar.jpg'),
            online: <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6.32312 1.17088C6.40256 1.363 6.55504 1.51571 6.74703 1.59544L7.42026 1.87431C7.61239 1.9539 7.76504 2.10655 7.84462 2.29869C7.9242 2.49082 7.9242 2.7067 7.84462 2.89884L7.56596 3.57161C7.48634 3.76383 7.48623 3.97994 7.56621 4.17206L7.84439 4.84464C7.88384 4.9398 7.90415 5.0418 7.90417 5.14482C7.90419 5.24784 7.88391 5.34985 7.84448 5.44502C7.80506 5.5402 7.74727 5.62667 7.67442 5.69951C7.60157 5.77234 7.51508 5.8301 7.41989 5.86949L6.74715 6.14817C6.55503 6.2276 6.40233 6.38009 6.3226 6.57209L6.04374 7.24534C5.96416 7.43748 5.81151 7.59013 5.61938 7.66972C5.42725 7.7493 5.21138 7.7493 5.01925 7.66972L4.3465 7.39105C4.15437 7.31166 3.93857 7.31182 3.74655 7.3915L3.07332 7.66997C2.8813 7.74937 2.66561 7.7493 2.47364 7.66978C2.28167 7.59026 2.12911 7.43779 2.04947 7.24586L1.77053 6.5724C1.69109 6.38028 1.53861 6.22757 1.34662 6.14784L0.673387 5.86897C0.481342 5.78942 0.328741 5.63686 0.249129 5.44484C0.169517 5.25281 0.169409 5.03703 0.248829 4.84493L0.527491 4.17215C0.606877 3.98001 0.606715 3.76421 0.52704 3.57218L0.248778 2.89845C0.209326 2.80328 0.189012 2.70128 0.188995 2.59826C0.188979 2.49524 0.209261 2.39323 0.248682 2.29806C0.288104 2.20288 0.345892 2.11641 0.418745 2.04358C0.491598 1.97074 0.578088 1.91298 0.673272 1.87359L1.34602 1.59492C1.53797 1.51555 1.69058 1.36326 1.77037 1.17148L2.04923 0.498223C2.12881 0.306086 2.28146 0.153435 2.47358 0.0738492C2.66571 -0.00573619 2.88159 -0.00573622 3.07372 0.0738492L3.74647 0.352521C3.9386 0.431911 4.1544 0.431748 4.34641 0.35207L5.01993 0.0742814C5.21203 -0.00525934 5.42786 -0.00524308 5.61995 0.0743267C5.81204 0.153896 5.96467 0.306504 6.04426 0.498591L6.32321 1.17205L6.32312 1.17088Z" fill="#53FAFB"/>
                        <Path d="M2.88934 3.87164L3.66087 4.64317L4.52885 3.7752L5.39682 2.90723" stroke="black" stroke-width="0.617225" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,
            name: 'Yazid KHERRATI',
            follows: '192k',
            imgs: [
                require('../../../../assets/images/card2.png'),
                require('../../../../assets/images/card6.png'),
                require('../../../../assets/images/card7.png'),
                require('../../../../assets/images/card4.png'),
                require('../../../../assets/images/card1.png'),
                require('../../../../assets/images/card10.png'),
            ]
        },
        {
            avatar: require('../../../../assets/images/avatar.jpg'),
            online: <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6.32312 1.17088C6.40256 1.363 6.55504 1.51571 6.74703 1.59544L7.42026 1.87431C7.61239 1.9539 7.76504 2.10655 7.84462 2.29869C7.9242 2.49082 7.9242 2.7067 7.84462 2.89884L7.56596 3.57161C7.48634 3.76383 7.48623 3.97994 7.56621 4.17206L7.84439 4.84464C7.88384 4.9398 7.90415 5.0418 7.90417 5.14482C7.90419 5.24784 7.88391 5.34985 7.84448 5.44502C7.80506 5.5402 7.74727 5.62667 7.67442 5.69951C7.60157 5.77234 7.51508 5.8301 7.41989 5.86949L6.74715 6.14817C6.55503 6.2276 6.40233 6.38009 6.3226 6.57209L6.04374 7.24534C5.96416 7.43748 5.81151 7.59013 5.61938 7.66972C5.42725 7.7493 5.21138 7.7493 5.01925 7.66972L4.3465 7.39105C4.15437 7.31166 3.93857 7.31182 3.74655 7.3915L3.07332 7.66997C2.8813 7.74937 2.66561 7.7493 2.47364 7.66978C2.28167 7.59026 2.12911 7.43779 2.04947 7.24586L1.77053 6.5724C1.69109 6.38028 1.53861 6.22757 1.34662 6.14784L0.673387 5.86897C0.481342 5.78942 0.328741 5.63686 0.249129 5.44484C0.169517 5.25281 0.169409 5.03703 0.248829 4.84493L0.527491 4.17215C0.606877 3.98001 0.606715 3.76421 0.52704 3.57218L0.248778 2.89845C0.209326 2.80328 0.189012 2.70128 0.188995 2.59826C0.188979 2.49524 0.209261 2.39323 0.248682 2.29806C0.288104 2.20288 0.345892 2.11641 0.418745 2.04358C0.491598 1.97074 0.578088 1.91298 0.673272 1.87359L1.34602 1.59492C1.53797 1.51555 1.69058 1.36326 1.77037 1.17148L2.04923 0.498223C2.12881 0.306086 2.28146 0.153435 2.47358 0.0738492C2.66571 -0.00573619 2.88159 -0.00573622 3.07372 0.0738492L3.74647 0.352521C3.9386 0.431911 4.1544 0.431748 4.34641 0.35207L5.01993 0.0742814C5.21203 -0.00525934 5.42786 -0.00524308 5.61995 0.0743267C5.81204 0.153896 5.96467 0.306504 6.04426 0.498591L6.32321 1.17205L6.32312 1.17088Z" fill="#53FAFB"/>
                        <Path d="M2.88934 3.87164L3.66087 4.64317L4.52885 3.7752L5.39682 2.90723" stroke="black" stroke-width="0.617225" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,
            name: 'Yazid KHERRATI',
            follows: '192k',
            imgs: [
                require('../../../../assets/images/card2.png'),
                require('../../../../assets/images/card6.png'),
                require('../../../../assets/images/card7.png'),
                require('../../../../assets/images/card4.png'),
                require('../../../../assets/images/card1.png'),
                require('../../../../assets/images/card10.png'),
            ]
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
        }, 30); // Delay the back action by one second
  
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
    const navigateNoCommunity = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('NoCommunity');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateRanking = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Ranking');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateNFT = () => {
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('NFTs');
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
                        <Image source = {require('../../../../assets/images/card9.png')}
                            style = {{width: vw(10.7), height: vw(10.7), borderRadius: vw(2)}}
                        />
                        <View style = {styles.user}>
                            <Text style = {[styles.title, {fontSize: vw(5.6)}]}>
                                Marketplace
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
                <View style = {styles.body} >
                    <View style = {{width: vw(90)}}>
                        <View style = {styles.sortBtnStyle}>
                            {
                                sortBtn.map((item, index) => 
                                    <Text key = {index} style = {[styles.viewAll, {marginLeft: vw(10), marginBottom: vw(5), color: 'white'}]}>
                                        {item.name}
                                    </Text>
                                )
                            }
                        </View>
                        <View style = {styles.backImg}>
                            <FlatList
                                data={backImgArray}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <Image 
                                        source = {item}
                                        style={{width: vw(61.4), height: vw(43.9), marginLeft: vw(1.4),borderRadius: vw(3), marginRight: vw(1.4) }}
                                        resizeMode="cover"
                                    />
                                }
                            />
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        style = {{marginBottom: vw(6)}}
                    >
                        <View style = {styles.myCommunities}>
                            <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(3.33), paddingLeft: vw(5), paddingRight: vw(5)}}>
                                <Text style = {styles.title}>
                                    Top Sellers
                                </Text>
                                <Text style = {styles.viewAll}
                                    // onPress = {navigateNoCommunity}
                                >
                                    View All
                                </Text>
                            </View>
                            <View style = {[styles.communities, {}]}>
                                <FlatList
                                    data={topSellerArray}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity style = {styles.topSeller}
                                         onPress = {navigateRanking}
                                        >
                                            <View style = {styles.topSellerInfo}>
                                                <View style = {styles.topAvatar}>
                                                    <Image source = {item.avatar}
                                                        style = {styles.itemAvatar}
                                                    />
                                                    <View style = {styles.topOnline}>
                                                        {item.online}
                                                    </View>
                                                </View>
                                                <View style = {styles.topNameInfo}>
                                                    <Text style = {[styles.text, {marginLeft: vw(2), fontSize: vw(3.15)}]}>
                                                        {item.name}
                                                    </Text>
                                                    <Text style = {[styles.text, {marginLeft: vw(2), fontSize: vw(2), color: '#767676'}]}>
                                                        {item.follows} Followers
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style = {styles.topImgs}>
                                                {
                                                    item.imgs?.map((items, indexs) =>
                                                        <Image
                                                            key = {indexs} 
                                                            source = {items}
                                                            style = {styles.itemImg}
                                                        />
                                                    )
                                                }
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
                        <View style = {styles.recommended}>
                            <View style = {{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: vw(3.33), paddingLeft: vw(5), paddingRight: vw(5)}}>
                                <Text style = {styles.title}>
                                    NFTs
                                </Text>
                                <Text style = {styles.viewAll}
                                    // onPress = {navigateNoCommunity}
                                >
                                    View All
                                </Text>
                            </View>
                            <View style = {[styles.communities, {justifyContent: 'space-between', width: vw(90), marginLeft: vw(0)}]}>
                                <FlatList
                                    data={NFTImgArray}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity
                                            onPress = {navigateNFT}
                                        >
                                            <Image source = {item}
                                                style = {styles.nftImg}
                                                resizeMode='cover'
                                            />
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
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
                            onPress = {navigateNoCommunity}
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
        backgroundColor: '#202020',
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
        borderRadius: vw(5)
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
    myCommunities: {
        width: vw(100),
        height: vw(70),
        marginTop: vw(13.8)
    },
    sortBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(29.7)
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
    mainContent: {
        flexDirection: 'column'
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
        marginLeft: vw(5),
        marginTop: vw(8.1)
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
    ftBtn: {
        width: vw(41.67),
        aspectRatio: 150/40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderRadius: vw(10),
        borderColor: '#323232',
    },
    description: {
        width: vw(80),
        marginLeft: vw(5),
        marginTop: vw(6.7),
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    dspTxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: vw(0)
    },
    members: {
        flexDirection: 'row',
        height: vw(8.33),
        justifyContent: 'flex-start',
        alignItems: 'center', 
        marginTop: vw(3.9)
    },
    imgStyle: {
        width: vw(8.3),
        height: vw(8.3),
        borderRadius: vw(5),
        position: 'absolute'
    },
});

export default MainNFTs;