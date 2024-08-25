/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const deviceWith = Dimensions.get('window').width;
console.log('deviceWith', deviceWith);
const BlogCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <ScrollView>
        <View style={styles.card}>
          <Image
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
          <Text style={styles.title}>
            Lets Make Blog Card In This Tutorials 1
          </Text>
          <Text style={styles.date}>24/Aug/2024</Text>
          <Text style={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            esse minima eos in ab commodi ipsa! Eligendi, in unde quo accusamus
            exercitationem maiores, neque vitae repellendus fugit dolorum,
            cumque illum.
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  image: {
    width: deviceWith - 16,
    height: 250,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    objectFit: 'cover',
  },
  headingText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
    padding: 10,
  },
  container: {
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#ececfa',
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    paddingHorizontal: 12,
    paddingTop: 10,
    fontWeight: '600',
    color: '#242323',
  },
  date: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  desc: {
    fontSize: 17,
    paddingHorizontal: 12,
  },
  readMore: {
    fontWeight: '600',
    paddingHorizontal: 12,
    marginVertical: 15,
    fontSize: 20,
    color: '#9354ce',
  },
});
