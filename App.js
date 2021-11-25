import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { One } from './assets/Components/One';

export default function App() {
  return (
    <View style={styles.container}>
      <One/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // // alignItems: 'center',
    // // justifyContent: 'center',
  },
});
