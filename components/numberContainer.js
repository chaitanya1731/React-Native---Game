import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Colors from '../constants/colors';


const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 24,
        color:Colors.accent
    }
})