import React from 'react';

import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';

import Colors from '../constants/Colors'

export default function ShareScreen() {
  return (
    <ScrollView>
      <Text>Send this resource to those in need via SMS:</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={function () { sendSMS('Hello!') }}
          style={shareButtonStyles.container}>
          <Text style={shareButtonStyles.text}>
            Send this app via SMS >
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () { sendSMS('yes!') }}
          style={shareButtonStyles.container}>
          <Text style={shareButtonStyles.text}>
            Send the Red Card via SMS >
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

async function sendSMS(message) {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    await SMS.sendSMSAsync([], message)
  } else {
    console.log('damn')
  }
}

ShareScreen.navigationOptions = {
  title: 'Share',
};

const shareButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 25,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
