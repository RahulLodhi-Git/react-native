/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

function App() {
  const [greeting, setGreeting] = useState('Hello');
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40, textAlign: 'center'}}>
          {greeting} Hi! I'M React Native
        </Text>
        <Button
          title={`Press me and Say Bye`}
          onPress={() => {
            setGreeting('Bye');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
