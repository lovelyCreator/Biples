import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Modal, StyleSheet, ScrollView } from 'react-native';

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleScroll = (event) => {
    buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
      setButtonPosition({ x: pageX, y: pageY });
      console.log(x, y)
    });
  };

  useEffect(() => {
    setButtonPosition({ x: 0, y: 0 });
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll}>
        <Button
          ref={buttonRef}
          title="Open Modal"
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, { top: buttonPosition.y, left: buttonPosition.x }]}>
          <View style={styles.modalView}>
            <Text>This is the modal content</Text>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '130%'
  },
  centeredView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modals;