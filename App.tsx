/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, useColorScheme, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode', isDarkMode);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
