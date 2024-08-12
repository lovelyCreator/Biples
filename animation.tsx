import React, { useState, useRef } from 'react';
import { View, PanResponder, Animated } from 'react-native';

const Item = () => {
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.pan.x,
            dy: this.state.pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        // handle release logic here
      },
    })
  );
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [itemWidth, setItemWidth] = useState(200);
  const [itemHeight, setItemHeight] = useState(100);

  const handleRelease = () => {
    // handle release logic here
  };

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setItemWidth(width);
    setItemHeight(height);
  };

  const handleDrag = (gestureState) => {
    const { dx } = gestureState;
    const newWidth = itemWidth - dx;
    const newHeight = itemHeight + dx;
    setItemWidth(newWidth);
    setItemHeight(newHeight);
    setAnimation(new Animated.Value(dx));
  };

  const animatedStyle = {
    transform: [{ translateX: animation }],
  };

  return (
    <View
      style={{ width: itemWidth, height: itemHeight }}
      onLayout={handleLayout}
      {...panResponder.panHandlers}
    >
      <Animated.View style={[{ backgroundColor: 'red' }, animatedStyle]} />
    </View>
  );
};

export default Item;