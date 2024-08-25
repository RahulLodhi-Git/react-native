/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, useColorScheme, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import HorizontalCards from './components/HorizontalCards';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode', isDarkMode);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <HorizontalCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
