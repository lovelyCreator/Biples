import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { ListItem } from 'react-native-elements';

const MySwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Switch Example</ListItem.Title>
        </ListItem.Content>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ListItem>
    </View>
  );
};

export default MySwitch;