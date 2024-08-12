import React, {useState, useRef,useEffect, createRef} from 'react';
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
    Animated,
    findNodeHandle,
    Dimensions,
    BackHandler,
    Modal
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { vh, vw } from 'react-native-css-vh-vw';
import { BlurView } from '@react-native-community/blur';
import Svg, { Path, G, Circle, Rect } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard';
import { ListItem } from 'react-native-elements';
import { SwipeListView, Sw} from 'react-native-swipe-list-view';
import { NavigationRouteContext } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Details = ({navigation}) => {
    
    const statusBarHeight = getStatusBarHeight();
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const backgroundImageRef = createRef()
    const data = [{
        text: 'The terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written, the entire all previous agreements and understandings, whether oral or written',
        readMore: true
    }];
    const friendArray = [
        { left: 6.11, avatarUrl: require('../../../../assets/images/card10.png') },
        { left: 12.22, avatarUrl: require('../../../../assets/images/card5.png') },
        { left: 18.33, avatarUrl: require('../../../../assets/images/avatar(1).png') },
    ];
    const document = [
        {
            text: 'Background',
            sort: 'Iron',
            percent: 2
        },
        {
            text: 'Hair',
            sort: 'Mask',
            percent: 2
        },
        {
            text: 'Emotion',
            sort: 'Toxic',
            percent: 2
        },
        {
            text: 'Face',
            sort: 'Green',
            percent: 2
        },
        {
            text: 'Body',
            sort: 'Sad',
            percent: 2
        },
        {
            text: 'Skeleton',
            sort: 'Box',
            percent: 2
        },
    ];
    const voice = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: false
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: false
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            rise: false
        },
    ];
    const links = [
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'Sale',
            statement: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'List',
            statement: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'Offer',
            statement: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'Canceled',
            statement: true
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'Sale',
            statement: true
        },
        {
            text1: 'Sale and sent to',
            text2: ' 0shxjxq72618782 -',
            text3: ' 04.12.2023, 14:04',
            statement: false
        },
        {
            avatar: require('../../../../assets/images/follow2.png'),
            walletAddress: "0x63Z...2dcd1",
            sol: 181,
            percent: 23,
            state: 'Offer',
            statement: true
        },
    ];

    const [selected, setSelected] = useState('Community');
    const [showModals, setShowModals] = useState(false);
    const [friendData, setFriendData] = useState({
        avatar: require('../../../../assets/images/card9.png'),
        userName: 'Fernado TOYs',
        displayName: '66,2k Members – 272 Active',
        online: true,
        btnName: [
            {
                name: 'Joined',
                draw: <Svg width={vw(2.8)} height={vw(1.7)} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1 1L5 5L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,                
                // navigationName: 'Account',
            }
        ],
        text: 'The terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written.',
        
    });
    const [friendsAvatars, setFriendsAvatars] = useState(friendArray);
    const [sortBtn, setSortBtn] = useState([
        {
            mame: 'Overview',
            selected: true,
            backImg: require('../../../../assets/images/back01.png'),
            img: require('../../../../assets/images/card11.png'),
        },
        {
            mame: 'Properites',
            selected: false,
            backImg: require('../../../../assets/images/back02.png'),
            img: require('../../../../assets/images/card12.png'),
        },
        {
            mame: 'Offers',
            selected: false,
            backImg: require('../../../../assets/images/back01.png'),
            img: require('../../../../assets/images/card11.png'),
        },
        {
            mame: 'Activity',
            selected: false,
            backImg: require('../../../../assets/images/back03.png'),
            img: require('../../../../assets/images/card1.png'),
        },
    ]);
    const [routerName, setRouterName] = ['GroupAccount']
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [state, setState] = useState('Media');
    const [nftAvatars, setNftAvatars] = useState(data);
    const [documentData, setDocumentData] = useState(document);
    const [voiceData, setVoiceData] = useState(voice);
    const [linkData, setLinkData] = useState(links);
    const [intervalId, setIntervalId] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [screenX, setScreenX] = useState(new Animated.Value(0));
    const [allView, setAllView] = useState(0);
    const [screenY, setScreenY] = useState(new Animated.Value(1));
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dy) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
                let num =0
                // console.log('onPanResponderRelease', evt, gestureState);
                if (gestureState.dy > 0){
                    console.log('down')
                } else {
                    console.log('up')
                    // setAllView(1)
                    // Animated.timing(screenY, {
                    //     toValue: -0.3*SCREEN_HEIGHT,
                    //     duration: 250,
                    //     useNativeDriver: true,
                    // }).start();
                }
            },
        })
    ).current;
    const handleTabPress = (index) => {
        setActiveTab(index);
        Animated.timing(screenX, {
          toValue: -index * SCREEN_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }).start();
        // console.log(activeTab);
      };
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
    const DocumentItem = ({item, index}) => {
        // const handleDelete = (id) => {
        //     setDocumentData(prevFriends => {
        //     const newFriends = [...prevFriends];
        //     let index = newFriends.findIndex(friend => friend.id === id);
        //     if (index !== -1) {
        //         newFriends.splice(index, 1);
        //         for (let i = index; i < newFriends.length; i++) {
        //         if (newFriends[i].id > id) {
        //             newFriends[i].id -= 1;
        //         }
        //         }
        //     }
        //     return newFriends;
        //     });
        // };
        
        // const pan = new Animated.ValueXY();
        // const panResponder = useRef(
        //     PanResponder.create({
        //         onMoveShouldSetPanResponder: (evt, gestureState) => {
        //             // console.log('onMoveShouldSetPanResponder', evt, gestureState);
        //             return Math.abs(gestureState.dx) > 5;
        //         },
        //         onPanResponderRelease: (evt, gestureState) => {
        //             let num = 0;
        //             // console.log('onPanResponderRelease', evt, gestureState);
        //             // console.log('length: ', descriptions.length);
        //             if (gestureState.dx > 0) {
        //                 // console.log('dx>0', gestureState.dx);
        //                 setDocumentData(prevFriend => {
        //                     const newFriends = [...prevFriend];
        //                     newFriends[index].dragged = false;
        //                     return newFriends;
        //                 });
        //             } else {
        //                 // console.log('dx<0', gestureState.dx);
        //                 setDocumentData(prevFriend => {
        //                     const newFriends = [...prevFriend];
        //                     newFriends[index].dragged = true;
        //                     return newFriends;
        //                 });
        //                 Animated.spring(pan.x, { toValue: 0, useNativeDriver: true }).start();
        //             }
        //         },
        //     })
        // ).current;
        // const handleBack = () => {
        //     setDocumentData(prevFriend => {
        //         const newFriends = [...prevFriend];
        //         newFriends[index].dragged = false;
        //         return newFriends;
        //     });
        // }
        return (
            <View style = {[styles.documentItem, {paddingLeft: vw(5), paddingRight: vw(5), backgroundColor: '#181818'}]}>
            {/* <Animated.View 
                {...panResponder.panHandlers}
                style={[styles.documentItem, {
                transform: [{ translateX: pan.x }], backgroundColor: item.dragged ? '#53FAFB': '#53FAFB10'
                }]} 
                key = {item}
            > */}
                {/* <View style = {[styles.userInfo, {alignItems: 'center', width}]}> */}
                    <Text style = {[styles.footerText, {color: '#707070', width: vw(20)}]}>
                        {item.text}
                    </Text>
                    <Text style = {[styles.footerText, {width: vw(20), textAlign: 'center'}]}>
                        {item.sort}
                    </Text>
                    <View style = {{width: vw(20), alignItems: 'flex-end'}}>
                        <Text style = {[styles.footerText, {backgroundColor: '#53FAFB20', borderRadius: vw(5), padding: vw(1), paddingLeft: vw(3.6), paddingRight: vw(3.6), color: '#53FAFB'}]}>
                            {item.percent}%
                        </Text>
                    </View>
                {/* </View> */}
            {/* </Animated.View> */}
            </View>
        );
    };
    const VoiceItem = ({item, index}) => {
        const [dragged, setDragged] = useState(false);
        const [direct, setDirection] = useState('');
        const items = [item]
        // console.log(items);
        // const handleDelete = (id) => {
        //     setVoiceData(prevFriends => {
        //     const newFriends = [...prevFriends];
        //     let index = newFriends.findIndex(friend => friend.id === id);
        //     if (index !== -1) {
        //         newFriends.splice(index, 1);
        //         for (let i = index; i < newFriends.length; i++) {
        //         if (newFriends[i].id > id) {
        //             newFriends[i].id -= 1;
        //         }
        //         }
        //     }
        //     return newFriends;
        //     });
        // };
        // const renderHiddenItem = (data, rowMap) => {
        //     const swipeAnimatedValue = new Animated.Value(0);
        //     const backgroundColor = swipeAnimatedValue.interpolate({
        //       inputRange: [-75, 0, 75],
        //       outputRange: ['black', 'black', 'blue'],
        //     });
        
        //     return (
        //       <Animated.View
        //         style={{
        //           flex: 1,
        //           backgroundColor: backgroundColor,
        //           justifyContent: 'flex-end',
        //           flexDirection: 'row',
        //           width: vw(90)
        //         }}
        //       >
        //       <TouchableOpacity
        //         style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: vw(13.3), height: vw(13.3), borderRadius: vw(15), marginTop: vw(0.5), marginRight: vw(0.5) }}
        //         onPress={() => handleDelete(data.item.id)}
        //       >
        //           {/* <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        //               <Path d="M7.66667 1H14.3333M1 4.33333H21M18.7778 4.33333L17.9986 16.0214C17.8817 17.775 17.8232 18.6518 17.4445 19.3167C17.111 19.902 16.608 20.3725 16.0018 20.6663C15.3133 21 14.4346 21 12.6771 21H9.32295C7.56545 21 6.6867 21 5.99815 20.6663C5.39195 20.3725 4.88899 19.902 4.55554 19.3167C4.17679 18.6518 4.11834 17.775 4.00143 16.0214L3.22222 4.33333M8.77778 9.33333V14.8889M13.2222 9.33333V14.8889" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        //           </Svg> */}
        //           <Image source = {require('../../../../assets/images/follow2.png')}
        //             style = {{width: vw(13.3), height: vw(13.3), borderRadius: vw(10)}}/>
        //       </TouchableOpacity>
        //       <View style = {{width:vw(60)}}/>
        //         <TouchableOpacity
        //           style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: vw(13.3), height: vw(13.3), borderRadius: vw(15), marginTop: vw(0.5), marginRight: vw(0.5) }}
        //           onPress={() => handleDelete(data.item.id)}
        //         >
        //             <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <Path d="M7.66667 1H14.3333M1 4.33333H21M18.7778 4.33333L17.9986 16.0214C17.8817 17.775 17.8232 18.6518 17.4445 19.3167C17.111 19.902 16.608 20.3725 16.0018 20.6663C15.3133 21 14.4346 21 12.6771 21H9.32295C7.56545 21 6.6867 21 5.99815 20.6663C5.39195 20.3725 4.88899 19.902 4.55554 19.3167C4.17679 18.6518 4.11834 17.775 4.00143 16.0214L3.22222 4.33333M8.77778 9.33333V14.8889M13.2222 9.33333V14.8889" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        //             </Svg>
        //         </TouchableOpacity>
        //       </Animated.View>
        //     );
        //   };
        // const renderItem = (data) => {
        //     // console.log(data.item.state);
        //     return (
        //     <View style={[styles.voicedataStyle, { width: dragged ? vw(72) : vw(90),  left: dragged && direct == 'left' ? vw(17) : 0, right: dragged && direct == 'right' ? 0 : 0-vw(17),}]}>
        //          <View style = {[styles.vicCard, {width: dragged? vw(72.2): vw(90), backgroundColor: data.item.state == 'run' ? "#53FAFB" : '#172727'}]}>
        //              {
        //                  data.item.state == 'run' ?
        //                  <TouchableOpacity 
        //                      onPress = {() => 
        //                          setVoiceData(prevData => {
        //                              const newData = [...prevData];
        //                              newData[index] = voice[1];
        //                              return newData;
        //                          })
        //                      }
        //                  >
        //                      <Svg width={vw(8.9)} height={vw(8.9)} viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
        //                          <Path d="M12.1885 20.5V11.5M19.6885 20.5V11.5M30.9385 16C30.9385 24.2843 24.2227 31 15.9385 31C7.65421 31 0.938477 24.2843 0.938477 16C0.938477 7.71573 7.65421 1 15.9385 1C24.2227 1 30.9385 7.71573 30.9385 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        //                      </Svg>
        //                  </TouchableOpacity>
        //                  :
        //                  <TouchableOpacity 
        //                      onPress = {() => 
        //                          setVoiceData(prevData => {
        //                              const newData = [...prevData];
        //                              newData[index] = voice[0];
        //                              return newData;
        //                          })
        //                      }
        //                  >
        //                      <Svg width={vw(9.1)} height={vw(9.1)} viewBox="0 0 33 32" fill="none" xmlns="http:www.w3.org/2000/svg">
        //                          <Path d="M16.4385 31C24.7227 31 31.4385 24.2843 31.4385 16C31.4385 7.71573 24.7227 1 16.4385 1C8.15421 1 1.43848 7.71573 1.43848 16C1.43848 24.2843 8.15421 31 16.4385 31Z" stroke="#53FAFB50" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        //                          <Path d="M12.6885 11.448C12.6885 10.7321 12.6885 10.3741 12.8381 10.1743C12.9685 10.0001 13.168 9.89115 13.385 9.87565C13.6341 9.85787 13.9352 10.0514 14.5374 10.4386L21.6183 14.9906C22.1409 15.3265 22.4021 15.4945 22.4924 15.7081C22.5712 15.8947 22.5712 16.1053 22.4924 16.2919C22.4021 16.5055 22.1409 16.6735 21.6183 17.0094L14.5374 21.5614C13.9352 21.9486 13.6341 22.1421 13.385 22.1243C13.168 22.1088 12.9685 21.9999 12.8381 21.8257C12.6885 21.6259 12.6885 21.2679 12.6885 20.552V11.448Z" stroke="#53FAFB50" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        //                      </Svg>
        //                  </TouchableOpacity>
        //              }
        //              <Text style = {[styles.voiceRunTime, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
        //                  {data.item.playedTime}
        //              </Text>
        //              {dragged?
        //               <Svg width={vw(26.94)} height={vw(4.44)} viewBox="0 0 97 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <Rect opacity="0.66" x="0.438477" y="4" width="2" height="8" rx="1" fill="black"/>
        //                 <Rect opacity="0.66" x="6.43848" y="1" width="2" height="14" rx="1" fill="black"/>
        //                 <Rect opacity="0.66" x="12.4385" y="6" width="2" height="4" rx="1" fill="black"/>
        //                 <Rect opacity="0.66" x="18.4385" y="1" width="2" height="14" rx="1" fill="black"/>
        //                 <Rect opacity="0.66" x="24.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="30.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="36.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="42.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="48.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="54.4385" width="2" height="16" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="60.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="66.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="72.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="78.4385" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="84.4385" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
        //                 <Rect opacity="0.66" x="90.4385" y="7" width="2" height="2" rx="1" fill="#00C1C3"/>
        //               </Svg>
        //              :data.item.display}
        //              {
        //                  data.item.state == 'run' ?
        //                  <View style = {styles.speed}>
        //                      <Text style = {[styles.speedText, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
        //                          {data.item.speed}
        //                      </Text>
        //                  </View>
        //                  :
        //                  <Text style = {[styles.voiceRunTime, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
        //                      {data.item.remainedTime}
        //                  </Text>
        //              }
        //              <Svg width={vw(0.83)} height={vw(3.3)} viewBox="0 0 3 12" fill="none" xmlns="http:www.w3.org/2000/svg">
        //                  <Path d="M1.49995 5.43837C1.1898 5.43837 0.938371 5.68979 0.938371 5.99994C0.938371 6.31009 1.1898 6.56152 1.49995 6.56152C1.8101 6.56152 2.06152 6.31009 2.06152 5.99994C2.06152 5.68979 1.8101 5.43837 1.49995 5.43837Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
        //                  <Path d="M1.49995 9.3694C1.1898 9.3694 0.938371 9.62083 0.938371 9.93098C0.93837 10.2411 1.1898 10.4926 1.49995 10.4926C1.8101 10.4926 2.06152 10.2411 2.06152 9.93098C2.06152 9.62083 1.8101 9.3694 1.49995 9.3694Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
        //                  <Path d="M1.49995 1.50733C1.1898 1.50733 0.938371 1.75876 0.938371 2.06891C0.938371 2.37906 1.1898 2.63048 1.49995 2.63048C1.8101 2.63048 2.06152 2.37906 2.06152 2.06891C2.06152 1.75876 1.8101 1.50733 1.49995 1.50733Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
        //              </Svg>
        //          </View>
        //          <Text style = {styles.uploadText}>
        //              {data.item.uploadingDate}
        //          </Text>
        //     </View>
        // );}
        // onSwipeValueChange = (swipeData) => {
        //     const { key, value, direction } = swipeData;
        //     if (value < -30 || value > 30){
        //         setDragged(true)
        //         setDirection(direction);
        //     } 
        //     else {
        //         setDragged(false)}
        //     // console.log(direction)
        // }
        return (
            <View style = {{width: vw(90), flexDirection: 'row',}}>
                {/* <SwipeListView
                data={items}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={vw(17)}
                rightOpenValue={0-vw(17)}
                onSwipeValueChange={onSwipeValueChange}
                /> */}
                
            <View style = {[styles.documentItem, {paddingLeft: vw(5), paddingRight: vw(5), backgroundColor: '#181818'}]}>
            {/* <Animated.View 
                {...panResponder.panHandlers}
                style={[styles.documentItem, {
                transform: [{ translateX: pan.x }], backgroundColor: item.dragged ? '#53FAFB': '#53FAFB10'
                }]} 
                key = {item}
            > */}
                {/* <View style = {[styles.userInfo, {alignItems: 'center', width}]}> */}
                    <View style = {{width: vw(40), flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress = {handleFriendProfile}>
                            <Image source = {item.avatar} style = {{width: vw(8.9), height: vw(8.9), borderRadius: vw(5), flexDirection: 'row', alignItems: 'center'}}/>
                        </TouchableOpacity>
                        <Text numberOfLines={1} ellipsizeMode='middle' style = {[styles.footerText, {marginLeft: vw(2),}]}>
                            {item.walletAddress}
                        </Text>
                    </View>
                    <View style = {{width: vw(20), flexDirection: 'row', alignItems: 'center',  justifyContent:'center'}}>
                        <Svg width={vw(3.6)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M10.1369 2.43087H0.5L2.93809 0H12.575L10.1369 2.43087ZM10.1369 10H0.5L2.93809 7.57033H12.575M2.93809 6.21544H12.575L10.1369 3.78456H0.5" fill="#50FFFF"/>
                        </Svg>
                        <Text style = {[styles.footerText, {marginLeft: vw(2)}]}>
                            {item.sol}
                        </Text>
                    </View>
                    <View style = {{width: vw(14.72), alignItems: 'flex-end', backgroundColor: item.rise ? '#53FAFB10' : '#FF525210', borderRadius: vw(5), padding: vw(1), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        {
                            item.rise ?
                            <Svg width={vw(2.2)} height={vw(1.4)} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 3.32858L3.82843 0.146595C4.02369 -0.0486668 4.34027 -0.0486668 4.53553 0.146595L7.71751 3.32858C7.91278 3.52384 7.91278 3.84042 7.71751 4.03568C7.52225 4.23094 7.20567 4.23094 7.01041 4.03568L4.18198 1.20726L1.35355 4.03568C1.15829 4.23094 0.841709 4.23094 0.646447 4.03568C0.451184 3.84042 0.451184 3.52384 0.646447 3.32858Z" fill="#50FFFF"/>
                            </Svg>
                            :
                            <Svg width={vw(2.2)} height={vw(1.4)} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.71757 0.853553L4.53559 4.03553C4.34032 4.2308 4.02374 4.2308 3.82848 4.03553L0.646499 0.853553C0.451237 0.658291 0.451237 0.341709 0.646499 0.146446C0.841762 -0.0488159 1.15834 -0.0488158 1.35361 0.146446L4.18203 2.97487L7.01046 0.146447C7.20572 -0.0488156 7.5223 -0.0488156 7.71757 0.146447C7.91283 0.341709 7.91283 0.658291 7.71757 0.853553Z" fill="#FF5252"/>
                            </Svg>
                        }
                        <Text style = {[styles.footerText, { color: item.rise ? '#53FAFB' : '#ff5252'}]}>
                            {item.percent}%
                        </Text>
                    </View>
                {/* </View> */}
            {/* </Animated.View> */}
            </View>
            </View>
        )
    }
    const LinkItem = ({item}) => {
        return (
                item.statement ?
                <View style = {[styles.documentItem, {paddingLeft: vw(5), paddingRight: vw(5), backgroundColor: '#181818'}]}>
            {/* <Animated.View 
                {...panResponder.panHandlers}
                style={[styles.documentItem, {
                transform: [{ translateX: pan.x }], backgroundColor: item.dragged ? '#53FAFB': '#53FAFB10'
                }]} 
                key = {item}
            > */}
                {/* <View style = {[styles.userInfo, {alignItems: 'center', width}]}> */}
                    <View style = {{width: vw(40), flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress = {handleFriendProfile}>
                            <Image source = {item.avatar} style = {{width: vw(8.9), height: vw(8.9), borderRadius: vw(5), flexDirection: 'row', alignItems: 'center'}}/>
                        </TouchableOpacity>
                        <Text numberOfLines={1} ellipsizeMode='middle' style = {[styles.footerText, {marginLeft: vw(2),}]}>
                            {item.walletAddress}
                        </Text>
                    </View>
                    <View style = {{width: vw(20), flexDirection: 'row', alignItems: 'center',  justifyContent:'center'}}>
                        <Svg width={vw(3.6)} height={vw(2.8)} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M10.1369 2.43087H0.5L2.93809 0H12.575L10.1369 2.43087ZM10.1369 10H0.5L2.93809 7.57033H12.575M2.93809 6.21544H12.575L10.1369 3.78456H0.5" fill="#50FFFF"/>
                        </Svg>
                        <Text style = {[styles.footerText, {marginLeft: vw(2)}]}>
                            {item.sol}
                        </Text>
                    </View>
                    
                    <Text style = {[styles.footerText, { color: item.state != 'Canceled' ? '#53FAFB' : '#ff5252'}]}>
                        {item.state}
                    </Text>
                {/* </View> */}
            {/* </Animated.View> */}
                </View>
                :
                <View style = {{flexDirection: 'row', marginLeft: vw(5), marginBottom: vw(2.8)}}>
                    <Text style = {[styles.footerText, { color: '#606060', fontSize: vw(2.8)}]}>
                        {item.text1}
                    </Text>
                    <Text style = {[styles.footerText, { color: 'white', fontSize: vw(2.8)}]}>
                        {item.text2}
                    </Text>
                    <Text style = {[styles.footerText, { color: '#606060', fontSize: vw(2.8)}]}>
                        {item.text3}
                    </Text>
                </View>
        )
    }
    useEffect(() => {
      const backAction = () => {
        setShowBlur(false);
  
        setTimeout(() => {
          navigation.goBack();
        }, 300); // Delay the back action by one second
  
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
    
          return () => {
            clearTimeout(timerId);
          };
        }, [showBlur])
      );
    useEffect(() => {
        const switchPage = setTimeout(() => {
            setShowBlur(!showBlur);
        }, 3); // 10 seconds in milliseconds
        console.log(showBlur);
        return () => clearTimeout(switchPage);
      }, [NavigationRouteContext]);
    const renderBlurView = () => {
        // console.log(viewRef);
        return (
            <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    blurAmount={9}
                    // blurType={blurType}
                    // blurAmount={8}
                    // downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .2)'}
                />
            </View>
        );
    }        
    const navigateAndAnimate = () => {
      if (allView === 0) {
        navigation.navigate('FriendSearchLoading');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.goBack();
          }, 50); // Adjust the delay as needed
          return () => {
            clearTimeout(timerId);
          };
      } else {
        setAllView(0);
        Animated.timing(screenY, {
          toValue: 0 * SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
  
    };
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
    const handleNavigateChat = () => {
        
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
    const handleNavigateCommunity = () => {
        
        setSelected('Community');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoCommunity');
        }, 30); // Adjust the delay as needed
        return () => {
        clearTimeout(timerId);
        };
    }
    const navigateCollet = () => {
        
        setSelected('Community');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('Buy');
        }, 30); // Adjust the delay as needed
        return () => {
        clearTimeout(timerId);
        };
    }
    const navigateBack = () => {
        
        setSelected('Community');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.goBack();
        }, 30); // Adjust the delay as needed
        return () => {
        clearTimeout(timerId);
        };
    }
    return (
        <SafeAreaView {...panResponder.panHandlers}>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <Modal visible={showModals} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModals(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(15)-statusBarHeight), width: vw(50)}]}>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Members'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Members&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Overview'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Overview&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('MemberPermission'), setShowBlur(false), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3), textAlign: 'center'}]}>
                                &nbsp;&nbsp;Community Settings&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style = {[styles.header, {zIndex: allView == 1 ? 1 : 0}]}>
                    {allView == 0 && 
                        sortBtn.map((item, index) => 
                        <View key={index}
                            style = {{
                                position: 'absolute',
                                top: 0,
                                width: vw(100),
                                height: vw(70)
                            }}
                        >
                            {item.selected && 
                            <Image source = {item.backImg}
                            style = {styles.backImage}
                            blurRadius={25}
                            />}
                        </View>
                        )
                    }
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {[styles.prevButton]}
                            onPress = { navigateBack }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            {allView ==0 ? 'Supernova ITALY †' : sortBtn[activeTab].mame}
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent', alignItems: 'flex-end'}]}
                            onPress = {() => setShowModals(!showModals)}
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
                    {/* {allView == 0 ? */}
                        <View style = {styles.friendInfo}>
                            <View style = {styles.markImgStyle}>
                                {sortBtn.map((item, index) => 
                                    item.selected && 
                                        <ImageBackground key = {index} source = {item.img} style = {styles.markImg}>
                                        <View style = {styles.time}>
                                            <Svg width={vw(5)} height={vw(5.3)} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M8.87406 4.65778V9.49992L12.1022 11.114M16.9443 9.49992C16.9443 13.957 13.3311 17.5702 8.87406 17.5702C4.417 17.5702 0.803833 13.957 0.803833 9.49992C0.803833 5.04285 4.417 1.42969 8.87406 1.42969C13.3311 1.42969 16.9443 5.04285 16.9443 9.49992Z" stroke="white" stroke-width="1.46731" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                            <Text style = {[styles.title, {fontSize: vw(2.8)}]}>
                                                10h : 29m : 00s
                                            </Text>
                                        </View>
                                        <View style = {styles.favorite}>
                                            <View style = {styles.heart}>
                                                <Svg width={vw(5)} height={vw(4.7)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.99418 2.77985C7.29473 0.832 4.46078 0.308035 2.33149 2.09168C0.202198 3.87532 -0.0975778 6.85748 1.57457 8.967C3.24671 11.0765 8.99418 16 8.99418 16C8.99418 16 14.7416 11.0765 16.4138 8.967C18.0859 6.85748 17.8228 3.85656 15.6569 2.09168C13.491 0.326798 10.6936 0.832 8.99418 2.77985Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </Svg>
                                                <Text style = {[styles.downloadsize, {fontSize: vw(2.8)}]}>
                                                    28.4k
                                                </Text>
                                            </View>
                                            <View style = {styles.heart}>
                                                <Svg width={vw(4.44)} height={vw(4.2)} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M14.6619 7.9693C14.8493 7.80763 14.9431 7.72679 14.9774 7.6306C15.0075 7.54617 15.0075 7.45382 14.9774 7.3694C14.9431 7.27321 14.8493 7.19237 14.6619 7.0307L8.15725 1.42097C7.83456 1.14268 7.67321 1.00353 7.53661 1.00012C7.41789 0.997156 7.3045 1.04963 7.22947 1.14225C7.14314 1.24883 7.14314 1.46264 7.14314 1.89027V5.20889C5.50394 5.49742 4.00369 6.33315 2.88879 7.58797C1.67331 8.95602 1.00095 10.7264 1 12.5614V13.0343C1.80578 12.0576 2.81185 11.2677 3.94929 10.7187C4.95211 10.2346 6.03616 9.94792 7.14314 9.87236V13.1097C7.14314 13.5374 7.14314 13.7512 7.22947 13.8577C7.3045 13.9504 7.41789 14.0028 7.53661 13.9999C7.67321 13.9965 7.83456 13.8573 8.15725 13.579L14.6619 7.9693Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </Svg>
                                                <Text style = {[styles.downloadsize, {fontSize: vw(2.8)}]}>
                                                    121.9k
                                                </Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                )}
                            </View>
                            <View style = {styles.friend}>
                                {/* <View style = {{borderRadius: vw(11.3), overflow:'hidden'}}> */}
                                {/* </View> */}
                                <View style = {styles.info}>
                                    <TouchableOpacity onPress = {handleFriendProfile}>
                                        <Image
                                            source = {friendData.avatar}
                                            style = {styles.friendAvatar}
                                        />
                                    </TouchableOpacity>
                                    <View style = {{flexDirection: 'column', alignItems:'flex-start'}}>
                                        <Text style = {[styles.headerTitle,{fontSize: vw(5)}]}>
                                            {friendData.userName}&nbsp;
                                        </Text>
                                        <Text style = {[styles.text, {color: 'white'}]}>
                                            {friendData.displayName}
                                        </Text>
                                    </View>
                                </View>
                                <View style = {styles.btnsStyle}>
                                    {
                                        friendData.btnName.map((item, index) => 
                                        <TouchableOpacity 
                                            key = {index}
                                            style = {[styles.btnStyle, {backgroundColor: index == 0? '#53FAFB' : '#FFFFFF10'}]}
                                            onPress = {() => {navigation.navigate(item.navigationName),
                                                setRouterName(item.navigationName)
                                                setShowBlur(false);
                                            }}
                                        >
                                            {item.avatar}
                                            <Text style = {[styles.text, {color: index == 0? 'black' : 'white'}]}>
                                            &nbsp;&nbsp;{item.name}&nbsp;&nbsp;
                                            </Text>
                                            {item.draw}
                                        </TouchableOpacity>
                                    )
                                    }
                                </View>
                            </View>
                            <View style = {styles. myInfo}>
                                <View style = {[styles.friend, {marginTop: vw(0), height:vw(11)}]}>
                                    <View style = {styles.info}>
                                        <TouchableOpacity onPress = {handleFriendProfile}>
                                            <Image
                                                source = {require('../../../../assets/images/follow1.png')}
                                                style = {[styles.friendAvatar, {width: vw(7.5), height: vw(7.5), borderRadius: 0}]}
                                            />
                                        </TouchableOpacity>
                                        <View style = {{flexDirection: 'column', alignItems:'flex-start', justifyContent: 'space-around'}}>
                                            <Text style = {[styles.text, {color: 'white'}]}>
                                                Kemoutyo&nbsp;
                                            </Text>
                                            <Text style = {[styles.text, {color: 'white'}]}>
                                                21,2k Followers
                                            </Text>
                                        </View>
                                    </View>
                                    <View style = {styles.btnsStyle}>
                                        <Text style = {[styles.downloadsize, {color: '#606060',fontSize: vw(3.3)}]}>
                                            Current Bid
                                        </Text>
                                    </View>
                                </View>
                                <View style = {styles.money}>
                                    <Text style = {styles.title}>
                                        Supernova ITALY †
                                    </Text>
                                    <View style = {styles.nft}>
                                        <View style = {styles.nftAmount}>
                                            <Text style = {[styles.title, {fontSize: vw(3.9)}]}>
                                                7,12 SOL
                                            </Text>
                                            <Text style = {[styles.footerText, {fontSize: vw(2.8)}]}>
                                                3 212 USD
                                            </Text>
                                        </View>
                                        <Svg width={vw(6.1)} height={vw(5)} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M17.0608 4.86292H0.678101L4.82282 0.730469H21.2055L17.0608 4.86292ZM17.0608 17.7303H0.678101L4.82282 13.5999H21.2055M4.82282 11.2966H21.2055L17.0608 7.16418H0.678101" fill="#53FAFB"/>
                                        </Svg>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* // : */}
                        {/* // <View style = {{height: vw(68.72)}}/> */}
                    {/* } */}
                    <View style = {styles.avatarData}>
                        <View style = {styles.sortbtn}>
                            {
                                sortBtn.map((item, index) => 
                                    <TouchableOpacity 
                                        key = {index} 
                                        style = {[styles.btn,{backgroundColor: item.selected ? '#53FAFB10': 'transparent'}]}
                                        onPress={() => {
                                            setState(item.mame);
                                            handleTabPress(index);
                                            // navigation.navigate('Documents');
                                            setSortBtn(prevBtn => {
                                                const newBtn = [...prevBtn];
                                                for (i = 0; i< sortBtn.length; i++){
                                                    newBtn[i].selected = false;
                                                }
                                                newBtn[index].selected = !(newBtn[index].selected);
                                        // console.log(newBtn);
                                                return newBtn;
                                            });}
                                        }
                                    >
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3), color: item.selected? 'white': '#606060'}]}>
                                            {item.mame}
                                        </Text>
                                     </TouchableOpacity>
                                )
                            }
                        </View>
                            {/* {
                                allView == 0 ? */}
                            <Animated.View style = {[styles.dwnBtns, {transform: [{ translateX: screenX }, ], flexDirection: 'row', width: vw(400), overflow: 'hidden'}]}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style = {{width: SCREEN_WIDTH}}>
                                    <View style = {styles.nftAvatar}>
                                        {
                                            nftAvatars.map((items, index) =>
                                                <View key = {index} style = {[styles.userInfo, {alignItems: 'center'}]}>
                                                    <Text style = {[styles.footerText, {color: '#707070',}]}>
                                                        {items.text}&nbsp;&nbsp;
                                                        {items.readMore && 
                                                        <Text style = {[styles.footerText, ]}>
                                                            ReadMore
                                                        </Text>
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                    <View style = {styles.btnArray}>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3)}]}>
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5)}]}> Place a Bid</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), backgroundColor: '#53FAFB'}]}
                                            onPress = {navigateCollet}
                                        >
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: 'black', fontFamily: 'TT Firs Neue Trial DemiBold'}]}> Collect Now!</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{width: SCREEN_WIDTH}}>
                                    <View style = {{marginBottom: vw(8.6)}}>
                                    {
                                        documentData.map((item, index) =>
                                            <DocumentItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    </View>
                                    <View style = {styles.btnArray}>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), justifyContent: 'space-around'}]}>
                                            <Svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M3.4 4.9H0.1V3.8H3.4V0.299999H4.6V3.8H7.9V4.9H4.6V8.4H3.4V4.9Z" fill="white"/>
                                            </Svg>
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5)}]}>0.00 SOL</Text>
                                                <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M0.395313 0.3H7.59531V1.5H0.395313V0.3Z" fill="white"/>
                                                </Svg>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), backgroundColor: '#53FAFB'}]}
                                            onPress = {navigateCollet}
                                        >
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: 'black', fontFamily: 'TT Firs Neue Trial DemiBold'}]}>Buy Now!</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{width: SCREEN_WIDTH}}>
                                    <View style = {{marginBottom: vw(8.6)}}>
                                    {
                                        voiceData.map((item, index) =>
                                            <VoiceItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    </View>
                                    <View style = {styles.btnArray}>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), justifyContent: 'space-around'}]}>
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5)}]}>Place a Bid</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), backgroundColor: '#53FAFB'}]}
                                            onPress = {navigateCollet}
                                        >
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: 'black', fontFamily: 'TT Firs Neue Trial DemiBold'}]}>Buy Now!</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{width: SCREEN_WIDTH}}>
                                    {
                                        linkData.map((item,index) => 
                                            <LinkItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    <View style = {styles.btnArray}>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), justifyContent: 'space-around'}]}>
                                            <Svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M3.4 4.9H0.1V3.8H3.4V0.299999H4.6V3.8H7.9V4.9H4.6V8.4H3.4V4.9Z" fill="white"/>
                                            </Svg>
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5)}]}>0.00 SOL</Text>
                                                <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M0.395313 0.3H7.59531V1.5H0.395313V0.3Z" fill="white"/>
                                                </Svg>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {[styles.OpacityBtn, {width: vw(38.3), backgroundColor: '#53FAFB'}]}>
                                            <Text style = {[styles.btnText, {fontSize: vw(3.5), color: 'black', fontFamily: 'TT Firs Neue Trial DemiBold'}]}>Place a Bid</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style ={{height: vw(30)}}/>
                                </View>
                            </Animated.View>
                                    {/* :
                                    <Animated.View style = {[styles.dwnBtns, {transform: [{ translateX: screenX }, ], flexDirection: 'row', width: vw(400), height: vh(75), overflow: 'hidden'}]}
                                        showsVerticalScrollIndicator={false}
                                    >
                                    <View style = {{width: SCREEN_WIDTH}}>
                                        <View style = {styles.nftAvatar}>
                                            {
                                                nftAvatars.map((items, index) =>
                                                    <TouchableOpacity 
                                                        key = {index}
                                                        style = {styles.item}
                                                        onPress = {() =>{ navigation.navigate('MediaView');
                                                        setShowBlur(false);
                                                    }}
                                                    >
                                                        <Image source = {items.avatarUrl}
                                                            style = {styles.item}
                                                            key = {index}
                                                        />
                                                    </TouchableOpacity>
                                                    
                                                )
                                            }
                                        </View>
                                        <View style = {{height: vw(20)}}/>
                                    </View>
                                    <View style = {{width: SCREEN_WIDTH}}>
                                    {
                                        documentData.map((item, index) =>
                                            <DocumentItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    <View style = {{height: vw(20)}}/>
                                    </View>
                                    <View style = {{width: SCREEN_WIDTH}}>
                                    {
                                        voiceData.map((item, index) =>
                                            <VoiceItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    </View>
                                    <View style = {{width: SCREEN_WIDTH}}>
                                    {
                                        linkData.map((item,index) => 
                                            <LinkItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    <View style = {{height: vw(20)}}/>
                                    </View>
                                    </Animated.View> */}
                            {/* } */}
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
                        onPress = {handleNavigateCommunity}
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15 13.1974C16.2132 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2502 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4336C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.6102C14.5681 8.99657 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98772 10 7.91665 10C5.84559 10 4.16665 8.32107 4.16665 6.25C4.16665 4.17893 5.84559 2.5 7.91665 2.5C9.98772 2.5 11.6667 4.17893 11.6667 6.25ZM2.13268 15.782C3.46127 13.7871 5.5578 12.5 7.91665 12.5C10.2755 12.5 12.372 13.7871 13.7006 15.782C13.9917 16.219 14.1372 16.4375 14.1205 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18528C2.5718 17.5 2.26505 17.5 2.04202 17.3313C1.86836 17.2 1.72589 16.9339 1.71285 16.7166C1.69609 16.4375 1.84162 16.219 2.13268 15.782Z" stroke={selected == 'Community'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Community' ? '#53FAFB' : "#9D9D9D"}]}>
                            Community
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {handleNavigateChat
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
        backgroundColor: '#101010',
    },
    backImage: {
        width: '100%',
        height: vw(70),
        opacity: 1
        // top: (0-vw(28.1)),
        // zIndex: -4
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(4.2),
        zIndex: 0
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        backgroundColor: '#ffffff20',
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
        paddingLeft: vw(5)
    },
    markImgStyle: {
        width: vw(90),
        height: vw(85),
        borderRadius: vw(10)
    },
    markImg: {
        width: vw(90),
        height: vw(85),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: vw(5),
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        width: vw(34.2),
        height: vw(9.7),
        borderRadius: vw(5),
        backgroundColor: '#270D6308',
        justifyContent: 'space-around',
        borderWidth: vw(0.3),
        borderColor: '#ffffff50'
    },
    favorite: {
        width: vw(7.3),
        height: vw(20.6),
        justifyContent: 'space-between',
    },
    heart: {
        justifyContent: 'space-between',
        height: vw(9.1),
        alignItems: 'center'
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
        // height: vw(68.72),
        paddingTop: vw(5.33),
        paddingBottom: vw(7.22),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    friend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vw(22.2),
        marginTop: vw(12.1)
    },
    friendAvatar: {
        width: vw(10.7),
        height: vw(10.7),
        borderRadius: vw(3),
        marginRight: vw(5)
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
        flexDirection: 'row',
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
        justifyContent: 'flex-end'
    },
    money: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    nft: {
        flexDirection: 'row',
        alignItems:'center',
        width: vw(24.4),
        height: vw(8.46),
        justifyContent: 'space-between',
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
        // marginTop: vw(0),
        // width: vw(90)
    },
    sortbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(90),
    },
    btn: {
        width: vw(20.83),
        height: vw(9.4),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    dwnBtns: {
        // height: vw(120.33),
        width: vw(90),
        flexDirection: 'column',
        marginTop: vw(6.7),
        // marginBottom: vw(50)
        // backgroundColor: 'white'
    },
    documentItem: {
        width: vw(90),
        height: vw(13.9),
        // height: 327/65,
        marginBottom: vw(2.8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#53FAFB10',
        paddingLeft: vw(3),
        paddingRight: vw(2),
        borderRadius: vw(5),
        marginRight: vw(10)
    },
    userInfo: {
        flexDirection: 'row',
        // width: vw(53.88),
        height: vw(21),
        // justifyContent: 'space-between'
    },
    avatar: {
        width: vw(18),
        height: vw(13.9),
        borderRadius: vw(5),
        overflow: 'hidden'
    },
    avatarItem: {
        width: vw(18),
        height: vw(13.9),
    },
    semiAvatarItem: {
        width: vw(5.6),
        height: vw(5.6),
        borderRadius: vw(5),
        marginTop: vw(7.5),
        marginLeft: vw(1.4)
    },
    documentStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: vw(5.6),
        justifyContent: 'center',
        // backgroundColor: '#53FAFB'
    },
    documentName: {
        fontFamily: 'TT Firs Neue Trial Light',
        color: '#DADADA',
        fontSize: vw(3.3)
    },
    documenttime: {
        fontFamily: 'TT Firs Neue Trial Light',
        color: '#979797',
        fontSize: vw(2.2),
        marginTop: vw(1),
    },
    download: {
        height: vw(8.33),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: vw(1)
    },
    downloadBtn: {
        height: vw(8.3),
        paddingLeft: vw(2.5),
        paddingRight: vw(2),
        borderRadius: vw(5),
        backgroundColor: '#53FAFB20',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
    },
    downloadBtntext: {
        flexDirection: 'column',
        marginRight: vw(2),
        alignItems: 'flex-end'
    },
    downloadState: {
        fontFamily: 'TT Firs Neue Trial Light',
        color: '#53FAFB',
        fontSize: vw(1.7)
    },
    downloadsize: {
        fontFamily: 'TT Firs Neue Trial Light',
        color: 'white',
        fontSize: vw(1.7)
    },
    voicedataStyle: {
        width: vw(90),
        flexDirection: 'column',
        height: vw(20.83),
        marginBottom: vw(4.7),
        marginRight: vw(5)
    },
    vicCard: {
        width: vw(90),
        flexDirection: 'row',
        height: vw(13.9),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(2),
        paddingRight: vw(2),
        borderRadius: vw(10)
    },
    voiceRunTime: {
        fontFamily: 'Poppins-Regular',
        fontSize: vw(2.8),
    },
    speed: {
        width: vw(8.9),
        height: vw(8.9),
        borderWidth: vw(0.6),
        color: 'black',
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    speedText: {
        fontFamily: 'Poppins-Medium',
        fontSize: vw(2.2)
    },
    uploadText: {
        marginTop: vw(3.6),
        fontFamily: 'Poppins-Medium',
        fontSize: vw(2.2),
        color: '#797C7B'
    },
    nftAvatar: {
        width: vw(90),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: vw(6),
        marginLeft: vw(1.5),
        marginRight: vw(5),
        marginBottom: vw(17.5)
    },
    item: {
        marginRight: vw(2),
        marginBottom: vw(2),
        width: vw(27.8),
        height: vw(27.8),
        borderRadius: vw(5)
    },
    myFriendsArray: {
        flexDirection: 'row',
        width: vw(65.55),
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    avatarArray: {
        position: 'absolute',
        bottom: vw(9),
        right: vw(95)
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
        height: vw(30),
        left: 0,
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    },
    OpacityBtn: {
        width: vw(42.2),
        aspectRatio: 152/45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(15),
        borderWidth: vw(0.3),
        borderColor: '#53FAFB',
        flexDirection: 'row'
    },
    btnText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.9),
        color: '#53FAFB'
    },
    btnArray: {
        marginTop: vw(7),
        width: vw(84),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(2)
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

export default Details;