import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/startsGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess-a-Number"></Header>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
