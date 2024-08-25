/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, useColorScheme, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import HorizontalCards from './components/HorizontalCards';
import BlogCard from './components/BlogCard';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode', isDarkMode);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <HorizontalCards />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
