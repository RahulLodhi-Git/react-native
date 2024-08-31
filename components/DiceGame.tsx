/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  ImageBackgroundProps,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import diceOne from '../assets/One.png';
import diceTwo from '../assets/Two.png';
import diceThree from '../assets/Three.png';
import diceFour from '../assets/Four.png';
import diceFive from '../assets/Five.png';
import diceSix from '../assets/Six.png';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

const DiceGame = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [leftDice, setLeftDice] = useState<ImageBackgroundProps>(diceOne);
  const [rightDice, setRightDice] = useState<ImageBackgroundProps>(diceOne);
  const [LeftTotal, setLeftTotal] = useState<number>(0);
  const [RightTotal, setRightTotal] = useState<number>(0);
  const [playerTurn, setPlayerTurn] = useState<string>('left');
  const [isGameOver, setIsGameOver] = useState<number>(0);
  const [winner, setWinner] = useState<number>(50);

  let diceNumber = {
    1: diceOne,
    2: diceTwo,
    3: diceThree,
    4: diceFour,
    5: diceFive,
    6: diceSix,
  };

  const handleStartAndRestart = () => {
    setLeftDice(diceOne);
    setLeftTotal(0);
    setRightDice(diceOne);
    setRightTotal(0);
    setWinner(50);
    setIsStart(true);
    setIsGameOver(0);
  };

  const generateRandomNumber = () => {
    let index = Math.floor(Math.random() * 6) + 1;
    return index;
  };

  const shuffleDice = () => {
    let leftDiceNumber = generateRandomNumber();
    let rightDiceNumber = generateRandomNumber();

    setRightDice(diceNumber[rightDiceNumber]);
    setLeftDice(diceNumber[leftDiceNumber]);
    if (playerTurn === 'left') {
      setLeftTotal(prevState => prevState + leftDiceNumber + rightDiceNumber);
      setPlayerTurn('right');
    } else {
      setRightTotal(prevState => prevState + leftDiceNumber + rightDiceNumber);
      setPlayerTurn('left');
    }
    setIsGameOver(prevState => prevState + 1);

    // Trigger haptic feedback
    RNReactNativeHapticFeedback.trigger('impactLight');
  };

  useEffect(() => {
    if (LeftTotal > RightTotal) {
      setWinner(50 + 10 * isGameOver);
    }
    if (LeftTotal < RightTotal) {
      setWinner(50 - 10 * isGameOver);
    }
  }, [LeftTotal, RightTotal]);

  return (
    <>
      <View style={styleClass.mainWrap}>
        <View style={[styleClass.overlay, {width: `${winner}%`}]} />
        <Pressable onPress={handleStartAndRestart}>
          <Text style={styleClass.btn}>{isStart ? 'Restart' : 'Let Play'}</Text>
        </Pressable>

        <View style={styleClass.diceMainWrap}>
          <Image source={leftDice} style={styleClass.diceImage} />
          <Image source={rightDice} style={styleClass.diceImage} />
        </View>

        <TouchableOpacity
          onPress={shuffleDice}
          activeOpacity={0.8}
          disabled={!isStart}>
          {isGameOver === 5 ? (
            <Text style={[styleClass.btn, styleClass.isDisable]}>
              Game Over
              {LeftTotal > RightTotal
                ? '(Purple Wins)💥😜'
                : '(Green Wins)😜💥'}
            </Text>
          ) : (
            <Text style={[styleClass.btn, !isStart && styleClass.isDisable]}>
              Roll me{' '}
              {isStart && (playerTurn === 'left' ? '(Purple)' : '(Green)')}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={styleClass.title}>
        {LeftTotal} Dice Game {RightTotal}
      </Text>
    </>
  );
};

export default DiceGame;

const styleClass = StyleSheet.create({
  isDisable: {opacity: 0.8, backgroundColor: '#959b9a'},
  mainWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bcf2e6',
    flex: 1,
    zIndex: 1,
  },
  overlay: {
    backgroundColor: '#e0d8fe',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    paddingVertical: 20,
  },
  diceMainWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 80,
    width: '100%',
  },
  diceBtn: {},
  btn: {
    backgroundColor: '#31b09b',
    elevation: 7,
    shadowColor: '#abbceb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'flex-start',
    maxWidth: 200,
    zIndex: 3,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    minWidth: 120,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color: '#00272B',
    fontWeight: '600',
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    top: 20,
    textAlign: 'center',
  },
  diceImage: {
    width: 150,
    height: 150,
    aspectRatio: 1,
  },
});
