import React from 'react';
import { Text, View } from 'react-native';

export default class RegisterScreen extends React.Component {

    state = {
        entre : true,
    }

  render() {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

}