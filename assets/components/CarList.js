import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import cars from './carData/cars';
import CarItem from './CarItem';

export default CarList = (props) => {
    return(
        <View style={styles.carContainer}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem key={cars.id} car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
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