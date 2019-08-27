import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors'

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>
        <Text style={shareButtonStyles.header}>FRONT</Text>
        <View style={shareButtonStyles.container}>
          <Text style={shareButtonStyles.text}>
            You have constitutional rights:
          </Text>
          <Text style={shareButtonStyles.text}>
            • DO NOT OPEN THE DOOR if an immigration agent is knocking on the door.
          </Text>
          <Text style={shareButtonStyles.text}>
            • DO NOT ANSWER ANY QUESTIONS from an immigration agent if they try to talk to you. You have the right to remain silent.
          </Text>
          <Text style={shareButtonStyles.text}>
            • DO NOT SIGN ANYTHING without first speaking to a lawyer. You have the right to speak with a lawyer.
          </Text>
          <Text style={shareButtonStyles.text}>
            • If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.
          </Text>
          <Text style={shareButtonStyles.text}>
            • DO NOT GIVE YOUR PHONE TO THE AGENT. If you are inside of your home or car, show your phone through the window. You may give a physical copy of this card to the agent.
          </Text>
        </View>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={shareButtonStyles.header}>BACK</Text>
        <View style={shareButtonStyles.container}>
          <Text style={shareButtonStyles.text}>
            I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.
          </Text>
          <Text style={shareButtonStyles.text}>
            I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.
          </Text>
          <Text style={shareButtonStyles.text}>
            I do not give you permission to search any of my belongings based on my 4th Amendment rights.
          </Text>
          <Text style={shareButtonStyles.text}>
            I choose to exercise my constitutional rights.
          </Text>
          <Text style={shareButtonStyles.text}>
            These cards are available to citizens and noncitizens alike
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
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
    padding: 2,
    fontSize: 22,
  },
  header: {
    color: Colors.primary,
    fontWeight: '700',
    padding: 2,
    fontSize: 14,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
