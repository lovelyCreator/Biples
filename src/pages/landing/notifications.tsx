import React, {useState, useEffect, useRef} from 'react';
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
    Animated
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';

const Notifications = ({ navigation }) => {

    const [sortBtn, setSortBtn] = useState(
        [
            {
                title: '  All  ',
                unreadMsgNum: 0,
                selected: true
            },
            {
                title: 'Unread',
                unreadMsgNum: 0,
                selected: false
            },
            {
                title: 'Mentions',
                unreadMsgNum: 213,
                selected: false
            },
            {
                title: 'Requests',
                unreadMsgNum: 10,
                selected: false
            },
            {
                title: 'Newest',
                unreadMsgNum: 0,
                selected: false
            }
        ]
    );
    const GroupName = 'THEOUIS';
    const userName = '@kitshunaFowyu';
    const [todayMessage, setTodayMessage] = useState (
        [
            {
                id: 0,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'off',
                time: '8 min ago',
                type: 'Mentions',
                GroupName: 'Today',
                comment: [userName, ' Shared an image into ', GroupName, ' Community'],
                image: require('../../../assets/images/messageImage.png'),
                content: 'The terms and conditions contained in this \nAgreement shall constitute the entire \nagreement between ...',
            },
            {
                id: 1,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'on',
                time: '3 Days ago',
                type: 'Mentions',
                GroupName: 'Today',
                comment: [userName, ' Mentioned you in a', '','comment'],
            },
            {
                id: 2,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'off',
                time: '8 min ago',
                type: 'Mentions',
                GroupName: 'Today',
                comment: [userName, ' Shared an image into', GroupName, ' Community'],
                message: '“ Hello, dears I need to know what’s wrong to \nunderstand more things about the topic... It’s \n2th highly differently wrongs, please check \nwith us or go out from this one !!! \n\nI hope that you understand the mentions of \nthe group together “',
                button: ['Reply']
            },
        ]
    );
    const [yesterdayMessage, setYesterdayMessage] = useState (
        [
            {
                id: 0,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'out',
                time: 'Yesterday, 10:23 PM',
                type: 'Mentions',
                GroupName: 'Yesterday',
                comment: [userName, ' Shared an image into', GroupName, ' Community'],
            },
            {
                id: 1,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'out',
                time: '29 Feb, 10:23 PM',
                type: 'Request',
                GroupName: 'Yesterday',
                comment: [userName, ' Requested an access to', '','join ', GroupName, ' Community'],
                button: ['Approve', 'Decline']
            },
            {
                id: 2,
                dragged: false,
                userAvatar: require('../../../assets/images/follow2.png'),
                online: 'out',
                time: '3 Days ago',
                type: 'Mentions',
                GroupName: 'Yesterday',
                comment: [userName, ' Started following you'],
            },
        ]
    );
    const num = 92;
    const handleFriendProfile = () => {
        // setShowBlurs(true);
        //     setShowBlur(false);
        // let timerId;
        // timerId = setTimeout(() => {
        navigation.navigate('FriendProfile');
        //   }, 30); // Adjust the delay as needed
        //   return () => {
        //     clearTimeout(timerId);
        //   };
    }
    const TodayMsg = ({item, index}) => {
        const handleDelete = (id) => {
            setTodayMessage(prevFriends => {
                const newFriends = [...prevFriends];
                let index = newFriends.findIndex(friend => friend.id === id);
                if (index !== -1) {
                    newFriends.splice(index, 1);
                    for (let i = index; i < newFriends.length; i++) {
                    if (newFriends[i].id > id) {
                        newFriends[i].id -= 1;
                    }
                    }
                }
                return newFriends;});
        };
        
        const pan = new Animated.ValueXY()
        const panResponder = useRef(
            PanResponder.create({
                onMoveShouldSetPanResponder: (evt, gestureState) => {
                    // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                    return Math.abs(gestureState.dx) > 5;
                },
                onPanResponderRelease: (evt, gestureState) => {
                    let num = 0;
                    // console.log('onPanResponderRelease', evt, gestureState);
                    // console.log('length: ', descriptions.length);
                    if (gestureState.dx > 0) {
                        // console.log('dx>0', gestureState.dx);
                        setTodayMessage(prevFriend => {
                            const newFriends = [...prevFriend];
                            newFriends[index].dragged = false;
                            return newFriends;
                        });
                    } else {
                        // console.log('dx<0', gestureState.dx);
                        setTodayMessage(prevFriend => {
                            const newFriends = [...prevFriend];
                            newFriends[index].dragged = true;
                            return newFriends;
                        });
                        Animated.spring(pan.x, { toValue: 0, useNativeDriver: true }).start();
                    }
                },
            })
        ).current;
        const handleBack = () => {
            setTodayMessage(prevFriend => {
                const newFriends = [...prevFriend];
                newFriends[index].dragged = false;
                return newFriends;
            });
        }
        return (
            <Animated.View 
                {...panResponder.panHandlers} 
                style = {[styles.messagePart, {transform: [{ translateX: pan.x }], backgroundColor: index<3? '#53FAFB10' : '#151515', alignItems: item.dragged? 'center' : 'flex-start',}]}
            >
                { !item.dragged ? <View style = {styles.avatar}>
                    <View style = {{width: vw(1.67), aspectRatio: 6/6, backgroundColor: '#53FAFB', borderRadius: vw(1)}}/>
                    <TouchableOpacity onPress = {handleFriendProfile}>
                        <ImageBackground
                            source = {item.userAvatar}
                            style = {{ 
                                position: 'relative',
                                width: vw(11.1), 
                                height: vw(11.1), 
                                marginLeft: vw(2.5)
                            }}
                        >
                            <View 
                                style = {{ 
                                    position: 'absolute', 
                                    bottom: vw(0), 
                                    right: vw(1),
                                    width: vw(2.3), 
                                    aspectRatio: 6/6, 
                                    backgroundColor: item.online == 'off' ? '#656565': item.online == 'on' ? '#53FAFB' : '#FBC253',
                                    borderRadius: vw(1.5),
                                    borderWidth: vw(0.3),
                                    borderColor: 'black'
                                }}
                            />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                :
                <View style = {{width: vw(5)}}/>
                }
                <View style = {styles.mainPart}>
                    <View style = {styles.comments}>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                            {item.comment[0]}
                        </Text>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                            {item.comment[1]}
                        </Text>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                            {item.comment[2]}
                        </Text>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                            {item.comment[3]}
                        </Text>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                            {item.comment[4]}
                        </Text>
                        <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                            {item.comment[5]}
                        </Text>
                    </View>
                    {item.image && <Image style = {styles.image}
                        source = {item.image}
                        resizeMode = 'stretch'
                    />
                    }
                    {item.content && <View style = {[styles.comments, {marginTop: vw(2.8), width: vw(66)}]}>
                        <Text style = {styles.commentText}>
                            {item.content}
                        </Text>
                    </View>
                    }
                    <View style = {{marginTop: vw(2.8)}}>
                        <Text style = {[styles.commentText, {color: '#545454'}]}>
                            {item.time}
                        </Text>
                    </View>
                    {item.message && <View style = {styles.message}>
                        <Text style = {[styles.commentText, {fontFamily: 'TT Firs Neue Trial ExtraLight'}]}>
                            {item.message}
                        </Text>
                    </View>
                    }
                    {item.button && <View style = {styles.buttons}>
                        {
                            item.button.map((items, index) => 
                                <TouchableOpacity key = {index} style = {[styles.button, {backgroundColor: index == 0 ? '#53FAFB' : '#252525' }]}>
                                    <Text 
                                        style = {[styles.commentText, {fontFamily: 'TT Firs Neue Trial Medium', color: index == 0 ? 'black' : '#A7A7A7' }]}
                                        onPress = {() => console.log(items)}
                                    >
                                        {items}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    }
                </View>
                {item.dragged && <TouchableOpacity style = {{flexDirection: 'column', justifyContent: 'center',alignItems: 'center',height: '100%', width: vw(11.4), height: vw(11.4), borderRadius: vw(6), backgroundColor: '#53FAFB20'}}
                    onPress = {() => handleDelete(item.id)}
                >
                    <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6 1H11M1 3.5H16M14.3333 3.5L13.7489 12.2661C13.6612 13.5813 13.6174 14.2389 13.3333 14.7375C13.0833 15.1765 12.706 15.5294 12.2514 15.7497C11.735 16 11.0759 16 9.75779 16H7.24221C5.92409 16 5.26503 16 4.74861 15.7497C4.29396 15.5294 3.91674 15.1765 3.66665 14.7375C3.38259 14.2389 3.33875 13.5813 3.25107 12.2661L2.66667 3.5M6.83333 7.25V11.4167M10.1667 7.25V11.4167" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </TouchableOpacity>}
            </Animated.View>
        )
    }
    const YesterdayMsg = ({item, index}) => {
        const handleDelete = (id) => {
            setYesterdayMessage(prevFriends => {
                const newFriends = [...prevFriends];
                let index = newFriends.findIndex(friend => friend.id === id);
                if (index !== -1) {
                    newFriends.splice(index, 1);
                    for (let i = index; i < newFriends.length; i++) {
                    if (newFriends[i].id > id) {
                        newFriends[i].id -= 1;
                    }
                    }
                }
                return newFriends;});
        };
        
        const pan = new Animated.ValueXY()
        const panResponder = useRef(
            PanResponder.create({
                onMoveShouldSetPanResponder: (evt, gestureState) => {
                    // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                    return Math.abs(gestureState.dx) > 5;
                },
                onPanResponderRelease: (evt, gestureState) => {
                    let num = 0;
                    // console.log('onPanResponderRelease', evt, gestureState);
                    // console.log('length: ', descriptions.length);
                    if (gestureState.dx > 0) {
                        // console.log('dx>0', gestureState.dx);
                        setYesterdayMessage(prevFriend => {
                            const newFriends = [...prevFriend];
                            newFriends[index].dragged = false;
                            return newFriends;
                        });
                    } else {
                        // console.log('dx<0', gestureState.dx);
                        setYesterdayMessage(prevFriend => {
                            const newFriends = [...prevFriend];
                            newFriends[index].dragged = true;
                            return newFriends;
                        });
                        Animated.spring(pan.x, { toValue: 0, useNativeDriver: true }).start();
                    }
                },
            })
        ).current;
        const handleBack = () => {
            setYesterdayMessage(prevFriend => {
                const newFriends = [...prevFriend];
                newFriends[index].dragged = false;
                return newFriends;
            });
        }
        return (
            <Animated.View {...panResponder.panHandlers} style = {[styles.messagePart, {transform: [{ translateX: pan.x }], backgroundColor: '#202020', alignItems: item.dragged? 'center' : 'flex-start',}]}>
                {/* <View style = {{width: vw(120), 
                    flexDirection: 'row',
                    alignItem: 'flex-start',}}
                > */}
                    { !item.dragged ? <View style = {styles.avatar}>
                        <TouchableOpacity onPress = {handleFriendProfile}>
                        <ImageBackground
                            source = {item.userAvatar}
                            style = {{ 
                                position: 'relative',
                                width: vw(11.1), 
                                height: vw(11.1), 
                                marginLeft: vw(2.5)
                            }}
                        >
                        <View 
                            style = {{ 
                                position: 'absolute', 
                                bottom: vw(0), 
                                right: vw(1),
                                width: vw(2.3), 
                                aspectRatio: 6/6, 
                                backgroundColor: item.online == 'off' ? '#656565': item.online == 'on' ? '#53FAFB' : '#FBC253',
                                borderRadius: vw(1.5),
                                borderWidth: vw(0.3),
                                borderColor: 'black'
                            }}
                        />
                        </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style = {{width: vw(5)}}/>
                    }
                    <View style = {styles.mainPart}>
                        <View style = {styles.comments}>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                                {item.comment[0]}
                            </Text>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                                {item.comment[1]}
                            </Text>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                                {item.comment[2]}
                            </Text>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                                {item.comment[3]}
                            </Text>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', color: 'white'}]}>
                                {item.comment[4]}
                            </Text>
                            <Text style = {[styles.commentText, { flexWrap: 'wrap', }]}>
                                {item.comment[5]}
                            </Text>
                        </View>
                        {item.image && <Image style = {styles.image}
                            source = {item.image}
                            resizeMode = 'stretch'
                        />
                        }
                        {item.content && <View style = {[styles.comments, {marginTop: vw(2.8), width: vw(66)}]}>
                            <Text style = {styles.commentText}>
                                {item.content}
                            </Text>
                        </View>
                        }
                        <View style = {{marginTop: vw(2.8)}}>
                            <Text style = {[styles.commentText, {color: '#545454'}]}>
                                {item.time}
                            </Text>
                        </View>
                        {item.message && <View style = {styles.message}>
                            <Text style = {[styles.commentText, {fontFamily: 'TT Firs Neue Trial ExtraLight'}]}>
                                {item.message}
                            </Text>
                        </View>
                        }
                        {item.button && <View style = {styles.buttons}>
                            {
                                item.button.map((items, index) => 
                                    <TouchableOpacity key = {index} style = {[styles.button, {backgroundColor: index == 0 ? '#53FAFB' : '#303030' }]}>
                                        <Text 
                                            style = {[styles.commentText, {fontFamily: 'TT Firs Neue Trial Medium', color: index == 0 ? 'black' : '#A7A7A7' }]}
                                            onPress = {() => console.log(items)}
                                        >
                                            {items}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        }
                    </View>
                    {item.dragged && <TouchableOpacity style = {{flexDirection: 'column', justifyContent: 'center',alignItems: 'center',height: '100%', width: vw(11.4), height: vw(11.4), borderRadius: vw(6), backgroundColor: '#53FAFB20'}}
                        onPress = {() => handleDelete(item.id)}
                    >
                        <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1H11M1 3.5H16M14.3333 3.5L13.7489 12.2661C13.6612 13.5813 13.6174 14.2389 13.3333 14.7375C13.0833 15.1765 12.706 15.5294 12.2514 15.7497C11.735 16 11.0759 16 9.75779 16H7.24221C5.92409 16 5.26503 16 4.74861 15.7497C4.29396 15.5294 3.91674 15.1765 3.66665 14.7375C3.38259 14.2389 3.33875 13.5813 3.25107 12.2661L2.66667 3.5M6.83333 7.25V11.4167M10.1667 7.25V11.4167" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>}
                {/* </View> */}
            </Animated.View>
        )
    }
    
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View  style = {styles.container}>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = { () => 
                                navigation.goBack()
                            }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Notifications
                        </Text>
                        <TouchableOpacity
                            style = {styles.prevButton}
                            onPress = { () => 
                                navigation.navigate('MainSearch')
                            }
                        >
                            <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.headerButtons}>
                        <FlatList
                            data = {sortBtn}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem = {({item, index}) => 
                                <TouchableOpacity
                                    style = {[styles.headBtn, {backgroundColor: item.selected ? '#53FAFB' : '#1E1E1E'}]}
                                    onPress = {() =>
                                        setSortBtn(prevBtn => {
                                            const newBtn = [...prevBtn];
                                            newBtn[index].unreadMsgNum = 0;
                                            for (i=0; i< sortBtn.length; i++){
                                                newBtn[i].selected = false;
                                            }
                                            newBtn[index].selected = !(newBtn[index].selected);
                                            return newBtn;
                                        })
                                    }
                                >
                                    <Text 
                                        style = {{
                                            fontSize: vw(2.8), 
                                            fontFamily: 'TT Firs Neue Trial Medium', 
                                            color: item.selected ? 'black' : '#6D6D6D',
                                        }}
                                    >
                                        &nbsp;{item.title}&nbsp;
                                    </Text>
                                    {
                                        item.unreadMsgNum != 0 ?
                                            <Text 
                                                style = {{
                                                    fontSize: vw(2.2), 
                                                    fontFamily: 'TT Firs Neue Trial Light', 
                                                    color: '#53FAFB',
                                                    padding: vw(1),
                                                    backgroundColor: '#53FAFB10',
                                                    paddingLeft: vw(1.2),
                                                    paddingRight: vw(1.2),
                                                    borderRadius: vw(3),
                                                }}
                                            >
                                                &nbsp;{item.unreadMsgNum}&nbsp;
                                            </Text>
                                            :
                                            null
                                    }
                                </TouchableOpacity>
                            }
                        />
                    </View>
                       {/* { message.map((item, index) => */}
                        <View>
                            <View style = {styles.groupStyle}>
                                <Text style = {styles.groupText}>
                                    {/* {item.GroupName} */}Today
                                </Text> 
                                <Text 
                                    style = {[styles.groupText, {color: '#53FAFB', fontSize: vw(3.3)}]}
                                    onPress = {() =>
                                        setSortBtn(prevBtn => {
                                            const newBtn = [...prevBtn];
                                            for (i=0; i< sortBtn.length; i++){
                                                newBtn[i].unreadMsgNum = 0;
                                            }
                                            return newBtn;
                                        })}
                                >
                                    Mark all as read
                                </Text>
                        </View>
                    </View>
                {/* )} */}
                </View>
                <ScrollView style = {styles.body}>
                    {
                        todayMessage.map((item, index) =>
                            <TodayMsg key = {index} item = {item} index = {index}/>
                        )
                    }
                    <View style = {styles.groupStyle}>
                        <Text style = {styles.groupText}>
                            Yesterday
                        </Text> 
                    </View>
                    
                    {
                        yesterdayMessage.map((item, index) =>
                        <YesterdayMsg key = {index} item = {item} index = {index}/>
                        )
                    }
                    <View style = {styles.footer}>
                        <TouchableOpacity style = {styles.footerBtn}>
                            <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#53FAFB', fontSize: vw(3.9), textAlign: 'center'}}>
                                View All {num} Notifications
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    header: {
        position: 'absolute',
        top: 0  ,
        width: vw(100),
        height: vw(55.83),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    marginBottom: vw(10)
    },
    headerBar: {
        width: vw(90),
        height: vw(9.44),
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
    headerButtons: {
        width: vw(100),
        height: vw(9.72),
        paddingLeft: vw(5),
    },
    headBtn: {
        height: vw(9.72),
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: vw(2.7),
        paddingRight: vw(2.7),
        flexDirection: 'row',
        borderRadius: vw(5),
        marginRight: vw(2)
    },
    body: {
        width: vw(100),
        marginTop: vw(54.7),
        paddingLeft: vw(5),
        // marginBottom: vw(20)
    },
    groupStyle: {
        width: vw(90),
        height: vw(16.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    groupText: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(3.9),
        color: 'white',
    },
    messagePart: {
        width: vw(90),
        marginBottom: vw(2.2),
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: vw(2.8),
        paddingTop: vw(5.56),
        paddingBottom : vw(5.56),
        backgroundColor: '#53FAFB10',
        borderRadius: vw(5),
        justifyContent: 'space-between'
    },
    avatar: {
        width: vw(15.3),
        height: vw(11.1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainPart: {
        width: vw(63.9),
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    comments: {
        flexDirection: 'row',
        width: vw(60),
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    commentText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(2.8),
        color: '#999999'
    },
    image: {
        width: vw(56.25),
        height: vw(33.3),
        marginTop: vw(2.8)
    },
    message: {
        padding: vw(2.7),
        backgroundColor: '#53FAFB20',
        borderRadius: vw(3),
        marginTop: vw(2.8),
        marginBottom: vw(2.8)
    },
    buttons: {
        width: vw(60),
        flexDirection: 'row',
        height: vw(8.33),
        marginTop: vw(2.8),
    },
    button: {
        height: vw(8.33),
        width: vw(20.83),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vw(2)
    },
    footer: {
        marginTop: vw(5),
        width: vw(90),
        aspectRatio: 360/40,
        marginBottom: vw(7.8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    footerBtn: {
        width: vw(57.2),
        aspectRatio: 206/40,
        borderRadius: vw(6),
        borderWidth: vw(0.3),
        borderColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Notifications;