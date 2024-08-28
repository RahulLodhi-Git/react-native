/* eslint-disable @typescript-eslint/no-unused-vars */
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(5, 'should be min of 5 character')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

const PassGenerator = (): JSX.Element => {
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumericCase, setUseNumericCase] = useState(false);
  const [useSymbolsCase, setUseSymbolsCase] = useState(false);
  const [password, setPassword] = useState('');
  const handleResetPasswordStates = () => {
    setUseUpperCase(true);
    setUseLowerCase(false);
    setUseNumericCase(false);
    setUseSymbolsCase(false);
    setPassword('');
  };
  const createPassword = (characterLength: number, charList: string) => {
    let result = '';
    for (let i = 1; i <= characterLength; i++) {
      let characterIndex = Math.round(Math.random() * charList.length);
      result += charList.charAt(characterIndex);
    }
    return result;
  };
  const handleGeneratePassword = (characterLength: number) => {
    let charList = '';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let numeric = '0123456789';
    let symbol = '!@#$%^&*()';
    if (useUpperCase) {
      charList += upperCase;
    }
    if (useLowerCase) {
      charList += LowerCase;
    }
    if (useNumericCase) {
      charList += numeric;
    }
    if (useSymbolsCase) {
      charList += symbol;
    }
    let generatedPass = createPassword(characterLength, charList);
    setPassword(generatedPass);
  };
  return (
    <View style={styleClass.main}>
      <Text style={styleClass.title}>Password Generator </Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, a) => {
          handleGeneratePassword(parseInt(values.passwordLength));
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
          handleReset,
          /* and other goodies */
        }) => (
          <>
            <View style={[styleClass.col, styleClass.bottomBorder]}>
              <View>
                <Text style={styleClass.defaultText}>Password Length ?</Text>
                {touched && errors.passwordLength && (
                  <Text style={styleClass.erroText}>
                    {errors.passwordLength}
                  </Text>
                )}
              </View>

              <TextInput
                keyboardType="numeric"
                placeholder="Ex 8"
                style={[
                  styleClass.input,
                  touched && errors.passwordLength && styleClass.error,
                ]}
                onChangeText={handleChange('passwordLength')}
                value={values.passwordLength}
              />
            </View>

            <View style={[styleClass.checkBoxCol]}>
              <Text style={styleClass.defaultText}>
                Includes uppercase characters(A-Z) ?
              </Text>
              <View>
                <BouncyCheckbox
                  isChecked={useUpperCase}
                  size={30}
                  fillColor="green"
                  unFillColor="transparent"
                  iconStyle={{borderWidth: 2}}
                  innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
                  onPress={() => {
                    setUseUpperCase(!useUpperCase);
                  }}
                  useBuiltInState={false}
                />
              </View>
            </View>
            <View style={[styleClass.checkBoxCol]}>
              <Text style={styleClass.defaultText}>
                Includes lowerCase characters(a-z) ?
              </Text>
              <View>
                <BouncyCheckbox
                  isChecked={useLowerCase}
                  size={30}
                  fillColor="green"
                  unFillColor="#FFFFFF"
                  iconStyle={{borderWidth: 2}}
                  innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
                  onPress={() => {
                    setUseLowerCase(!useLowerCase);
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
                  isChecked={useNumericCase}
                  size={30}
                  fillColor="green"
                  unFillColor="#FFFFFF"
                  iconStyle={{borderWidth: 2}}
                  innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
                  onPress={() => {
                    setUseNumericCase(!useNumericCase);
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
                  isChecked={useSymbolsCase}
                  size={30}
                  fillColor="green"
                  unFillColor="#FFFFFF"
                  iconStyle={{borderWidth: 2}}
                  innerIconStyle={{borderWidth: 2, borderColor: '#e1dae9'}}
                  onPress={() => setUseSymbolsCase(!useSymbolsCase)}
                  useBuiltInState={false}
                />
              </View>
            </View>
            <View style={styleClass.btnWrapper}>
              <TouchableOpacity
                style={[styleClass.primaryBtn, !isValid && styleClass.disabled]}
                onPress={() => handleSubmit()}>
                <Text style={styleClass.btnText}>Generate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleReset();
                  handleResetPasswordStates();
                }}
                style={[styleClass.secondaryBtn]}>
                <Text style={styleClass.btnText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>

      {password && (
        <View style={styleClass.resultWrapper}>
          <Text style={styleClass.resultTitle}>Your Password 🙂 </Text>
          <Text selectable style={styleClass.result}>
            {password}
          </Text>
          <Text>Long press for copy</Text>
        </View>
      )}
    </View>
  );
};

export default PassGenerator;

const styleClass = StyleSheet.create({
  resultWrapper: {
    marginHorizontal: 20,
    elevation: 6,
    shadowColor: '#abbceb',
    borderWidth: 1,
    borderColor: '#e0e2e5',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 40,
    alignItems: 'center',
    rowGap: 10,
  },
  resultTitle: {
    fontSize: 16,
  },
  result: {
    fontSize: 23,
    fontWeight: '600',
    color: '#0a0a0a',
  },
  main: {paddingHorizontal: 10},
  title: {
    fontSize: 23,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 25,
    textAlign: 'center',
    color: '#00272B',
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
  error: {
    borderColor: 'red',
  },
  erroText: {
    width: '100%',
    color: 'red',
    marginTop: 5,
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
  disabled: {
    opacity: 0.5,
  },
});
