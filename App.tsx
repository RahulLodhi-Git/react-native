/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, useColorScheme, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import HorizontalCards from './components/HorizontalCards';
import BlogCard from './components/BlogCard';
import PassGenerator from './components/PassGenerator';
import BackgroundColorGenerator from './components/BackgroundColorGenerator';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode', isDarkMode);
  return (
    // <SafeAreaView>
    //   <ScrollView keyboardShouldPersistTaps="handled">
    //     {/* <FlatCards />
    //     <HorizontalCards />
    //     <BlogCard />
    //     <PassGenerator />*/}
    //     {/* <BackgroundColorGenerator /> */}
    //   </ScrollView>
    // </SafeAreaView>
    <BackgroundColorGenerator />
  );
};

export default App;
