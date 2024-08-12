import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { vh, vw } from 'react-native-css-vh-vw';
export default function Gradient() {
  return (
    <View style={styles.container}>
    <RadialGradient
        style={{ width: vw(101), aspectRatio: 360/780 }}
        colors={['#151515', '#000000']}
        stops={[1, 1]}
        center={[vw(16.7), vw(16.7)]}
        radius={vw(195)}
    />

      <RadialGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.6, 0.9]}
        colors={['hwb(0, 0%, 100%)', '#090900', '#000000']}
        style={styles.button}
      >
        <TouchableOpacity>
          <Text style={styles.buttonText}>I am a button</Text>
        </TouchableOpacity>
      </RadialGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  box: {
    width: '100%',
    height: 200,
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
});