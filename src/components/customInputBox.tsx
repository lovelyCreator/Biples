import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

const CustomInputBox = ({ placeholder, image, width, height, backgroundColor, onchangeText, text, icon, isVisiblePassword, setIsVisiblePassword }) => {
  
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, { width: width, height: height, backgroundColor: backgroundColor, borderColor: isFocused ? '#53FAFB' : '#101010' }]}>
      {image && <Image source={image} style={styles.image} />}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, { color: 'white', fontSize: vw(3.3) }]}
        placeholder={placeholder}
        placeholderTextColor='#4C4C4C'
        value={text}
        onChangeText={onchangeText}
        keyboardAppearance="dark"
        keyboardType={placeholder==='Type your Email' || placeholder === 'Enter your Email' ? 'email-address' : 'default'}
        secureTextEntry={isVisiblePassword ? false : true}
      />
      {icon && 
      <TouchableOpacity style={styles.image}
        onPress={()=>{
          if (isVisiblePassword !== null && placeholder !== 'Type your Email') {
            setIsVisiblePassword(!isVisiblePassword);            
          }}
        }
      >
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: vw(4.2),
      borderWidth: vw(0.3),
      borderColor: '#101010',
      paddingHorizontal: vw(5.6),
      color: '#4C4C4C',
      marginBottom: vw(0.5),
      fontFamily: 'TT Firs Neue Trial Regular',
    },
    input: {
      fontFamily: 'TT Firs Neue Trial Regular',
      flex: 1
    },
    image: {
      width: vw(4.2),
      height: vw(5.3),
      resizeMode: 'contain',
      marginLeft: vw(2.8),
      marginRight: vw(2.8)
    },
});

export default CustomInputBox;