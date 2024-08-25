import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function HorizontalCards(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.cardWrapper}>
        <View style={styles.card}>
          <Text style={styles.cartText}>we</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cartText}>are</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cartText}>horizontal</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cartText}>scroll</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cartText}>cards</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cartText}>🤗</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HorizontalCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
  },
  container: {
    padding: 10,
  },
  cardWrapper: {
    paddingVertical: 10,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#a855f7',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
    shadowColor: '#2e1065',
    marginHorizontal: 5,
  },
  cartText: {
    color: '#fff',
    fontSize: 18,
  },
});
