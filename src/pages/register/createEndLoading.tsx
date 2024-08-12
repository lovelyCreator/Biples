import React, { useEffect } from 'react'
import {
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, {Path} from 'react-native-svg';

const CreateEndLoading = ({navigation}) => {
    
    useEffect(() => {
        const switchPage = setTimeout(() => {
            console.log('time is ended');
            navigation.navigate('BackLogin');
        }, 3000); // 10 seconds in milliseconds

        return () => clearTimeout(switchPage);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <ImageBackground className = 'land_mark'
                style={styles.imageBackground} 
                source={require('../../../assets/images/land_mark.png')}
            >
                <View style = {{marginTop: vw(96.1), marginBottom: vw(35.6), flexDirection: 'column', justfiyContent: 'center', alignItems: 'center'}}>
                    <Svg className = 'loading_blue_mark'
                        width={vw(18.3)} height={vw(16.7)} viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path d="M51.4449 20.2387L28.1072 20.2548L25.1542 30.5311H48.3486L42.3311 51.3492L23.6975 51.4297C20.1555 51.4458 17.5845 48.0096 18.5715 44.5654L31.3308 0H12.7371L0.558863 42.1835C-2.0121 51.0998 4.61032 60.0161 13.8037 60L58.0752 59.9276L64.5146 37.9104C67.0935 29.0826 60.5507 20.2307 51.4449 20.2387Z" fill="#53FAFB"/>
                        <Path d="M31.4424 40.7033H29.4286L30.7976 36.0762H35.3744L34.7377 38.2248C34.2999 39.6974 32.9627 40.7033 31.4424 40.7033Z" fill="white"/>
                        <Path d="M39.0994 40.7033H36.9026L38.2716 36.0762H42.8484L42.156 38.4018C41.75 39.7698 40.5083 40.7033 39.0915 40.7033" fill="white"/>
                    </Svg>
                    <View style = {styles.loadingStyle}>
                        <Svg width={vw(6.7)} height={vw(6.7)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style={styles.text}>
                            Please wait ...
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        width: vw(101),
        // aspectRatio: 360/780,
        height: '100%',
        flex: 1
        // height: vh(105)
    },
    loadingStyle: {
        marginTop: vw(53.6),
        width: vw(100),
        aspectRatio: 360/56,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginTop: vw(3.9),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(3.9),
        color: '#fff',
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
    }
});

export default CreateEndLoading;