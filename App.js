import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import CarItem from './assets/components/CarItem';
import styles from './assets/components/styles';


export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        price={"€70,000"}
      />
      <StatusBar style="auto" />
    </View>
  );
}
