import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/numberContainer';
import Card from '../components/card';



const GameOverScreen = props => {
    
    const newGameHandler = () => {
        props.onNewGame();
    }

    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Number of Rounds Taken: </Text>
            <NumberContainer>{props.roundsNumber}</NumberContainer>
            <Text>Number was:</Text>
            <NumberContainer> {props.userNumber}</NumberContainer>

            <View style={styles.button}>
                <Button title="New Game" onPress={newGameHandler} />
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        width: 100
    },
});