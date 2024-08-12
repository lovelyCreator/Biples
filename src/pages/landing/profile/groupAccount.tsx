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
// import { TouchableOpacity } from 'react-native';
const GroupAccount = ({navigation}) => {
    const statusBarHeight = getStatusBarHeight();
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const [routerName, setRouterName] = ['GroupAccount']
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const backgroundImageRef = createRef()
    const data = [
        { id : '1', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '2', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '3', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '4', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '5', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '6', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '7', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '8', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '9', avatarUrl: require('../../../../assets/images/card4.png'), },
    ];
    const friendArray = [
        { left: 6.11, avatarUrl: require('../../../../assets/images/card10.png') },
        { left: 12.22, avatarUrl: require('../../../../assets/images/card5.png') },
        { left: 18.33, avatarUrl: require('../../../../assets/images/avatar(1).png') },
    ];
    const document = [
        {
            id: 0,
            dragged: false,
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            title: 'Fichier.pdf',
            date: 'Tue 20 Jan 2024',
            state: 'Download',
            filesize: '291 KB',
            icon: <Svg width={vw(5)} height={vw(4.7)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M6.23848 8.5L9.43848 11.7M9.43848 11.7L12.6385 8.5M9.43848 11.7V5.3M17.4385 8.5C17.4385 12.9183 13.8568 16.5 9.43848 16.5C5.0202 16.5 1.43848 12.9183 1.43848 8.5C1.43848 4.08172 5.0202 0.5 9.43848 0.5C13.8568 0.5 17.4385 4.08172 17.4385 8.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
        },
        {
            id: 1,
            dragged: false,
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            title: 'Fichier.pdf',
            date: 'Tue 20 Jan 2024',
            state: 'Downloading',
            filesize: '0 KB - 829 MB - 4 min',
            icon: <Svg width={vw(5)} height={vw(4.7)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M9 16.5C13.4183 16.5 17 12.9183 17 8.5C17 4.08172 13.4183 0.5 9 0.5C4.58172 0.5 1 4.08172 1 8.5C1 12.9183 4.58172 16.5 9 16.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M5.8 6.58C5.8 6.13196 5.8 5.90794 5.88719 5.73681C5.96389 5.58628 6.08628 5.46389 6.23681 5.38719C6.40794 5.3 6.63196 5.3 7.08 5.3H10.92C11.368 5.3 11.5921 5.3 11.7632 5.38719C11.9137 5.46389 12.0361 5.58628 12.1128 5.73681C12.2 5.90794 12.2 6.13196 12.2 6.58V10.42C12.2 10.868 12.2 11.0921 12.1128 11.2632C12.0361 11.4137 11.9137 11.5361 11.7632 11.6128C11.5921 11.7 11.368 11.7 10.92 11.7H7.08C6.63196 11.7 6.40794 11.7 6.23681 11.6128C6.08628 11.5361 5.96389 11.4137 5.88719 11.2632C5.8 11.0921 5.8 10.868 5.8 10.42V6.58Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
        },
        {
            id: 2,
            dragged: false,
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            title: 'Fichier.pdf',
            date: 'Tue 20 Jan 2024',
            state: 'Pasued',
            filesize: '192 MB - 829 MB',
            icon: <Svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M7 10.9V6.1M11 10.9V6.1M17 8.5C17 12.9183 13.4183 16.5 9 16.5C4.58172 16.5 1 12.9183 1 8.5C1 4.08172 4.58172 0.5 9 0.5C13.4183 0.5 17 4.08172 17 8.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
        },
        {
            id: 3,
            dragged: false,
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            title: 'Fichier.pdf',
            date: 'Tue 20 Jan 2024',
            state: '',
            filesize: '',
            icon: <Svg width={vw(3.9)} height={vw(3.6)} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M6.36744 2.15969H3.86264C2.86062 2.15969 2.35961 2.15969 1.97689 2.33845C1.64024 2.49568 1.36654 2.74658 1.19501 3.05518C1 3.406 1 3.86526 1 4.78377V9.37592C1 10.2944 1 10.7537 1.19501 11.1045C1.36654 11.4131 1.64024 11.664 1.97689 11.8212C2.35961 12 2.86062 12 3.86263 12H8.87225C9.87426 12 10.3753 12 10.758 11.8212C11.0946 11.664 11.3683 11.4131 11.5399 11.1045C11.7349 10.7537 11.7349 10.2944 11.7349 9.37592V7.07985M4.57828 8.7199H5.57695C5.86869 8.7199 6.01455 8.7199 6.15183 8.68969C6.27353 8.6629 6.38988 8.61873 6.4966 8.55878C6.61697 8.49116 6.72011 8.39661 6.9264 8.20751L12.6295 2.97972C13.1235 2.52683 13.1235 1.79255 12.6295 1.33967C12.1354 0.886779 11.3344 0.886778 10.8403 1.33966L5.13724 6.56746C4.93095 6.75656 4.82781 6.85111 4.75404 6.96145C4.68865 7.05928 4.64045 7.16593 4.61123 7.27749C4.57828 7.40333 4.57828 7.53704 4.57828 7.80447V8.7199Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
        },
    ];
    const voice = [
        {
            id: 0,
            state: 'run',
            playedTime: '0:09',
            display: <Svg width={vw(44.17)} height={vw(4.44)} viewBox="0 0 159 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect opacity="0.66" x="0.938477" y="4" width="2" height="8" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="6.93848" y="1" width="2" height="14" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="12.9385" y="1" width="2" height="14" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="18.9385" y="6" width="2" height="4" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="24.9385" y="1" width="2" height="14" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="30.9385" y="6" width="2" height="4" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="36.9385" y="3" width="2" height="10" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="42.9385" y="1" width="2" height="14" rx="1" fill="black"/>
                    <Rect opacity="0.66" x="48.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="54.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="60.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="66.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="72.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="78.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="84.9385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="90.9385" width="2" height="16" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="96.9385" width="2" height="16" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="102.938" width="2" height="16" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="108.938" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="114.938" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="120.938" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="126.938" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="132.938" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="138.938" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="144.938" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
                    <Rect opacity="0.66" x="150.938" y="7" width="2" height="2" rx="1" fill="#00C1C3"/>
                </Svg>,
            remainedTime: '10.09',
            speed: 'x1.5',
            uploadingDate: 'Yesterday 03:21 PM'
        },
        {
            id: 1,
            state: 'stop',
            playedTime: '0:00',
            display: <Svg width={vw(44.17)} height={vw(4.44)} viewBox="0 0 159 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect opacity="0.66" x="0.938477" y="4" width="2" height="8" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="6.93848" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="12.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="18.9385" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="24.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="30.9385" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="36.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="42.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="48.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="54.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="60.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="66.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="72.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="78.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="84.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="90.9385" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="96.9385" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="102.938" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="108.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="114.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="120.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="126.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="132.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="138.938" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="144.938" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="150.938" y="7" width="2" height="2" rx="1" fill="#53FAFB50"/>
                </Svg>,
            remainedTime: '10:52',
            speed: '',
            uploadingDate: 'Yesterday 03:21 PM'
        },
        {
            id: 2,
            state: 'stop',
            playedTime: '0:00',
            display: <Svg width={vw(44.17)} height={vw(4.44)} viewBox="0 0 159 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect opacity="0.66" x="0.938477" y="4" width="2" height="8" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="6.93848" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="12.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="18.9385" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="24.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="30.9385" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="36.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="42.9385" y="1" width="2" height="14" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="48.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="54.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="60.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="66.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="72.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="78.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="84.9385" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="90.9385" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="96.9385" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="102.938" width="2" height="16" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="108.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="114.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="120.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="126.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="132.938" y="3" width="2" height="10" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="138.938" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="144.938" y="6" width="2" height="4" rx="1" fill="#53FAFB50"/>
                    <Rect opacity="0.66" x="150.938" y="7" width="2" height="2" rx="1" fill="#53FAFB50"/>
                </Svg>,
            remainedTime: '10:52',
            speed: '',
            uploadingDate: 'Yesterday 03:21 PM'
        },
    ];
    const links = [
        {
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            url: 'figma.com',
            date: 'Yesterday 03 : 21 PM',
            uploadUser: 'Kitshuna Fowyu',
            content: 'https://www.figma.com \nproto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-\nMobile?nodeid=377-1543&scaling=scale-\ndown Check It here @yazidkherrati '
        },
        {
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            url: 'figma.com',
            date: 'Yesterday 03 : 21 PM',
            uploadUser: 'Kitshuna Fowyu',
            content: 'https://www.figma.com \nproto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-\nMobile?nodeid=377-1543&scaling=scale-\ndown Check It here @yazidkherrati '
        },
        {
            avatar: require('../../../../assets/images/document.png'),
            semiAvatar: require('../../../../assets/images/follow2.png'),
            url: 'figma.com',
            date: 'Yesterday 03 : 21 PM',
            uploadUser: 'Kitshuna Fowyu',
            content: 'https://www.figma.com \nproto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-\nMobile?nodeid=377-1543&scaling=scale-\ndown Check It here @yazidkherrati '
        },
    ];

    const [selected, setSelected] = useState('Chat');
    const [friendData, setFriendData] = useState({
        avatar: require('../../../../assets/images/card9.png'),
        userName: 'Fernado TOYs',
        displayName: '66.2K Members',
        online: true,
        btnName: [
            {
                name: 'Joined',
                draw: <Svg width={vw(2.8)} height={vw(1.7)} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1 1L5 5L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,                
                // navigationName: 'Account',
            }, {
                name: 'message',
                avatar: <Svg width={vw(3)} height={vw(3.9)} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M7.16667 11.2C7.16667 12.1941 6.42047 13 5.5 13C4.57953 13 3.83333 12.1941 3.83333 11.2M2.93193 4.53087C2.43938 5.08795 2.16667 5.79082 2.16667 6.52C2.16667 7.88908 1.8523 8.89035 1.46004 9.60681C1.01297 10.4234 0.789431 10.8317 0.798258 10.9292C0.808357 11.0408 0.826953 11.076 0.910744 11.1422C0.983984 11.2 1.35195 11.2 2.08788 11.2H9.87778M5.5 3.4C5.33727 3.4 5.17577 3.41114 5.01666 3.43296C4.80471 3.46203 4.69873 3.47657 4.59236 3.44534C4.51578 3.42286 4.40031 3.35037 4.34433 3.28962C4.26657 3.20524 4.24957 3.16074 4.21556 3.07172C4.14825 2.89552 4.11111 2.70245 4.11111 2.5C4.11111 1.67157 4.73294 1 5.5 1C6.26706 1 6.88889 1.67157 6.88889 2.5C6.88889 2.90537 6.74 3.27318 6.49806 3.54313C6.17796 3.4491 5.84168 3.4 5.5 3.4ZM5.5 3.4C6.38406 3.4 7.2319 3.72871 7.85702 4.31383C8.48214 4.89894 8.83333 5.69252 8.83333 6.52C8.83333 6.72086 8.83841 6.91381 8.848 7.0991M10.5 11.8L0.5 2.2" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,
                draw: <Svg width={vw(2.5)} height={vw(1.7)} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M0.500004 1L4.5 5L8.5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>, 
                // navigationName: 'Account',
            }
        ],
        text: 'The terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written.',
        
    });
    const [friendsAvatars, setFriendsAvatars] = useState(friendArray);
    const [sortBtn, setSortBtn] = useState([
        {
            mame: 'Media',
            selected: true,
        },
        {
            mame: 'Documents',
            selected: false,
        },
        {
            mame: 'Voices',
            selected: false,
        },
        {
            mame: 'Links',
            selected: false,
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [showModals, setShowModals] = useState(false);
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
                }
                else {
                    console.log('up')
                    setAllView(1)
                    Animated.timing(screenY, {
                        toValue: -0.3*SCREEN_HEIGHT,
                        duration: 250,
                        useNativeDriver: true,
                    }).start();
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
    const DocumentItem = ({item, index}) => {
        const handleDelete = (id) => {
            setDocumentData(prevFriends => {
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
            return newFriends;
            });
        };
        
        const pan = new Animated.ValueXY();
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
                        setDocumentData(prevFriend => {
                            const newFriends = [...prevFriend];
                            newFriends[index].dragged = false;
                            return newFriends;
                        });
                    } else {
                        // console.log('dx<0', gestureState.dx);
                        setDocumentData(prevFriend => {
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
            setDocumentData(prevFriend => {
                const newFriends = [...prevFriend];
                newFriends[index].dragged = false;
                return newFriends;
            });
        }
        return (
            <Animated.View 
                {...panResponder.panHandlers}
                style={[styles.documentItem, {
                transform: [{ translateX: pan.x }], backgroundColor: item.dragged ? '#53FAFB': '#53FAFB10'
                }]} key = {item}
            >
                <View style = {[styles.userInfo, {alignItems: 'center'}]}>
                    {
                        item.dragged ?
                        <TouchableOpacity 
                            onPress = {handleBack}
                            style = {{backgroundColor: '#131313', borderRadius: vw(5), width: vw(8.33), height: vw(8.33), justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Svg width={vw(1.7)} height={vw(3.1)} viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M5.375 0.8125L0.6875 5.5L5.375 10.1875" fill="white" fill-opacity="0.2"/>
                                <Path d="M5.375 0.8125L0.6875 5.5L5.375 10.1875" fill="#212121"/>
                                <Path d="M5.375 0.8125L0.6875 5.5L5.375 10.1875" fill="#181818"/>
                                <Path d="M5.375 0.8125L0.6875 5.5L5.375 10.1875" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        :
                        <View style = {styles.avatar}>
                            <ImageBackground source = {item.avatar}
                                style = {styles.avatarItem}
                            >
                                <Image source = {item.semiAvatar}
                                    style = {styles.semiAvatarItem}
                                />
                            </ImageBackground>
                        </View>
                    }
                    <View style = {styles.documentStyle}>
                        <Text style = {[styles.documentName, {color: item.dragged ? 'black' : '#DADADA', fontFamily: item.dragged ? 'TT Firs Neue Trial Medium': 'TT Firs New Trial Light'}]}>
                            {item.title}
                        </Text>
                        <Text style = {[styles.documenttime, {color: item.dragged ? 'black' : '#979797', fontFamily: item.dragged ? 'TT Firs Neue Trial Regular': 'TT Firs New Trial Light'}]}>
                            {item.date}
                        </Text>
                    </View>
                </View>
                {
                    item.dragged ?
                    
                    <TouchableOpacity
                        style={{ backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'flex-end', width: vw(8.3)}}
                        onPress={() => handleDelete(item.id)}
                    >
                        <Svg width={vw(8.3)} height={vw(8.3)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="15" cy="15" r="14.5" stroke="black"/>
                            <Path d="M13.4375 8.4375H17.5M9.375 10.4687H21.5625M20.2083 10.4687L19.7335 17.5912C19.6623 18.6598 19.6266 19.1941 19.3958 19.5992C19.1926 19.9559 18.8862 20.2426 18.5168 20.4217C18.0972 20.625 17.5617 20.625 16.4907 20.625H14.4468C13.3758 20.625 12.8403 20.625 12.4207 20.4217C12.0513 20.2426 11.7449 19.9559 11.5417 19.5992C11.3109 19.1941 11.2752 18.6598 11.204 17.5912L10.7292 10.4687M14.1146 13.5156V16.901M16.8229 13.5156V16.901" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    :
                    <View style = {styles.download}>
                    <TouchableOpacity style = {styles.downloadBtn}
                        // onPress = { () => {
                        //     setDocumentData(prevData => {
                        //         const newData = [... prevData];
                        //         if(index == 0){
                        //             newData[index] = document[1];
                        //             if (item.state != 'Paused'){
                        //                 const id = setInterval(() => {
                        //                     setDocumentData((prevCount)  => prevCount + 1);
                        //                 }, 1000);
                        //                 setIntervalId(id);
                        //                 if (id == 3) {
                        //                     setDocumentData(prevData => {
                        //                         const newData = [... prevData];
                        //                         newData[index] = document[3];
                        //                         return newData;
                        //                     })
                        //                     clearInterval(intervalId);
                        //                 }
                        //             }
                        //             else {
                        //                 clearInterval(intervalId);
                        //             }
                        //             return () => (clearInterval(intervalId));
                        //         }
                        //         if(index == 1){
                        //             newData[index] = document[2];
                        //             return newData;
                        //         }
                        //     });
                        // }}
                    >
                        {
                            item.state != '' ?
                            <View style = {styles.downloadBtntext}>
                                <Text style = {styles.downloadState}>
                                    {item.state}
                                </Text>
                                <Text style = {styles.downloadsize}>
                                    {item.filesize}
                                </Text>
                            </View>
                            :
                            null
                        }
                        {item.icon}
                    </TouchableOpacity>
                    {
                        item.state == 'Download' ?
                        <View style = {{marginLeft: vw(4)}}>
                            <Svg width={vw(1.1)} height={vw(3.1)} viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1.99995 4.93849C1.6898 4.93849 1.43837 5.18991 1.43837 5.50006C1.43837 5.81021 1.6898 6.06164 1.99995 6.06164C2.3101 6.06164 2.56152 5.81021 2.56152 5.50006C2.56152 5.18991 2.3101 4.93849 1.99995 4.93849Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M1.99995 8.86952C1.6898 8.86952 1.43837 9.12095 1.43837 9.4311C1.43837 9.74125 1.6898 9.99268 1.99995 9.99268C2.3101 9.99268 2.56152 9.74125 2.56152 9.4311C2.56152 9.12095 2.3101 8.86952 1.99995 8.86952Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M1.99995 1.00745C1.6898 1.00745 1.43837 1.25888 1.43837 1.56903C1.43837 1.87918 1.6898 2.1306 1.99995 2.1306C2.3101 2.1306 2.56152 1.87918 2.56152 1.56903C2.56152 1.25888 2.3101 1.00745 1.99995 1.00745Z" stroke="white" stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                        :
                        null
                    }
                    </View>
                }
            </Animated.View>
        );
    };
    const VoiceItem = ({item, index}) => {
        const [dragged, setDragged] = useState(false);
        const [direct, setDirection] = useState('');
        const items = [item]
        // console.log(items);
        const handleDelete = (id) => {
            setVoiceData(prevFriends => {
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
            return newFriends;
            });
        };
        const renderHiddenItem = (data, rowMap) => {
            const swipeAnimatedValue = new Animated.Value(0);
            const backgroundColor = swipeAnimatedValue.interpolate({
              inputRange: [-75, 0, 75],
              outputRange: ['black', 'black', 'blue'],
            });
        
            return (
              <Animated.View
                style={{
                  flex: 1,
                  backgroundColor: '#101010',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  width: vw(90)
                }}
              >
              <TouchableOpacity
                style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: vw(13.3), height: vw(13.3), borderRadius: vw(15), marginTop: vw(0.5), marginRight: vw(0.5) }}
                onPress={() => handleDelete(data.item.id)}
              >
                  {/* <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M7.66667 1H14.3333M1 4.33333H21M18.7778 4.33333L17.9986 16.0214C17.8817 17.775 17.8232 18.6518 17.4445 19.3167C17.111 19.902 16.608 20.3725 16.0018 20.6663C15.3133 21 14.4346 21 12.6771 21H9.32295C7.56545 21 6.6867 21 5.99815 20.6663C5.39195 20.3725 4.88899 19.902 4.55554 19.3167C4.17679 18.6518 4.11834 17.775 4.00143 16.0214L3.22222 4.33333M8.77778 9.33333V14.8889M13.2222 9.33333V14.8889" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg> */}
                  <Image source = {require('../../../../assets/images/follow2.png')}
                    style = {{width: vw(13.3), height: vw(13.3), borderRadius: vw(10)}}/>
              </TouchableOpacity>
              <View style = {{width:vw(60)}}/>
                <TouchableOpacity
                  style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: vw(13.3), height: vw(13.3), borderRadius: vw(15), marginTop: vw(0.5), marginRight: vw(0.5) }}
                  onPress={() => handleDelete(data.item.id)}
                >
                    <Svg width={vw(6.1)} height={vw(6.1)} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M7.66667 1H14.3333M1 4.33333H21M18.7778 4.33333L17.9986 16.0214C17.8817 17.775 17.8232 18.6518 17.4445 19.3167C17.111 19.902 16.608 20.3725 16.0018 20.6663C15.3133 21 14.4346 21 12.6771 21H9.32295C7.56545 21 6.6867 21 5.99815 20.6663C5.39195 20.3725 4.88899 19.902 4.55554 19.3167C4.17679 18.6518 4.11834 17.775 4.00143 16.0214L3.22222 4.33333M8.77778 9.33333V14.8889M13.2222 9.33333V14.8889" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </TouchableOpacity>
              </Animated.View>
            );
          };
        const renderItem = (data) => {
            // console.log(data.item.state);
            return (
            <View style={[styles.voicedataStyle, { width: dragged ? vw(72) : vw(90),  left: dragged && direct == 'left' ? vw(17) : 0, right: dragged && direct == 'right' ? 0 : 0-vw(17)}]}>
                 <View style = {[styles.vicCard, {width: dragged? vw(72.2): vw(90), backgroundColor: data.item.state == 'run' ? "#53FAFB" : '#172727'}]}>
                     {
                         data.item.state == 'run' ?
                         <TouchableOpacity 
                             onPress = {() => 
                                 setVoiceData(prevData => {
                                     const newData = [...prevData];
                                     newData[index] = voice[1];
                                     return newData;
                                 })
                             }
                         >
                             <Svg width={vw(8.9)} height={vw(8.9)} viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                                 <Path d="M12.1885 20.5V11.5M19.6885 20.5V11.5M30.9385 16C30.9385 24.2843 24.2227 31 15.9385 31C7.65421 31 0.938477 24.2843 0.938477 16C0.938477 7.71573 7.65421 1 15.9385 1C24.2227 1 30.9385 7.71573 30.9385 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </Svg>
                         </TouchableOpacity>
                         :
                         <TouchableOpacity 
                             onPress = {() => 
                                 setVoiceData(prevData => {
                                     const newData = [...prevData];
                                     newData[index] = voice[0];
                                     return newData;
                                 })
                             }
                         >
                             <Svg width={vw(9.1)} height={vw(9.1)} viewBox="0 0 33 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                                 <Path d="M16.4385 31C24.7227 31 31.4385 24.2843 31.4385 16C31.4385 7.71573 24.7227 1 16.4385 1C8.15421 1 1.43848 7.71573 1.43848 16C1.43848 24.2843 8.15421 31 16.4385 31Z" stroke="#53FAFB50" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <Path d="M12.6885 11.448C12.6885 10.7321 12.6885 10.3741 12.8381 10.1743C12.9685 10.0001 13.168 9.89115 13.385 9.87565C13.6341 9.85787 13.9352 10.0514 14.5374 10.4386L21.6183 14.9906C22.1409 15.3265 22.4021 15.4945 22.4924 15.7081C22.5712 15.8947 22.5712 16.1053 22.4924 16.2919C22.4021 16.5055 22.1409 16.6735 21.6183 17.0094L14.5374 21.5614C13.9352 21.9486 13.6341 22.1421 13.385 22.1243C13.168 22.1088 12.9685 21.9999 12.8381 21.8257C12.6885 21.6259 12.6885 21.2679 12.6885 20.552V11.448Z" stroke="#53FAFB50" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </Svg>
                         </TouchableOpacity>
                     }
                     <Text style = {[styles.voiceRunTime, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
                         {data.item.playedTime}
                     </Text>
                     {dragged?
                      <Svg width={vw(26.94)} height={vw(4.44)} viewBox="0 0 97 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Rect opacity="0.66" x="0.438477" y="4" width="2" height="8" rx="1" fill="black"/>
                      <Rect opacity="0.66" x="6.43848" y="1" width="2" height="14" rx="1" fill="black"/>
                      <Rect opacity="0.66" x="12.4385" y="6" width="2" height="4" rx="1" fill="black"/>
                      <Rect opacity="0.66" x="18.4385" y="1" width="2" height="14" rx="1" fill="black"/>
                      <Rect opacity="0.66" x="24.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="30.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="36.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="42.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="48.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="54.4385" width="2" height="16" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="60.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="66.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="72.4385" y="3" width="2" height="10" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="78.4385" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="84.4385" y="6" width="2" height="4" rx="1" fill="#00C1C3"/>
                      <Rect opacity="0.66" x="90.4385" y="7" width="2" height="2" rx="1" fill="#00C1C3"/>
                      </Svg>
                     :data.item.display}
                     {
                         data.item.state == 'run' ?
                         <View style = {styles.speed}>
                             <Text style = {[styles.speedText, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
                                 {data.item.speed}
                             </Text>
                         </View>
                         :
                         <Text style = {[styles.voiceRunTime, {color: data.item.state == 'run' ? "black" : '#53FAFB50'}]}>
                             {data.item.remainedTime}
                         </Text>
                     }
                     <Svg width={vw(0.83)} height={vw(3.3)} viewBox="0 0 3 12" fill="none" xmlns="http:www.w3.org/2000/svg">
                         <Path d="M1.49995 5.43837C1.1898 5.43837 0.938371 5.68979 0.938371 5.99994C0.938371 6.31009 1.1898 6.56152 1.49995 6.56152C1.8101 6.56152 2.06152 6.31009 2.06152 5.99994C2.06152 5.68979 1.8101 5.43837 1.49995 5.43837Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                         <Path d="M1.49995 9.3694C1.1898 9.3694 0.938371 9.62083 0.938371 9.93098C0.93837 10.2411 1.1898 10.4926 1.49995 10.4926C1.8101 10.4926 2.06152 10.2411 2.06152 9.93098C2.06152 9.62083 1.8101 9.3694 1.49995 9.3694Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                         <Path d="M1.49995 1.50733C1.1898 1.50733 0.938371 1.75876 0.938371 2.06891C0.938371 2.37906 1.1898 2.63048 1.49995 2.63048C1.8101 2.63048 2.06152 2.37906 2.06152 2.06891C2.06152 1.75876 1.8101 1.50733 1.49995 1.50733Z" stroke={item.state == 'run' ? "black" : '#53FAFB50'} stroke-width="1.12724" stroke-linecap="round" stroke-linejoin="round"/>
                     </Svg>
                 </View>
                 <Text style = {styles.uploadText}>
                     {data.item.uploadingDate}
                 </Text>
            </View>
        );}
        onSwipeValueChange = (swipeData) => {
            const { key, value, direction } = swipeData;
            if (value < -30 || value > 30){
                setDragged(true)
                setDirection(direction);
            } 
            else {
                setDragged(false)}
            // console.log(direction)
        }
        return (
            <View style = {{width: vw(90), flexDirection: 'row', backgroundColor: '#101010'}}>
                <SwipeListView
                data={items}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={vw(17)}
                rightOpenValue={0-vw(17)}
                onSwipeValueChange={onSwipeValueChange}
                />
            </View>
        )
    }
    const LinkItem = ({item}) => {
        return (
            <View key = {item} style = {[styles.documentItem, {backgroundColor: 'transparent', flexDirection: 'cloumn', height: vw(43.05),alignItems: 'flex-start',paddingLeft: vw(2)}]}>
                <View style = {[styles.userInfo, {height: vw(36.94), alignItems:'flex-start', backgroundColor: '#53FAFB10', padding: vw(4.44), borderRadius: vw(5), marginRight: vw(10)}]}>
                    <View style = {[styles.avatar, {width: vw(15.6), height: vw(15), position: 'relative', borderRadius: 0}]}>
                        <Image source = {item.avatar}
                            style = {[styles.avatarItem, { width: vw(13.9), borderRadius: vw(5)}]}
                        />
                        <Image source = {item.semiAvatar}
                            style = {[styles.semiAvatarItem, {position: 'absolute', right: 0, bottom: 0 }]}
                        />
                    </View>
                    <View style = {[styles.documentStyle, {flexDirection: 'column', justifyContent: 'space-between', height: vw(27.5)}]}>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Svg width={vw(3.3)} height={vw(3.1)} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6.16722 8.80496L5.43278 9.53941C4.41872 10.5535 2.7746 10.5535 1.76054 9.53941C0.746485 8.52535 0.746485 6.88123 1.76054 5.86717L2.49499 5.13273M9.10501 5.86717L9.83946 5.13273C10.8535 4.11867 10.8535 2.47455 9.83946 1.4605C8.8254 0.446436 7.18128 0.446437 6.16722 1.4605L5.43278 2.19494M3.98234 7.3176L7.61766 3.68228" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {styles.documentName}>
                                &nbsp;&nbsp;{item.url}
                            </Text>
                        </View>
                        <Text style = {[styles.documenttime, {fontSize: vw(2.8), color: '#53FAFB'}]}>
                            {item.content}
                        </Text>
                        <Text style = {[styles.documentName, {fontSize: vw(2.8), fontFamily: 'Poppins-Medium'}]}>
                            {item.uploadUser}
                        </Text>
                    </View>
                </View>
                <Text style = {styles.uploadText}>
                    {item.date}
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
    // useEffect(() => {
    //     const switchPage = setTimeout(() => {
    //         setShowBlur(!showBlur);
    //     }, 3); // 10 seconds in milliseconds
    //     console.log(showBlur);
    //     return () => clearTimeout(switchPage);
    //   }, [NavigationRouteContext]);
    const renderBlurView = () => {
        // console.log(viewRef);
        return (
            <View style = {{width: vw(92.2), position: 'absolute', right: 0, bottom: 0}}>
                
                <BlurView
                    viewRef={viewRef}
                    style={styles.blurViewStyle}
                    // blurRadius={1}
                    // blurType={blurType}
                    blurAmount={9}
                    downsampleFactor={10}
                    overlayColor={'rgba(50, 50, 50, .5)'}
                />
            </View>
        );
    }        
    const navigateAndAnimate = () => {
      if (allView === 0) {
        // navigation.navigate('FriendSearchLoading');
        setShowBlur(false);
        let timerId;
        timerId = setTimeout(() => {
        navigation.goBack();
          }, 30); // Adjust the delay as needed
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
    const navigated1 = () => {
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
    return (
        <SafeAreaView
        {...panResponder.panHandlers}>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {[styles.header, {zIndex: allView == 1 ? 1 : 0}]}>
                {allView == 0 && <Image source = {require('../../../../assets/images/groupaccountBack.png')}
                    style = {styles.backImage}
                />}
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent'}]}
                            onPress = { navigateAndAnimate }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            {allView ==0 ? 'Account' : sortBtn[activeTab].mame}
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent', alignItems: 'flex-end'}]}
                            onPress = { () => 
                                setShowModals(!showModals)
                            }
                        >
                            <Svg width={vw(1.1)} height={vw(4.44)} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.125 7.25008C1.64174 7.25008 1.24999 7.64183 1.24999 8.12508C1.24999 8.60833 1.64174 9.00009 2.125 9.00009C2.60825 9.00009 3 8.60833 3 8.12508C3 7.64183 2.60825 7.25008 2.125 7.25008Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 13.3751C1.64174 13.3751 1.24999 13.7669 1.24999 14.2501C1.24999 14.7334 1.64174 15.1251 2.12499 15.1251C2.60825 15.1251 3 14.7334 3 14.2501C3 13.7669 2.60825 13.3751 2.125 13.3751Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 1.12504C1.64174 1.12504 1.24999 1.51679 1.24999 2.00005C1.24999 2.4833 1.64174 2.87505 2.125 2.87505C2.60825 2.87505 3 2.4833 3 2.00005C3 1.51679 2.60825 1.12504 2.125 1.12504Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal visible={showModal} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModal(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(53)-statusBarHeight)}]}>
                            <View style = {styles.modalItem}>
                                <Svg width={vw(3.3)} height={vw(3.6)} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M4.12948 1.12023C4.67755 0.71894 5.32833 0.5 6 0.5C6.88406 0.5 7.7319 0.879285 8.35702 1.55442C8.98214 2.22955 9.33333 3.14522 9.33333 4.1C9.33333 5.36046 9.48344 6.35073 9.69356 7.11945M2.81037 3.05434C2.71592 3.39036 2.66667 3.74244 2.66667 4.1C2.66667 5.95411 2.23359 7.22358 1.74981 8.06325C1.34174 8.77153 1.1377 9.12566 1.14518 9.22446C1.15346 9.33384 1.17492 9.37556 1.25654 9.44095C1.33025 9.5 1.66255 9.5 2.32714 9.5H8.77778M4.5301 11.9C4.92184 12.2734 5.43642 12.5 6 12.5C6.56358 12.5 7.07816 12.2734 7.4699 11.9M11 11.9L1 1.1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Unfollow&nbsp;&nbsp;
                                </Text>
                            </View>
                            <TouchableOpacity style = {styles.modalItem}
                                onPress = {() => {navigation.navigate('Tickets'), setShowBlur(false), setShowModal(!showModal)}}
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
                <Animated.View style = {[styles.body, {transform: [{ translateY: screenY }, ],}]}
                    showsVerticalScrollIndicator={false}
                >
                    {allView == 0 ?
                        <View style = {styles.friendInfo}>
                            <View style = {styles.friend}>
                                {/* <View style = {{borderRadius: vw(11.3), overflow:'hidden'}}> */}
                                <Image
                                    source = {friendData.avatar}
                                    style = {styles.friendAvatar}
                                />
                                {/* </View> */}
                                <View style = {styles.info}>
                                    <View style = {{flexDirection: 'row', alignItems:'center'}}>
                                        <Text style = {[styles.headerTitle,{fontSize: vw(5)}]}>
                                            {friendData.userName}&nbsp;
                                        </Text>
                                    </View>
                                    <Text style = {[styles.text, {color: 'white'}]}>
                                        {friendData.displayName}
                                    </Text>
                                    <View style = {styles.btnsStyle}>
                                        {
                                            friendData.btnName.map((item, index) => 
                                            <TouchableOpacity 
                                                key = {index}
                                                style = {[styles.btnStyle, {backgroundColor: index == 0? '#53FAFB' : '#FFFFFF10'}]}
                                                onPress = {() => {
                                                    // navigation.navigate(item.navigationName),
                                                    // setRouterName(item.navigationName)
                                                    setShowBlur(false);
                                                    if (item.name == 'message') {
                                                        setShowModal(true);
                                                    }
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
                            </View>
                            <View style = {styles.middle}>
                                <Text style = {[styles.text, {color: 'white', fontFamily: 'TT Firs Neue Trial Light', fontSize: vw(3.3)}]}>
                                    {friendData.text}
                                    <Text style = {[styles.text, {color: 'white', fontSize: vw(3.3)}]}>&nbsp;Read More </Text>
                                </Text>
                            </View>
                            <View style = {styles.friendFooter}>
                                <View style = {styles.myFriendsArray}>
                                    <View style = {styles.avatarArray}>
                                        {
                                            friendsAvatars.map((item, index) => 
                                                <Image
                                                    key ={index} 
                                                    source = {item.avatarUrl}
                                                    style = {{width: vw(8.33), height: vw(8.33), borderRadius: vw(6.5), position: 'absolute', left: vw(item.left)}}
                                                />
                                            )
                                        }
                                    </View>
                                    <View>
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.33), width: vw(23.3), flexWrap: 'wrap'}]}>
                                            +239
                                        </Text>
                                        <Text style = {[styles.text, {fontSize: vw(2.22), width: vw(23.3), flexWrap: 'wrap'}]}>
                                            Mutal Friends Joined
                                        </Text>
                                    </View>
                                    <View style = {{flexDirection: 'row', width: vw(33.3), justifyContent: 'space-between'}}>
                                        
                                        <TouchableOpacity 
                                            style = {[styles.btn,{backgroundColor: '#53FAFB10'}]}
                                            // onPress={() => 
                                            //     })
                                            // }
                                        >
                                            <Text style = {[styles.headerTitle, {fontSize: vw(3.3)}]}>
                                                View All
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style = {[styles.prevButton, {width: vw(9.7), height: vw(9.7)}]}
                                            // onPress = { () => 
                                            //     navigation.navigate('FriendSearchLoading')
                                            // }
                                        >
                                            <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </View>
                        </View>
                        :
                        <View style = {{height: vw(68.72)}}/>
                    }
                    <View style = {styles.avatarData}>
                        <View style = {styles.sortbtn}>
                            {
                                sortBtn.map((item, index) => 
                                    <TouchableOpacity 
                                        key = {index} 
                                        style = {[styles.btn,{backgroundColor: item.selected ? '#53FAFB': 'transparent'}]}
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
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3), color: item.selected? 'black': '#606060'}]}>
                                            {item.mame}
                                        </Text>
                                     </TouchableOpacity>
                                )
                            }
                        </View>
                            {
                                allView == 0 ?
                                    <Animated.View style = {[styles.dwnBtns, {transform: [{ translateX: screenX }, ], flexDirection: 'row', width: vw(400), height: vw(77), overflow: 'hidden'}]}
                                        showsVerticalScrollIndicator={false}
                                    >
                                        <View style = {{width: SCREEN_WIDTH}}>
                                            <View style = {styles.nftAvatar}>
                                                {
                                                    nftAvatars.map((items, index) =>
                                                        <TouchableOpacity 
                                                            key = {index}
                                                            style = {styles.item}
                                                            onPress = {() => {navigation.navigate('MediaView');
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
                                        </View>
                                        <View style = {{width: SCREEN_WIDTH}}>
                                        {
                                            documentData.map((item, index) =>
                                                <DocumentItem key = {index} item = {item} index = {index}/>
                                            )
                                        }
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
                                        </View>
                                    </Animated.View>
                                    :
                                    <Animated.View style = {[styles.dwnBtns, {transform: [{ translateX: screenX }, ], flexDirection: 'row', width: vw(400), height: vh(75), overflow: 'hidden'}]}
                                        showsVerticalScrollIndicator={false}
                                    >
                                    <ScrollView style = {{width: SCREEN_WIDTH}}>
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
                                    </ScrollView>
                                    <ScrollView style = {{width: SCREEN_WIDTH}}>
                                    {
                                        documentData.map((item, index) =>
                                            <DocumentItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    <View style = {{height: vw(20)}}/>
                                    </ScrollView>
                                    <View style = {{width: SCREEN_WIDTH}}>
                                    {
                                        voiceData.map((item, index) =>
                                            <VoiceItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    </View>
                                    <ScrollView style = {{width: SCREEN_WIDTH}}>
                                    {
                                        linkData.map((item,index) => 
                                            <LinkItem key = {index} item = {item} index = {index}/>
                                        )
                                    }
                                    <View style = {{height: vw(20)}}/>
                                    </ScrollView>
                                    </Animated.View>
                            }
                    </View>
                </Animated.View>
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
                        onPress = {navigated1}
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
        // backgroundColor: 'black',
    },
    backImage: {
        width: '100%',
        height: vw(70),
        position: 'absolute',
        top: 0
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
        backgroundColor: '#202020',
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
        marginBottom: vw(20),
        paddingLeft: vw(5)
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
        height: vw(68.72),
        paddingTop: vw(5.33),
        paddingBottom: vw(7.22),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    friend: {
        flexDirection: 'row',
        height: vw(22.2),
        marginBottom: vw(6.7)
    },
    friendAvatar: {
        width: vw(22.2),
        height: vw(22.2),
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
        flexDirection: 'column',
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
        height: vw(15.6),
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
        marginTop: vw(0),
        width: vw(90)
    },
    sortbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        // marginBottom: vw(300)
        // backgroundColor: 'white'
    },
    documentItem: {
        width: vw(90),
        height: vw(18),
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
        height: vw(13.9),
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
        alignItem: 'flex-start',
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
        marginRight: vw(5)
        // marginBottom: vw(10)
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
        // backgroundColor: '#22222290',
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

export default GroupAccount;