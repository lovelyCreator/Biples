import React, { useState, useEffect } from 'react'
import {
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    Scroll, 
    useWindowDimensions,
    ImageBackground
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, {Path} from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

const LoadingStart = ({navigation}) => {
    
    const windowWidth = useWindowDimensions().width;
//   const history = useHistory();
    const [loadingState, setLoadingState] = useState(false);
    // useEffect(() => {
    //     const switchPage = setTimeout(() => {
    //         console.log('time is ended');
    //         navigation.navigate('Loading');
    //     }, 3000); // 10 seconds in milliseconds

    //     return () => clearTimeout(switchPage);
    // }, []);

    useFocusEffect(
        React.useCallback(() => {
        let timerId;
            
        if (!loadingState) {
            timerId = setTimeout(() => {
                setLoadingState(!loadingState);
                navigation.navigate('Loading');
            }, 3000); // Adjust the delay as needed
        }
        return () => {
            clearTimeout(timerId);
        };
        }, [loadingState])
    );
    return (
        <View style={styles.container}>
            
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            
            <ImageBackground className = 'land_mark'
                style={styles.imageBackground} 
                source={require('../../../assets/images/black_landmark.png')}
            >

                <View style={styles.svgStyle}>
                    <Svg className='loading_dark_mark'
                        width={0.183*windowWidth} height={0.167*windowWidth} viewBox='0 0 66 60'
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path 
                            d="M51.4449 20.2387L28.1072 20.2548L25.1542 
                            30.5311H48.3486L42.3311 51.3492L23.6975 
                            51.4297C20.1555 51.4458 17.5845 48.0096 
                            18.5715 44.5654L31.3308 0H12.7371L0.558863 
                            42.1835C-2.0121 51.0998 4.61032 60.0161 
                            13.8037 60L58.0752 59.9276L64.5146 
                            37.9104C67.0935 29.0826 60.5507 20.2307 
                            51.4449 20.2387Z" fill="#2E2E2E"
                        />
                    </Svg>
                </View>
                <Text style={styles.text}>
                    Opening...
                </Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB',
        width: vw(101),
        height: '100%',
    },
    svgStyle: {
        width: vw(120),
        height: vw(16.7),
        flexDirection: 'column',
        justfiyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: vh(5),
        fontSize: vw(3.9),
        fontFamily: 'TT Firs Neue Trial Medium',
        color: '#333',
    },
    image: {
        width: vw(18.3),
        height: vw(16.7)
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        bottom: vh(5),
    }
});

export default LoadingStart;