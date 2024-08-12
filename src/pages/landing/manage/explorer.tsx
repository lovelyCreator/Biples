import React, {useState} from 'react';
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
    TextInput
} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'

const Explorer = ({navigation}) => {
    
    const friendArray = [
        {
            id: 0,
            avatar: require('../../../../assets/images/avatar(2).png'),
            userName: 'Satrnaroy_1927',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 8,
            dragged: false
        },
        {
            id: 1,
            avatar: require('../../../../assets/images/friendAvatar1.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 0,
            dragged: false
        },
        {
            id: 2,
            avatar: require('../../../../assets/images/friendAvatar1.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 0,
            dragged: false
        },
        {
            id: 3,
            avatar: require('../../../../assets/images/friendAvatar2.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: true,
            msgNum: 12,
            dragged: false
        },
        {
            id: 4,
            avatar: require('../../../../assets/images/avatar(2).png'),
            userName: 'Satrnaroy_1927',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 8,
            dragged: false
        },
        {
            id: 5,
            avatar: require('../../../../assets/images/friendAvatar1.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 0,
            dragged: false
        },
        {
            id: 6,
            avatar: require('../../../../assets/images/friendAvatar1.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: false,
            msgNum: 0,
            dragged: false
        },
        {
            id: 7,
            avatar: require('../../../../assets/images/friendAvatar2.png'),
            userName: 'Doministore',
            displayName: '@yazidkherrati',
            onlineState: true,
            msgNum: 12,
            dragged: false
        },
    ];
    const [friends, setFriends] = useState(friendArray);
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    handleText = (texts):[string] => {
        setText(texts);
    };
    handlePress = () => {
        navigation.navigate('Explorer');
    };
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
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
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
                            Explore
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: '#53FAFB12'}]}
                            onPress = { () => 
                                navigation.navigate('Scan')
                            }
                        >
                            <Svg width={vw(3.33)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.94444 2.94444H2.95M9.05556 2.94444H9.06111M2.94444 9.05556H2.95M6.55556 6.55556H6.56111M9.05556 9.05556H9.06111M8.77778 11H11V8.77778M7.11111 8.5V11M11 7.11111H8.5M8 4.88889H10.1111C10.4223 4.88889 10.5778 4.88889 10.6967 4.82834C10.8012 4.77507 10.8862 4.69008 10.9394 4.58555C11 4.46671 11 4.31114 11 4V1.88889C11 1.57775 11 1.42218 10.9394 1.30334C10.8862 1.1988 10.8012 1.11381 10.6967 1.06055C10.5778 1 10.4223 1 10.1111 1H8C7.68886 1 7.53329 1 7.41445 1.06055C7.30992 1.11381 7.22493 1.1988 7.17166 1.30334C7.11111 1.42218 7.11111 1.57775 7.11111 1.88889V4C7.11111 4.31114 7.11111 4.46671 7.17166 4.58555C7.22493 4.69008 7.30992 4.77507 7.41445 4.82834C7.53329 4.88889 7.68886 4.88889 8 4.88889ZM1.88889 4.88889H4C4.31114 4.88889 4.46671 4.88889 4.58555 4.82834C4.69008 4.77507 4.77507 4.69008 4.82834 4.58555C4.88889 4.46671 4.88889 4.31114 4.88889 4V1.88889C4.88889 1.57775 4.88889 1.42218 4.82834 1.30334C4.77507 1.1988 4.69008 1.11381 4.58555 1.06055C4.46671 1 4.31114 1 4 1H1.88889C1.57775 1 1.42218 1 1.30334 1.06055C1.1988 1.11381 1.11381 1.1988 1.06055 1.30334C1 1.42218 1 1.57775 1 1.88889V4C1 4.31114 1 4.46671 1.06055 4.58555C1.11381 4.69008 1.1988 4.77507 1.30334 4.82834C1.42218 4.88889 1.57775 4.88889 1.88889 4.88889ZM1.88889 11H4C4.31114 11 4.46671 11 4.58555 10.9394C4.69008 10.8862 4.77507 10.8012 4.82834 10.6967C4.88889 10.5778 4.88889 10.4223 4.88889 10.1111V8C4.88889 7.68886 4.88889 7.53329 4.82834 7.41445C4.77507 7.30992 4.69008 7.22493 4.58555 7.17166C4.46671 7.11111 4.31114 7.11111 4 7.11111H1.88889C1.57775 7.11111 1.42218 7.11111 1.30334 7.17166C1.1988 7.22493 1.11381 7.30992 1.06055 7.41445C1 7.53329 1 7.68886 1 8V10.1111C1 10.4223 1 10.5778 1.06055 10.6967C1.11381 10.8012 1.1988 10.8862 1.30334 10.9394C1.42218 11 1.57775 11 1.88889 11Z" stroke="#53FAFB" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: vw(90), flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {styles.searchBar}>
                            <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="#4C4C4C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <TextInput
                                onFocus = {() => setIsFocused(true)}
                                onBlur = {() => setIsFocused(false)}
                                style = {styles.input}
                                placeholder = 'Search'
                                placeholderTextColor='#4C4C4C'
                                value = {text}
                                onChangeText = {handleText}
                                keyboardAppearance = "dark"
                                keyboardType = 'default'
                            />
                        </View>
                        <TouchableOpacity style={styles.speech}
                            // onPress={() =>
                            //     navigation.navigate('SpeechInput')
                            // }
                        >
                            <Svg width={vw(3.6)} height={vw(4.7)} viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6.5 0.96875L0.90205 9.19139C0.565057 9.68639 0.39656 9.93388 0.40668 10.1396C0.415495 10.3188 0.502043 10.4849 0.643257 10.5938C0.805399 10.7188 1.10282 10.7188 1.69766 10.7188H6.5V16.8125L12.0979 8.58986C12.4349 8.09487 12.6034 7.84737 12.5933 7.64164C12.5845 7.46246 12.498 7.29631 12.3567 7.18747C12.1946 7.0625 11.8972 7.0625 11.3023 7.0625H6.5V0.96875Z" fill="#BFBFBF"/>
                            </Svg>
                        </TouchableOpacity>
                    </View> 
                </View>
                <View style = {styles.body}>
                    <View style = {styles.myCard}>
                        <View style = {styles.myInfo}>
                            <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: '#53FAFB', flexWrap: 'wrap'}}>
                                Share your Profile to get new friends.
                            </Text>
                            <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: 'white'}}>
                                @yazidkherrati
                            </Text>
                            <View style = {styles.myBtn}>
                                <TouchableOpacity
                                    style = {[styles.prevButton, {backgroundColor: '#53FAFB12', width: vw(7), height: vw(7), marginRight: vw(2)}]}
                                    onPress = { () => 
                                        navigation.navigate('Scan')
                                    }
                                >
                                    <Svg width={vw(3.33)} height={vw(3.3)} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M2.94444 2.94444H2.95M9.05556 2.94444H9.06111M2.94444 9.05556H2.95M6.55556 6.55556H6.56111M9.05556 9.05556H9.06111M8.77778 11H11V8.77778M7.11111 8.5V11M11 7.11111H8.5M8 4.88889H10.1111C10.4223 4.88889 10.5778 4.88889 10.6967 4.82834C10.8012 4.77507 10.8862 4.69008 10.9394 4.58555C11 4.46671 11 4.31114 11 4V1.88889C11 1.57775 11 1.42218 10.9394 1.30334C10.8862 1.1988 10.8012 1.11381 10.6967 1.06055C10.5778 1 10.4223 1 10.1111 1H8C7.68886 1 7.53329 1 7.41445 1.06055C7.30992 1.11381 7.22493 1.1988 7.17166 1.30334C7.11111 1.42218 7.11111 1.57775 7.11111 1.88889V4C7.11111 4.31114 7.11111 4.46671 7.17166 4.58555C7.22493 4.69008 7.30992 4.77507 7.41445 4.82834C7.53329 4.88889 7.68886 4.88889 8 4.88889ZM1.88889 4.88889H4C4.31114 4.88889 4.46671 4.88889 4.58555 4.82834C4.69008 4.77507 4.77507 4.69008 4.82834 4.58555C4.88889 4.46671 4.88889 4.31114 4.88889 4V1.88889C4.88889 1.57775 4.88889 1.42218 4.82834 1.30334C4.77507 1.1988 4.69008 1.11381 4.58555 1.06055C4.46671 1 4.31114 1 4 1H1.88889C1.57775 1 1.42218 1 1.30334 1.06055C1.1988 1.11381 1.11381 1.1988 1.06055 1.30334C1 1.42218 1 1.57775 1 1.88889V4C1 4.31114 1 4.46671 1.06055 4.58555C1.11381 4.69008 1.1988 4.77507 1.30334 4.82834C1.42218 4.88889 1.57775 4.88889 1.88889 4.88889ZM1.88889 11H4C4.31114 11 4.46671 11 4.58555 10.9394C4.69008 10.8862 4.77507 10.8012 4.82834 10.6967C4.88889 10.5778 4.88889 10.4223 4.88889 10.1111V8C4.88889 7.68886 4.88889 7.53329 4.82834 7.41445C4.77507 7.30992 4.69008 7.22493 4.58555 7.17166C4.46671 7.11111 4.31114 7.11111 4 7.11111H1.88889C1.57775 7.11111 1.42218 7.11111 1.30334 7.17166C1.1988 7.22493 1.11381 7.30992 1.06055 7.41445C1 7.53329 1 7.68886 1 8V10.1111C1 10.4223 1 10.5778 1.06055 10.6967C1.11381 10.8012 1.1988 10.8862 1.30334 10.9394C1.42218 11 1.57775 11 1.88889 11Z" stroke="#53FAFB" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style = {[styles.prevButton, {backgroundColor: '#53FAFB', width: vw(27.2), height: vw(7), flexDirection: 'row'}]}
                                    onPress = { () => 
                                        navigation.navigate('QRProfile')
                                    }
                                >
                                    <Svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M4.201 6.1989L9.11465 1.28525M4.2607 6.35243L5.49057 9.51495C5.59892 9.79355 5.65309 9.93286 5.73115 9.97352C5.79882 10.0088 5.87942 10.0088 5.94713 9.97365C6.02524 9.93307 6.07958 9.79384 6.18825 9.51536L9.27231 1.61245C9.37041 1.36107 9.41946 1.23538 9.39263 1.15506C9.36933 1.08531 9.31459 1.03057 9.24484 1.00727C9.16453 0.98044 9.03884 1.02949 8.78745 1.12759L0.884541 4.21165C0.606066 4.32033 0.466828 4.37466 0.426251 4.45277C0.391075 4.52048 0.391122 4.60109 0.426378 4.66875C0.467047 4.74681 0.606348 4.80098 0.88495 4.90933L4.04747 6.1392C4.10403 6.16119 4.1323 6.17219 4.15611 6.18917C4.17722 6.20423 4.19567 6.22268 4.21073 6.24379C4.22771 6.2676 4.23871 6.29587 4.2607 6.35243Z" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                    <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: 'black', marginLeft: vw(1.5)}}>
                                        Share profile
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ImageBackground 
                            source = {require('../../../../assets/images/card2.png')}
                           style = {styles.myAvatar}
                            resizeMode = 'stretch'
                        >
                            <Image 
                                source = {require('../../../../assets/images/card6.png')}
                                style = {[styles.myAvatars, {bottom: vw(3.3), right: vw(24.44)}]}
                            />
                            <Image 
                                source = {require('../../../../assets/images/card1.png')}
                                style = {[styles.myAvatars, {bottom: vw(17.5), left: vw(22.78)}]}
                            />
                        </ImageBackground>
                    </View>
                    <View style = {styles.myFriends}>
                        <View style = {styles.friendTitle}>
                            <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(5), color: 'white', flexWrap: 'wrap'}}>
                                My Friends.
                            </Text>
                            <TouchableOpacity
                                onPress = {() => navigation.navigate('ManageFriend')}
                            >
                                <Text style = {{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: '#53FAFB', flexWrap: 'wrap'}}>
                                    Manage Friend
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                friends.map((item, index) => 
                                    <CustomFriendCard
                                        key = {index}
                                        avatar = {item.avatar}
                                        userName = {item.userName}
                                        displayName = {item.displayName}
                                        onlineState = {item.onlineState}
                                        msgNum = {item.msgNum}
                                        friends = {friends}
                                        navigatePress = {handleFriendProfile}
                                        setFriends = {setFriends}
                                        id = {item.id}
                                        dragged = {item.dragged}
                                    />
                                )
                            }
                            <View style = {{height: vw(10)}}/>
                        </ScrollView>
                    </View>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {styles.footerBtn}>
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#787878', fontSize: vw(3.9), textAlign: 'center'}}>
                            See More
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
        height: vw(41.1),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        backgroundColor: '#101010',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    searchBar: {
        width: vw(76.38),
        height: vw(10.83),
        backgroundColor: '#202020',
        borderRadius: vw(5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: vw(1.8),
        paddingRight: vw(1.8)
    },
    input: {
        fontFamily: 'TT Firs Neue Trial Regular',
        color: 'white',
        fontSize: vw(3.3),
        width: vw(47.5),
        marginLeft: vw(2.2),
        marginRight: vw(2.2)
    },
    speech: {
        width: vw(10.83),
        height: vw(10.83),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B1B1B',
        borderRadius: vw(5)
    },
    body: {
        width: vw(90),
        // position: 'absolute',
        paddingTop: vw(51.1),
        paddingBottom: vw(5),
        marginLeft: vw(5)
    },
    myCard: {
        width: vw(90),
        aspectRatio: 320/126,
        padding: vw(4.44),
        backgroundColor: '#202020',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: vw(5),
    },
    myInfo: {
        width: vw(38),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    myBtn: {
        flexDirection: 'row',
    },
    myAvatar: {
        width: vw(30),
        height: vw(25.6),
        position:'relative'
    },
    myAvatars: {
        width: vw(10),
        height: vw(10),
        position: 'absolute',
        borderRadius: vw(3)
    },
    myFriends: {
        width: vw(90),
        height: vw(100),
        marginBottom: vw(10)
    },
    friendTitle: {
        height: vw(21.4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    footer: {
        position: 'absolute',
        bottom: vw(0),
        width: vw(100),
        marginBottom: vw(4),
        // marginTop: vw(5),
        paddingTop: vw(4),
        alignItems: 'center',
        backgroundColor: '#101010',
        zIndex: 0
    },
    footerBtn: {
        width: vw(41.67),
        aspectRatio: 150/40,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Explorer;