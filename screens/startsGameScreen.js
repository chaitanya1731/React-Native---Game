import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/card';
import Colors from '../constants/colors';
import Input from '../components/input';
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }


    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={() => { }} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress={() => { }} color={Colors.primary} /></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})