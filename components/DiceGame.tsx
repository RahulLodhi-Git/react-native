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
import React, {useState} from 'react';
import diceOne from '../assets/One.png';
import diceTwo from '../assets/Two.png';
import diceThree from '../assets/Three.png';
import diceFour from '../assets/Four.png';
import diceFive from '../assets/Five.png';
import diceSix from '../assets/Six.png';

const DiceGame = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [leftDice, setLeftDice] = useState<ImageBackgroundProps>(diceOne);
  const [rightDice, setRightDice] = useState<ImageBackgroundProps>(diceOne);
  const [LeftTotal, setLeftTotal] = useState<number>(0);
  const [RightTotal, setRightTotal] = useState<number>(0);
  const [playerTurn, setPlayerTurn] = useState<string>('Left');
  const [isGameOver, setIsGameOver] = useState<number>(0);

  let diceNumber = {
    1: diceOne,
    2: diceTwo,
    3: diceThree,
    4: diceFour,
    5: diceFive,
    6: diceSix,
  };

  const handleStartAndRestart = () => {
    if (!isStart) {
      setLeftDice(diceOne);
      setLeftTotal(0);
      setRightDice(diceOne);
      setRightTotal(0);
    }
    setIsStart(!isStart);
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
      setLeftTotal(prevState => prevState + leftDiceNumber);
      setLeftTotal(prevState => prevState + rightDiceNumber);
      setPlayerTurn('right');
    } else {
      setRightTotal(prevState => prevState + leftDiceNumber);
      setRightTotal(prevState => prevState + rightDiceNumber);
      setPlayerTurn('left');
    }
    setIsGameOver(prevState => prevState + 1);
    if (isGameOver + 1 === 5) {
      setIsStart(false);
    }
  };

  return (
    <>
      <View style={styleClass.mainWrap}>
        <View style={styleClass.overlay} />
        <Pressable onPress={handleStartAndRestart}>
          {isGameOver >= 5 ? (
            <Text style={styleClass.btn}>Restart</Text>
          ) : (
            <Text style={styleClass.btn}>{isStart ? 'Stop' : 'Let Play'}</Text>
          )}
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
    paddingHorizontal: 15,
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
