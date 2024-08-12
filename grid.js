import React, {useState, useEffect} from 'react';
import { Text, View, Image, FlatList, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import Svg, { Path} from 'react-native-svg';
import { vh, vw } from 'react-native-css-vh-vw';
const imageList = [
  { id: '1', source: require('./assets/images/image1.png') },
  { id: '2', source: require('./assets/images/image2.png') },
  { id: '3', source: require('./assets/images/image3.png') },
  { id: '4', source: require('./assets/images/image1.png') },
  { id: '5', source: require('./assets/images/image2.png') },
  { id: '6', source: require('./assets/images/image3.png') },
  { id: '7', source: require('./assets/images/image1.png') },
  { id: '8', source: require('./assets/images/image2.png') },
  { id: '9', source: require('./assets/images/image3.png') },
  { id: '10', source: require('./assets/images/image1.png') },
  { id: '11', source: require('./assets/images/image2.png') },
  { id: '12', source: require('./assets/images/image3.png') },
  { id: '13', source: require('./assets/images/image1.png') },
  { id: '14', source: require('./assets/images/image2.png') },
  { id: '15', source: require('./assets/images/image3.png') },
  // Add more image items as needed
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;

const Grid = () => { 
    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={handleModal}>
          <Image source={item.source} style={styles.image} />
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={imageList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
        <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{flexDirection: 'column', width: vw(100), top: vw(26), justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'black', height: '100%', borderRadius: vw(5) }}>
                    <View style={{width: vw(100), marginTop: vw(5), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        
                        <TouchableOpacity 
                            style = {styles.prevButton}
                            // onPress = {() => 
                            //     navigation.navigate('Email')
                            // }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox='0 0 7 12' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {[styles.maintitle, {fontFamily: 'TT Firs Neue Trial Medium'}]}>
                            Choose Photo
                        </Text>
                        <TouchableOpacity 
                            style = {styles.prevButton}
                            // onPress = {() => 
                            //     navigation.navigate('Email')
                            // }
                        >
                            <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 9H17M9 1V17M5.26667 1H12.7333C14.2268 1 14.9735 1 15.544 1.29065C16.0457 1.54631 16.4537 1.95426 16.7094 2.45603C17 3.02646 17 3.77319 17 5.26667V12.7333C17 14.2268 17 14.9735 16.7094 15.544C16.4537 16.0457 16.0457 16.4537 15.544 16.7094C14.9735 17 14.2268 17 12.7333 17H5.26667C3.77319 17 3.02646 17 2.45603 16.7094C1.95426 16.4537 1.54631 16.0457 1.29065 15.544C1 14.9735 1 14.2268 1 12.7333V5.26667C1 3.77319 1 3.02646 1.29065 2.45603C1.54631 1.95426 1.95426 1.54631 2.45603 1.29065C3.02646 1 3.77319 1 5.26667 1Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>

                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={styles.flatList}
                        data={imageList}
                        renderItem={({ item }) => (
                        <Image source={item.source} style={styles.modalImage} />
                        )}
                        keyExtractor={item => item.id}
                        
                        numColumns={numColumns}
                    />
                </View>
            </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    },
    image: {
      width: 100,
      height: 100,
      margin: 5,
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(20, 20, 20, 1)',
    },
    modalImage: {
      width: vw(30),
      height: vw(30),
      margin: vw(1),
    },
    prevButton: {
        width: vw(9),
        aspectRatio: 1/1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        marginLeft: vw(2)
    }
  });
export default Grid;
