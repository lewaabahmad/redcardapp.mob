import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
// return <ExpoConfigView />;
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View>
      <Text>
        All people in the United States, regardless of immigration status, have certain rights and protections under the U.S. Constitution. The ILRC’s Red Cards help people assert their rights and defend themselves in many situations, such as when ICE agents go to a home.
      </Text>
      <Text>
        This application allows you to read, play aloud, and share these rights. Please share the rights and this application with anyone who could benefit from it!
      </Text>
    </View>
  )
}

AboutScreen.navigationOptions = {
  title: false,
};
