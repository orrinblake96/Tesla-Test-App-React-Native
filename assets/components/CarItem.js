import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import StyledButton from './StyledButton';

export default CarItem = (props) => {
  const { tagline, taglineCTA, name, image } = props;

  return (
  <View style={styles.carContainer}>

    <ImageBackground 
        source={image}
        style={styles.image}
    />

    <View style={styles.carContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.subtitle}>
          {tagline} 
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>
    </View>

    <View style={styles.buttonsContainer}>
      <StyledButton 
        type="primary"
        content="Custom Order"
      />
      <StyledButton 
        type="secondary"
        content="Exisiting Inventory"
      />
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
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
    subtitleCTA: {
      textDecorationLine: 'underline',
      fontWeight: '700',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    },
  });