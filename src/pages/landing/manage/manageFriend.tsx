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

const ManageFriend = ({navigation}) => {
    
    
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
                            Manage Friends
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
                </View>
                <View style = {styles.body}>
                    <ScrollView style = {styles.friendData}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            friends.map((item, index)=>
                            <CustomFriendCard
                                key = {index}
                                avatar = {item.avatar}
                                userName = {item.userName}
                                displayName = {item.displayName}
                                onlineState = {item.onlineState}
                                msgNum = {item.msgNum}
                                friends = {friends}
                                setFriends = {setFriends}
                                id = {item.id}
                                dragged = {item.dragged}
                            />
                            )
                        }
                    </ScrollView>
                        {/* <FlatList
                            style = {styles.friendData}
                            data = {friends}
                            horizontal = {false}
                            renderItem = {({item, index}) => 
                            <CustomFriendCard
                                avatar = {item.avatar}
                                userName = {item.userName}
                                displayName = {item.displayName}
                                onlineState = {item.onlineState}
                                msgNum = {item.msgNum}
                            />
                            }
                        /> */}
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
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    searchBar: {
        width: vw(90),
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
        // height: '100%',
        // position: 'absolute',
        paddingTop: vw(46.1),
        marginBottom: vh(12.11),
        marginLeft: vw(5)
    },
    friendData: {
        // paddingBottom: vw(90),
        width: vw(90),
        flexDirection: 'column',
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: vw(0),
        width: vw(100),
        marginBottom: vw(8),
        paddingTop: vw(4),
        alignItems: 'center',
        // backgroundColor: 'black',
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

export default ManageFriend;