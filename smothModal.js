import React, { useRef } from 'react';
import { View, Modal, PanResponder, Animated, Text } from 'react-native';

const DraggableModal = ({ visible, onClose }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    }
  });

  return (
    <Modal visible={visible} transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10
          }}
          {...panResponder.panHandlers}
        >
          {/* Your modal content here */}
          <Text>Drag me!</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default DraggableModal;