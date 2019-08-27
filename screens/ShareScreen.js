import React from 'react';

import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';

import { BasicTextStyles } from '../constants/Styles'
import Colors from '../constants/Colors'

export default function ShareScreen() {
  return (
    <ScrollView style={{ paddingTop: 30 }}>
      <Text style={BasicTextStyles.red}>
        Send this resource to those in need via SMS:
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={function () { sendSMS('Download the Digital Red Card app from here: https://redcardapp.herokuapp.com') }}
          style={shareButtonStyles.container}>
          <Text style={shareButtonStyles.text}>
            Send this app via SMS >
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () { sendSMS("View a digital version of the Immigrant Legal Resource Center's Red Card here: https://redcardapp.herokuapp.com/card") }}
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
