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
import CustomFollow from '../../../components/customFollow'

const MemberSearch = ({navigation}) => {
    
    memberCardArray = [
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: false
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: false
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: false
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: false
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            avatarName: '@KitshunaFowyu',
            avatarContent: '1,900 Items-29.9k Followers',
            followState: true
        },
    ];
    const [filter, setFilter] = useState(memberCardArray);
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    handleText = (texts):[string] => {
        setText(texts);
    };
    handlePress = () => {
        navigation.navigate('Explorer');
    };
    const handleFriendProfile = () => {
        // // setShowBlurs(true);
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
                                navigation.navigate('Main')
                            }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style={styles.searchBar}>
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
                            <TouchableOpacity style={styles.speech}
                                onPress={() =>
                                    navigation.navigate('SpeechInput')
                                }
                            >
                                <Svg width={vw(2.8)} height={vw(3)} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M9 5.5V6C9 8.20914 7.20914 10 5 10C2.79086 10 1 8.20914 1 6V5.5M5 8C3.89543 8 3 7.10457 3 6V3C3 1.89543 3.89543 1 5 1C6.10457 1 7 1.89543 7 3V6C7 7.10457 6.10457 8 5 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        </View> 
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: '#53FAFB'}]}
                            onPress = { () => 
                                navigation.navigate('MainSearch')
                            }
                        >
                            <Svg width={vw(4.44)} height={vw(3.33)} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M0.928589 2.85714L10.3572 2.85714M10.3572 2.85714C10.3572 4.15896 11.4125 5.21429 12.7143 5.21429C14.0161 5.21429 15.0714 4.15896 15.0714 2.85714C15.0714 1.55533 14.0161 0.5 12.7143 0.5C11.4125 0.5 10.3572 1.55533 10.3572 2.85714ZM5.64287 9.14286L15.0714 9.14286M5.64287 9.14286C5.64287 10.4447 4.58755 11.5 3.28573 11.5C1.98392 11.5 0.928589 10.4447 0.928589 9.14286C0.928589 7.84104 1.98392 6.78571 3.28573 6.78571C4.58755 6.78571 5.64287 7.84104 5.64287 9.14286Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.ResultTitle}>
                        <Text style = {styles.title}>
                            Members
                        </Text>
                        <Text style = {[styles.title, {color: '#53FAFB', fontSize: vw(3.3)}]}
                            onPress = {() => {setFilter([]); navigation.navigate('SearchResultNone')}}
                        >
                            Clear All
                        </Text>
                    </View>
                </View>
                <View style = {styles.body}>
                    <Text style = {[styles.text, {marginBottom: vh(2), marginLeft: vw(5)}]}>
                        105 Items Found
                    </Text>
                    <ScrollView style = {styles.foundResult}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            filter.map((item, index) => 
                                <CustomFollow
                                    key = {index}
                                    avatar = {item.avatar}
                                    avatarName = {item.avatarName}
                                    avatarContent = {item.avatarContent}
                                    followState = {item.followState}
                                    navigatePress = {handleFriendProfile}
                                    // handleFriend ={handleFriendProfile}
                                    onPress={() => setFilter(prevFilter => {
                                        const newFilter = [...prevFilter];
                                        newFilter[index].followState = !newFilter[index].followState;
                                        // console.log(newFilter);
                                        return newFilter;
                                    })}
                                />
                            )
                        }
                        <View style = {styles.footer}>
                            <TouchableOpacity style = {styles.footerBtn}>
                                <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#787878', fontSize: vw(3.9), textAlign: 'center'}}>
                                    See More
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vh(18.2),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
    searchBar: {
        width: vw(66.7),
        height: vw(9.44),
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
        width: vw(5.83),
        height: vw(5.83),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB',
        borderRadius: vw(3)
    },
    ResultTitle: {
        width: vw(90),
        height: vh(2.94),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white',
    },
    body: {
        width: vw(90),
        // position: 'absolute',
        marginTop: vh(23),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // marginBottom: vh(12.11)
    },
    foundResult: {
        width: vw(100),
        flexDirection: 'column',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(2.78),
        color: '#656565',
    },
    footer: {
        // position: 'absolute',
        bottom: vw(0),
        width: vw(100),
        marginBottom: vw(12),
        alignItems: 'center',
        backgroundColor: '#101010'
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

export default MemberSearch;