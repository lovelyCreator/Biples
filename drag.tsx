import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';

const ProgressBar = () => {
  const segments = [
    {
      filledColor: '#FF746E',
      emptyColor: '#F2F3F5',
    }
  ];

  return (
    <View style={styles.container}>
      {/* <SegmentedArc
        segments={segments}
        fillValue={70}
        isAnimated={true}
        animationDelay={1000}
        showIndicator={false}
        customStyles={{
          progress: {
            width: 30, // Set the desired width of the progress bar here
          },
        }}
      /> */}
      
      <View style={styles.progressContainer}>
        <SegmentedArc
          segments={segments}
          fillValue={70}
          isAnimated={true}
          animationDelay={1000}
          filledArcWidth = {30}
          capInnerColor = {'transparent'}
          capOuterColor = {'transparent'}
          showArcRanges = {true}
          ranges = {['#508']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    marginTop: '100%',
    width: 250, // Set the desired width of the progress bar here
    aspectRatio: 1, // Maintain aspect ratio for a circular progress bar
  },
});

export default ProgressBar;