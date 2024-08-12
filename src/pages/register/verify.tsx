import React, { useState, useEffect } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    BackHandler
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
// import RadialGradient from 'react-native-radial-gradient';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LottieView from 'lottie-react-native';

const CELL_COUNT = 5;

const RegisterVerify = ({ navigation }) => {

    useremail = "yazidelkherrati@gmail.com";
    const [seconds, setSeconds] = useState(59);
    const [value, setValue] = useState('');
    // const [enableMask, setEnableMask] = useState(true);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    
    // const toggleMask = () => setEnableMask((f) => !f);
    const renderCell = ({index, symbol, isFocused}) => {
      let textChild = null;
      const borderColor = isFocused ? '#53FAFB' : '#151515';
  
      if (symbol) {
        textChild = symbol;
      } else if (isFocused) {
        textChild = <Cursor />;
      }
    //   console.log('symbol', symbol, 'textChild', textChild);
      return (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell,{ borderWidth: 1, borderColor }]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
      );
    };
    // useEffect(() => {
    //     const backAction = () => {
    //         navigation.goBack(); // Prevent default behavior (i.e. exit the app)
    //     };
    
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
    //     return () => backHandler.remove();
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
              if (prevSeconds <= 0) {
                clearInterval(interval); // Clear the interval
                return 0; // Keep seconds at 0
              } else {
                return prevSeconds - 1;
              }
            });
          }, 1000); 
      return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.title}>
                    <Text style = {styles.maintitle}>
                        Check your email, {'\n'}
                        Verify the OTP Codes
                    </Text>
                    <Text style = {styles.subtitle}>
                        We have sent the verification OTP {'\n'}
                        to {useremail}
                    </Text>
                </View>
                <View style = {styles.verify}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={renderCell}
                    />
                </View>
                <View style = {styles.timeline}>
                    {/* <Icon name = 'clock-outline'/> */}
                    <Svg width={vw(4.2)} height={vw(4.2)} viewBox='0 0 15 15' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G clip-path="url(#clip0_5_7341)">
                            <Path d="M7.5 3.75V7.5L10 8.75M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" stroke="#4C4C4C" stroke-linecap="round" stroke-linejoin="round"/>
                        </G>
                        <Defs>
                            <ClipPath id="clip0_5_7341">
                                <Rect width="15" height="15" fill="white"/>
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style = {styles.subtitle}>
                        Time of Request new OTP 0:{seconds}
                    </Text>
                </View>
                <View style = {styles.verifyButton}>
                    <View style = {styles.buttonHeight}>
                        <CustomButton
                            navigation={navigation}
                            title="Verify Email"
                            width={vw(90)}
                            height={'100%'}
                            backgroundColor={(value !== '') ? "#53FAFB" : "#282828"}
                            color={(value !== '') ? "black" : "#6D6D6D"}
                            fontSize={vw(3.9)}
                            onPress = {() => {
                                if (value.length == 5 ) {
                                    navigation.navigate('VerifyComplete')
                                }
                            }}
                        />
                    </View>
                    <Text style = {styles.confirmQuestion}>
                        {`Don't received email? `} 
                        <Text 
                            style = {[styles.confirmQuestion, {color: "#53FAFB"}]}
                            onPress = {() => setValue('')}
                        >
                            Click to resend
                        </Text>
                    </Text>
                </View>
                <View style = {styles.comment}>
                    <Text 
                        style = {{ color: '#565656', fontSize: 12, textAlign: 'center', fontFamily: 'TT Firs Neue Trial Regular'}}
                    >
                        By creating your account, you agree in the Biples {'\n'}
                        <Text 
                            style = {{ color: 'white' }}
                        >
                            Privacy policy 
                        </Text>
                        &nbsp;and&nbsp;
                        <Text 
                            style = {{ color: 'white' }}
                        > 
                            Terms & Conditions
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#151515',
    },
    title: {
        marginTop: vw(13.3),
        width: vw(100),
        aspectRatio: 360/280,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5.6),
        fontFamily: 'Neue-Metana',
        padding: vw(2.8),
        textAlign: 'center'
    },
    subtitle: {
        color: '#4C4C4C',
        fontSize: vw(3.9),
        padding: vw(2.8),
        textAlign: 'center',
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    verify: {
        width: vw(100),
        aspectRatio: 360/78,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vw(4)
    },
    cell: {
      width: vw(15.4),
      height: vw(21.7),
      lineHeight: vw(21.7),
      fontSize: vw(8.3),
      fontWeight: '700',
      textAlign: 'center',
      marginLeft: vw(2.8),
      borderRadius: vw(5.6),
      backgroundColor: '#202020',
      color: 'white'
    },
    focusCell: {
      borderColor: '#53FAFB',
      color: '#53FAFB'
    },
    timeline: {
        width: vw(100),
        height: vw(20),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyButton: {
        width: vw(100),
        height: vw(59.1),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonHeight: {
        height: vw(12.5),
        margin: vw(2.8)
    },
    confirmQuestion: {
        margin: vw(2.8),
        flexDirection: 'row',
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    comment: {
        // marginTop: 10,
        width: vw(100),
        // height: vw(29.5),
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: vh(100)
    }
});

export default RegisterVerify;