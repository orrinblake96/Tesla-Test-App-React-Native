import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarList from './assets/components/CarList';
import Header from './assets/components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    carContainer: {
      width: '100%',
      height: '100%',
    },
    titles: {
      marginTop: '40%',
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
    subtitle: {
      fontSize: 15,
      color: '#5c5e62'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
  });