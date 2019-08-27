import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
// return <ExpoConfigView />;
import { View, Text, StyleSheet } from 'react-native';

import { BasicTextStyles } from '../constants/Styles'

export default function AboutScreen() {
  return (
    <View style={{ padding: 30 }}>
      <Text style={BasicTextStyles.red}>
        All people in the United States, regardless of immigration status, have certain rights and protections under the U.S. Constitution. The ILRC’s Red Cards help people assert their rights and defend themselves in many situations, such as when ICE agents go to a home.
      </Text>
      <Text style={BasicTextStyles.red}>
        This app allows you to read and share these rights. It is a digitally distributable version of the Red Card.
      </Text>
      <TouchableOpacity
        onPress={function () { sendSMS('Hello!') }}
      >
        <Text style={BasicTextStyles.red}>
          If you wish to know more, want to contribute with development, or see a list of oppurtunities for you to help, please click here.
        </Text>
      </TouchableOpacity>
    </View>
  )
}

AboutScreen.navigationOptions = {
  title: 'About',
};
