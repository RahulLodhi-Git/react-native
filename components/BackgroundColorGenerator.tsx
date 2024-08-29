/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const BackgroundColorGenerator = (): JSX.Element => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [bgColorForCircles, setBgColorForCircles] = useState([
    '#6A89CC',
    '#52d49e',
    '#5596e1',
    '#eedb6b',
    '#6A89CC',
    '#52d49e',
    '#b255e1',
    '#eedb6b',
    '#df5c5c',
    '#55e1b2',
  ]);

  const generateBgColor = (): string => {
    let hexColorRangeChars = '0123456789ABCDEF';
    let color = '#';

    for (let i = 1; i <= 6; i++) {
      let charIndex = Math.round(Math.random() * hexColorRangeChars.length);
      color += hexColorRangeChars.charAt(charIndex);
    }
    console.log('generateBgColor-->', color);
    return color;
  };

  const handleBgChange = () => {
    setBgColor(generateBgColor());
    let colorsArray = [];
    for (let i = 1; i <= 10; i++) {
      colorsArray.push(generateBgColor());
    }
    setBgColorForCircles(colorsArray);
  };

  return (
    <>
      <StatusBar backgroundColor={'blue'} />
      <View style={[styleClass.mainWrapper, {backgroundColor: bgColor}]}>
        <TouchableOpacity
          style={styleClass.bnt}
          onPress={() => handleBgChange()}>
          <Text style={styleClass.btnText}>Press Me 🤗😘</Text>
        </TouchableOpacity>
        <View
          style={[
            styleClass.circle2,
            {backgroundColor: bgColorForCircles[0]},
          ]}></View>
        <View
          style={[
            styleClass.circle1,
            {backgroundColor: bgColorForCircles[1]},
          ]}></View>
        <View
          style={[
            styleClass.circle3,
            {backgroundColor: bgColorForCircles[2]},
          ]}></View>
        <View
          style={[
            styleClass.circle4,
            {backgroundColor: bgColorForCircles[3]},
          ]}></View>
        <View
          style={[
            styleClass.circle5,
            {backgroundColor: bgColorForCircles[4]},
          ]}></View>
        <View
          style={[
            styleClass.circle6,
            {backgroundColor: bgColorForCircles[5]},
          ]}></View>
        <View
          style={[
            styleClass.circle7,
            {backgroundColor: bgColorForCircles[6]},
          ]}></View>
        <View
          style={[
            styleClass.circle8,
            {backgroundColor: bgColorForCircles[7]},
          ]}></View>
        <View
          style={[
            styleClass.circle9,
            {backgroundColor: bgColorForCircles[8]},
          ]}></View>
        <View
          style={[
            styleClass.circle10,
            {backgroundColor: bgColorForCircles[9]},
          ]}></View>
      </View>
    </>
  );
};

export default BackgroundColorGenerator;

const styleClass = StyleSheet.create({
  mainWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  circle1: {
    width: 250,
    height: 250,
    backgroundColor: '#6A89CC',
    borderRadius: 250 / 2,
    position: 'absolute',
    zIndex: 0,
    elevation: 5,
  },
  circle2: {
    width: 350,
    height: 350,
    backgroundColor: '#6A89CC',
    borderRadius: 350 / 2,
    position: 'absolute',
    left: -100,
    bottom: -150,
    elevation: 5,
  },
  circle3: {
    width: 150,
    height: 150,
    backgroundColor: '#52d49e',
    borderRadius: 150 / 2,
    position: 'absolute',
    right: 10,
    bottom: '7%',
    elevation: 5,
  },
  circle4: {
    width: 50,
    height: 50,
    backgroundColor: '#52d49e',
    borderRadius: 50 / 2,
    position: 'absolute',
    right: '50%',
    bottom: '25%',
    elevation: 5,
  },
  circle5: {
    width: 200,
    height: 200,
    backgroundColor: '#52d49e',
    borderRadius: 200 / 2,
    position: 'absolute',
    right: '52%',
    top: '-2%',
    elevation: 5,
  },
  circle6: {
    width: 80,
    height: 80,
    backgroundColor: '#52d49e',
    borderRadius: 80 / 2,
    position: 'absolute',
    left: '52%',
    top: '-2%',
    elevation: 5,
  },
  circle7: {
    width: 300,
    height: 300,
    backgroundColor: '#eedb6b',
    borderRadius: 350 / 2,
    position: 'absolute',
    right: -100,
    top: 30,
    elevation: 5,
  },
  circle8: {
    width: 80,
    height: 80,
    backgroundColor: '#52d49e',
    borderRadius: 80 / 2,
    position: 'absolute',
    left: '1%',
    top: '60%',
    elevation: 5,
  },
  circle9: {
    width: 200,
    height: 200,
    backgroundColor: '#b255e1',
    borderRadius: 200 / 2,
    position: 'absolute',
    left: -100,
    top: '25%',
    elevation: 5,
  },
  circle10: {
    width: 200,
    height: 200,
    backgroundColor: '#b255e1',
    borderRadius: 200 / 2,
    position: 'absolute',
    right: -100,
    top: '50%',
    elevation: 5,
  },
  bnt: {
    backgroundColor: '#00272B',
    elevation: 7,
    shadowColor: '#abbceb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    maxWidth: 200,
    zIndex: 3,
  },
  btnText: {fontSize: 18, fontWeight: '500', color: '#fff'},
});
