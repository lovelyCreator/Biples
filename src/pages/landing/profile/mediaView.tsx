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
    TextInput,
    Modal
} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle, Rect } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'
import { ListItem } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const MediaView = ({navigation}) => {
    const statusBarHeight = getStatusBarHeight();
    const [showModals, setShowModals] = useState(false);
    const [selected, setSelected] = useState('Chat');
    const [sortBtn, setSortBtn] = useState([
        {
            mame: 'Media',
            selected: false,
        },
        {
            mame: 'Documents',
            selected: true,
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
    const data = [
        { id : '1', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '2', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '3', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '4', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '5', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '6', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '7', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '8', avatarUrl: require('../../../../assets/images/review.png'), },
        { id : '9', avatarUrl: require('../../../../assets/images/review.png'), },
    ];
    const [nftAvatars, setNftAvatars] = useState(data);
    const [totalMedia, setTotalMedia] = useState(291);
    const [currentMedia, setCurrentMedia] = useState(123);
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <Modal visible={showModals} transparent={true}>
                    <TouchableOpacity style={styles.modalContainer}
                        onPress = {() => setShowModals(false)}
                    >
                    <StatusBar translucent backgroundColor = '#00000090'/>
                        <View style = {[styles.modal, {marginTop: (vw(15)-statusBarHeight), width: vw(50)}]}>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Members'), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Members&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('Overview'), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3)}]}>
                                &nbsp;&nbsp;Overview&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[styles.modalItem,{marginLeft: vw(3)}]}
                                onPress = {() => {navigation.navigate('MemberPermission'), setShowModals(!showModals)}}
                            >
                                <Text style = {[styles.text, {color:'white', fontSize: vw(3.3), marginLeft: vw(3), textAlign: 'center'}]}>
                                &nbsp;&nbsp;Community Settings&nbsp;&nbsp;
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style = {styles.header}>
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent'}]}
                            onPress = { () => 
                                navigation.goBack()
                            }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <View style = {{alignItems: 'center', marginTop: vw(2)}}>
                            <Text style = {styles.headerTitle}>
                                {currentMedia}/{totalMedia}
                            </Text>
                        </View>
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
                <View style = {styles.body}>
                    <Image source={nftAvatars[0].avatarUrl}
                        style ={styles.image}
                    />
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
        // backgroundColor: 'black'
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: vw(4.2)
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        backgroundColor: '#131313',
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
        marginTop: vw(58.1),
        marginBottom: vw(6),
    },
    image: {
        width: '100%'
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

export default MediaView;