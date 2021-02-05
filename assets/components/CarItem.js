import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
    return (
    <View style={styles.container}>
      <ImageBackground 
          source={require('../images/ModelX.jpeg')}
          style={styles.image}
      />
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at {props.price}</Text>
        </View>
      </View>
    </View>
    )
}

export default CarItem;