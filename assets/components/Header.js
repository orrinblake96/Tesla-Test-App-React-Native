import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

export default Header = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../images/logo.png")} />
            <Image style={styles.menu} source={require("../images/menu.png")} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})
