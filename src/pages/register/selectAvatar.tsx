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
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomLoadButton from "../../components/customLoadButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomImageBtn from '../../components/customImageBtn'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
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
    { id: '1', source: require('../../../assets/images/img1.png'),
        level: 1
    },
    { id: '2', source: require('../../../assets/images/img2.png'),
        level: 1
    },
    { id: '3', source: require('../../../assets/images/img3.png'),
        level: 1
    },
    { id: '4', source: require('../../../assets/images/img4.png'),
        level: 1
    },
    { id: '5', source: require('../../../assets/images/img5.png'),
        level: 1
    },
    { id: '6', source: require('../../../assets/images/img6.png'),
        level: 1
    },
    { id: '7', source: require('../../../assets/images/img7.png'),
        level: 5
    },
    { id: '8', source: require('../../../assets/images/img8.png'),
        level: 5
    },
    { id: '9', source: require('../../../assets/images/img9.png'),
        level: 5
    },
    { id: '10', source: require('../../../assets/images/img10.png'),
        level: 6
    },
    { id: '11', source: require('../../../assets/images/img11.png'),
        level: 6
    },
    { id: '12', source: require('../../../assets/images/img12.png'),
        level: 6
    },
    { id: '13', source: require('../../../assets/images/img13.png'),
        level: 6
    },
    { id: '14', source: require('../../../assets/images/img14.png'),
        level: 6
    },
    { id: '15', source: require('../../../assets/images/img15.png'),
        level: 6
    },
    // Add more image items as needed
];

const SelectAvatar = ({ navigation }) => {

    const username = "Yazid KHERRATI";
    const windowWidth = useWindowDimensions().width;

    const bottomRef = useRef(null);
    const [isClick, setIsClick] = useState(false);
    const [image, setImage] = useState(null);
    const [isSaveState, setIsSaveState] = useState(false);
    const [isGallery, setIsGallery] = useState(false);
    

    const avatarArray = [
        {
            avatar: <Svg width={vw(4.7)} height={vw(4.7)} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1.8335 5.63456C1.8335 4.63979 2.63991 3.83337 3.63468 3.83337C4.15154 3.83337 4.61041 3.50264 4.77385 3.01231L4.8335 2.83337C4.86162 2.74899 4.87569 2.7068 4.89073 2.66937C5.08286 2.19146 5.53309 1.86695 6.04724 1.83581C6.0875 1.83337 6.13198 1.83337 6.22092 1.83337H10.7794C10.8683 1.83337 10.9128 1.83337 10.9531 1.83581C11.4672 1.86695 11.9175 2.19146 12.1096 2.66937C12.1246 2.7068 12.1387 2.74899 12.1668 2.83337L12.2265 3.01231C12.3899 3.50264 12.8488 3.83337 13.3656 3.83337C14.3604 3.83337 15.1668 4.63979 15.1668 5.63456V11.3C15.1668 12.4201 15.1668 12.9802 14.9488 13.408C14.7571 13.7843 14.4511 14.0903 14.0748 14.2821C13.647 14.5 13.0869 14.5 11.9668 14.5H5.0335C3.91339 14.5 3.35334 14.5 2.92552 14.2821C2.54919 14.0903 2.24323 13.7843 2.05148 13.408C1.8335 12.9802 1.8335 12.4201 1.8335 11.3V5.63456Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M8.50016 11.5C10.157 11.5 11.5002 10.1569 11.5002 8.50004C11.5002 6.84319 10.157 5.50004 8.50016 5.50004C6.84331 5.50004 5.50016 6.84319 5.50016 8.50004C5.50016 10.1569 6.84331 11.5 8.50016 11.5Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>,
            name: 'Take Photo'
        },
        {
            avatar: <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M10.7667 14.5H3.55773C3.08654 14.5 2.85095 14.5 2.74185 14.4068C2.64719 14.326 2.59696 14.2047 2.60673 14.0806C2.61798 13.9376 2.78457 13.771 3.11776 13.4378L9.73116 6.8244C10.0392 6.51639 10.1932 6.36238 10.3708 6.30468C10.527 6.25392 10.6952 6.25392 10.8515 6.30468C11.029 6.36238 11.1831 6.51639 11.4911 6.8244L14.5 9.83333V10.7667M10.7667 14.5C12.0735 14.5 12.7269 14.5 13.226 14.2457C13.665 14.022 14.022 13.665 14.2457 13.226C14.5 12.7269 14.5 12.0735 14.5 10.7667M10.7667 14.5H4.23333C2.92654 14.5 2.27315 14.5 1.77402 14.2457C1.33498 14.022 0.978023 13.665 0.754318 13.226C0.5 12.7269 0.5 12.0735 0.5 10.7667V4.23333C0.5 2.92654 0.5 2.27315 0.754318 1.77402C0.978023 1.33498 1.33498 0.978023 1.77402 0.754318C2.27315 0.5 2.92654 0.5 4.23333 0.5H10.7667C12.0735 0.5 12.7269 0.5 13.226 0.754318C13.665 0.978023 14.022 1.33498 14.2457 1.77402C14.5 2.27315 14.5 2.92654 14.5 4.23333V10.7667M6.33333 4.77778C6.33333 5.63689 5.63689 6.33333 4.77778 6.33333C3.91867 6.33333 3.22222 5.63689 3.22222 4.77778C3.22222 3.91867 3.91867 3.22222 4.77778 3.22222C5.63689 3.22222 6.33333 3.91867 6.33333 4.77778Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>,
            name: 'Choose Photo'
        },
        {
            avatar: <Svg width={vw(4.2)} height={vw(4.2)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_50_7475)">
                    <Path d="M2.50001 13.6359C2.87663 13.75 3.38531 13.75 4.25 13.75H10.75C11.6147 13.75 12.1234 13.75 12.5 13.6359M2.50001 13.6359C2.41926 13.6114 2.34458 13.5817 2.27377 13.5456C1.92096 13.3659 1.63413 13.079 1.45436 12.7262C1.25 12.3251 1.25 11.8001 1.25 10.75V4.25C1.25 3.1999 1.25 2.67485 1.45436 2.27377C1.63413 1.92096 1.92096 1.63413 2.27377 1.45436C2.67485 1.25 3.1999 1.25 4.25 1.25H10.75C11.8001 1.25 12.3251 1.25 12.7262 1.45436C13.079 1.63413 13.3659 1.92096 13.5456 2.27377C13.75 2.67485 13.75 3.1999 13.75 4.25V10.75C13.75 11.8001 13.75 12.3251 13.5456 12.7262C13.3659 13.079 13.079 13.3659 12.7262 13.5456C12.6554 13.5817 12.5807 13.6114 12.5 13.6359M2.50001 13.6359C2.50022 13.1301 2.50325 12.8624 2.54804 12.6373C2.7453 11.6455 3.52055 10.8703 4.51227 10.673C4.75377 10.625 5.04418 10.625 5.625 10.625H9.375C9.95582 10.625 10.2462 10.625 10.4877 10.673C11.4795 10.8703 12.2547 11.6455 12.452 12.6373C12.4967 12.8624 12.4998 13.1301 12.5 13.6359M10 5.9375C10 7.31821 8.88071 8.4375 7.5 8.4375C6.11929 8.4375 5 7.31821 5 5.9375C5 4.55679 6.11929 3.4375 7.5 3.4375C8.88071 3.4375 10 4.55679 10 5.9375Z" stroke="#53FAFB" stroke-linecap="round" stroke-linejoin="round"/>
                </G>
                <Defs>
                <ClipPath id="clip0_50_7475">
                    <Rect width={vw(4.2)} height={vw(4.2)} fill="white"/>
                </ClipPath>
                </Defs>
            </Svg>
            ,
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
        navigation.navigate('CreateEndLoading');
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
                            {/* <FlatList
                                style={styles.flatList}
                                data={imageList}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                numColumns={numColumns}
                            /> */}
                        </View>
                    </View>
                </Modal>
                <View style = {styles.titleBar}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => 
                            navigation.navigate('CreateAccountInfo')
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
                    <View style={styles.avatar}>
                        {
                            image !== null ? 
                                <Image source={image} style={[styles.avatar, {marginTop: vw(13.3)}]}/> 
                                // null
                                : 
                                <Text style={styles.letter}> YE </Text>
                        }
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isClick}
                        onRequestClose={() => {
                        setIsClick(!isClick);
                        }}
                    >
                        <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.2)' }]}>
                            <View style={[styles.modalView, {bottom: 0, backgroundColor: '#1A1A1A', width: vw(90), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
                                {avatarArray.map((item, index) => 
                                    <TouchableOpacity style={styles.imageButton} key={index}
                                        onPress={() => {
                                            if(index === 1) {
                                                setIsClick(!isClick);
                                                setIsGallery(!isGallery);
                                            }
                                        }}
                                    >
                                        <CustomImageBtn
                                            // onPress={() => console.log('My Button pressed')}
                                            width={vw(10.3)}
                                            height={vw(10.3)}
                                            backgroundColor="#53FAFB10"
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
                                    backgroundColor={"#252525"}  
                                    color={'#8A8A8A'}
                                    fontSize={vw(3.9)}
                                    image={2}
                                    onPress = {handleAddPicture}
                                />
                                
                            </View>
                        </View>
                    </Modal>
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
                    <View style= {{height: vw(5)}}/>
                    <CustomLoadButton
                        navigation={ navigation }
                        title={image !== null ? "Continue" : "Save"}
                        width={vw(80)}
                        height={vw(12.5)}
                        backgroundColor={image !== null ? "#53FAFB" : "#252525"}  
                        color={image !== null ? 'black' : '#4C4C4C'}
                        fontSize={vw(3.9)}
                        onPress = {image !== null ? handleNaviagte : handleSave}
                    />
                    {
                        image !== null ? 
                            <Text style = {styles.uploadSuccess}>
                                Successful Uploaded
                            </Text>
                            : null
                    }
                </View>
            </View>
            <View style = {styles.footer}>
                {
                    image === null ? 
                        <Text style = {styles.footertext}
                            onPress = {() => navigation.navigate('CreateEndLoading')}
                        >
                            Skip 
                        </Text>
                        : null
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#151515',
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
        aspectRatio: 360/780,
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalView: {
      margin: vw(5.6),
      borderRadius: vw(5),
      padding: vw(5),
      alignItems: 'center',
      shadowColor: '#202020',
      shadowRadius: vw(1.1),
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

export default SelectAvatar;