// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      <MemoDetailScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:60
  },
});
