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
import Svg, { Path } from 'react-native-svg'

const SortSearch = ({navigation}) => {
    const dataArray = [
        {
            sortName: 'Issue',
            buttonNames: [
                {
                    name: 'Photography',
                    state: false
                },
                {
                    name: 'Music',
                    state: true
                },
                {
                    name: 'Art',
                    state: false
                },
                {
                    name: 'Fantasy',
                    state: false
                },
                {
                    name: 'Fashion',
                    state: false
                },
                {
                    name: 'Education',
                    state: false
                },
            ],
            expand: 'See All'
        },
        {
            sortName: 'Date',
            buttonNames: [
                {
                    name: 'Today',
                    state: false
                },
                {
                    name: 'Last 30 Day',
                    state: true
                },
                {
                    name: 'Last 7 Days',
                    state: false
                }
            ]
        },
        {
            sortName: 'Item Type',
            buttonNames: [
                {
                    name: 'Assets',
                    state: true
                },
                {
                    name: 'Bundles',
                    state: false
                },
                {
                    name: 'Free',
                    state: false
                },
                {
                    name: 'Paid',
                    state: false
                }
            ]
        },
        {
            sortName: 'Status',
            buttonNames: [
                {
                    name: 'Bundles',
                    state: false
                },
                {
                    name: 'New Product',
                    state: true
                },
                {
                    name: 'Best Offers',
                    state: false
                },
                {
                    name: 'Overnight',
                    state: false
                },
                {
                    name: 'Starter',
                    state: false
                },
                {
                    name: 'Pro',
                    state: false
                }
            ]
        },
        {
            sortName: 'Grow',
            buttonNames: [
                {
                    name: 'Recently Created',
                    state: false
                },
                {
                    name: 'Most Viewed',
                    state: true
                },
                {
                    name: 'Oldest',
                    state: false
                },
                {
                    name: 'Low to High',
                    state: false
                },
                {
                    name: 'High to low',
                    state: false
                },
                {
                    name: 'Other',
                    state: false
                }
            ]
        },
    ];
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [filter, setFilter] = useState(dataArray);
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
                                navigation.navigate('MainSearch')
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
                </View>
                <View style = {styles.body}>
                    <View style = {styles.recentSearches}>
                        <Text style = {styles.title}>
                            Sort by
                        </Text>
                    </View>
                    <FlatList
                        style = {styles.sort}
                        data = {filter}
                        horizontal = {false}
                        showsVerticalScrollIndicator={false}
                        renderItem = {({item, index}) => 
                            <View key={index} style = {styles.sortItem}>
                                <Text style = {styles.sortTitle}>
                                    {item.sortName}
                                </Text>
                                <View style = {styles.sortBtns}>
                                    {
                                        item.buttonNames.map((items, indexs) => 
                                            <TouchableOpacity 
                                                key = {indexs}
                                                style = {[styles.btn, {backgroundColor: items.state ? '#53FAFB' : '#1D1D1D'}]}
                                                onPress = {() => 
                                                    setFilter( prevFilter => {
                                                        newFilter = [ ...prevFilter];
                                                        for (i=0; i< filter[index].buttonNames.length; i++){
                                                            newFilter[index].buttonNames[i].state = false;
                                                        }
                                                        newFilter[index].buttonNames[indexs].state = !(newFilter[index].buttonNames[indexs].state)
                                                        return newFilter;}
                                                    )
                                                }
                                            >
                                                <Text style = {[styles.btnName, {color: items.state ? 'black' : 'white'}]}>
                                                    {items.name}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                                {item.expand && <Text style = {styles.sortTitle}>
                                        {item.expand}
                                    </Text>
                                }
                            </View>
                        }
                    />
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {[styles.footerBtn, {backgroundColor: '#202020'}]}
                        onPress = {() => setFilter(dataArray)}
                    >
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Regular', color: 'white', fontSize: vw(3.3), textAlign: 'center'}}>
                            Reset All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.footerBtn, {backgroundColor: '#53FAFB'}]}
                        onPress = {() => navigation.navigate('MemberSearch')}
                    >
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial DemiBold', color: 'black', fontSize: vw(3.3), textAlign: 'center'}}>
                            Apply Filter
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
    body: {
        width: vw(90),
        // position: 'absolute',
        marginTop: vh(14.4),
        marginLeft: vw(5),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: vw(23),
    },
    recentSearches: {
        width: vw(90),
        paddingTop: vh(4.2)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white',
        marginBottom: vh(2.68)
    },
    sort: {

        width: vw(90),
        flexDirection: 'column',
    },
    sortItem: {
        width: vw(90),
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: vw(8.9)
    },
    sortTitle: {
        color: '#595959',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(2.8),
        marginBottom: vw(2.8)
    },
    sortBtns: {
        width: vw(90),
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    btn: {
        padding: vw(2.5),
        paddingLeft: vw(6.4),
        paddingRight: vw(6.4),
        borderRadius: vw(5),
        marginBottom: vw(2.8),
        marginRight: vw(2.8),
        borderWidth: vw(0.3),
        borderColor: '#353535'
    },
    btnName: {
        fontFamily: 'TT Firs Neue Medium',
        fontSize: vw(2.8),

    },
    footer: {
        marginTop: vw(20),
        width: vw(100),
        aspectRatio: 360/40,
        position: 'absolute',
        bottom: vw(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerBtn: {
        width: vw(41.67),
        aspectRatio: 155/40,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        borderColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default SortSearch;