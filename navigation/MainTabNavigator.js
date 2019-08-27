import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShareScreen from '../screens/ShareScreen';
import AboutScreen from '../screens/AboutScreen';

import Colors from '../constants/Colors'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: <Text style={{ color: Colors.primary }}>Play</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-clipboard'
          : 'md-clipboard'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: ShareScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: <Text style={{ color: Colors.primary }}>Share</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: AboutScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: <Text style={{ color: Colors.primary }}>About</Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
