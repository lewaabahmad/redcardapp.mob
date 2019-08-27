import Colors from './Colors'
import { StyleSheet } from 'react-native';

export const BasicTextStyles = StyleSheet.create({
  red: {
    color: Colors.primary,
    padding: 2,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 15,
  }
});