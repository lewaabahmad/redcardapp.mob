import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { BasicTextStyles } from '../constants/Styles'

export default function AboutScreen() {
  return (
    <View style={{ padding: 30 }}>
      <Text style={BasicTextStyles.red}>
        All people in the United States, regardless of immigration status, have certain rights and protections under the U.S. Constitution. The Immigrant Legal Resource Center’s Red Cards help people assert their rights and defend themselves in many situations, such as when ICE agents go to a home.
      </Text>
      <Text style={BasicTextStyles.red}>
        This app allows you to read and share these rights. It is a digitally distributable version of the Red Card.
      </Text>
      <TouchableOpacity
        onPress={handleLearnMorePress}
      >
        <Text style={BasicTextStyles.redLink}>
          If you wish to learn more, want to contribute with development, or see a list of oppurtunities for you to help, please click here.
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'http://redcardapp.herokuapp.com/about'
  );
}

AboutScreen.navigationOptions = {
  title: 'About',
};
