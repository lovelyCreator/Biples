import React, {useState, useEffect, useReft} from 'react';
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
import { vh, vw } from 'react-native-css-vh-vw'
import Svg, { Path } from 'react-native-svg'

const MainSearch = ({navigation}) => {
    
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [recentSearch, setRecentSearch] = useState([
        {
            name: 'Yazid KHERRATI',
            visible: true,
        },
        {
            name: 'Community for Worlds',
            visible: true,
        },
        {
            name: 'Fantasy as a ovwner brother',
            visible: true,
        },
    ]);
    const [trendCommunities, setTrendCommunities] = useState([
        '#Phtotgraphy', '#Photograpy', '#Fantasy', 
        '#Robot', ' #Robot ', '     #Robot     ', 
        '   #Fantasy   ', '#Fantasy', '   #Fantasy   '
    ]);

    const [friendCard, setFriendCard] = useState([
        {
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kitshun Fowyu',
            friend: '24 Mutal Friends',
            buttonName: 'Add Friend'
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kitshun Fowyu',
            friend: '24 Mutal Friends',
            buttonName: 'Add Friend'
        },
        {
            avatar: require('../../../../assets/images/follow1.png'),
            name: 'Kitshun Fowyu',
            friend: '24 Mutal Friends',
            buttonName: 'Add Friend'
        },
    ]);
    handleText = (texts):[string] => {
        setText(texts);
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
                            style = {styles.prevButton}
                            onPress = { () => 
                                navigation.navigate('SortSearch')
                            }
                        >
                            <Svg width={vw(4.44)} height={vw(3.33)} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M0.928589 2.85714L10.3572 2.85714M10.3572 2.85714C10.3572 4.15896 11.4125 5.21429 12.7143 5.21429C14.0161 5.21429 15.0714 4.15896 15.0714 2.85714C15.0714 1.55533 14.0161 0.5 12.7143 0.5C11.4125 0.5 10.3572 1.55533 10.3572 2.85714ZM5.64287 9.14286L15.0714 9.14286M5.64287 9.14286C5.64287 10.4447 4.58755 11.5 3.28573 11.5C1.98392 11.5 0.928589 10.4447 0.928589 9.14286C0.928589 7.84104 1.98392 6.78571 3.28573 6.78571C4.58755 6.78571 5.64287 7.84104 5.64287 9.14286Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {styles.recentSearches}>
                        <Text style = {styles.title}>
                            Recent Searches
                        </Text>
                        {
                            recentSearch.map((item, index) => 
                                <View key = {index} style = {[styles.recentItems, {display: item.visible ? 'show' : 'none'}]}>
                                    <TouchableOpacity
                                        onPress = { () =>
                                            navigation.navigate('SearchResultNone')
                                        }
                                    >
                                        <Text style = {styles.buttonText}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress = { () =>
                                            setRecentSearch( prevSearch => {
                                                const newSearch = [...prevSearch];
                                                newSearch[index].visible = false;
                                                return newSearch;
                                                }
                                            )
                                        }
                                    >
                                        <Svg width={vw(2.8)} height={vw(2.8)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M9 1L1 9M1 1L9 9" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                    <View style = {styles.trendCommunities}>
                        <Text style = {styles.title}>
                            Trend Communities
                        </Text>
                        <View style = {styles.trendBtns}>
                        {
                            trendCommunities.map((item, index) =>
                                <TouchableOpacity key = {index} style = {styles.trendBtn}>
                                    <Text style = {{ fontFamily: 'TT Firs Neue Trial Light', color: '#606060', fontSize: vw(3.9), textAlign: 'center'}}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                        </View>
                    </View>
                    <View style = {styles.friends}>
                        <Text style = {[styles.title, {marginBottom: vh(1.91), marginLeft: vw(5)}]}>
                            Friends you may know
                        </Text>
                        <FlatList
                            style = {styles.cards}
                            data = {friendCard}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem = {({item, index}) => 
                                <View>
                                    <View key = {index} style = {[styles.card, {marginRight: index  === (friendCard.length-1) ? vw(10) : vw(3.3),}]}>
                                        <Image
                                            style = {styles.friendAvatar} 
                                            source = {item.avatar}
                                        />
                                        <Text style = {styles.friendName}>
                                            {item.name}
                                        </Text>
                                        <Text style = {styles.friendNumber}>
                                            {item.friend}
                                        </Text>
                                        <TouchableOpacity style = {styles.friendButton}>
                                            <Text style = {styles.btnName}>
                                                Add Friend
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* {index  === (friendCard.length-1) &&  */}
                                    <View style = {{width: vw(25)}}/>
                                    {/* } */}
                                </View>
                            }
                        />
                    </View>
                    <View style = {{height: vh(2)}}/>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {styles.footerBtn}>
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#787878', fontSize: vw(3.9), textAlign: 'center'}}>
                            See ALL Friends
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
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vh(14),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    body: {
        width: vw(90),
        top: vh(12.62),
        position: 'absolute',
        // marginTop: vh(11.42),
        // paddingTop: vh(4.2),
        // height: vh(74.6),
        // paddingLeft: vw(5),
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    recentSearches: {
        width: vw(90),
        height: vh(25),
        paddingTop: vh(4.2),
        paddingLeft: vw(5)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white',
        marginBottom: vh(2.68)
    },
    recentItems: {
        width: vw(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vh(1.66)
    },
    buttonText: {
        fontFamily: 'TT Firs Neue Light',
        fontSize: vw(3.3),
        color: '#5B5B5B'
    },
    trendCommunities: {
        width: vw(90),
        height: vh(23),
        paddingBottom: vh(3.45),
        marginLeft: vw(5)
    },
    trendBtns: {
        width: vw(90),
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    trendBtn: {
        height: vh(4.22),
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        marginRight: vw(2.5),
        borderColor: '#606060',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: vw(2),
        paddingRight: vw(2),
        marginBottom: vw(2.8)
    },
    friends: {
        width: vw(100),
        height: vh(33),
        paddingTop: vh(4.2),
        // paddingLeft: vw(5)
    },
    cards: {
        width: vw(100),
        height: vh(21.7),
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    card: {
        width: vw(41.67),
        marginRight: vw(3.3),
        padding: vh(2.14),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#202020',
        borderRadius: vw(3)
    },
    friendAvatar: {
        width: vw(15.5),
        height: vw(15),
    },
    friendName: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(3.9),
    },
    friendNumber: {
        fontFamily: 'TT Firs Neue Trial Regular',
        color: '#4C4C4C',
        fontSize: vw(2.8),
    },
    friendButton: {
        width: vw(26.94),
        aspectRatio: 97/30,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        backgroundColor: '#53FAFB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnName: {
        color: 'black',
        fontSize: vw(2.8),
        fontFamily: 'TT Firs Neue Trial Medium'
    },
    footer: {
        marginTop: vw(5),
        width: vw(100),
        aspectRatio: 360/40,
        position: 'absolute',
        top: vh(95),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
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
    footer: {
        bottom: vw(5.56),
        width: vw(92.2),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: vw(5),
        overflow: 'hidden',
        position: 'absolute'
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
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
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
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: vw(92.2),
        height: vw(20)
    },
    ftBtn: {
        width: vw(41.67),
        aspectRatio: 150/40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderRadius: vw(10),
        borderColor: '#323232',
    },
});

export default MainSearch;