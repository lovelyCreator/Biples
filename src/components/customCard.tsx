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
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
import { Icon } from 'react-native-elements';

const CustomCard = ({ backgroundImage, avatar, avatarName, avatarContent, title, avatar1, avatar2, avatar3, text, heartNumber, onPress, handlePressed, bookMark, renderBlurView, showBlur}) => {
    
    // const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('Dark');
    const backgroundImageRef = createRef();
    // const renderBlurView = () => {
    //     console.log(viewRef);
    //     return (
    //         <View style = {{width: vw(92.2), position: 'relative', right: 0, bottom: 0}}>
                
    //             <BlurView
    //                 // viewRef={viewRef}
    //                 style={styles.blurViewStyle}
    //                 // blurRadius={1}
    //                 // blurType={blurType}
    //                 blurRadius={3}
    //                 // downsampleFactor={10}
    //                 overlayColor={'rgba(75, 75, 75, .6)'}
    //             />
    //         </View>
    //     );
    // }
    return (
            <TouchableOpacity
                style={[styles.card]}
                onPress = {onPress}
            >
                <View style = {styles.backImage}>
                    <ImageBackground 
                        source = {backgroundImage}
                        style = {styles.chatRoomCard}
                    >
                        <View style = {styles.avatarInfo}>
                            <Image source = {avatar} style = {{width: vw(6.575), aspectRatio: 1/1, borderRadius: vw(3.5), marginRight: vw(1.42)}}/>
                            <View style = {{position: 'absolute', bottom: vw(0.5), left: vw(5.4)}}>
                                <Svg width={vw(1.88)} height={vw(1.88)} viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M5.92536 1.44464C5.99056 1.60235 6.11573 1.72771 6.27333 1.79316L6.82597 2.02208C6.98369 2.08741 7.10899 2.21271 7.17432 2.37044C7.23965 2.52816 7.23965 2.70537 7.17432 2.86309L6.94557 3.41535C6.88022 3.57314 6.88013 3.75054 6.94578 3.90825L7.17413 4.46035C7.20652 4.53847 7.22319 4.6222 7.2232 4.70677C7.22322 4.79133 7.20657 4.87507 7.17421 4.9532C7.14185 5.03132 7.09441 5.10231 7.03461 5.1621C6.9748 5.22188 6.90381 5.2693 6.82567 5.30163L6.27343 5.53039C6.11573 5.5956 5.99037 5.72077 5.92493 5.87838L5.69602 6.43104C5.63069 6.58876 5.50539 6.71407 5.34767 6.7794C5.18996 6.84473 5.01275 6.84473 4.85503 6.7794L4.30279 6.55064C4.14507 6.48547 3.96793 6.48561 3.81031 6.55101L3.25767 6.7796C3.10004 6.84478 2.92299 6.84473 2.7654 6.77945C2.60781 6.71417 2.48258 6.58901 2.41721 6.43146L2.18823 5.87864C2.12302 5.72093 1.99786 5.59557 1.84025 5.53012L1.28761 5.3012C1.12996 5.2359 1.0047 5.11067 0.939347 4.95304C0.873995 4.79541 0.873906 4.61828 0.9391 4.46059L1.16785 3.90832C1.23301 3.7506 1.23288 3.57345 1.16748 3.41582L0.939059 2.86277C0.906673 2.78465 0.889998 2.70091 0.889984 2.61635C0.889971 2.53179 0.906619 2.44805 0.93898 2.36992C0.97134 2.29179 1.01878 2.22081 1.07858 2.16102C1.13838 2.10124 1.20938 2.05382 1.28752 2.02148L1.83976 1.79273C1.99733 1.72757 2.1226 1.60256 2.1881 1.44513L2.41701 0.892474C2.48234 0.734753 2.60764 0.609445 2.76535 0.544115C2.92307 0.478785 3.10028 0.478785 3.25799 0.544115L3.81023 0.77287C3.96795 0.838039 4.1451 0.837906 4.30272 0.7725L4.85559 0.544469C5.01328 0.479176 5.19045 0.479189 5.34814 0.544507C5.50582 0.609824 5.63111 0.735096 5.69645 0.892776L5.92543 1.4456L5.92536 1.44464Z" fill="#53FAFB"/>
                                    <Path d="M3.10669 3.66178L3.74002 4.29512L4.45252 3.58262L5.16502 2.87012" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <View style={{flexDirecton: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                                <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: 'white'}}>
                                    {avatarName}
                                </Text>
                                <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(1.5), color: 'white'}}>
                                    {avatarContent}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style = {{ width: vw(6.5), aspectRatio: 1/1, borderRadius: vw(3.5), backgroundColor: '#75757580', justifyContent: 'center', alignItems: 'center' }}
                            onPress = {handlePressed}
                        >
                            <Svg width={vw(2.8)} height={vw(3.3)} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" stroke={bookMark ? "#FF5252" : "white"} stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style = {{width: vw(63.9), aspectRatio: 230/70, borderRadius: vw(5), backgroundColor: '#75757550', padding: vw(3.3), position: 'absolute', top: vw(48.3), justifyContent: 'space-between', alignItems: 'flex-start', overflow: 'hidden'}}>
                    {/* <Image source = {require('../../assets/images/blur.png')}
                        style={styles.imageStyle}
                        ref={backgroundImageRef}
                        />
                    {showBlur ? renderBlurView() : null} */}
                    <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                        {title}
                    </Text>
                    <View style = {{flexDirection: 'row', justfyContent: 'space-between', width: vw(63.9), height: vw(5.6)}}>
                        <View style = {{position: 'relative'}}>
                            <Image source = {avatar1}
                                style = {{width: vw(5.6), height: vw(5.6), borderRadius: vw(2.8), position: 'absolute', left: vw(0)}}
                            />
                            <Image source = {avatar2}
                                style = {{width: vw(5.6), height: vw(5.6), borderRadius: vw(2.8), position: 'absolute', left: vw(4.3)}}
                            />
                            <Image source = {avatar3}
                                style = {{width: vw(5.6), height: vw(5.6), borderRadius: vw(2.8), position: 'absolute', left: vw(8.6)}}
                            />
                            <Text style = {{marginLeft: vw(16.1), fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(1.57), color: 'white', marginTop: vw(0.2)}}>
                                {text}
                            </Text>
                        </View>
                        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            {
                                heartNumber.map((item, index) =>
                                    <View key = {index} style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: vw(2) }}>
                                        <View style={{width: vw(5.6), aspectRatio: 1/1, borderRadius: vw(2.8), backgroundColor: '#ffffff21', justifyContent: 'center', alignItems: 'center' }}>
                                            <Svg width={vw(3.3)} height={vw(2.8)} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M8.05556 1C9.81667 1 11 2.49 11 3.88C11 6.695 6.08889 9 6 9C5.91111 9 1 6.695 1 3.88C1 2.49 2.18333 1 3.94444 1C4.95556 1 5.61667 1.455 6 1.855C6.38333 1.455 7.04444 1 8.05556 1Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            </Svg>
                                        </View>
                                        <Text style = {{marginLeft: vw(1.67), fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.3), color: 'white'}}>
                                            {item}
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        borderRadius: vw(4.2),
        // flexDirection: 'row',
        width: vw(63.9),
        aspectRatio: 230/244,
        marginRight: vw(3.3)
    },
    backImage: {
        width: vw(63.9),
        aspectRatio: 230/220,
        borderRadius: vw(5),
        overflow: 'hidden'
    },
    chatRoomCard: {
        padding: vw(2.2),
        paddingLeft: vw(3.1),
        paddingTop: vw(2.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: vw(63.9),
        aspectRatio: 230/220
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
    avatarInfo: {
        width: vw(26.4),
        aspectRatio: 95.33/28,
        backgroundColor: '#75757580',
        borderRadius: vw(3.5),
        flexDirection: 'row',
        marginTop: vw(0.1),
        padding: vw(0.69),
    }
});

export default CustomCard;

