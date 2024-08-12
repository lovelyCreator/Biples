import React, { useState, useEffect, createRef, useRef } from "react";
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
    findNodeHandle,
    BackHandler,
    Dimensions,
    TextInput,
    Animated,
    Modal
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity, backgroundColor } from 'react-native';r

const GroupChat = ({ navigation }) => {
    const scrollViewRef = useRef();
    const statusBarHeight = getStatusBarHeight();
    const backgroundImageRef = createRef();
    const screenWidth = Dimensions.get('window').width;
    const screenHegiht = Dimensions.get('window').height;
    
    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };
    useEffect(() => {
        scrollToBottom();
    }, [msgData]);

    const handleSend = () => {
    // Logic to send the message
    // Add the new message to the messages array
        setMsgData(prevData =>
            {
                const newData = [...prevData];
                newData.push(
                    {
                        avatar: [require('../../../../assets/images/follow2.png'), require('../../../../assets/images/follow2.png')],
                        name: 'Yazidk KHERRATI',
                        reply: false,
                        replyClient: '',
                        content: 'Salut tout le monde !!',
                        contentAction: 
                            <View style = {{width: vw(4.2), height: vw(4.2), alignItems: 'center', justifyContent: 'center', borderRadius: vw(3), backgroundColor: '#53FAFB20'}}>
                                <Svg width={vw(2.5)} height={vw(2.5)} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M2.55556 3.08563H4.5M2.55556 4.41284H5.66667M3.59924 6.68807H6.13333C6.78673 6.68807 7.11343 6.68807 7.36299 6.56408C7.58251 6.45501 7.76099 6.28098 7.87284 6.06692C8 5.82357 8 5.50501 8 4.86789V2.82018C8 2.18306 8 1.8645 7.87284 1.62115C7.76099 1.40709 7.58251 1.23306 7.36299 1.12399C7.11343 1 6.78673 1 6.13333 1H2.86667C2.21327 1 1.88657 1 1.63701 1.12399C1.41749 1.23306 1.23901 1.40709 1.12716 1.62115C1 1.8645 1 2.18306 1 2.82018V7.5737C1 7.77576 1 7.87679 1.04248 7.92868C1.07942 7.97381 1.13544 8.00006 1.19465 8C1.26274 7.99993 1.34365 7.93682 1.50546 7.81059L2.43314 7.08693C2.62265 6.9391 2.7174 6.86518 2.82291 6.81262C2.91652 6.76599 3.01617 6.7319 3.11914 6.7113C3.2352 6.68807 3.35655 6.68807 3.59924 6.68807Z" stroke="#53FAFB" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg> 
                            </View>               
                        ,
                        file: null,
                        msg: {text: text
                        },
                        check: null,
                        time: null,
                    }
                )
                return newData;
            }
        )
        setText('');
        scrollToBottom();
    };
    //         avatar: require('../../../../assets/images/card7.png'),
    //         onlineState: 'notification',
    //         name: 'Elrollx'
    //     },
    //     {
    //         avatar: require('../../../../assets/images/card10.png'),
    //         onlineState: 'offline',
    //         name: 'Toyaw'
    //     },
    //     {
    //         avatar: require('../../../../assets/images/card10.png'),
    //         onlineState: 'online',
    //         name: 'Lithoy'
    //     },
    //     {
    //         avatar: require('../../../../assets/images/card2.png'),
    //         onlineState: 'out',
    //         name: 'Fereom'
    //     },
    // ]
    // const btnArray = [
    //     {
    //         name: 'Chat',
    //         state: true
    //     },
    //     {
    //         name: 'Status',
    //         state: false
    //     },
    //     {
    //         name: 'Calls',
    //         state: false
    //     },
    // ];
    // const allData = [
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'out',
    //         name: 'Alex Linderson',
    //         lastMsg: 'Last active 2h ago',
    //         lastMsgImg: <Svg width={vw(2.8)} height={vw(3.3)} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <Path d="M9.00012 5.99995V6.50155C9.00012 8.71773 7.31583 10.5143 5.23816 10.5143C3.16048 10.5143 1.4762 8.71773 1.4762 6.50155V5.99995M5.23816 8.50793C4.19932 8.50793 3.35718 7.60964 3.35718 6.50155V3.49198C3.35718 2.38388 4.19932 1.4856 5.23816 1.4856C6.277 1.4856 7.11914 2.38388 7.11914 3.49198V6.50155C7.11914 7.60964 6.277 8.50793 5.23816 8.50793Z" stroke="#797C7B" stroke-linecap="round" stroke-linejoin="round"/>
    //             </Svg>,            
    //         time: 'Yesterday',
    //         viewed: true,
    //         unreadMsg: 0,
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'offline',
    //         name: 'T2OORO Grow',
    //         lastMsg: 'Reacted :joy: to a File',
    //         time: 'Yesterday',
    //         viewed: true,
    //         unreadMsg: 0,
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'notification',
    //         name: 'T2OORO Grow',
    //         lastMsgImg: <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <Path d="M10.651 5.44397L6.05 10.21C5.00368 11.2939 3.30726 11.2939 2.26094 10.21C1.21462 9.12618 1.21462 7.3689 2.26094 6.28504L6.86195 1.51898C7.55949 0.796408 8.69044 0.796408 9.38799 1.51898C10.0855 2.24155 10.0855 3.41307 9.38799 4.13564L4.96741 8.7148C4.61864 9.07609 4.05316 9.07609 3.70439 8.7148C3.35562 8.35351 3.35562 7.76775 3.70439 7.40647L7.58367 3.38802" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
    //             </Svg>,
    //         lastMsg: 'Sent you an attachment',
    //         time: 'Yesterday',
    //         viewed: true,
    //         unreadMsg: 0
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Recording...',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Calling...',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/card9.png'),
    //         onlineState: 'online',
    //         name: 'Fernado TOYs',
    //         lastMsg: 'Reply: On est la !!',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Recording...',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Recording...',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     }
    // ];
    // const pinedData = [
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Mussa OUEL',
    //         lastMsg: 'Active Now',
    //         time: '2 min ago',
    //         mute: true,
    //         unreadMsg: 3
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'DramatiKa FELHO',
    //         lastMsg: 'Typing...',
    //         time: '2 min ago',
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'offline',
    //         name: 'T2OORO Grow',
    //         lastMsg: 'Draft: https://emojipedia.org/super-bowl',
    //         time: 'Yesterday',
    //         unreadMsg: 0
    //     }
    // ];
    // const callingData = [
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Calling...',
    //         time: '2 min ago',
    //         selected: false,
    //         unreadMsg: 23
    //     },
    //     {
    //         avatar: require('../../../../assets/images/follow2.png'),
    //         onlineState: 'online',
    //         name: 'Dramatika FELHO',
    //         lastMsg: 'Calling...',
    //         time: '2 min ago',
    //         selected: true,
    //         unreadMsg: 23
    //     },
    // ];
    const chatModalData = [
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'Hello, is anyone here?🔥',
        },
        {
            date: 'Today 03:12 AM'
        },
        {
            isMyMsg : false,
            message: 'Hello, is anyone here?🔥',
        },
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'I have some questions 🥵 It’s a good time to send you !!! \n\nBy the way my name is Alex and I want to contact you urgently ...',
        },
        {
            isMyMsg : false,
            avatar: require('../../../../assets/images/follow2.png'),
            time: 'Today 02:34 AM',
            message: 'Thanks a lot',
        },
        {
            isMyMsg : true,
            time: 'Sent 10 min ago',
            message: 'Sure sure, I’m being happy to help each others ! Why not ask me...',
        },
        {
            isMyMsg : true,
            msgImg: [
                {
                    url: require('../../../../assets/images/card4.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                }, 
                {
                    url: require('../../../../assets/images/card4.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                },
            ],
        },
        {
            isMyMsg : true,
            time: 'Sent 10 min ago',
            msgImg: [
                {
                    url: require('../../../../assets/images/messageImage.png'), 
                    selected: false,
                    urlData: 'https://emojipedia.org/super-bowlHGSHGDbHgxbzhqjhquyadghb'
                },
            ],
        },
        {
            isMyMsg : false,
            msgSpeech: {state: 'pasued', times: '0:20', speeds: 'X1.5'},
        },
        {
            isMyMsg : false,
            msgSpeech: {state: 'play', times: '0:09'}
        },
        {
            isMyMsg : false,
            time: 'Today 02:34 AM',
            message: 'Thanks a lot'
        },
    ];
    const [clientData, setClientData] = useState({
        avatar: require('../../../../assets/images/card9.png'),
        name: 'Ferndado TOYs',
        // onlineState: 'online',
        time: '66,2k Members – 272 Active'
    });
    const msgDat = [
        {
            avatar: [require('../../../../assets/images/follow2.png')],
            name: 'Mussa OUEL',
            reply: false,
            replyClient: '',
            content: 'Salut tout le monde !!',
            contentAction: null,
            file: 
                {
                    type:  'pdf',
                    img: require('../../../../assets/images/card8.png'),
                    name: 'Fichier.pdf',
                    size: '291 MB',
                    downloadingState: true,
                    reaction: [
                        <Svg width={vw(3.3)} height={vw(3.1)} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M9.4288 1.16144C9.35208 1.41455 9.26619 1.66598 9.17112 1.91575C8.91595 2.59763 8.996 3.27701 9.78905 3.47932C10.2243 3.59089 10.6004 3.41605 10.9173 2.9548C12.1181 5.56741 11.4402 8.4198 9.09357 10.0408C6.91958 11.5419 4.05261 11.2372 2.17131 9.43387C-0.638117 6.73634 0.22998 2.11807 3.75991 0.509541C5.62452 -0.343012 7.51415 -0.12571 9.4288 1.16144ZM4.76309 4.7057C4.10264 4.38266 3.47388 4.44677 2.8768 4.89802C2.69 5.0379 2.56909 5.21856 2.51405 5.44003C2.41898 5.83217 2.80425 6.03698 3.13448 5.99952C3.17771 5.99484 3.2194 5.98132 3.25689 5.95981C3.29437 5.93831 3.32681 5.90929 3.35212 5.87463C3.61064 5.51995 3.95254 5.42837 4.37783 5.59988C4.48129 5.6416 4.59691 5.64209 4.70107 5.60123C4.80522 5.56038 4.89005 5.48128 4.93822 5.38008L4.97324 5.30265C5.09833 5.03623 5.02828 4.83725 4.76309 4.7057ZM8.51818 5.70978C8.66327 5.90294 8.83506 5.99702 9.03353 5.99202C9.12357 5.99011 9.21137 5.96359 9.28739 5.91536C9.3634 5.86713 9.42472 5.79902 9.46469 5.71844C9.50466 5.63786 9.52175 5.54788 9.5141 5.45829C9.50644 5.36869 9.47435 5.2829 9.4213 5.21024C8.98933 4.61578 8.36724 4.40348 7.55501 4.57332C7.47143 4.59132 7.39382 4.63092 7.32986 4.68822C7.05133 4.93799 6.95126 5.1453 7.02965 5.31015C7.1514 5.56824 7.35154 5.66316 7.63006 5.59489C7.80518 5.55159 7.98114 5.52994 8.15793 5.52994C8.22737 5.53074 8.29584 5.54733 8.35822 5.57847C8.42061 5.60961 8.47529 5.6545 8.51818 5.70978ZM5.67622 9.43137C6.01479 9.50131 6.35085 9.49465 6.68441 9.41139C7.45494 9.2199 8.03951 8.70787 8.43812 7.8753C8.63075 7.47566 8.38558 7.02358 7.93277 7.01608C6.91541 6.99943 5.72626 6.99527 4.36532 7.0036C3.52308 7.00693 3.29709 7.38075 3.68736 8.12507C4.03926 8.79612 4.70222 9.23156 5.67622 9.43137Z" fill="#FCC145"/>
                            <Path d="M10.9173 2.95477C10.6004 3.41601 10.2243 3.59085 9.78904 3.47929C8.996 3.27697 8.91594 2.59759 9.17112 1.91572C9.26618 1.66595 9.35207 1.41451 9.42879 1.16141L9.85409 0.609414C9.87135 0.587032 9.8934 0.568779 9.91862 0.555985C9.94385 0.543191 9.97161 0.53618 9.9999 0.535462C10.0282 0.534744 10.0563 0.540337 10.0821 0.551835C10.108 0.563332 10.1309 0.580444 10.1493 0.601922C10.7914 1.36123 11.0474 2.14551 10.9173 2.95477Z" fill="#2EB6FF"/>
                            <Path d="M4.76324 4.7057C5.02842 4.83725 5.09847 5.03623 4.97338 5.30265L4.93836 5.38008C4.89019 5.48128 4.80536 5.56038 4.70121 5.60123C4.59705 5.64208 4.48143 5.6416 4.37797 5.59988C3.95268 5.42837 3.61078 5.51995 3.35227 5.87463C3.32695 5.90929 3.29451 5.93831 3.25703 5.95981C3.21955 5.98132 3.17785 5.99484 3.13462 5.99951C2.80439 6.03698 2.41912 5.83217 2.51419 5.44003C2.56923 5.21856 2.69014 5.03789 2.87694 4.89802C3.47402 4.44677 4.10278 4.38266 4.76324 4.7057Z" fill="#020202"/>
                            <Path d="M8.15801 5.52984C7.98122 5.52984 7.80526 5.55149 7.63014 5.59478C7.35162 5.66305 7.15148 5.56814 7.02973 5.31004C6.95134 5.14519 7.05141 4.93788 7.32994 4.68811C7.3939 4.63082 7.47151 4.59121 7.55509 4.57322C8.36732 4.40337 8.98941 4.61568 9.42137 5.21013C9.47443 5.2828 9.50652 5.36859 9.51417 5.45818C9.52182 5.54778 9.50474 5.63776 9.46477 5.71834C9.4248 5.79892 9.36348 5.86703 9.28746 5.91526C9.21145 5.96349 9.12365 5.99 9.03361 5.99192C8.83514 5.99691 8.66335 5.90283 8.51825 5.70968C8.47536 5.65439 8.42068 5.6095 8.3583 5.57836C8.29592 5.54722 8.22745 5.53064 8.15801 5.52984Z" fill="#020202"/>
                            <Path d="M5.67618 9.43133C4.70218 9.23151 4.03923 8.79608 3.68732 8.12503C3.29705 7.38071 3.52304 7.00688 4.36528 7.00355C5.72622 6.99523 6.91537 6.99939 7.93273 7.01604C8.38554 7.02353 8.63071 7.47562 8.43808 7.87526C8.03947 8.70783 7.45491 9.21986 6.68438 9.41135C6.35081 9.4946 6.01475 9.50127 5.67618 9.43133Z" fill="#020202"/>
                        </Svg>
                    ],
                },
            msg: {url:'https://www.figma.com/\nproto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-Mobile?node-id=377-1543&scaling=scale-down',
                text: '\nCheck It here ',
                email: '@yazidkherrati'
            },
            check: 'double',
            time: 'Yesterday 03 : 21 PM'
        },
        {
            avatar: [require('../../../../assets/images/avatar00.png')],
            name: 'Mussa OUEL',
            reply: false,
            replyClient: '',
            content: 'Salut tout le monde !!',
            contentAction: null,
            file: 
                {
                    type:  'img',
                    name: require('../../../../assets/images/review.png'),
                    size: null,
                    downloadingState: null,
                    reaction: [
                        <Svg width={vw(3.3)} height={vw(3.1)} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M9.4288 1.16144C9.35208 1.41455 9.26619 1.66598 9.17112 1.91575C8.91595 2.59763 8.996 3.27701 9.78905 3.47932C10.2243 3.59089 10.6004 3.41605 10.9173 2.9548C12.1181 5.56741 11.4402 8.4198 9.09357 10.0408C6.91958 11.5419 4.05261 11.2372 2.17131 9.43387C-0.638117 6.73634 0.22998 2.11807 3.75991 0.509541C5.62452 -0.343012 7.51415 -0.12571 9.4288 1.16144ZM4.76309 4.7057C4.10264 4.38266 3.47388 4.44677 2.8768 4.89802C2.69 5.0379 2.56909 5.21856 2.51405 5.44003C2.41898 5.83217 2.80425 6.03698 3.13448 5.99952C3.17771 5.99484 3.2194 5.98132 3.25689 5.95981C3.29437 5.93831 3.32681 5.90929 3.35212 5.87463C3.61064 5.51995 3.95254 5.42837 4.37783 5.59988C4.48129 5.6416 4.59691 5.64209 4.70107 5.60123C4.80522 5.56038 4.89005 5.48128 4.93822 5.38008L4.97324 5.30265C5.09833 5.03623 5.02828 4.83725 4.76309 4.7057ZM8.51818 5.70978C8.66327 5.90294 8.83506 5.99702 9.03353 5.99202C9.12357 5.99011 9.21137 5.96359 9.28739 5.91536C9.3634 5.86713 9.42472 5.79902 9.46469 5.71844C9.50466 5.63786 9.52175 5.54788 9.5141 5.45829C9.50644 5.36869 9.47435 5.2829 9.4213 5.21024C8.98933 4.61578 8.36724 4.40348 7.55501 4.57332C7.47143 4.59132 7.39382 4.63092 7.32986 4.68822C7.05133 4.93799 6.95126 5.1453 7.02965 5.31015C7.1514 5.56824 7.35154 5.66316 7.63006 5.59489C7.80518 5.55159 7.98114 5.52994 8.15793 5.52994C8.22737 5.53074 8.29584 5.54733 8.35822 5.57847C8.42061 5.60961 8.47529 5.6545 8.51818 5.70978ZM5.67622 9.43137C6.01479 9.50131 6.35085 9.49465 6.68441 9.41139C7.45494 9.2199 8.03951 8.70787 8.43812 7.8753C8.63075 7.47566 8.38558 7.02358 7.93277 7.01608C6.91541 6.99943 5.72626 6.99527 4.36532 7.0036C3.52308 7.00693 3.29709 7.38075 3.68736 8.12507C4.03926 8.79612 4.70222 9.23156 5.67622 9.43137Z" fill="#FCC145"/>
                            <Path d="M10.9173 2.95477C10.6004 3.41601 10.2243 3.59085 9.78904 3.47929C8.996 3.27697 8.91594 2.59759 9.17112 1.91572C9.26618 1.66595 9.35207 1.41451 9.42879 1.16141L9.85409 0.609414C9.87135 0.587032 9.8934 0.568779 9.91862 0.555985C9.94385 0.543191 9.97161 0.53618 9.9999 0.535462C10.0282 0.534744 10.0563 0.540337 10.0821 0.551835C10.108 0.563332 10.1309 0.580444 10.1493 0.601922C10.7914 1.36123 11.0474 2.14551 10.9173 2.95477Z" fill="#2EB6FF"/>
                            <Path d="M4.76324 4.7057C5.02842 4.83725 5.09847 5.03623 4.97338 5.30265L4.93836 5.38008C4.89019 5.48128 4.80536 5.56038 4.70121 5.60123C4.59705 5.64208 4.48143 5.6416 4.37797 5.59988C3.95268 5.42837 3.61078 5.51995 3.35227 5.87463C3.32695 5.90929 3.29451 5.93831 3.25703 5.95981C3.21955 5.98132 3.17785 5.99484 3.13462 5.99951C2.80439 6.03698 2.41912 5.83217 2.51419 5.44003C2.56923 5.21856 2.69014 5.03789 2.87694 4.89802C3.47402 4.44677 4.10278 4.38266 4.76324 4.7057Z" fill="#020202"/>
                            <Path d="M8.15801 5.52984C7.98122 5.52984 7.80526 5.55149 7.63014 5.59478C7.35162 5.66305 7.15148 5.56814 7.02973 5.31004C6.95134 5.14519 7.05141 4.93788 7.32994 4.68811C7.3939 4.63082 7.47151 4.59121 7.55509 4.57322C8.36732 4.40337 8.98941 4.61568 9.42137 5.21013C9.47443 5.2828 9.50652 5.36859 9.51417 5.45818C9.52182 5.54778 9.50474 5.63776 9.46477 5.71834C9.4248 5.79892 9.36348 5.86703 9.28746 5.91526C9.21145 5.96349 9.12365 5.99 9.03361 5.99192C8.83514 5.99691 8.66335 5.90283 8.51825 5.70968C8.47536 5.65439 8.42068 5.6095 8.3583 5.57836C8.29592 5.54722 8.22745 5.53064 8.15801 5.52984Z" fill="#020202"/>
                            <Path d="M5.67618 9.43133C4.70218 9.23151 4.03923 8.79608 3.68732 8.12503C3.29705 7.38071 3.52304 7.00688 4.36528 7.00355C5.72622 6.99523 6.91537 6.99939 7.93273 7.01604C8.38554 7.02353 8.63071 7.47562 8.43808 7.87526C8.03947 8.70783 7.45491 9.21986 6.68438 9.41135C6.35081 9.4946 6.01475 9.50127 5.67618 9.43133Z" fill="#020202"/>
                        </Svg>,
                        <Svg width={vw(3.6)} height={vw(3.6)} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M7.20395 12.3122C7.30656 12.0503 7.4472 11.8186 7.62589 11.6169C8.00979 11.5108 8.32292 11.3126 8.5653 11.0225C9.25261 10.2078 8.73513 9.30819 7.87799 8.93667C6.73955 8.44308 4.54228 8.4988 4.14157 10.0167C3.96289 10.6925 4.38483 11.2392 5.40739 11.6567L5.82667 12.3042C4.27691 12.1326 3.01021 11.4444 2.02657 10.2396C3.34015 9.46741 2.56793 8.07687 1.91246 7.2038C1.88726 7.17017 1.85428 7.14315 1.81635 7.12505C1.77842 7.10695 1.73667 7.09831 1.69467 7.09988C1.65267 7.10144 1.61168 7.11316 1.5752 7.13404C1.53872 7.15491 1.50785 7.18431 1.48522 7.21972L0.896095 8.14056C0.473272 6.43511 0.651069 4.92338 1.42949 3.60538C3.66921 -0.176151 9.07746 -0.34068 11.4472 3.45677C12.8882 5.76815 12.5352 8.78541 10.5609 10.6987C9.66393 11.5709 8.54495 12.1087 7.20395 12.3122ZM4.755 5.29414C4.8028 5.24584 4.84062 5.18859 4.8663 5.12568C4.89198 5.06276 4.90501 4.9954 4.90466 4.92744C4.9043 4.85949 4.89057 4.79227 4.86423 4.72962C4.8379 4.66698 4.79949 4.61013 4.75118 4.56233L4.72475 4.53619C4.6272 4.43966 4.4953 4.38583 4.35807 4.38655C4.22083 4.38727 4.0895 4.44247 3.99297 4.54001L2.91779 5.62649C2.86999 5.67479 2.83217 5.73204 2.80649 5.79495C2.78082 5.85787 2.76778 5.92523 2.76814 5.99319C2.76849 6.06114 2.78223 6.12836 2.80856 6.19101C2.8349 6.25366 2.87331 6.3105 2.92161 6.3583L2.94804 6.38444C3.04559 6.48097 3.17749 6.5348 3.31473 6.53408C3.45196 6.53337 3.58329 6.47816 3.67983 6.38062L4.755 5.29414ZM10.074 6.34251C10.1699 6.24529 10.2232 6.11397 10.2222 5.97744C10.2213 5.8409 10.1661 5.71034 10.0689 5.61447L8.97678 4.53749C8.87956 4.44162 8.74824 4.38829 8.61171 4.38924C8.47517 4.39019 8.34461 4.44534 8.24874 4.54256L8.21891 4.57281C8.12304 4.67003 8.06972 4.80135 8.07067 4.93789C8.07163 5.07442 8.12679 5.20499 8.22401 5.30086L9.31614 6.37783C9.41335 6.47371 9.54467 6.52703 9.68121 6.52608C9.81774 6.52513 9.94831 6.46998 10.0442 6.37277L10.074 6.34251ZM5.42331 6.78717C5.42331 6.57814 5.34027 6.37767 5.19247 6.22986C5.04466 6.08205 4.84419 5.99902 4.63516 5.99902C4.42613 5.99902 4.22566 6.08205 4.07786 6.22986C3.93005 6.37767 3.84701 6.57814 3.84701 6.78717C3.84701 6.9962 3.93005 7.19667 4.07786 7.34447C4.22566 7.49228 4.42613 7.57532 4.63516 7.57532C4.84419 7.57532 5.04466 7.49228 5.19247 7.34447C5.34027 7.19667 5.42331 6.9962 5.42331 6.78717ZM9.14115 6.78717C9.14115 6.57743 9.05783 6.37629 8.90953 6.22799C8.76122 6.07968 8.56008 5.99636 8.35035 5.99636C8.14061 5.99636 7.93947 6.07968 7.79116 6.22799C7.64286 6.37629 7.55954 6.57743 7.55954 6.78717C7.55954 6.9969 7.64286 7.19805 7.79116 7.34635C7.93947 7.49466 8.14061 7.57797 8.35035 7.57797C8.56008 7.57797 8.76122 7.49466 8.90953 7.34635C9.05783 7.19805 9.14115 6.9969 9.14115 6.78717Z" fill="#F1882A"/>
                            <Path d="M2.02654 10.2397C0.77753 10.2414 0.400705 9.54175 0.896063 8.14059L1.48518 7.21975C1.50781 7.18434 1.53869 7.15494 1.57517 7.13407C1.61165 7.1132 1.65264 7.10148 1.69464 7.09991C1.73664 7.09835 1.77839 7.10698 1.81632 7.12508C1.85425 7.14318 1.88723 7.1702 1.91243 7.20383C2.5679 8.0769 3.34012 9.46744 2.02654 10.2397Z" fill="#2EB6FF"/>
                            <Path d="M7.62574 11.6169L7.74781 10.1149C7.75384 10.046 7.74248 9.9766 7.71476 9.91313C7.68704 9.84967 7.64384 9.79409 7.58906 9.75142C7.53427 9.70875 7.46963 9.68034 7.40098 9.66875C7.33233 9.65715 7.26183 9.66275 7.19584 9.68503C6.88801 9.78941 6.71199 9.99905 6.66776 10.314C6.65714 10.3953 6.6138 10.4528 6.53772 10.4864C6.45458 10.5236 6.37231 10.4617 6.29093 10.3007C6.27859 10.2742 6.26968 10.2475 6.26439 10.2211C6.18655 9.79118 5.92118 9.62665 5.46828 9.72749C5.39488 9.74395 5.33017 9.7872 5.28658 9.84891C5.24299 9.91062 5.22359 9.98646 5.2321 10.0619L5.40725 11.6567C4.38469 11.2392 3.96275 10.6926 4.14143 10.0167C4.54214 8.49882 6.73941 8.4431 7.87785 8.93669C8.73499 9.3082 9.25246 10.2078 8.56515 11.0225C8.32278 11.3126 8.00965 11.5108 7.62574 11.6169Z" fill="#020202"/>
                            <Path d="M7.62607 11.6169C7.44739 11.8186 7.30674 12.0503 7.20413 12.3122L5.82686 12.3042L5.40758 11.6567L5.23243 10.0618C5.22391 9.98643 5.24331 9.9106 5.2869 9.84889C5.33049 9.78717 5.3952 9.74393 5.46861 9.72747C5.92151 9.62663 6.18688 9.79116 6.26472 10.2211C6.27001 10.2475 6.27892 10.2742 6.29126 10.3007C6.37264 10.4617 6.4549 10.5236 6.53805 10.4864C6.61412 10.4528 6.65747 10.3953 6.66808 10.3139C6.71231 9.99903 6.88834 9.78939 7.19617 9.68501C7.26216 9.66273 7.33266 9.65713 7.40131 9.66872C7.46996 9.68032 7.5346 9.70873 7.58938 9.7514C7.64417 9.79407 7.68737 9.84965 7.71509 9.91311C7.74281 9.97658 7.75417 10.0459 7.74814 10.1149L7.62607 11.6169Z" fill="#F23F43"/>
                            <Path d="M4.75116 4.56236L4.72475 4.53623C4.52161 4.3352 4.19397 4.33692 3.99295 4.54006L2.91778 5.62654C2.71676 5.82968 2.71848 6.15732 2.92162 6.35835L2.94802 6.38448C3.15116 6.5855 3.47881 6.58379 3.67983 6.38065L4.75499 5.29417C4.95602 5.09103 4.9543 4.76339 4.75116 4.56236Z" fill="#020202"/>
                            <Path d="M10.0691 5.6145L8.97692 4.53751C8.77447 4.33787 8.44851 4.34014 8.24887 4.54259L8.21906 4.57282C8.01942 4.77527 8.02169 5.10123 8.22414 5.30087L9.31627 6.37786C9.51872 6.5775 9.84468 6.57522 10.0443 6.37278L10.0741 6.34254C10.2738 6.1401 10.2715 5.81414 10.0691 5.6145Z" fill="#020202"/>
                            <Path d="M4.63532 7.57532C5.0706 7.57532 5.42347 7.22246 5.42347 6.78717C5.42347 6.35189 5.0706 5.99902 4.63532 5.99902C4.20004 5.99902 3.84717 6.35189 3.84717 6.78717C3.84717 7.22246 4.20004 7.57532 4.63532 7.57532Z" fill="#020202"/>
                            <Path d="M8.35037 7.57794C8.78712 7.57794 9.14118 7.22389 9.14118 6.78714C9.14118 6.35039 8.78712 5.99634 8.35037 5.99634C7.91363 5.99634 7.55957 6.35039 7.55957 6.78714C7.55957 7.22389 7.91363 7.57794 8.35037 7.57794Z" fill="#020202"/>
                        </Svg>                        
                    ],
                },
            msg: null,
            check: 'double',
            time: 'Yesterday 03 : 21 PM'
        },
        {
            avatar: [require('../../../../assets/images/follow2.png'), require('../../../../assets/images/follow2.png')],
            name: 'Mussa OUEL',
            reply: true,
            replyClient: 'Yazidk KHERRATI',
            content: 'Salut tout le monde !!',
            contentAction: 
                <View style = {{width: vw(4.2), height: vw(4.2), alignItems: 'center', justifyContent: 'center', borderRadius: vw(3), backgroundColor: '#53FAFB20'}}>
                    <Svg width={vw(2.5)} height={vw(2.5)} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M2.55556 3.08563H4.5M2.55556 4.41284H5.66667M3.59924 6.68807H6.13333C6.78673 6.68807 7.11343 6.68807 7.36299 6.56408C7.58251 6.45501 7.76099 6.28098 7.87284 6.06692C8 5.82357 8 5.50501 8 4.86789V2.82018C8 2.18306 8 1.8645 7.87284 1.62115C7.76099 1.40709 7.58251 1.23306 7.36299 1.12399C7.11343 1 6.78673 1 6.13333 1H2.86667C2.21327 1 1.88657 1 1.63701 1.12399C1.41749 1.23306 1.23901 1.40709 1.12716 1.62115C1 1.8645 1 2.18306 1 2.82018V7.5737C1 7.77576 1 7.87679 1.04248 7.92868C1.07942 7.97381 1.13544 8.00006 1.19465 8C1.26274 7.99993 1.34365 7.93682 1.50546 7.81059L2.43314 7.08693C2.62265 6.9391 2.7174 6.86518 2.82291 6.81262C2.91652 6.76599 3.01617 6.7319 3.11914 6.7113C3.2352 6.68807 3.35655 6.68807 3.59924 6.68807Z" stroke="#53FAFB" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg> 
                </View>               
            ,
            file: null,
            msg: {text: 'Salut cava ?'
            },
            check: null,
            time: null,
        },
        {
            avatar: [require('../../../../assets/images/follow2.png')],
            name: 'Mussa OUEL',
            reply: false,
            replyClient: '',
            content: 'Voice Call - 3min',
            contentAction: <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M11 3.6096V1M11 1H8.37807M11 1L7.85369 4.13152M5.35081 6.66965C4.72072 6.04253 4.22318 5.33342 3.85821 4.57684C3.82682 4.51176 3.81112 4.47922 3.79906 4.43805C3.75621 4.29172 3.78699 4.11205 3.87614 3.98813C3.90123 3.95326 3.9312 3.92343 3.99115 3.86376C4.17447 3.6813 4.26614 3.59007 4.32607 3.49832C4.55208 3.15235 4.55208 2.70632 4.32607 2.36035C4.26614 2.26861 4.17447 2.17737 3.99115 1.99491L3.88896 1.8932C3.61028 1.61583 3.47094 1.47715 3.32129 1.40181C3.02367 1.25198 2.67219 1.25198 2.37457 1.40181C2.22492 1.47715 2.08558 1.61583 1.8069 1.8932L1.72423 1.97547C1.44651 2.25189 1.30764 2.3901 1.20159 2.57801C1.08391 2.78652 0.999289 3.11037 1 3.34953C1.00065 3.56505 1.04265 3.71235 1.12666 4.00694C1.57815 5.59013 2.43 7.08406 3.68222 8.33039C4.93444 9.57673 6.43543 10.4246 8.0261 10.8739C8.32209 10.9575 8.47008 10.9994 8.68662 11C8.92691 11.0007 9.25229 10.9165 9.46178 10.7994C9.65058 10.6938 9.78944 10.5556 10.0672 10.2792L10.1498 10.1969C10.4285 9.91953 10.5678 9.78084 10.6435 9.6319C10.7941 9.33567 10.7941 8.98585 10.6435 8.68963C10.5678 8.54068 10.4285 8.402 10.1498 8.12463L10.0476 8.02292C9.86431 7.84045 9.77265 7.74922 9.68047 7.68957C9.33286 7.46463 8.88473 7.46463 8.53712 7.68957C8.44495 7.74922 8.35328 7.84045 8.16995 8.02292C8.11001 8.08258 8.08004 8.11241 8.045 8.13738C7.9205 8.22611 7.73997 8.25675 7.59296 8.2141C7.55159 8.2021 7.5189 8.18647 7.45351 8.15523C6.69335 7.79197 5.9809 7.29678 5.35081 6.66965Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>,
            file: null,
            msg: null,
            check: null,
            time: null,
        },
        {
            avatar: [require('../../../../assets/images/follow2.png')],
            name: null,
            reply: false,
            replyClient: '',
            content: null,
            contentAction: null,
            file: {
                type: 'music',
                speed: 1.5,
                time: '0:09',
                play: false
            },
            msg: null,
            check: null,
            time: null,
        },
    ];
    const [screenY, setScreenY] = useState(new Animated.Value(0));
    const [msgData, setMsgData] = useState(msgDat);
    const [showBlur, setShowBlur] = useState(false);
    const [showModals, setShowModals] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    const [isFocused, setIsFocused] = useState(false);
    const [pin, setPin] = useState(false);
    const [text, setText] = useState('');
    const [allView, setAllView] = useState(0);
    useEffect(() => {
        const backAction = () => {
          setShowBlur(false);
    
          setTimeout(() => {
            navigation.navigate('Chats');
            setSelected('Home');
          }, 300); // Delay the back action by one second
    
          return true; // Prevent default behavior (i.e. exit the app)
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
    }, []);
    const onchangeText = (text) => {
        setText(text);
    }
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
            // </View>
        );
    const navigated = () => {
        setWallet(false);
        setInvite(false);
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('FriendProfile');
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
    const navigated1 = () => {
            setSelected('Chat')
            setShowBlur(false);
            let timerId;
            timerId = setTimeout(() => {
                navigation.navigate('GroupAccount');
            }, 30); // Adjust the delay as needed
            return () => {
            clearTimeout(timerId);
            };
        }
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
    const navigateHome = () => {
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
    const navigateChat = () => {
        setSelected('Chat')
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
            navigation.navigate('NoChat');
        }, 30); // Adjust the delay as needed
        return () => {
            clearTimeout(timerId);
        };
    }
    const handleChatView = () => {
        setAllView(1)
        Animated.timing(screenY, {
            toValue: -1.07*screenHegiht,
            duration: 50,
            useNativeDriver: true,
        }).start();
    }
    const handleChatHidden = () => {
        setAllView(0);
        Animated.timing(screenY, {
        toValue: 0 * screenHegiht,
        duration: 50,
        useNativeDriver: true,
        }).start();        
    }
    const handleCall = () => {
        navigation.navigate('GroupCall')
    }
    return(
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <Modal visible={showModals} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModals(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(33)-statusBarHeight), width: vw(50)}]}>
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
                <View>
                    <View style = {styles.chatBackStyle}>
                        <View style = {styles.topBar}/>
                        <View style = {[styles.dataItem, {marginLeft: vw(5), marginTop: vw(8.05), marginBottom: vw(5.8)}]}
                            onPress = {handleChatHidden}
                        >
                            <View style = {styles.datas}>
                                <View style = {[styles.avatars, {width: vw(11.1), height: vw(11.1), backgroundColor: 'transparent'}]}>
                                    <TouchableOpacity onPress = {handleFriendProfile}>
                                        <Image source = {clientData.avatar}
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
                                </View>
                                <View style = {styles.info}>
                                    <Text style = {styles.name}>
                                        {clientData.name}
                                    </Text>
                                    <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Regular',fontSize: vw(2.2), color: 'white', marginLeft: vw(3)}]}>
                                        {clientData.time}
                                    </Text>
                                </View>
                            </View>
                            <View style = {[styles.itemInfo,{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: vw(21.1)}]}>
                                <TouchableOpacity 
                                    onPress = {handleCall}
                                >
                                <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M5.78361 6.126C6.33364 7.27158 7.08343 8.34527 8.033 9.29484C8.98256 10.2444 10.0563 10.9942 11.2018 11.5442C11.3004 11.5915 11.3496 11.6152 11.412 11.6334C11.6335 11.6979 11.9056 11.6516 12.0932 11.5172C12.146 11.4794 12.1912 11.4342 12.2815 11.3439C12.5578 11.0676 12.696 10.9295 12.8349 10.8392C13.3587 10.4985 14.0341 10.4985 14.5579 10.8391C14.6968 10.9295 14.835 11.0676 15.1113 11.3439L15.2653 11.4979C15.6852 11.9179 15.8952 12.1279 16.0093 12.3534C16.2362 12.8019 16.2362 13.3316 16.0093 13.7801C15.8952 14.0056 15.6853 14.2156 15.2653 14.6356L15.1407 14.7602C14.7222 15.1787 14.5129 15.388 14.2284 15.5478C13.9126 15.7252 13.4223 15.8527 13.0602 15.8516C12.7338 15.8507 12.5108 15.7874 12.0647 15.6608C9.66755 14.9804 7.40552 13.6966 5.51839 11.8094C3.63125 9.92231 2.34748 7.66028 1.66708 5.26309C1.54048 4.81703 1.47717 4.594 1.4762 4.26766C1.47513 3.90554 1.60264 3.41519 1.78 3.09947C1.93983 2.81495 2.1491 2.60568 2.56764 2.18714L2.69221 2.06256C3.11219 1.64258 3.32218 1.43259 3.54771 1.31852C3.99624 1.09166 4.52592 1.09166 4.97445 1.31852C5.19997 1.43259 5.40996 1.64258 5.82995 2.06256L5.98394 2.21656C6.26023 2.49285 6.39837 2.63099 6.48868 2.7699C6.82928 3.29376 6.82928 3.9691 6.48868 4.49296C6.39837 4.63187 6.26023 4.77002 5.98395 5.0463C5.89361 5.13663 5.84844 5.1818 5.81063 5.2346C5.67628 5.42223 5.62989 5.69429 5.69447 5.91584C5.71265 5.97819 5.7363 6.02746 5.78361 6.126Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                </TouchableOpacity>
                                <Svg width={vw(6.1)} height={vw(4.2)} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M21.1794 4.43137C21.1794 3.82555 21.1794 3.52265 21.0596 3.38238C20.9557 3.26068 20.7998 3.19609 20.6402 3.20865C20.4563 3.22312 20.2421 3.43731 19.8138 3.86569L16.1794 7.5L19.8138 11.1343C20.2421 11.5627 20.4563 11.7769 20.6402 11.7914C20.7998 11.8039 20.9557 11.7393 21.0596 11.6176C21.1794 11.4774 21.1794 11.1744 21.1794 10.5686V4.43137Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.17944 5.3C1.17944 3.61984 1.17944 2.77976 1.50642 2.13803C1.79404 1.57354 2.25299 1.1146 2.81747 0.82698C3.45921 0.5 4.29929 0.5 5.97944 0.5H11.3794C13.0596 0.5 13.8997 0.5 14.5414 0.82698C15.1059 1.1146 15.5648 1.57354 15.8525 2.13803C16.1794 2.77976 16.1794 3.61984 16.1794 5.3V9.7C16.1794 11.3802 16.1794 12.2202 15.8525 12.862C15.5648 13.4265 15.1059 13.8854 14.5414 14.173C13.8997 14.5 13.0596 14.5 11.3794 14.5H5.97944C4.29929 14.5 3.45921 14.5 2.81747 14.173C2.25299 13.8854 1.79404 13.4265 1.50642 12.862C1.17944 12.2202 1.17944 11.3802 1.17944 9.7V5.3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <TouchableOpacity onPress = {() => setShowModals(!showModals)}>
                                <Svg width={vw(1.1)} height={vw(3.6)} viewBox="0 0 4 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M1.86694 5.8125C1.48725 5.8125 1.17944 6.1203 1.17944 6.5C1.17944 6.8797 1.48725 7.1875 1.86694 7.1875C2.24664 7.1875 2.55444 6.8797 2.55444 6.5C2.55444 6.1203 2.24664 5.8125 1.86694 5.8125Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.86694 10.625C1.48725 10.625 1.17944 10.9328 1.17944 11.3125C1.17944 11.6922 1.48725 12 1.86694 12C2.24664 12 2.55444 11.6922 2.55444 11.3125C2.55444 10.9328 2.24664 10.625 1.86694 10.625Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M1.86694 1C1.48725 1 1.17944 1.3078 1.17944 1.6875C1.17944 2.0672 1.48725 2.375 1.86694 2.375C2.24664 2.375 2.55444 2.0672 2.55444 1.6875C2.55444 1.3078 2.24664 1 1.86694 1Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView style =  {{width: vw(90), marginLeft: vw(5), marginBottom: vw(95),}}
                            ref={scrollViewRef}
                            showsVerticalScrollIndicator={false}
                            onContentSizeChange={scrollToBottom}
                        >
                            <View style = {{ flexDirection: 'column', height: vw(65.83), width: vw(80), justifyContent: 'space-between', alignItems: 'center', padding: vw(6.1), marginLeft: vw(5)}}
                                onPress = {handleChatHidden}
                            >
                                <View style = {{width: vw(22.78), height: vw(22.78), backgroundColor: 'transparent'}}>
                                    <TouchableOpacity onPress = {handleFriendProfile}>
                                        <Image source = {clientData.avatar}
                                            style = {[
                                                styles.addChatIcon, 
                                                {
                                                    width: vw(22.78), 
                                                    height: vw(22.78), 
                                                    borderRadius: vw(5),
                                                    backgroundColor: 'transparent'
                                                    // borderWidth: vw(0.3), 
                                                    // borderColor: 'black',
                                                }
                                            ]}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style = {[styles.info, {alignItems: 'center'}]}>
                                    <Text style = {styles.name}>
                                        Kitshuna Fowyu
                                    </Text>
                                    <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3), color: '#979797'}]}>
                                        @KitshunaFowyu
                                    </Text>
                                </View>
                                <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial ExtraLight',fontSize: vw(2.8), color: '#979797', textAlign: 'center'}]}>
                                    The terms and conditions contained in this Agreement and understandings, whether oral or written.
                                </Text>
                            </View>
                            <View>
                            {
                                msgData.map((item, index)  => 
                                <View style = {styles.msgStyle} key = {index}>
                                    <View style = {{width: vw(10), height: vw(10), flexDirection: 'row', marginBottom: vw(2), alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <TouchableOpacity style = {styles.avatar}
                                            onPress = {handleFriendProfile}
                                        >
                                            {
                                                item.avatar.map((i, idx) => 
                                                    <Image key={idx} style = {{width: item.avatar.length>1 ? vw(7.5) : vw(10), height: item.avatar.length>1? vw(7.5) : vw(10), position: 'absolute', left: vw(2.5)*idx, top: vw(2.5)*idx}}
                                                        source = {i}
                                                    />
                                                )
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                    {
                                        item.name && <View style = {[styles.userInfo,]}>
                                            <Text style = {[styles.name, {fontSize: vw(3.3), color: item.contentAction ? 'white' : '#9D9D9D'}]}>
                                                {item.name}
                                                {item.reply && 
                                                    <Text style = {[styles.name, {fontFamily: 'Poppins-Light', fontSize: vw(3.3), color: '#979797'}]}>
                                                        &nbsp;Reply&nbsp;
                                                    </Text>
                                                }
                                                <Text style = {[styles.name, {fontSize: vw(3.3),}]}>
                                                    {item.replyClient}
                                                </Text>
                                            </Text>
                                            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                                {item.contentAction && <View style = {{marginLeft: vw(2)}}>
                                                        {item.contentAction}
                                                    </View>
                                                }
                                                <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3),}]}>
                                                    {item.content}
                                                </Text>
                                            </View>
                                        </View>
                                    }
                                    {
                                        item.file && 
                                        <View>
                                            {item.file?.type == 'pdf' ?
                                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                                <View style = {styles.pdfStyle}>
                                                    <View style = {[styles.preview, {borderRadius: vw(5), overflow: 'hidden'}]}>
                                                        <ImageBackground source = {item.file?.img} style = {styles.preview}>
                                                            <Svg width={vw(4.44)} height={vw(4.2)} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <Path d="M15 7.5C15 3.63401 11.866 0.5 8 0.5C4.13401 0.5 1 3.63401 1 7.5C1 11.366 4.13401 14.5 8 14.5M5.2 7.5L8 10.3M8 10.3L10.8 7.5M8 10.3V4.7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </Svg>
                                                        </ImageBackground>
                                                    </View>
                                                    <View style = {styles.prop}>
                                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3),}]}>
                                                            {item.file?.name}
                                                        </Text>
                                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(2.2),}]}>
                                                            0 KB - {item.file?.size} - 
                                                            <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(2.2), color: '#53FAFB'}]}>
                                                                downloading
                                                            </Text>
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style = {styles.reply}>
                                                    <Svg width={vw(2.8)} height={vw(2.8)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M8.80679 5.26655C8.91391 5.17473 8.96747 5.12882 8.9871 5.07419C9.00432 5.02625 9.00432 4.9738 8.9871 4.92585C8.96747 4.87122 8.91391 4.82531 8.80679 4.73349L5.08986 1.54756C4.90547 1.3895 4.81327 1.31048 4.73521 1.30854C4.66738 1.30686 4.60258 1.33666 4.5597 1.38926C4.51038 1.44979 4.51038 1.57122 4.51038 1.81408V3.69883C3.57368 3.8627 2.7164 4.33733 2.07931 5.04999C1.38475 5.82694 1.00054 6.83241 1 7.87456V8.14311C1.46045 7.58843 2.03534 7.13982 2.68531 6.82801C3.25835 6.55311 3.87781 6.39027 4.51038 6.34736V8.18596C4.51038 8.42882 4.51038 8.55026 4.5597 8.61078C4.60258 8.66338 4.66738 8.69319 4.73521 8.6915C4.81327 8.68957 4.90547 8.61054 5.08986 8.45249L8.80679 5.26655Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                </View>
                                            </View>
                                            :
                                            item.file?.type == 'img' ?
                                            <View style = {styles.imgStyle}>
                                                <Image source = {item.file.name}
                                                    style = {{width: vw(33), height: vw(51.7), borderRadius: vw(5)}}
                                                />
                                                <View style = {styles.reply}>
                                                    <Svg width={vw(2.8)} height={vw(2.8)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M8.80679 5.26655C8.91391 5.17473 8.96747 5.12882 8.9871 5.07419C9.00432 5.02625 9.00432 4.9738 8.9871 4.92585C8.96747 4.87122 8.91391 4.82531 8.80679 4.73349L5.08986 1.54756C4.90547 1.3895 4.81327 1.31048 4.73521 1.30854C4.66738 1.30686 4.60258 1.33666 4.5597 1.38926C4.51038 1.44979 4.51038 1.57122 4.51038 1.81408V3.69883C3.57368 3.8627 2.7164 4.33733 2.07931 5.04999C1.38475 5.82694 1.00054 6.83241 1 7.87456V8.14311C1.46045 7.58843 2.03534 7.13982 2.68531 6.82801C3.25835 6.55311 3.87781 6.39027 4.51038 6.34736V8.18596C4.51038 8.42882 4.51038 8.55026 4.5597 8.61078C4.60258 8.66338 4.66738 8.69319 4.73521 8.6915C4.81327 8.68957 4.90547 8.61054 5.08986 8.45249L8.80679 5.26655Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                </View>
                                            </View>
                                            :
                                            <View style = {styles.micStyle}>
                                                <View style = {styles.playBar}>
                                                {! item.file?.play ? 
                                                    <Svg width={vw(5.8)} height={vw(5.8)} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <Path d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <Path d="M8 7.46533C8 6.98805 8 6.74941 8.09974 6.61618C8.18666 6.50007 8.31971 6.42744 8.46438 6.4171C8.63038 6.40525 8.83112 6.53429 9.23261 6.79239L13.9532 9.82706C14.3016 10.051 14.4758 10.163 14.5359 10.3054C14.5885 10.4298 14.5885 10.5702 14.5359 10.6946C14.4758 10.837 14.3016 10.949 13.9532 11.1729L9.23261 14.2076C8.83112 14.4657 8.63038 14.5948 8.46438 14.5829C8.31971 14.5726 8.18666 14.4999 8.09974 14.3838C8 14.2506 8 14.012 8 13.5347V7.46533Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </Svg>
                                                    :
                                                    null
                                                }
                                                <Svg width={vw(22.5)} height={vw(4.7)} viewBox="0 0 81 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Rect opacity="0.66" x="0.5" y="4.5" width="2" height="8" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="6.5" y="1.5" width="2" height="14" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="12.5" y="6.5" width="2" height="4" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="18.5" y="0.5" width="2" height="16" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="24.5" y="1.5" width="2" height="14" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="30.5" y="3.5" width="2" height="10" rx="1" fill="black"/>
                                                    <Rect opacity="0.66" x="36.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="42.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="48.5" y="1.5" width="2" height="14" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="54.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="60.5" y="0.5" width="2" height="16" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="66.5" y="3.5" width="2" height="10" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="72.5" y="6.5" width="2" height="4" rx="1" fill="#00C1C3"/>
                                                    <Rect opacity="0.66" x="78.5" y="7.5" width="2" height="2" rx="1" fill="#00C1C3"/>
                                                </Svg>
                                                <Text style = {[styles.name, {fontFamily: 'Poppins-Regular',fontSize: vw(2.8), color: 'black'}]}>
                                                    {item.file.time}
                                                </Text>
                                                </View>
                                                <View style = {[styles.reply, {width: vw(9.4), height: vw(9.4)}]}>
                                                <Text style = {[styles.name, {fontFamily: 'Poppins-Regular',fontSize: vw(2.8), color: '#797C7B', marginLeft: 0}]}>
                                                    x{item.file.speed}
                                                </Text>
                                                </View>
                                            </View>
                                            }
                                            <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: vw(2)}}>
                                                {
                                                    item.file?.reaction &&
                                                    <View style = {[styles.reaction, {width: item.file.reaction.length == 1 ? vw(7.8) : vw(4.44)+(item.file.reaction.length)*vw(4.44), justifyContent:item.file.reaction.length == 1 ? 'center' : 'space-around' }]}>
                                                        {
                                                            item.file.reaction.map((i, idx) => 
                                                                <View key = {idx}>
                                                                    {i}
                                                                </View>
                                                            )
                                                        }
                                                        {item.file.reaction.length>1 && 
                                                            <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(2.8), color: '#979797', marginLeft: vw(0)}]}>
                                                                2
                                                            </Text>
                                                        }
                                                    </View>
                                                }
                                                {item.file.reaction && <TouchableOpacity style = {{marginTop: vw(2), marginLeft: vw(1)}}>
                                                    <Svg width={vw(3.3)} height={vw(3.3)} TouchableOpacityBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <G clip-path="url(#clip0_193_5491)">
                                                            <Path d="M4 7C4 7 4.75 8 6 8C7.25 8 8 7 8 7M7.5 4.5H7.505M4.5 4.5H4.505M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM7.75 4.5C7.75 4.63807 7.63807 4.75 7.5 4.75C7.36193 4.75 7.25 4.63807 7.25 4.5C7.25 4.36193 7.36193 4.25 7.5 4.25C7.63807 4.25 7.75 4.36193 7.75 4.5ZM4.75 4.5C4.75 4.63807 4.63807 4.75 4.5 4.75C4.36193 4.75 4.25 4.63807 4.25 4.5C4.25 4.36193 4.36193 4.25 4.5 4.25C4.63807 4.25 4.75 4.36193 4.75 4.5Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </G>
                                                        <Defs>
                                                            <ClipPath id="clip0_193_5491">
                                                                <Rect width="12" height="12" fill="white"/>
                                                            </ClipPath>
                                                        </Defs>
                                                    </Svg>
                                                </TouchableOpacity>}
                                            </View>
                                        </View>
                                    }
                                    { item.msg && <View style ={{marginBottom: vw(3)}}>
                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3), color: '#53FAFB'}]}>
                                            {item.msg?.url}
                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3),}]}>
                                            {item.msg?.text}
                                        </Text>
                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Light',fontSize: vw(3.3), color: '#53FAFB'}]}>
                                            {item.msg?.email}
                                        </Text>
                                        </Text>
                                    </View>
                                    }
                                    <View style = {{flexDirection: 'row', marginLeft: vw(2), alignItems: 'center', marginBottom: vw(3)}}>
                                        {
                                            item.check == 'double' &&
                                            <Svg width={vw(3.9)} height={vw(2.2)} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M9 1L3.5 7L1 4.27273" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                                <Path d="M13.5 1L8 7" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        }
                                        {
                                            item.time &&
                                            <Text style = {[styles.name, {fontSize: vw(2.2), color: '#797C7B'}]}>
                                                {item.time}
                                            </Text>
                                        }
                                    </View>
                                    </View>
                                </View>
                                )
                            }
                            </View>
                            <View style = {{height: vw(20)}}/>
                        </ScrollView>
                        <View style = {styles.sendMsgBar}>
                            <View style = {styles.hint}>
                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {{width: vw(5.6), height: vw(5.6), alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff10', borderRadius: vw(3), marginRight: vw(2) }}>
                                        <Svg width={vw(2.8)} height={vw(5)} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M5.92 4.39C6.64 4.39 7.27333 4.53 7.82 4.81C8.36667 5.09 8.78667 5.48333 9.08 5.99C9.37333 6.49 9.52 7.06667 9.52 7.72C9.52 8.24 9.43667 8.73667 9.27 9.21C9.10333 9.68333 8.86333 10.07 8.55 10.37C8.23667 10.6633 7.87 10.81 7.45 10.81C7.12333 10.81 6.87333 10.7233 6.7 10.55C6.53333 10.37 6.44333 10.1267 6.43 9.82C6.22333 10.1267 5.96 10.37 5.64 10.55C5.32 10.7233 4.98 10.81 4.62 10.81C4.11333 10.81 3.71667 10.6567 3.43 10.35C3.15 10.0433 3.01 9.62667 3.01 9.1C3.01 8.60667 3.11333 8.14667 3.32 7.72C3.52667 7.28667 3.81333 6.94 4.18 6.68C4.54667 6.42 4.96333 6.29 5.43 6.29C5.76333 6.29 6.04333 6.36333 6.27 6.51C6.50333 6.65667 6.67 6.87 6.77 7.15L6.9 6.41H7.51L7 9.32C6.98 9.44 6.97 9.55 6.97 9.65C6.97 10.0967 7.16333 10.32 7.55 10.32C7.83667 10.32 8.08333 10.19 8.29 9.93C8.50333 9.67 8.66333 9.34333 8.77 8.95C8.88333 8.55 8.94 8.15333 8.94 7.76C8.94 7.17333 8.81333 6.66667 8.56 6.24C8.31333 5.80667 7.95667 5.47667 7.49 5.25C7.02333 5.01667 6.47 4.9 5.83 4.9C5.03 4.9 4.30667 5.09667 3.66 5.49C3.01333 5.88333 2.50667 6.41667 2.14 7.09C1.77333 7.76333 1.59 8.50667 1.59 9.32C1.58333 10.2267 1.85667 10.93 2.41 11.43C2.96333 11.9367 3.72 12.19 4.68 12.19C5.28667 12.19 5.83667 12.0767 6.33 11.85L6.44 12.34C5.85333 12.58 5.21667 12.7 4.53 12.7C3.83 12.7 3.21333 12.5633 2.68 12.29C2.14667 12.0233 1.73333 11.64 1.44 11.14C1.14667 10.64 1 10.0567 1 9.39C1 8.46333 1.21 7.62 1.63 6.86C2.05667 6.09333 2.64333 5.49 3.39 5.05C4.14333 4.61 4.98667 4.39 5.92 4.39ZM4.82 10.26C5.12 10.26 5.39667 10.18 5.65 10.02C5.90333 9.86 6.11 9.63667 6.27 9.35C6.43667 9.06333 6.54 8.73667 6.58 8.37C6.59333 8.25 6.6 8.16333 6.6 8.11C6.6 7.73667 6.49667 7.43333 6.29 7.2C6.09 6.96 5.80333 6.84 5.43 6.84C5.07667 6.84 4.76667 6.94333 4.5 7.15C4.23333 7.35667 4.02667 7.62667 3.88 7.96C3.73333 8.28667 3.66 8.63333 3.66 9C3.66 9.38667 3.76 9.69333 3.96 9.92C4.16 10.1467 4.44667 10.26 4.82 10.26Z" fill="white"/>
                                        </Svg>
                                    </View>
                                    <View>
                                        <View style = {styles.emailSearch}>
                                            <TouchableOpacity onPress = {handleFriendProfile}>
                                                <Image source = {require('../../../../assets/images/follow2.png')}
                                                    style = {{width: vw(5.3), height: vw(5.3)}}
                                                />
                                            </TouchableOpacity>
                                            <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Medium',fontSize: vw(2.8)}]}>
                                                @mussaouel
                                            </Text>
                                        </View>
                                        <View style = {styles.emailSearch}>
                                            <TouchableOpacity onPress = {handleFriendProfile}>
                                                <Image source = {require('../../../../assets/images/follow2.png')}
                                                    style = {{width: vw(5.3), height: vw(5.3)}}
                                                />
                                            </TouchableOpacity>
                                            <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Medium',fontSize: vw(2.8)}]}>
                                                @mussaouel
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style = {{width: vw(5.6), height: vw(5.6), alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff10', borderRadius: vw(3), marginRight: vw(2) }}>
                                    <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7 1L1 7M1 1L7 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                            </View>
                            <View style = {[styles.hint, {height: vw(11.1), alignItems: 'center'}]}>
                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {{width: vw(5.6), height: vw(5.6), alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff10', borderRadius: vw(3), marginRight: vw(2) }}>
                                        <Svg width={vw(2.8)} height={vw(5)} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M5.92 4.39C6.64 4.39 7.27333 4.53 7.82 4.81C8.36667 5.09 8.78667 5.48333 9.08 5.99C9.37333 6.49 9.52 7.06667 9.52 7.72C9.52 8.24 9.43667 8.73667 9.27 9.21C9.10333 9.68333 8.86333 10.07 8.55 10.37C8.23667 10.6633 7.87 10.81 7.45 10.81C7.12333 10.81 6.87333 10.7233 6.7 10.55C6.53333 10.37 6.44333 10.1267 6.43 9.82C6.22333 10.1267 5.96 10.37 5.64 10.55C5.32 10.7233 4.98 10.81 4.62 10.81C4.11333 10.81 3.71667 10.6567 3.43 10.35C3.15 10.0433 3.01 9.62667 3.01 9.1C3.01 8.60667 3.11333 8.14667 3.32 7.72C3.52667 7.28667 3.81333 6.94 4.18 6.68C4.54667 6.42 4.96333 6.29 5.43 6.29C5.76333 6.29 6.04333 6.36333 6.27 6.51C6.50333 6.65667 6.67 6.87 6.77 7.15L6.9 6.41H7.51L7 9.32C6.98 9.44 6.97 9.55 6.97 9.65C6.97 10.0967 7.16333 10.32 7.55 10.32C7.83667 10.32 8.08333 10.19 8.29 9.93C8.50333 9.67 8.66333 9.34333 8.77 8.95C8.88333 8.55 8.94 8.15333 8.94 7.76C8.94 7.17333 8.81333 6.66667 8.56 6.24C8.31333 5.80667 7.95667 5.47667 7.49 5.25C7.02333 5.01667 6.47 4.9 5.83 4.9C5.03 4.9 4.30667 5.09667 3.66 5.49C3.01333 5.88333 2.50667 6.41667 2.14 7.09C1.77333 7.76333 1.59 8.50667 1.59 9.32C1.58333 10.2267 1.85667 10.93 2.41 11.43C2.96333 11.9367 3.72 12.19 4.68 12.19C5.28667 12.19 5.83667 12.0767 6.33 11.85L6.44 12.34C5.85333 12.58 5.21667 12.7 4.53 12.7C3.83 12.7 3.21333 12.5633 2.68 12.29C2.14667 12.0233 1.73333 11.64 1.44 11.14C1.14667 10.64 1 10.0567 1 9.39C1 8.46333 1.21 7.62 1.63 6.86C2.05667 6.09333 2.64333 5.49 3.39 5.05C4.14333 4.61 4.98667 4.39 5.92 4.39ZM4.82 10.26C5.12 10.26 5.39667 10.18 5.65 10.02C5.90333 9.86 6.11 9.63667 6.27 9.35C6.43667 9.06333 6.54 8.73667 6.58 8.37C6.59333 8.25 6.6 8.16333 6.6 8.11C6.6 7.73667 6.49667 7.43333 6.29 7.2C6.09 6.96 5.80333 6.84 5.43 6.84C5.07667 6.84 4.76667 6.94333 4.5 7.15C4.23333 7.35667 4.02667 7.62667 3.88 7.96C3.73333 8.28667 3.66 8.63333 3.66 9C3.66 9.38667 3.76 9.69333 3.96 9.92C4.16 10.1467 4.44667 10.26 4.82 10.26Z" fill="white"/>
                                        </Svg>
                                    </View>
                                    <View style = {[styles.emailSearch, {alignItems: 'center', marginBottom: 0}]}>
                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Medium',fontSize: vw(2.8), color: '#909090', marginLeft: 0}]}>
                                            Replying to&nbsp;
                                        </Text>
                                        <Text style = {[styles.name, {fontFamily: 'TT Firs Neue Trial Medium',fontSize: vw(2.8), marginLeft: 0}]}>
                                            @mussaouel
                                        </Text>
                                    </View>
                                </View>
                                <View style = {{width: vw(5.6), height: vw(5.6), alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff10', borderRadius: vw(3), marginRight: vw(2) }}>
                                    <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7 1L1 7M1 1L7 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                            </View>
                            <View style = {[styles.inputBar, {borderColor: isFocused ? '#53FAFB' : '#4C4C4C', marginLeft: vw(5)}]}>
                                <View style = {[styles.msgInput]}>
                                    <TouchableOpacity
                                        onPress = { () => setPin(!pin) }
                                    >
                                        <Svg width={vw(4.44)} height={vw(3.9)} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M14.5826 6.28048L7.77801 12.4481C6.23057 13.8506 3.72168 13.8506 2.17425 12.4481C0.626813 11.0455 0.626813 8.77146 2.17425 7.36888L8.97881 1.20129C10.0104 0.266237 11.683 0.266237 12.7147 1.20129C13.7463 2.13634 13.7463 3.65236 12.7147 4.58742L6.17693 10.5131C5.66112 10.9807 4.82483 10.9807 4.30901 10.5131C3.7932 10.0456 3.7932 9.2876 4.30901 8.82007L10.0462 3.61995" stroke={pin ? "#53FAFB" : "#4C4C4C"} stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                    <TextInput
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        style={[styles.input, { color: 'white', fontSize: vw(3.3) }]}
                                        placeholder='Type your message'
                                        placeholderTextColor='#3F3F3F'
                                        value={text}
                                        onChangeText={onchangeText}
                                        onSubmitEditing={handleSend}
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
                                <TouchableOpacity style = {styles.sendBtn}
                                    onPress = {handleSend}
                                >
                                    <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6.90359 9.0962L14.6112 1.3886M6.99724 9.33702L8.92642 14.2978C9.09637 14.7348 9.18135 14.9533 9.30379 15.0171C9.40993 15.0724 9.53638 15.0725 9.64259 15.0173C9.7651 14.9536 9.85034 14.7352 10.0208 14.2984L14.8585 1.90186C15.0124 1.50753 15.0893 1.31037 15.0472 1.18439C15.0107 1.07498 14.9248 0.989118 14.8154 0.952568C14.6894 0.91048 14.4923 0.987421 14.0979 1.1413L1.70137 5.97898C1.26455 6.14945 1.04614 6.23468 0.982492 6.3572C0.927315 6.46341 0.927389 6.58985 0.982692 6.69599C1.04649 6.81844 1.26499 6.90341 1.70201 7.07336L6.66277 9.00255C6.75148 9.03704 6.79583 9.05429 6.83318 9.08094C6.86629 9.10455 6.89524 9.1335 6.91885 9.1666C6.94549 9.20395 6.96274 9.24831 6.99724 9.33702Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010'
    },
    header: {
        position: 'absolute',
        top: 0,
        width: vw(100),
        height: vw(54.72),
        marginLeft: vw(5)
    },
    addChat: {
        width: vw(13.9),
        height: vw(21.6),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addChatIcon: {
        width: vw(13.9),
        height: vw(13.9),
        backgroundColor: '#53FAFB20',
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width: vw(100),
        marginTop: vw(60),
        // flexDirection: 'column',
        // alignItems: 'center'
    },
    dataItem: {
        width: vw(90),
        height: vw(11.1),
        marginBottom: vw(5.6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginRight: vw(5)
    },
    datas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    name: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: vw(3.9),
        marginLeft: vw(3),
        // width: vw(70)
    },
    itemInfo: {
        justifyContent: 'flex-end',
        height: vw(9),
        alignItems: 'stretch'
    },
    chatBackStyle: {
        marginTop: vw(18),
        width: vw(100),
        borderTopRightRadius: vw(5),
        borderTopLeftRadius: vw(5),
        backgroundColor: '#202020'
    },
    topBar: {
        width: vw(22.2), 
        height: vw(0.9),
        backgroundColor: '#505050', 
        marginLeft: vw(38.9), 
        marginTop: vw(5),
        borderRadius: vw(1),
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: vw(2.8),
        flexWrap: 'wrap'
    },
    footer: {
        position: 'absolute',
        top: vh(95.56),
        width: vw(92.2),
        left: vw(3.9),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#202020',
        borderRadius: vw(5)
    },
    footerBar: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(5),
        position: 'absolute',
        bottom: vw(110)
    },
    blurViewStyle: {
        position: 'absolute',
        bottom: 0,
        width: vw(92.2),
        height: vw(20),
        left: 0,
        top: 0,
        right: 0
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
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
    msgStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    avatar: {
        width: vw(10),
        height: vw(10),
        overflow: 'hidden'
    },
    userInfo: {
        flexDirection: 'column',
        height: vw(10),
        width: vw(70),
        justifyContent: 'space-around',
        marginBottom: vw(2)
        // marginLeft: vw(12)
    },
    pdfStyle: {
        marginLeft: vw(2),
        width: vw(61.1),
        height: vw(20.8),
        borderRadius: vw(5),
        backgroundColor: '#53FAFB10',
        padding: vw(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    preview: {
        width: vw(19.4),
        height: vw(13.9),
        justifyContent: 'center',
        alignItems:'center'
    },
    reaction: {
        height: vw(4.7),
        backgroundColor: '#53FAFB10',
        marginLeft: vw(2),
        borderRadius: vw(3),
        marginTop: vw(2),
        flexDirection: 'row',
        padding: vw(1),
        paddingTop: vw(0.5),
        paddingBottom: vw(0.5),
        alignItems: 'center',
    },
    reply: {
        width: vw(6.1),
        height: vw(6.1),
        borderRadius: vw(5),
        backgroundColor: '#ffffff10',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: vw(3)
    },
    imgStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: vw(2)
    },
    micStyle: {
        height: vw(9.72),
        flexDirection: 'row',
        alignItems: 'center'
    },
    playBar: {
        width: vw(45.3),
        height: vw(9.72),
        borderRadius: vw(5),
        backgroundColor: '#53FAFB',
        marginLeft: vw(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: vw(2),
        paddingRight: vw(2)
    },
    sendMsgBar: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: vw(8),
        width: vw(100),
        height: vw(106.2),
        backgroundColor: '#202020'
    },
    hint: {
        width: vw(90),
        height: vw(18.9),
        marginLeft: vw(5),
        borderRadius: vw(5),
        backgroundColor: '#53FAFB10',
        marginBottom: vw(3),
        padding: vw(3),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    emailSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vw(2)
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

export default GroupChat;