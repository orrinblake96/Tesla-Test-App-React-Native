import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './assets/components/CarItem';


export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        tagline={"Order online for "}
        taglineCTA={"Touchless Delivery"}
        name={"Model X"}
        image={require('./assets/images/ModelX.jpeg')}
      />
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