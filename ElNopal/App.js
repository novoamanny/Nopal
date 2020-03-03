import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ElNopalNavigator from './navigation/ElNopalNavigator';

export default function App() {
  return (
    <ElNopalNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
