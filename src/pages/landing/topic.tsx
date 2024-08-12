import React, { useState, useEffect, useRef, createRef } from 'react';
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
    useWindowDimensions,
    findNodeHandle,
    FlatList,
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import CustomTopCards from "../../components/customTopcards";
import CustomFollow from "../../components/customFollow";
import CustomRoundedButton from "../../components/customRoundedButton";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import RadialGradient from 'react-native-radial-gradient';


const Topics = ({ navigation }) => {
    const [showBlurs, setShowBlurs] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const backgroundImageRef = createRef()
    
    const [selected, setSelected] = useState('Home');
    const [channelNumber, setchannelNumber] = useState(0);
    const [selectProperty, setSelectProperty] = useState('Members');

    const channelNumberArray = [0, 1, 2, 3, 4, 5];
    const [selectedRecommendData, setSelectedRecommendData] = useState( {
        title: 'Wonderl Fukswlh',
        avatar: require('../../../assets/images/card1.png'),
        channelAvatar: require('../../../assets/images/card9.png'),
        channelName: 'Fernado TOYs',
        ChannelMembers: '1,500 Members',
        joinState: true,
        shortDescription: 'The terms and conditions contained in this Agreement \nshall constitute the entire all previous agreements and \nunderstandings, whether oral or written.',
        longDescription : 'The terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written entire all previous agreements and understandings, whether oral or written. ',
        readMore: true,
        addedDescription: 'The terms and conditions contained in this Agreement \nshall constitute the entire all previous agreements and \nunderstandings, whether oral or written.',
        membersAvatarArray: [
            {avatar: require('../../../assets/images/avatar(1).png')},
            {avatar: require('../../../assets/images/avatar(3).png')},
            {avatar: require('../../../assets/images/avatar(2).png')},
            {avatar: require('../../../assets/images/avatar(1).png')},
        ],
        friendMembers: {
            number: '+239',
            text: 'Mutual Friends Joined'
        },
    });    
    const avatarArray = [
        {avatar: require('../../../assets/images/card1.png')},
        {avatar: require('../../../assets/images/card3.png')},
        {avatar: require('../../../assets/images/card2.png')},
        {avatar: require('../../../assets/images/card4.png')},
        {avatar: require('../../../assets/images/card5.png')},
        {avatar: require('../../../assets/images/card6.png')},
    ];
    cardArray = [
        {
            avatar: require('../../../assets/images/card9.png'),
            avatarName: 'Fernado TOYs',
            avatarContent: '1,500 Members',
            joinState: true
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
    memberCardArray = [
        {
            avatar: require('../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
        {
            avatar: require('../../../assets/images/follow2.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: false
        },
        {
            avatar: require('../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        }
    ];
    const [follow, setFollow] = useState([true, false, true])
    const friendButtonArray = [ '#Photography', '#Fantasy', '#Robot' ]
    const memberButtonArray = [ 'Members', 'Activities', 'Comments' ]

    const handleAddMember = () => {
        // setShowBlurs(true);
        setShowBlurs(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Invite');
          }, 100); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    };
    const handleFollow = () => {

    };
    const [showblur, setShowblur] = useState(false);
    useEffect(() => {
      const backAction = () => {
        setShowBlurs(false);
  
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
            
          if (!showBlurs) {
            timerId = setTimeout(() => {
                setSelected('Home');
              setShowBlurs(true);
            }, 500); // Adjust the delay as needed
          }
          console.log(showBlurs)
          if (showBlurs) setShowblur(!showblur);
          return () => {
            clearTimeout(timerId);
          };
        }, [ showBlurs,navigation])
      );
    // useEffect(() => {
    //     const switchPage = setTimeout(() => {
    //         console.log('time is ended');
    //         // navigation.navigate('Loading');
    //         setShowBlurs(true);
    //     }, 3); // 10 seconds in milliseconds
    
    //     return () => clearTimeout(switchPage);
    //   }, []);
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
    const navigateAndAnimate = () => {
        // setShowBlurs(true);
            setShowBlurs(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.navigate('Main');
          }, 100); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateAndAnimate2 = () => {
        // setShowBlurs(true);
            setShowBlurs(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('Members');
          }, 500); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigateAndAnimate1 = () => {
        // setShowBlurs(true);
            setShowBlurs(false);
        let timerId;
        timerId = setTimeout(() => {
            setSelected('Chat');
            navigation.navigate('NoChat');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
    }
    const navigated1 = () => {
            setSelected('Home')
            setShowBlurs(false);
            let timerId;
            timerId = setTimeout(() => {
                navigation.navigate('Main');
            }, 30); // Adjust the delay as needed
            return () => {
            clearTimeout(timerId);
            };
    }
    const navigateNoCommunity = () => {
        setShowBlurs(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoCommunity');
          }, 30); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
        };
    }
    const navigateFriends = () => {
        setShowBlurs(false);
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
                <ImageBackground
                    source = {require('../../../assets/images/background.png')}
                    style = {{ width: '100%', height: '100%', position: 'absolute', top: 0}}
                >
                <View style = {styles.header}>
                    {/* <Image source = {require('../../../assets/images/background.png')}
                        style = {styles.backImage}
                    /> */}
                    <View style = {styles.userInfo}>
                        <TouchableOpacity 
                            style = {styles.prevButton}
                            onPress = {navigateAndAnimate}
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.userfont}>
                            {selectedRecommendData.title}
                        </Text>
                        <View style = {styles.notification}>
                            <Svg width={vw(3.9)} height={vw(3.9)} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M13 5L13 1M13 1H9M13 1L7.66667 6.33333M5.66667 2.33333H4.2C3.0799 2.33333 2.51984 2.33333 2.09202 2.55132C1.71569 2.74307 1.40973 3.04903 1.21799 3.42535C1 3.85318 1 4.41323 1 5.53333V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13H8.46667C9.58677 13 10.1468 13 10.5746 12.782C10.951 12.5903 11.2569 12.2843 11.4487 11.908C11.6667 11.4802 11.6667 10.9201 11.6667 9.8V8.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.channels}>
                        <View style = {styles.selectChannel}>
                            <ImageBackground
                                source = {avatarArray[channelNumber].avatar}
                                style = {styles.avatarBackgroundStyle}
                            >
                                <View style = {styles.camera}>
                                    <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M3.77778 1H3.66667C2.73325 1 2.26654 1 1.91002 1.18166C1.59641 1.34144 1.34144 1.59641 1.18166 1.91002C1 2.26654 1 2.73325 1 3.66667V3.77778M3.77778 11H3.66667C2.73325 11 2.26654 11 1.91002 10.8183C1.59641 10.6586 1.34144 10.4036 1.18166 10.09C1 9.73346 1 9.26675 1 8.33333V8.22222M11 3.77778V3.66667C11 2.73325 11 2.26654 10.8183 1.91002C10.6586 1.59641 10.4036 1.34144 10.09 1.18166C9.73346 1 9.26675 1 8.33333 1H8.22222M11 8.22222V8.33333C11 9.26675 11 9.73346 10.8183 10.09C10.6586 10.4036 10.4036 10.6586 10.09 10.8183C9.73346 11 9.26675 11 8.33333 11H8.22222" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                                <View style={styles.channel}>
                                    {channelNumberArray.map((number) => (
                                        <View
                                            key={number}
                                            style={
                                                number === channelNumber ? styles.onchannel : styles.offchannel
                                            }
                                        />
                                    ))}
                                </View>
                            </ImageBackground>
                        </View>
                                                 
                        <FlatList
                            style = {styles.candidateChannels}
                            data={avatarArray}
                            horizontal={false} 
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                {
                                    if (channelNumber != index) 
                                    {
                                        return (
                                            <TouchableOpacity 
                                                key ={index}
                                                style = {styles.channelArray}
                                                onPress = {() => setchannelNumber(index)}
                                            >
                                                <Image source = {item.avatar}
                                                    style = {styles.channelArray}
                                                />
                                            </TouchableOpacity>
                                        );
                                    };
                                }
                            }
                        />
                        {/* <ScrollView >
                            {
                                avatarArray.map((item: object, index: any) => 
                                )
                            }
                        </ScrollView> */}
                    </View>
                    <ScrollView style = {styles.scrollInfo}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style = {styles.channelInfo}>
                            <CustomTopCards
                                avatar={cardArray[channelNumber].avatar}
                                avatarName={cardArray[channelNumber].avatarName}
                                avatarContent={cardArray[channelNumber].avatarContent}
                                joinState={cardArray[channelNumber].joinState}
                                radius={vw(3)}
                                backgroudColor= {'transparent'}
                            />
                            <View style = {styles.description}>
                                <Text style = {styles.subtitle}>
                                    Description
                                </Text>
                                <Text style = {styles.content}>
                                    {
                                        selectedRecommendData.readMore ? 
                                        selectedRecommendData.shortDescription
                                        :
                                        selectedRecommendData.longDescription
                                    }
                                    {selectedRecommendData.readMore &&     <Text style = {[styles.content, {color: 'white', fontSize: vw(2.8)}]}
                                            onPress = { () => setSelectedRecommendData(prev =>{
                                                    const newdata = {...prev};
                                                    newdata.readMore = !newdata.readMore;
                                                    return newdata;}
                                                ) }
                                        >
                                            &nbsp;Read More
                                        </Text>
                                    }
                                </Text>
                            </View>
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between', width: vw(90), height: vw(5.6), marginLeft: vw(5), marginTop: vw(5.6)}}>
                                <View style = {{position: 'relative'}}>
                                    <Image source = {selectedRecommendData.membersAvatarArray[0].avatar}
                                        style = {{width: vw(8.3), height: vw(8.3), borderRadius: vw(2.8), position: 'absolute', left: vw(0)}}
                                    />
                                    <Image source = {selectedRecommendData.membersAvatarArray[1].avatar}
                                        style = {{width: vw(8.3), height: vw(8.3), borderRadius: vw(2.8), position: 'absolute', left: vw(6.3)}}
                                    />
                                    <Image source = {selectedRecommendData.membersAvatarArray[2].avatar}
                                        style = {{width: vw(8.3), height: vw(8.3), borderRadius: vw(2.8), position: 'absolute', left: vw(12.6)}}
                                    />
                                    <Image source = {selectedRecommendData.membersAvatarArray[3].avatar}
                                        style = {{width: vw(8.3), height: vw(8.3), borderRadius: vw(2.8), position: 'absolute', left: vw(18.9)}}
                                    />
                                    <View>
                                        <Text style = {{marginLeft: vw(30.4), fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.3), color: 'white', marginTop: vw(0.2)}}>
                                            {selectedRecommendData.friendMembers.number}
                                        </Text>
                                        <Text style = {{marginLeft: vw(30.4), fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.2), color: '#888888', marginTop: vw(0.2)}}>
                                            {selectedRecommendData.friendMembers.text}
                                        </Text>
                                    </View>
                                </View>
                                <CustomRoundedButton
                                    // navigation={navigation}
                                    title="Invite"
                                    width={vw(25.83)}
                                    height={vw(8.3)}
                                    backgroundColor="#53FAFB10"  
                                    color='white'
                                    fontSize={vw(2.8)}
                                    onPress={handleAddMember}
                                />
                            </View>
                            <View style = {{marginLeft: vw(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: vw(9.17), marginTop: vw(10)}}>
                                {
                                    friendButtonArray.map((item, index) => 
                                        <Text key = {index} style = {{padding: vw(2.64), paddingLeft: vw(4.44), paddingRight: vw(4.44), borderRadius: vw(5), fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.8), color: '#606060', borderWidth: vw(0.3), borderColor: '#606060', marginRight: vw(3)}}>
                                            {item}
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                        <View style = {styles.memberInfo}>
                            <View style = {{marginLeft: vw(5), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: vw(5), marginBottom: vw(5), marginRight: vw(5)}}>
                                {
                                    memberButtonArray.map((item, index) => 
                                        <Text key = {index} style = {{padding: vw(2.64), paddingLeft: vw(4.44), paddingRight: vw(4.44), borderRadius: vw(5), fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.8), color: selectProperty == item ? 'white' :'#606060', backgroundColor: selectProperty == item ? '#53FAFB10': 'transparent', marginRight: vw(4)}}
                                            onPress = {() => {setSelectProperty(item);
                                                if (item == 'Members'){
                                                    navigateAndAnimate2
                                                }
                                            }}
                                        >
                                            {item}
                                        </Text>
                                    )
                                }
                            </View>
                            {
                                memberCardArray.map((item, index) => 
                                    <CustomFollow
                                        key = {index}
                                        avatar = {item.avatar}
                                        avatarName = {item.avatarName}
                                        avatarContent = {item.avatarContent}
                                        followState = {follow[index]}
                                        onPress={() => setFollow(prevFollow => {
                                            const newFollow = [...prevFollow];
                                            newFollow[index] = !newFollow[index];
                                            // console.log(newFollow);
                                            return newFollow;
                                        })}
                                        navigatePress = {navigateFriends}
                                    />
                                )
                            }
                        </View>
                        <View style = {{height: vw(12.5)}}/>
                    </ScrollView>
                </View>
                <View style = {[styles.footer, {position: 'absolute', overflow: 'hidden'}]}>
                    <Image source = {require('../../../assets/images/blur.png')}
                        style={styles.imageStyle}
                        ref={backgroundImageRef}
                        />
                    {showBlurs ? renderBlurView() : null}
                    
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {navigated1}
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
                        onPress = {
                            navigateAndAnimate1
                        }
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
                </ImageBackground>
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
        backgroundColor: '#131313'
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
    backImage: {
        width: '100%',
        height: vw(70),
        position: 'absolute',
        top: 0,
    },
    prevButton: {
        width: vw(9),
        aspectRatio: 1/1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff20',
        borderRadius: vw(5),
    },
    userInfo: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userfont: {
        color: "white",
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5)
    },
    notification: {
        width: vw(9.4), 
        aspectRatio: 1/1, 
        borderRadius: vw(5), 
        backgroundColor: '#ffffff20',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    body: {
        marginTop: vw(22.5),
        marginBottom: vw(12.5)
    },
    channels: {
        marginTop: vw(6),
        marginLeft: vw(5),
        width: vw(100),
        height: vw(88.9),
        flexDirection: 'row',
        marginBottom: vw(6)
    },
    selectChannel: {
        width: vw(58.6),
        aspectRatio: 211/320,
        borderRadius: vw(6.4),
        overflow: 'hidden',
        marginRight: vw(3.3)
    },
    avatarBackgroundStyle: {
        height: '100%',
        width: vw(58.6),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    camera: {
        // position: 'absolute',
        width: vw(7.8),
        aspectRatio: 1/1,
        borderWidth: vw(0.3),
        borderColor: 'white',
        borderRadius: vw(4),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(3),
        marginLeft: vw(45)
    },
    channel: {
        width: '100',
        height: vw(8),
        flexDirection: 'row',
        justfiyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    onchannel: {
        margin: vw(1.1),
        width: vw(3.6),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(1.7),
        backgroundColor: '#00000000'
    },
    offchannel: {
        margin: vw(1.9),
        width: vw(1.4),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(0.6),
        backgroundColor: 'white'
    },
    candidateChannels: {
        width: vw(27.8),
    },
    channelArray: {
        width: vw(27.8),
        height: vw(27.8),
        borderRadius: vw(6.4),
        marginBottom: vw(2.8)
    },
    channelInfo: {
        width: vw(100),
        // height: vw(69.1),
        marginBottom: vw(6)
    },
    description: {
        width: vw(95),
        marginLeft: vw(5),
        // height: vw(21.4),
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    subtitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(3.9),
        color: 'white'
    },
    content: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#707070'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        color: 'white'
    },
    topCard: {
        width: vw(90),
        aspectRatio: 320/64,
        borderRadius: vw(5),
        backgroundColor: '#202020'
    },
    scrollInfo: {
        marginTop: vw(0),
        marginBottom: vw(100)
    },
    footer: {
        position: 'absolute',
        bottom: vw(5.56),
        width: vw(92.2),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#36363690',
        borderRadius: vw(5),
        left: vw(3.9)
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
    //   width: vw(94),
    },
    blurViewStyle: {
        position: 'absolute',
        bottom: 0,
        width: vw(92.2),
        height: vw(20),
        left: 0,
        top:0,
        right: 0
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    }
});

export default Topics;