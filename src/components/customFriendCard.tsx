import React, { useState, useRef } from 'react';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    Pressable, 
    View, 
    Image, 
    ImageBackground, 
    backgroundColor,
    PanResponder,
    Animated } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle } from 'react-native-svg';

const CustomFriendCard = ({ avatar, id, userName, dragged, displayName, onlineState, msgNum, onPress, handlePress, friends, setFriends, navigatePress}) => {
    
    const handleDelete = (id) => {
        setFriends(prevFriends => {
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
                console.log('onPanResponderRelease', evt, gestureState);
                // console.log('length: ', descriptions.length);
                if (gestureState.dx > 0) {
                    // console.log('dx>0', gestureState.dx);
                    setFriends(prevFriend => {
                        const newFriends = [...prevFriend];
                        newFriends[id].dragged = false;
                        return newFriends;
                    });
                } else {
                    // console.log('dx<0', gestureState.dx);
                    setFriends(prevFriend => {
                        const newFriends = [...prevFriend];
                        newFriends[id].dragged = true;
                        return newFriends;
                    });
                    Animated.spring(pan.x, { toValue: 0, useNativeDriver: true }).start();
                }
            },
        })
    ).current;

    return (
        <Animated.View 
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: pan.x }],
        }}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: dragged? '#53FAFB' : '#202020'}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    {!dragged && 
                    <TouchableOpacity onPress = {navigatePress}>
                    <ImageBackground 
                        source = {avatar}
                        style = {styles.avatar}
                    >
                        {(msgNum != 0) && <Text style = {styles.unreadMsg}> {msgNum} </Text>}
                    </ImageBackground>
                    </TouchableOpacity>}
                    <View style = {{marginLeft: vw(2.8)}}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: dragged ? 'black' : 'white'}}>
                            {userName}
                        </Text>
                        <View style = {{flexDirection:'row', alignItems: 'center'}}>
                            {(onlineState && !dragged) && <View style = {{width: vw(1.7), height: vw(1.7), backgroundColor: '#53FAFB', borderRadius: vw(2), marginRight: vw(1)}}/>}
                            <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: dragged ? 'black' : '#565656'}}>
                                {displayName}
                            </Text>
                        </View>
                    </View>
                </View>
                {
                    dragged != true ?
                    <View style = {styles.info}>
                        <TouchableOpacity style = {[styles.online, {backgroundColor: onlineState ? '#53FAFB': '#202020', borderColor: '#323223', borderWidth: vw(0.3)}]}>
                            <Svg width={vw(2.8)} height={vw(3.6)} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M5 0.4375L0.693885 6.7626C0.434659 7.14337 0.305046 7.33376 0.312831 7.49201C0.319611 7.62984 0.386187 7.75764 0.494813 7.84137C0.619537 7.9375 0.848322 7.9375 1.30589 7.9375H5V12.625L9.30611 6.2999C9.56534 5.91913 9.69495 5.72874 9.68717 5.57049C9.68039 5.43266 9.61381 5.30486 9.50519 5.22113C9.38046 5.125 9.15168 5.125 8.69411 5.125H5V0.4375Z" fill={onlineState ? 'black' : "#606060"}/>
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.online}>
                            <Svg width={vw(3.3)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M11.625 6C11.625 9.1066 9.1066 11.625 6 11.625C5.25179 11.625 4.53769 11.4789 3.88468 11.2137C3.7597 11.163 3.69721 11.1376 3.6467 11.1263C3.59729 11.1152 3.56072 11.1111 3.51008 11.1111C3.45832 11.1111 3.40193 11.1205 3.28916 11.1393L1.06548 11.5099C0.832614 11.5487 0.716183 11.5681 0.63199 11.532C0.558302 11.5004 0.499581 11.4417 0.467975 11.368C0.431864 11.2838 0.451269 11.1674 0.490079 10.9345L0.860693 8.71084C0.879488 8.59807 0.888886 8.54169 0.888879 8.48992C0.888873 8.43928 0.884822 8.40271 0.873747 8.3533C0.862425 8.30279 0.837046 8.2403 0.786289 8.11532C0.521085 7.46231 0.375 6.74821 0.375 6C0.375 2.8934 2.8934 0.375 6 0.375C9.1066 0.375 11.625 2.8934 11.625 6Z" fill="#606060"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    :
                    
                    <View style = {styles.info}>
                        <TouchableOpacity style={{justifyContet: 'center'}}>
                                <Svg width={vw(8.3)} height={vw(8.3)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="15" cy="15" r="14.5" stroke="black"/>
                                    <Path d="M13.6667 16.3333H12.6667C11.7363 16.3333 11.2711 16.3333 10.8926 16.4482C10.0403 16.7067 9.37336 17.3736 9.11483 18.2259C9 18.6044 9 19.0696 9 20M17.3333 11C17.3333 12.6569 15.9902 14 14.3333 14C12.6765 14 11.3333 12.6569 11.3333 11C11.3333 9.34315 12.6765 8 14.3333 8C15.9902 8 17.3333 9.34315 17.3333 11ZM15 20L17.0676 19.4093C17.1666 19.381 17.2161 19.3668 17.2623 19.3456C17.3033 19.3268 17.3422 19.3039 17.3786 19.2772C17.4196 19.2471 17.456 19.2107 17.5288 19.1379L21.8334 14.8334C22.2936 14.3731 22.2936 13.6269 21.8334 13.1666C21.3731 12.7064 20.6269 12.7064 20.1667 13.1667L15.8621 17.4712C15.7893 17.544 15.7529 17.5804 15.7228 17.6214C15.6961 17.6578 15.6732 17.6967 15.6544 17.7377C15.6332 17.7839 15.619 17.8334 15.5907 17.9324L15 20Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'flex-end', width: vw(8.3)}}
                            onPress={() => handleDelete(id)}
                        >
                            <Svg width={vw(8.3)} height={vw(8.3)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="15" cy="15" r="14.5" stroke="black"/>
                                <Path d="M13.4375 8.4375H17.5M9.375 10.4687H21.5625M20.2083 10.4687L19.7335 17.5912C19.6623 18.6598 19.6266 19.1941 19.3958 19.5992C19.1926 19.9559 18.8862 20.2426 18.5168 20.4217C18.0972 20.625 17.5617 20.625 16.4907 20.625H14.4468C13.3758 20.625 12.8403 20.625 12.4207 20.4217C12.0513 20.2426 11.7449 19.9559 11.5417 19.5992C11.3109 19.1941 11.2752 18.6598 11.204 17.5912L10.7292 10.4687M14.1146 13.5156V16.901M16.8229 13.5156V16.901" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                }
            </TouchableOpacity>
        </Animated.View>
  );
};

const styles = StyleSheet.create({
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
        paddingRight: vw(5),
        marginBottom: vw(2.8),
        // marginLeft: vw(5),
        backgroundColor: '#202020'
    },
    avatar: {
        marginLeft: vw(5),
        width: vw(12.5),
        height: vw(12.5),
    },
    unreadMsg: {
        position: 'absolute',
        top: vw(1),
        backgroundColor: '#53FAFB',
        borderRadius: vw(2),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(1.7),
        color: 'black',
    },
    info: {
        width: vw(18.9),
        height: vw(8.3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    online: {
        width: vw(8.3),
        height: vw(8.3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        borderRadius: vw(5),
    }
});

export default CustomFriendCard;

