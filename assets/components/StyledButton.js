import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default StyledButton = (props) => {
    
    const { type, content } = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => {
                    console.warn(content, ": Button Pressed")
                }}
            >
            <Text style={[styles.text, {color: textColor}]} > { content } </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '900',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
})