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
import Svg, { Path, G, Rect, Mask } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'

const Invite = ({navigation}) => {
    const [isModal, setIsModal] = useState(false);
    const [tool, setTool] = useState([
        {
            name: "WhatsApp",
            avatar: require('../../../assets/images/WhatsApp.png')
        },
        {
            name: "Notion",
            avatar: require('../../../assets/images/Notion.png')
        },
        {
            name: "Facebook",
            avatar: require('../../../assets/images/Facebook.png')
        },
        {
            name: "More",
            avatar: require('../../../assets/images/more.png')
        },
    ]);
    const [subtool, setSubTool] = useState([
        {
            name: "Screenshot",
            avatar: <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Mask id="mask0_2513_598" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width={vw(6.7)} height={vw(6.7)}>
                    <Rect width={vw(6.7)} height={vw(6.7)} fill="#D9D9D9"/>
                </Mask>
                <G mask="url(#mask0_2513_598)">
                    <Path d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V15H5V19H9V21H5ZM15 21V19H19V15H21V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H15ZM3 9V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H9V5H5V9H3ZM19 9V5H15V3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V9H19Z" fill="#9E9E9E"/>
                    <Path d="M25 21V19H21C20.45 19 19.979 19.1957 19.587 19.587C19.1957 19.979 19 20.45 19 21V25H21V21H25Z" fill="#9E9E9E"/>
                </G>
            </Svg>
            
        },
        {
            name: "Long ScreenShot",
            avatar: <View style = {{width: vw(6.7), height: vw(6.7), justifyContent: 'center', alignItems: 'center', paddingLeft: vw(2), paddingTop: vw(1)}}>
                <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7 20H2C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V11H2V18H7V20ZM2 9V2H7V0H2C1.45 0 0.979333 0.195667 0.588 0.587C0.196 0.979 0 1.45 0 2V9H2ZM9 20H14C14.55 20 15.021 19.8043 15.413 19.413C15.8043 19.021 16 18.55 16 18V11H14V18H9V20ZM16 2V9H14V2H9V0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2Z" fill="#9E9E9E"/>
                </Svg>
            </View>
        },
        {
            name: "Copy link",
            avatar: <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mask id="mask0_2513_614" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width={vw(6.7)} height={vw(6.7)}>
            <Rect width={vw(6.7)} height={vw(6.7)} fill="#D9D9D9"/>
            </Mask>
            <G mask="url(#mask0_2513_614)">
            <Path d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16Z" fill="#9E9E9E"/>
            </G>
            </Svg>
            
        },
        {
            name: "Send to your devices",
            avatar: <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mask id="mask0_2513_619" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width={vw(6.7)} height={vw(6.7)}>
            <Rect width={vw(6.7)} height={vw(6.7)} fill="#D9D9D9"/>
            </Mask>
            <G mask="url(#mask0_2513_619)">
            <Path d="M2 20V17H4V6C4 5.45 4.196 4.97933 4.588 4.588C4.97933 4.196 5.45 4 6 4H21V6H6V17H12V20H2ZM15 20C14.7167 20 14.4793 19.904 14.288 19.712C14.096 19.5207 14 19.2833 14 19V9C14 8.71667 14.096 8.479 14.288 8.287C14.4793 8.09567 14.7167 8 15 8H21C21.2833 8 21.5207 8.09567 21.712 8.287C21.904 8.479 22 8.71667 22 9V19C22 19.2833 21.904 19.5207 21.712 19.712C21.5207 19.904 21.2833 20 21 20H15ZM16 17H20V10H16V17Z" fill="#9E9E9E"/>
            </G>
            </Svg>            
        },
        {
            name: 'QR code',
            avatar: <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7 12H12V17M3.01 12H3M8.01 17H8M12.01 21H12M21.01 12H21M3 17H4.5M15.5 12H17.5M3 21H8M12 2V8M17.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V17.6C21 17.0399 21 16.7599 20.891 16.546C20.7951 16.3578 20.6422 16.2049 20.454 16.109C20.2401 16 19.9601 16 19.4 16H17.6C17.0399 16 16.7599 16 16.546 16.109C16.3578 16.2049 16.2049 16.3578 16.109 16.546C16 16.7599 16 17.0399 16 17.6V19.4C16 19.9601 16 20.2401 16.109 20.454C16.2049 20.6422 16.3578 20.7951 16.546 20.891C16.7599 21 17.0399 21 17.6 21ZM17.6 8H19.4C19.9601 8 20.2401 8 20.454 7.89101C20.6422 7.79513 20.7951 7.64215 20.891 7.45399C21 7.24008 21 6.96005 21 6.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H17.6C17.0399 3 16.7599 3 16.546 3.10899C16.3578 3.20487 16.2049 3.35785 16.109 3.54601C16 3.75992 16 4.03995 16 4.6V6.4C16 6.96005 16 7.24008 16.109 7.45399C16.2049 7.64215 16.3578 7.79513 16.546 7.89101C16.7599 8 17.0399 8 17.6 8ZM4.6 8H6.4C6.96005 8 7.24008 8 7.45399 7.89101C7.64215 7.79513 7.79513 7.64215 7.89101 7.45399C8 7.24008 8 6.96005 8 6.4V4.6C8 4.03995 8 3.75992 7.89101 3.54601C7.79513 3.35785 7.64215 3.20487 7.45399 3.10899C7.24008 3 6.96005 3 6.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V6.4C3 6.96005 3 7.24008 3.10899 7.45399C3.20487 7.64215 3.35785 7.79513 3.54601 7.89101C3.75992 8 4.03995 8 4.6 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>            
            
        }
    ]);
    const toggleModal = () => {
        setIsModal(!isModal);
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
                            Invite to Community
                        </Text>
                        <Text>&nbsp;</Text>
                    </View>
                </View>
                <View style = {styles.body}>
                    <Image source = {require('../../../assets/images/card9.png')}
                        style = {{width: vw(23), height: vw(23), borderRadius: vw(5)}}
                    />
                    <View style = {[styles.foundResult, {marginBottom : vw(5), height: vw(20.1)}]}>
                        <Text style = {styles.title}>
                            Kitshuna Fowyu
                        </Text>
                        <Text style = {[styles.text, {flexWrap: 'wrap', textAlign: 'center', marginTop: vw(1.1)}]}>
                            @KitshunaFowyu
                        </Text>
                    </View>
                    <Image source = {require('../../../assets/images/QRCode.png')}
                        style = {{width: vw(51.1), height: vw(51.1), borderRadius: vw(12)}}
                    />
                    <View style = {styles.foundResult, {height: vw(20.1), marginTop: vw(5)}}>
                        <Text style = {[styles.title, {textAlign: 'center'}]}>
                            Share QR code
                        </Text>
                        <Text style = {[styles.text, {flexWrap: 'wrap', textAlign: 'center', marginTop: vw(3.1)}]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </Text>
                    </View>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity 
                        style = {styles.footerBtn}
                        onPress = {toggleModal}
                    >
                        <Text style = {{ fontFamily: 'TT Firs Neue Trial Medium', color: 'black', fontSize: vw(5.6), textAlign: 'center', marginRight: vw(5)}}>
                            Invite
                        </Text>
                        <Svg width={vw(5.8)} height={vw(5.6)} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M19.5 7L19.5 1H13.5" fill="black"/>
                            <Path d="M19.5 7L19.5 1M19.5 1H13.5M19.5 1L11.5 9M8.5 3H6.3C4.61984 3 3.77976 3 3.13803 3.32698C2.57354 3.6146 2.1146 4.07354 1.82698 4.63803C1.5 5.27976 1.5 6.11984 1.5 7.8V14.2C1.5 15.8802 1.5 16.7202 1.82698 17.362C2.1146 17.9265 2.57354 18.3854 3.13803 18.673C3.77976 19 4.61984 19 6.3 19H12.7C14.3802 19 15.2202 19 15.862 18.673C16.4265 18.3854 16.8854 17.9265 17.173 17.362C17.5 16.7202 17.5 15.8802 17.5 14.2V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible={isModal} transparent={true}
                onRequestClose={() => {
                setIsModal(!isClick);
                }}
            >
            <StatusBar translucent backgroundColor = 'rgba(0, 0, 0, 0.2)'/>
            <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.2)', }]}>
                <View style={[styles.modalView, {bottom: 0, backgroundColor: '#151515', width: vw(100), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
                    
                    <View style={styles.imageButton}>
                        <Image source={require('../../../assets/images/card9.png')}
                            style = {{width: vw(12.2), height: vw(12.2)}}
                        />
                        {/* <CustomImageButton
                            // onPress={() => console.log('My Button pressed')}
                            width={vw(10.3)}
                            height={vw(10.3)}
                            backgroundColor="#53FAFB06"
                            image={item.avatar}
                        /> */}
                        <Text style={[styles.imageletter, {color: 'white', textAlign: 'left'}]}
                        >
                            Hi, A community of Games – Invited you !{'\n'}
                            Biples.com/invite/QUGHSUWQywqu81
                        </Text>
                    </View>
                    <View style={[styles.imageButton, {height: vw(16.7), marginTop: vw(6.2), paddingBottom: vw(6.2)}]}>
                        {
                            tool.map((item, index) =>
                                <TouchableOpacity key = {index} style = {{flexDirection: 'column', justifyCotent: 'space-between', alignItems: 'center', height: vw(16.7),width: vw(17.8), marginRight: vw(4.44)}}
                                    onPress={() => setIsModal(!isModal)}
                                >
                                    <Image source={item.avatar}
                                        style = {{width: vw(9.2), height: vw(9.2)}}
                                    />
                                    <Text style={[styles.imageletters, {textAlign: 'center', marginTop: vw(3)}]}
                                        // onPress={() => {
                                        //     if(index === 1) {
                                        //         setIsClick(!isClick);
                                        //         setIsGallery(!isGallery);
                                        //     }
                                        // }}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View style={[styles.imageButton, { marginTop: vw(4.2)}]}>
                        
                            <FlatList
                                style={styles.flatList}
                                data={subtool}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem = {({item, index}) => 
                                    <TouchableOpacity style = {{flexDirection: 'column', justifyCotent: 'space-between', alignItems: 'center', height: vw(16.7),width: vw(17.8), marginRight: vw(4.44)}}
                                        onPress={() => setIsModal(!isModal)}
                                    >
                                        {item.avatar}
                                        <Text style={[styles.imageletters, {textAlign: 'center', marginTop: vw(3)}]}
                                        >
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                }
                            />
                        {/* {
                            subtool.map((item, index) =>
                                <View key = {index} style = {{flexDirection: 'column', justifyCotent: 'space-between', alignItems: 'center', height: vw(16.7),width: vw(17.8), marginRight: vw(4.44)}}>
                                    {item.avatar}
                                    <Text style={[styles.imageletters, {textAlign: 'center', marginTop: vw(3)}]}
                                        // onPress={() => {
                                        //     if(index === 1) {
                                        //         setIsClick(!isClick);
                                        //         setIsGallery(!isGallery);
                                        //     }
                                        // }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            )
                        } */}
                    </View>
                    {/* <View style={{height: vw(5)}}/> */}
                    
                </View>
            </View>
            </Modal>
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
    body: {
        width: vw(100),
        // position: 'absolute',
        paddingTop: vw(35.1),
        marginBottom: vh(12.11),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5.6),
        color: 'white',
    },
    foundResult: {
        width: vw(80),
        // marginLeft: vw(5),
        height: vh(24.2),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: vw(20)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: '#656565',
        width: vw(85)
    },
    footer: {
        position: 'absolute',
        bottom: vw(0),
        width: vw(100),
        marginBottom: vw(12.78),
        paddingTop: vw(4),
        alignItems: 'center',
        backgroundColor: '#101010',
    },
    footerBtn: {
        width: vw(48),
        aspectRatio: 164/52,
        borderRadius: vw(10),
        borderWidth: vw(0.3),
        backgroundColor: '#53FAFB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        width: vw(100),
        height: vh(110),
        // aspectRatio: 360/780,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginRight: 0
    },
    modalView: {
      borderTopLeftRadius: vw(5),
      borderTopRightRadius: vw(5),
      padding: vw(4.2),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: vw(0.7),
      },
      shadowOpacity: 0.25,
      shadowRadius: vw(1.1),
      elevation: 5,
    },
    imageButton: {
        width: vw(100),
        paddingLeft: vw(4.2),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: vw(4.2),
        borderBottomWidth: vw(0.3),
        borderColor: '#555555',
    },
    imageletter: {
        color: '#8A8A8A',
        fontFamily: 'Roboto-Medium',
        fontSize: vw(3.6),
        textAlign: 'center',
        marginLeft: vw(3),
        height: vw(12.2),
        lineHeight: vw(6.1)
    },
    imageletters: {
        color: 'white',
        fontFamily: 'Roboto-Regular',
        fontSize: vw(3),
        textAlign: 'center',
    },
});

export default Invite;