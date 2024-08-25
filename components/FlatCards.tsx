/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FlatCards(): JSX.Element {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.flexitem, styles.flexItem1]}>
        <Text style={styles.text}>A</Text>
      </View>
      <View style={[styles.flexitem, styles.flexItem2]}>
        <Text style={styles.text}>B</Text>
      </View>
      <View style={[styles.flexitem, styles.flexItem3]}>
        <Text style={styles.text}>C</Text>
      </View>
    </View>
  );
}

export default FlatCards;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    fontSize: 30,
  },
  flexitem: {
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem1: {
    backgroundColor: 'red',
  },
  flexItem2: {
    backgroundColor: 'blue',
    marginHorizontal: '5%',
  },
  flexItem3: {
    backgroundColor: '#0d041a',
    width: '30%',
  },
  text: {
    color: '#fff',
    fontSize: 50,
  },
});
