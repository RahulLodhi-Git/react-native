/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PassGenerator = (): JSX.Element => {
  return (
    <View style={styleClass.main}>
      <Text style={styleClass.title}>Password Generator </Text>
      <View style={[styleClass.col, styleClass.bottomBorder]}>
        <Text style={styleClass.defaultText}>Password Length ?</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Ex 8"
          style={styleClass.input}
        />
      </View>
      <View style={[styleClass.checkBoxCol]}>
        <Text style={styleClass.defaultText}>
          Includes uppercase characters(A-Z) ?
        </Text>
        <View>
          <BouncyCheckbox
            size={30}
            fillColor="green"
            unFillColor="transparent"
            iconStyle={{borderWidth: 2}}
            innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            useBuiltInState={true}
          />
        </View>
      </View>
      <View style={[styleClass.checkBoxCol]}>
        <Text style={styleClass.defaultText}>
          Includes lowerCase characters(a-z) ?
        </Text>
        <View>
          <BouncyCheckbox
            size={30}
            fillColor="green"
            unFillColor="#FFFFFF"
            iconStyle={{borderWidth: 2}}
            innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            useBuiltInState={false}
          />
        </View>
      </View>
      <View style={[styleClass.checkBoxCol]}>
        <Text style={styleClass.defaultText}>
          Includes numeric characters(0-9) ?
        </Text>
        <View>
          <BouncyCheckbox
            size={30}
            fillColor="green"
            unFillColor="#FFFFFF"
            iconStyle={{borderWidth: 2}}
            innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            useBuiltInState={false}
          />
        </View>
      </View>
      <View style={[styleClass.checkBoxCol]}>
        <Text style={styleClass.defaultText}>
          Includes special characters(0-9) ?
        </Text>
        <View>
          <BouncyCheckbox
            size={30}
            fillColor="green"
            unFillColor="#FFFFFF"
            iconStyle={{borderWidth: 2}}
            innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            useBuiltInState={false}
          />
        </View>
      </View>
      <View style={styleClass.btnWrapper}>
        <TouchableOpacity style={styleClass.primaryBtn}>
          <Text style={styleClass.btnText}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleClass.secondaryBtn}>
          <Text style={styleClass.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassGenerator;

const styleClass = StyleSheet.create({
  main: {paddingHorizontal: 10},
  title: {
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 12,
    textAlign: 'center',
  },
  defaultText: {
    fontSize: 16,
  },
  bottomBorder: {
    borderBottomColor: '#e2dada',
    borderBottomWidth: 1,
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    alignItems: 'center',
    paddingBottom: 30,
  },
  checkBoxCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c7c3cc',
    borderStyle: 'solid',
    width: '30%',
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 3,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
    marginTop: 30,
  },
  primaryBtn: {
    backgroundColor: '#00272B',
    elevation: 7,
    shadowColor: '#abbceb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {fontSize: 18, fontWeight: '500', color: '#fff'},
  secondaryBtn: {
    backgroundColor: '#2A628F',
    elevation: 7,
    shadowColor: '#abbceb',
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
