import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
// import { Link } from "react-router-native";
import { vh, vw } from 'react-native-css-vh-vw';

const CustomImageButton = ({ onPress, width, height, backgroundColor, image, link }) => {
    wid = width*3/5.4
    hei = height*3/5.4
    return (
        <TouchableOpacity>
            {/* <Link to={link} */}
            <View
                style={[styles.button, 
                    { 
                        width, 
                        height, 
                        backgroundColor, 
                        fontFamily: 'TT Firs Neue Trial Bold' 
                    }
                ]}
            >
                {image && <Image source={image} 
                    style={{
                        width: wid,
                        height: hei,
                        resizeMode: 'contain',
                        borderRadius: vw(1.4)}} 
                    />
                }
            </View>
            {/* </Link> */}
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(2.8),
        marginTop: vw(2.8)
    },
    image: {
    }
});

export default CustomImageButton;