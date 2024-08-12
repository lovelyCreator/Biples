import React, { useState, useEffect, useRef } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    PanResponder,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    BackHandler
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';
import CustomButton from "../../components/customButton";


const Loading = ({ navigation }) => {
    // let navigate = useNavigate();
    const [loadingNumber, setLoadingNumber] = useState(0);
    const loadingNumberArray = [0, 1, 2];
    const descriptions = [
        {
            text: "Let's get started",
            image: require('../../../assets/images/loading1.png'),
            width: vw(68),
            height: vw(81.53),
            marginTop: vw(6.92)
        },
        {
            text: "Onboarding journey",
            image: require('../../../assets/images/loading2.png'),
            width: vw(67),
            height: vw(81.7),
            marginTop: vw(10)
        },
        {
            text: "1st step to success",
            image: require('../../../assets/images/loading3.png'),
            width: vw(55.4),
            height: vw(83.1),
            marginTop: vw(8.33)
        }
    ]
    const handleNavigate = () => {
        console.log('pressed');
        navigation.navigate("LoadingEnd");
    }
    let num = 0;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dx) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
                // console.log('onPanResponderRelease', evt, gestureState);
                // console.log('length: ', descriptions.length);
                if (gestureState.dx > 0) {
                    // console.log('dx>0', loadingNumber);
                    setLoadingNumber((prevLoadingNumber) => {
                        if (prevLoadingNumber <= 0) {
                            num = 0;
                            return 0;
                        }
                        else { 
                            num = num - 1;
                            return (prevLoadingNumber-1);
                        }
                    });
                } else {
                    setLoadingNumber((prevLoadingNumber) => {
                        num = num + 1;
                        if(num >= 3) {
                            num = num;
                            navigation.navigate('LoadingEnd')
                        }
                        // console.log('previousNum:', prevLoadingNumber);
                        if(prevLoadingNumber >= 2) {
                            return prevLoadingNumber;
                        }
                        else return (prevLoadingNumber+1);
                    });
                }
            },
        })
    ).current;
    // useEffect(() => {
    //     const backAction = () => {
    //         exitApp(); // Prevent default behavior (i.e. exit the app)
    //     };
    
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
    //     return () => backHandler.remove();
    // }, []);
    return (
        <View  {...panResponder.panHandlers}>
            
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View  style={styles.container}>
                <View style = {{height: vw(113.9), alignItems: 'center'}}>
                    <View style={styles.markStyle}>
                        <View style={styles.mark}>
                            <View style={styles.loading}>
                                {loadingNumberArray.map((number) => (
                                    <View
                                        key={number}
                                        style={
                                            number === loadingNumber ? styles.onloading : styles.offloading
                                        }
                                    />
                                ))}
                            </View>
                        </View>
                        {
                            loadingNumber !== 2 ? (
                                <View className = 'skip_button'
                                    style={{flexDirection: 'row', justfiyContent: 'center', alignItems: 'center', marginRight: vw(6.7), height: vw(9.3)}}
                                >
                                    <Text 
                                        style={styles.skipStyle}
                                        onPress = {handleNavigate}
                                    >
                                        Skip
                                    </Text>
                                    <TouchableOpacity onPress={() => {
                                        setLoadingNumber(loadingNumber+1)
                                    }}>
                                        <Svg style={styles.arrow} 
                                            width={vw(5.3)} height={vw(5.3)} viewBox='0 0 19 19' fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path d="M0.791748 9.5L14.2501 9.5" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M9.5 4.75L14.25 9.5L9.5 14.25" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                        ) : null
                            
                    }
                    </View>
                    <Image
                        style={{width:descriptions[loadingNumber].width, 
                            height:descriptions[loadingNumber].height,
                            marginTop:descriptions[loadingNumber].marginTop,}} 
                        source={descriptions[loadingNumber].image}
                    />
                </View>
                    <View className='loading_action'
                        style={{width: '100%', flexDirection: 'col', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <View  className='big_text'
                            style = {{marginTop: vw(10.8)}}
                        >
                            <Text style={{color: 'white', fontSize: vw(5.83), textAlign: 'center', fontFamily: 'Neue-Metana'}}>
                                {descriptions[loadingNumber].text}
                            </Text>
                        </View>
                        <View className='small_text'
                            style = {{marginTop: vw(9.2)}}
                        >
                            <Text style={{ color: 'white', fontSize: vw(3),textAlign: 'center',  fontFamily: 'TT Firs Neue Trial Regular'}}>
                                Our goal is to ensure that you have everything {'\n'}you need to feel, confident, and ready
                            </Text>
                        </View>
                </View>
                <View className='register_login_button'
                    style={{marginTop: vw(16.4), width: vw(88), aspectRatio:297/46, flexDirection: 'row', backgroundColor: '#2B2B2B', borderRadius: vw(4.2), borderWidth: vw(0.3), borderColor: '#808080', opacity: 0.85}}
                >
                    <CustomButton
                        navigation={navigation}
                        title="Register"
                        width={vw(88)}
                        height={'100'}
                        backgroundColor="#53FAFB"
                        color="black"
                        fontSize={vw(3.9)}
                        onPress = {() => navigation.navigate('LoadingEnd')}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: vw(3),textAlign: 'center',  fontFamily: 'TT Firs Neue Trial Regular', marginTop: vw(7.2)}}>
                    All ready have an account ?
                    <Text 
                        style={{ color: '#53FAFB', fontSize: vw(3),textAlign: 'center',  fontFamily: 'TT Firs Neue Trial Regular'}}
                        onPress = { () => navigation.navigate('Login') }
                    >
                        &nbsp;Sign
                    </Text>
                </Text>
                <View style = {{height: 20}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        aspectRatio: 360/780,
        // height: vh(100),
        backgroundColor: '#000000',
        backgroundImage: 'Radial-gradient(to bottom, #151515, #000000)',
        fontFamily: 'TT Firs Neue Trial Bold',
        color: 'white',
        alignItems: 'center'
    },
    text: {
        marginTop: vh(5),
        fontFamily: 'TT Firs Neue Trial Bold',
        fontSize: vw(3.8),
        fontWeight: 'bold'
    },
    markStyle: {
        marginTop: vw(16.4),
        marginLeft: vw(8),
        width: vw(90),
        height: vw(9.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end'
    },
    mark: {
        width: vw(35.6),
        height: vw(7.8)
    },
    imageBackground: {
        width: vw(68),
        height: vw(81.53),
        marginTop: vw(6.92)
    },
    skipStyle: {
        color: 'white',
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    arrow: {
        marginLeft: vw(2)
    },
    loading: {
        width: '100',
        height: vw(10),
        flexDirection: 'row',
        justfiyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    onloading: {
        margin: vw(0.8),
        width: vw(3.4),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(1.7),
        backgroundColor: '#00000000'
    },
    offloading: {
        margin: vw(1.7),
        width: vw(1.1),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(0.6),
        backgroundColor: 'white'
    }
});

export default Loading;