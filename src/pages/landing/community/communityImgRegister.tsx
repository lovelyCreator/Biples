import React, { useState, useEffect, useRef } from 'react'
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
    Modal,
    FlatList,
    Dimensions
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomLoadButton from "../../../components/customLoadButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../../components/customImageButton'
import CustomInputBox from "../../../components/customInputBox";
import CustomSwitchButton from "../../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-input'; 
import RadialGradient from 'react-native-radial-gradient';

const CELL_COUNT = 5;
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;

const imageList = [
    { id: '1', source: require('../../../../assets/images/img1.png'),
        level: 1
    },
    { id: '2', source: require('../../../../assets/images/img2.png'),
        level: 1
    },
    { id: '3', source: require('../../../../assets/images/img3.png'),
        level: 1
    },
    { id: '4', source: require('../../../../assets/images/img4.png'),
        level: 1
    },
    { id: '5', source: require('../../../../assets/images/img5.png'),
        level: 1
    },
    { id: '6', source: require('../../../../assets/images/img6.png'),
        level: 1
    },
    { id: '7', source: require('../../../../assets/images/img7.png'),
        level: 5
    },
    { id: '8', source: require('../../../../assets/images/img8.png'),
        level: 5
    },
    { id: '9', source: require('../../../../assets/images/img9.png'),
        level: 5
    },
    { id: '10', source: require('../../../../assets/images/img10.png'),
        level: 6
    },
    { id: '11', source: require('../../../../assets/images/img11.png'),
        level: 6
    },
    { id: '12', source: require('../../../../assets/images/img12.png'),
        level: 6
    },
    { id: '13', source: require('../../../../assets/images/img13.png'),
        level: 6
    },
    { id: '14', source: require('../../../../assets/images/img14.png'),
        level: 6
    },
    { id: '15', source: require('../../../../assets/images/img15.png'),
        level: 6
    },
    // Add more image items as needed
];


const CommunityImgRegister = ({ navigation }) => {

    const username = "Yazid KHERRATI";
    const windowWidth = useWindowDimensions().width;

    const bottomRef = useRef(null);
    const [isClick, setIsClick] = useState(false);
    const [image, setImage] = useState(null);
    const [isSaveState, setIsSaveState] = useState(false);
    const [isGallery, setIsGallery] = useState(false);
    

    avatarArray = [
        {
            avatar: require('../../../../assets/images/camera-02.png'),
            name: 'Take Photo'
        },
        {
            avatar: require('../../../../assets/images/Icon.png'),
            name: 'Choose Photo'
        },
        {
            avatar: require('../../../../assets/images/image-user.png'),
            name: 'Back to default'
        }
    ]
    
    const handleModal = () => {
        setIsGallery(!isGallery);
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                handleModal();
                if (item.level == 1) {
                    navigation.navigate('Level1');
                }
                else if (item.level == 5) {
                    navigation.navigate('Level5');
                }
                else navigation.navigate('Level5Lock');
                    setImage(item.source);
                    console.log(item.source);
                }}
            >
              <Image source={item.source} style={styles.image} />
            </TouchableOpacity>
        );
    };
    handleUserName = (text) => {
        setUserName(text);
        if (text !== '') setIsName(true);
        else setIsName(false);
    }
    handleSave = () => {
        
    }
    const handleAddPicture = () => {
        setIsClick(!isClick);
    };
    handleNaviagte = () => {
        navigation.navigate('CommunityInfoRegister');
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <Modal visible={isGallery} transparent={true}>
                    <StatusBar 
                        backgroundColor="rgba(20, 20, 20, 1)" barStyle="light-content"
                    />
                    <View style={styles.modalContainer}>
                        <View style={{flexDirection: 'column', width: vw(100), top: vw(13), justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'black', height: '100%', borderRadius: vw(5) }}>
                            <View style={{width: vw(30), borderWidth: 1, borderColor: '#808080', marginLeft: vw(35), marginTop: vw(3)}}/>
                            <View style={{width: vw(100), marginTop: vw(5), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <TouchableOpacity 
                                    style = {styles.prevButton}
                                    onPress = {handleModal}
                                >
                                    <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </TouchableOpacity>
                                <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.6)}]}>
                                    Choose Photo
                                </Text>
                                <TouchableOpacity 
                                    style = {styles.prevButton}
                                    // onPress = {() => 
                                    //     navigation.navigate('Email')
                                    // }
                                >
                                    <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1 9H17M9 1V17M5.26667 1H12.7333C14.2268 1 14.9735 1 15.544 1.29065C16.0457 1.54631 16.4537 1.95426 16.7094 2.45603C17 3.02646 17 3.77319 17 5.26667V12.7333C17 14.2268 17 14.9735 16.7094 15.544C16.4537 16.0457 16.0457 16.4537 15.544 16.7094C14.9735 17 14.2268 17 12.7333 17H5.26667C3.77319 17 3.02646 17 2.45603 16.7094C1.95426 16.4537 1.54631 16.0457 1.29065 15.544C1 14.9735 1 14.2268 1 12.7333V5.26667C1 3.77319 1 3.02646 1.29065 2.45603C1.54631 1.95426 1.95426 1.54631 2.45603 1.29065C3.02646 1 3.77319 1 5.26667 1Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>

                                </TouchableOpacity>
                            </View>
                            <ScrollView style = {[styles.flatList, ]}
                                showsVerticalScrollIndicator = {false}
                            >
                                <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {
                                    imageList.map((item, index) =>
                                        <TouchableOpacity key = {index} onPress={() => {
                                            handleModal();
                                            if (item.level == 1) {
                                                navigation.navigate('Level1');
                                            }
                                            else if (item.level == 5) {
                                                navigation.navigate('Level5');
                                            }
                                            else navigation.navigate('Level5Lock');
                                                setImage(item.source);
                                                console.log(item.source);
                                            }}
                                        >
                                            <Image source={item.source} style={styles.image} />
                                        </TouchableOpacity>
                                    )
                                }
                                </View>
                                <View style = {{height: vw(20)}}/>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                <View style = {styles.titleBar}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => 
                            navigation.goBack()
                        }
                    >
                        <Svg width={windowWidth*0.02} height={0.033*windowWidth} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                        Choose Profile Picture
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style = {styles.mainpad}>
                    <View style={[styles.avatar, {borderRadius: vw(10)}]}>
                        {
                            image !== null ? 
                                <Image source={image} style={[styles.avatar, {marginTop: vw(13.3), borderRadius: vw(10)}]}/> 
                                // null
                                : 
                                <Text style={styles.letter}> GW </Text>
                        }
                    </View>
                    <CustomLoadButton
                        navigation={ navigation }
                        title="Add Profile Picture"
                        width={vw(80)}
                        height={vw(12.5)}
                        backgroundColor={"#1D1D1D"}  
                        color={'white'}
                        fontSize={vw(3.3)}
                        image={0}
                        onPress = {handleAddPicture}
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isClick}
                        onRequestClose={() => {
                        setIsClick(!isClick);
                        }}
                    >
                    <StatusBar 
                        translucent backgroundColor="rgba(0, 0, 0, 0.2)"
                    />
                        <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.2)' }]}>
                            <View style={[styles.modalView, {bottom: 0, backgroundColor: '#151515', width: vw(90), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
                                {avatarArray.map((item, index) => 
                                    <TouchableOpacity style={styles.imageButton} key={index}
                                        onPress={() => {
                                            if(index === 1) {
                                                setIsClick(!isClick);
                                                setIsGallery(!isGallery);
                                            }
                                        }}
                                    >
                                        <CustomImageButton
                                            // onPress={() => console.log('My Button pressed')}
                                            width={vw(10.3)}
                                            height={vw(10.3)}
                                            backgroundColor="#53FAFB06"
                                            image={item.avatar}
                                        />
                                        <Text style={styles.imageletter}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )} 
                                <View style={{height: vw(5)}}/>
                                <CustomLoadButton
                                    navigation={ navigation }
                                    title="Cancel"
                                    width={vw(80)}
                                    height={vw(12.5)}
                                    backgroundColor={"#202020"}  
                                    color={'#8A8A8A'}
                                    fontSize={vw(3.9)}
                                    image={2}
                                    onPress = {handleAddPicture}
                                />
                                
                            </View>
                        </View>
                    </Modal>
                    <View style= {{height: vw(5)}}/>
                    <CustomLoadButton
                        navigation={ navigation }
                        title={'Create'}
                        width={vw(80)}
                        height={vw(12.5)}
                        backgroundColor={'#53FAFB'}  
                        color={'black'}
                        fontSize={vw(3.9)}
                        onPress = { handleNaviagte }
                    />
                </View>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.footertext}
                    onPress = {() => navigation.goBack()}
                >
                    Back 
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#101010',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBar: {
        paddingTop: vw(16),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    prevButton: {
        width: vw(9),
        aspectRatio: 1/1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        padding: vw(2),
        paddingLeft: vw(10),
        aspectRatio: 360/155
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'NeueMetana-Bold',
        lineHeight: vw(6.4)
        // padding: 10,
        // textAlign: 'center'
    },
    letter: {
        fontFamily: 'NeueMetana-Regular',
        fontSize: vw(16.7),
        color: '#4C4C4C',
        textAlign: 'center'
    },
    mainpad: {
        width: vw(100),
        aspectRatio: 360/634,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: vw(2.8)
    },
    avatar: {
        width: vw(47.2),
        aspectRatio: 1/1,
        borderRadius: vw(24),
        backgroundColor: '#202020',
        marginBottom: vw(13.6),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageButton: {
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: vw(2)
    },
    imageletter: {
        color: '#8A8A8A',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        textAlign: 'center',
        marginLeft: vw(5),
        marginTop: vw(2)
    },
    footer: {
        // margin: 10,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: vw(100),
        aspectRatio: 360/75,
        paddingBottom: vw(13.3),
        bottom: vw(0)
    },
    footertext: {
        fontSize: vw(3.3),
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    centeredView: {
        width: vw(100),
        // aspectRatio: 360/780,
        height: vh(110),
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalView: {
      margin: vw(5.6),
      borderRadius: vw(5),
      padding: vw(5),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        // height: vw(0.7),
      },
      shadowOpacity: 0.25,
      shadowRadius: vw(1.1),
      elevation: 5,
    },
    contain: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      flex: 1,
      margin: vw(0.3),
    },
    image: {
      width: vw(28),
      height: vw(28),
      margin: vw(2),
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(20, 20, 20, 1)',
    },
    modalImage: {
      width: vw(30),
      height: vw(30),
      margin: vw(1.2),
    },
    flatList: {
        marginTop: vw(3),
        marginLeft: vw(1.5)
    },
    uploadSuccess: {
        color: '#53FAFB',
        textAlign: 'center',
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5),
        position: 'absolute',
        bottom: vw(20.7)
    }
});

export default CommunityImgRegister;