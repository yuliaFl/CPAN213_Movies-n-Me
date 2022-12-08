import React, { useState } from 'react';
import { View, StyleSheet,Text, TextInput, Button} from 'react-native';

import {
  Checkbox,
  NativeBaseProvider,
} from 'native-base';

const Main = () => {
  const [state, setState] = useState({
    email: '',
    error: '',
    password: '',
  });
  const inputValidator = () => {
    if (state.email == '') {
      setState({ ...state, error: 'Email Cannot be empty' });
    }else {
      setState({ ...state, error: '' });
    }
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        
          <Text style={styles.title}>
            Login Form
          </Text>
          <Text style={styles.error}>{state.error}</Text>
          <TextInput
          style={styles.input_container}
            placeholder="Email"
            onChangeText={(text) => {
              setState({ email: text });
              
            }}
            onBlur={() => inputValidator()}
           
            variant="rounded"
            marginX={10}
            marginY={5}
          />
          <TextInput 
          style={styles.input_container}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              setState({ password: text });
            }}
            variant="rounded"
            marginX={10}
          />
          <Button
           title="Login"
            onPress={() => {console.log('You pressed!');}}
             
            >
            Login
          </Button>
     
        <View>
          <Checkbox>
            <Text fontSize="md" style={{ color: 'black' }}>
              Remember Password? 
            </Text>
          </Checkbox>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Main;

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
    margin: 25,
  },
  
  container: {
    alignItems: 'center',
    margin: 12,
    padding: 10,
  
  },
  input_container: {
    borderRadius: 50,
    margin: 6,
    shadowRadius: 9,
    padding: 10,
    color: 'blue',
  },

  error: {
    color: 'red',
  },
});
