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
import { vh, vw } from 'react-native-css-vh-vw'
import Svg, { Path, Circle } from 'react-native-svg'
import { TouchableHighlight } from 'react-native';

const CommunitySearch = ({navigation}) => {
    
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [recentSearch, setRecentSearch] = useState([
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: 'Dream for All Members'
        },
        {
            avatar: require('../../../../assets/images/card8.png'),
            name: 'Dream for All Members'
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: 'Dream for All Members'
        },
        {
            avatar: require('../../../../assets/images/card8.png'),
            name: 'Dream for All Members'
        },
        {
            avatar: require('../../../../assets/images/card9.png'),
            name: 'Dream for All Members'
        },
        {
            avatar: require('../../../../assets/images/card8.png'),
            name: 'Dream for All Members'
        },
    ]);
    const communitiesArray = [
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
        {avatar: require('../../../../assets/images/card8.png')},
        {avatar: require('../../../../assets/images/card9.png')},
    ];
    handleText = (texts):[string] => {
        setText(texts);
        setRecentSearch(prevSearch =>
            {
                const newSearch = [...prevSearch];
                newSearch[1].match = true;
                newSearch[3].match = true;
                return newSearch;
            }
        )
        if(texts === ''){
            setRecentSearch(prevSearch =>
                {
                    const newSearch = [...prevSearch];
                    newSearch[1].match = false;
                    newSearch[3].match = false;
                    return newSearch;
                }
            )
        }
        setLoading(true);
        const Loading = setTimeout(() => {
            console.log('Loading is ended');
            setLoading(false);
        }, 1000); // 10 seconds in milliseconds
        return () => clearTimeout(Loading);
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
                                // onPress ={ () => navigation.navigate('CommunityRegister') }
                                onPress={() =>
                                    navigation.navigate('SpeechInput')
                                }
                            >
                                <Svg width={vw(2.8)} height={vw(3)} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M9 5.5V6C9 8.20914 7.20914 10 5 10C2.79086 10 1 8.20914 1 6V5.5M5 8C3.89543 8 3 7.10457 3 6V3C3 1.89543 3.89543 1 5 1C6.10457 1 7 1.89543 7 3V6C7 7.10457 6.10457 8 5 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {styles.ResultTitle}>
                        <Text style = {styles.title}>
                            Recent Friends Search
                        </Text>
                        <View style = {{flexDirection: 'row',alignItems: 'center'}}>
                            <Svg width={vw(2.8)} height={vw(2.8)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M9 1L1 9M1 1L9 9" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {[styles.title, {color: '#7A7A7A', fontSize: vw(3.3)}]}>
                                &nbsp;&nbsp;Clear
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.body}>
                    <View style = {[styles.communitiesr, {paddingLeft: vw(3),paddingRight: vw(3), marginTop: vw(3)}]}>
                    
                    <FlatList
                        style = {{width: vw(100)}}
                        data={communitiesArray}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity style ={{flexDirection: 'column', alignItems: 'center',}}
                            >
                                <Image 
                                    source = {item.avatar}
                                    style={{width: vw(13.9), height: vw(13.9), marginLeft: vw(2.8), marginRight: vw(4.4),borderRadius: vw(3) }}
                                    resizeMode="cover"
                                />
                                <Text style = {[styles.title, {fontSize: vw(2.2), marginTop: vw(3), textAlign: 'center', marginRight: vw(1)}]}>Dream for{'\n'}All Members</Text>
                            </TouchableOpacity>
                        }
                    />
                    </View>
                </View>
                <View style = {styles.footer}>
                    {
                        isLoading ?
                        <View style = {styles.footerBtn}>
                            <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33" stroke="#53FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: '#CFCFCF', fontSize: vw(3.3), textAlign: 'center'}}>
                                &nbsp;&nbsp;Loading more...
                            </Text>
                        </View>
                        :
                        null
                    }
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
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vh(19.2),
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
        width: vw(76.7),
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
        width: vw(57.5),
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
        marginLeft: vw(2),
        // position: 'absolute',
        top: vh(20),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: vh(16.11)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(2.78),
        color: '#656565',
    },
    recentSearchBar: {
        width: vw(80),
        height: vw(25.3),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        left: vw(3)
    },
    recentSearch: {
        width: vw(19.4),
        height: vw(25.3),
        flexDirection: 'column',
        justifyContent: 'space-between'
        
    },
    itemSize: {
        width: vw(19.4),
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB10',
        borderRadius: vw(10),
        position: 'relative'
    },
    itemAvatar: {
        width: vw(12.2),
        height: vw(12.2),
        borderRadius: vw(10)
    },
    online: {
        width: vw(1.94),
        height: vw(1.94),
        backgroundColor: '#53FAFB',
        position: 'absolute',
        bottom: vw(4),
        right: vw(5),
        borderRadius: vw(2)
    },
    unread: {
        padding: vw(0.5),
        backgroundColor: '#53FAFB',
        position: 'absolute',
        top: vw(3.5),
        right: vw(1),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(2.2),
        paddingLeft: vw(2.2),
        paddingRight: vw(2.2),
        borderRadius: vw(5)
    },
    footer: {
        position: 'absolute',
        bottom: vw(33.3),
        width: vw(100),
        aspectRatio: 360/40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    footerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
});

export default CommunitySearch;