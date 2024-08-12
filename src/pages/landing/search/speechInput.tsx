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
    TextInput
} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw'
import Svg, { Path } from 'react-native-svg'

const SpeechInput = ({navigation}) => {
    
    const [isFoucsed, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    handleText = (texts):[string] => {
        setText(texts);
    };
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {styles.body}>
                    <Text style = {[styles.title, { textAlign: 'center', marginTop: vh(34.7), marginBottom: vh(33)}]}>
                        What are you looking for? ...
                    </Text>
                    <TouchableOpacity style = {styles.speechBtn}>
                        <Svg width={vw(7.5)} height={vw(11.4)} viewBox="0 0 27 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M13.5 1.70825C12.1408 1.70825 10.8372 2.24821 9.87608 3.20933C8.91495 4.17045 8.375 5.47402 8.375 6.83325V20.4999C8.375 21.8592 8.91495 23.1627 9.87608 24.1238C10.8372 25.085 12.1408 25.6249 13.5 25.6249C14.8592 25.6249 16.1628 25.085 17.1239 24.1238C18.085 23.1627 18.625 21.8592 18.625 20.4999V6.83325C18.625 5.47402 18.085 4.17045 17.1239 3.20933C16.1628 2.24821 14.8592 1.70825 13.5 1.70825V1.70825Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M25.4584 17.0833V20.4999C25.4584 23.6715 24.1985 26.7131 21.9559 28.9557C19.7133 31.1984 16.6716 32.4583 13.5001 32.4583C10.3285 32.4583 7.28689 31.1984 5.04426 28.9557C2.80164 26.7131 1.54175 23.6715 1.54175 20.4999V17.0833" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M13.5 32.4583V39.2916" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M6.66675 39.2917H20.3334" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity 
                        style = {styles.footerBtn}
                        onPress = {() => navigation.goBack()}
                    >
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerBtn}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(5),
        color: 'white',
    },
    body: {
        width: vw(90),
        marginLeft: vw(5),
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: vh(16.11)
    },
    speechBtn: {
        width: vw(27.8),
        aspectRatio: 100/100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53FAFB',
        borderRadius: vw(15)
    },
    footer: {
        position: 'absolute',
        bottom: vh(5.38),
        width: vw(80),
        marginLeft: vw(10),
        aspectRatio: 300/24,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    footerBtn: {
        width: vw(6.7),
        height: vw(6.7),
    },
});

export default SpeechInput;