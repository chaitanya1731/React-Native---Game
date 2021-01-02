import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/numberContainer';
import Card from '../components/card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return randomNum;
    }

}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === props.userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if( (direction === 'Lower' && currentGuess < props.userChoice) || 
        (direction === 'Higher' && currentGuess > props.userChoice)){
            Alert.alert("Don\'t Lie", "You know that this is wrong...", 
            [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        
        if(direction === 'Lower') {
            currentHigh.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    };


    return (
        <View style={styles.screen}>
            <Text>Opponents Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Lower" onPress={nextGuessHandler.bind(this, 'Lower')}/>
                </View>
                <View style={styles.button}>
                    <Button title="Higher" onPress={nextGuessHandler.bind(this, 'Higher')}/>
                </View>
            </Card>
        </View>

    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-around',
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: 100
    },
});