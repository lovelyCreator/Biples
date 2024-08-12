import React, { useState, useEffect, useRef } from 'react'
import {
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    ScrollView,
    SafeAreaView,
    TouchableOpacity, 
    useWindowDimensions
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';
import { Icon } from 'react-native-elements'
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

const PrivatePolicy = ({ navigation }) => {

    const windowWidth = useWindowDimensions().width;
    const user = {
        avatar: require('../../../assets/images/image1.png'),
        firstName: 'Yazid',
        fullName: 'Yazid KHERRATI',
        unreadMessage: 18,
        state: 'Sign In',
        wallet: '7,197 ETH'
    };
    const privateArray = [
        {
            title: '1. Types data we collect',
            content: `Lorem ipsum dolor sit amet, consectetur ${'\n'}adipiscing elit, sed do eiusmod tempor ${'\n'}incididunt ut labore et dolore magna ${'\n'}aliqua. Ut enim ad minim veniam, quis ${'\n'}nostrud exercitation ullamco laboris nisi ${'\n'}ut aliquip ex ea commodo consequat. ${'\n'}
                ${'\n'}Duis aute irure dolor in reprehenderit in ${'\n'}voluptate velit esse cillum dolore eu ${'\n'}fugiat nulla pariatur. Excepteur sint ${'\n'}occaecat cupidatat non proident.`
        },
        {
            title: '2. Use of your personal data',
            content: `Sed ut perspiciatis unde omnis iste natus ${'\n'}error sit voluptatem accusantium ${'\n'}doloremque laudantium, totam rem ${'\n'}aperiam, eaque ipsa quae ab illo ${'\n'}inventore veritatis et quasi architecto ${'\n'}beatae vitae.${'\n'}${'\n'}Nemo enim ipsam voluptatem quia ${'\n'}voluptas sit aspernatur aut odit aut fugit.`
        },
        {
            title: '3. Disclosure of your personal data',
            content: `At vero eos et accusamus et iusto odio ${'\n'}dignissimos ducimus qui blanditiis ${'\n'}praesentium voluptatum deleniti atque ${'\n'}corrupti quos dolores et quas molestias ${'\n'}excepturi sint occaecati cupiditate non ${'\n'}provident, similique sunt in culpa qui ${'\n'}officia deserunt mollitia animi, id est ${'\n'}laborum et dolorum fuga. 
                ${'\n'}Et harum quidem rerum facilis est et ${'\n'}expedita distinctio. Nam libero tempore, ${'\n'}cum soluta nobis est eligendi optio ${'\n'}cumque nihil impedit quo minus id quod ${'\n'}maxime placeat facere possimus, omnis ${'\n'}voluptas assumenda est, omnis dolor ${'\n'}repellendus. 
                ${'\n'}Temporibus autem quibusdam et aut ${'\n'}officiis debitis aut rerum necessitatibus ${'\n'}saepe eveniet ut et voluptates ${'\n'}repudiandae sint et molestiae non ${'\n'}recusandae. Itaque earum rerum hic ${'\n'}tenetur a sapiente delectus`
        },
    ];
    return (
        <SafeAreaView>
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <View style={styles.container}>
                <View style = {styles.header}>
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
                    <Text style = {styles.maintitle}>
                        Privacy Plolicy
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <ScrollView style = {styles.body}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        privateArray.map((item, index) => 
                            <View key = { index } style = {styles.privates} >
                                <Text style = {[styles.maintitle, {fontSize: vw(4.5), marginBottom: vw(6.4)}]}>
                                    {item.title}
                                </Text>
                                <Text style = {styles.text}>
                                    {item.content}
                                </Text>
                            </View>
                        )
                    }
                    <View style = {{height: vw(10)}}/>
                </ScrollView>
            </View>
        </SafeAreaView>
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
    header: {
        position: 'absolute',
        width: vw(100),
        aspectRatio: 360/23,
        top: vw(17),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5),
    },
    maintitle: {
        color: 'white',
        fontSize: vw(5),
        fontFamily: 'TT Firs Neue Trial Medium'
    },
    body: {
        marginTop: vw(35.5),
        width: vw(100),
        marginLeft: vw(20)
    },
    privates: {
        marginBottom: vw(6.4)
    },
    text: {
        color: 'white',
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.9),
        paddingLeft: vw(2)
    }
});



export default PrivatePolicy;