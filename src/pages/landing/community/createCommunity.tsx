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
    useWindowDimensions
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
import CustomButton from "../../components/customButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
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

const CreateCommunity = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const groupArray = [
        {
            avatar: require('../../../../assets/images/groupAvatar.png'),
            name: 'Music'
        },
        {
            avatar: require('../../../../assets/images/groupAvatar.png'),
            name: 'Art'
        },
        {
            avatar: require('../../../../assets/images/groupAvatar.png'),
            name: 'Sports'
        },
        {
            avatar: require('../../../../assets/images/groupAvatar.png'),
            name: 'Music'
        },
        {
            avatar: require('../../../../assets/images/groupAvatar.png'),
            name: 'Music'
        },
        {
            avatar: require('../../../../assets/images/groupAvatar2.png'),
            name: 'Music'
        },
    ]

    return (
        <View>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
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
                    <Text style = {[styles.maintitle, {fontSize: vw(4.4)}]}>
                        Create Community
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <ScrollView >
                    <View style = {styles.title}>
                        <Text style = {[styles.maintitle, {}]}>
                            Select Categorie
                        </Text>
                        <Text style = {styles.subtitle}>
                            The terms and conditions contained in this Agreement 
                            shall constitute the entir
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', width: vw(95), flexWrap: 'wrap', marginLeft: vw(5)}}>
                        {
                            groupArray.map((item, index) =>
                            <View key = {index} style = {styles.groupStyle}>
                                <Image source ={item.avatar} style = {styles.imgStyle}/>
                                <Text style = {[styles.subtitle, {fontSize: vw(3.3), color: 'white'}]}>
                                    {item.name}
                                </Text>
                            </View>
                            )
                        }
                    </View>
                    <View style = {{height:vw(40)}}/>
                </ScrollView>
                <View style = {styles.footer}>
                    <TouchableOpacity 
                        style = {[styles.footerBtn, {backgroundColor: '#262626'}]}
                    // onPress={() => {
                    //     setLoadingNumber(loadingNumber+1)
                    // }}
                    >
                        <Svg width={vw(4.4)} height={vw(4.7)} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M5.375 11.125L10.625 5.87498M5.75 2.5V1M10.25 14.5V16M2 6.25H0.5M14 10.75H15.5M2.68566 3.18566L1.625 2.125M13.3144 13.8143L14.375 14.8749M8.00003 12.7426L6.40904 14.3336C5.23746 15.5051 3.33797 15.5051 2.16639 14.3336C0.994822 13.162 0.994822 11.2625 2.16639 10.0909L3.75739 8.49993M12.2427 8.49993L13.8337 6.90894C15.0052 5.73737 15.0052 3.83788 13.8337 2.6663C12.6621 1.49473 10.7626 1.49473 9.59102 2.6663L8.00003 4.25729" stroke="#767676" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.text, {color: '#767676'}]}>Join Others</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[styles.footerBtn, {backgroundColor: '#53FAFB'}]}
                        onPress={() => {
                            navigation.navigate('CommunityEmpty');
                        }}
                    >
                        <Text style = {[styles.text, {color: 'black'}]}>Next</Text>
                    </TouchableOpacity>
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
        flexDirection: 'column',
    },
    titleBar: {
        paddingTop: vw(17.5),
        width: vw(100),
        aspectRatio: 360/90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    title: {
        width: vw(100),
        paddingLeft: vw(6.7),
        flexDirection: 'column',
        paddingBottom: vw(7.5),
        paddingTop: vw(8.9)
    },
    maintitle: {
        color: 'white',
        fontSize: vw(6.7),
        fontFamily: 'TT Firs Neue Trial Medium'
        // padding: 10,
        // textAlign: 'center'
    },
    subtitle: {
        marginTop: vw(2.2),
        color: '#707070',
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial ExtraLight'
        // padding: 10,
        // textAlign: 'center'
    },
    groupStyle: {
        width: vw(41.7),
        height: vw(42),
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: vw(5)
    },
    footer: {
        // margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: vw(100),
        aspectRatio: 360/17,
        // marginBottom: vw(13.3)
        position: 'absolute',
        bottom: vw(10)
    },
    footerBtn: {
        width: vw(41.7),
        borderRadius: vw(10),
        aspectRatio: 150/45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
    },
    confirmQuestion: {
        // margin: 10,
        fontSize: vw(3.3),
        flexDirection: 'row',
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    foot: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.9),
    }
});

export default CreateCommunity;