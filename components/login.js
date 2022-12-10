import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Checkbox, NativeBaseProvider } from 'native-base';

function LogingForm() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    email: '',
    error: '',
    password: '',
  });
  const inputValidator = () => {
    if (state.email == '') {
      setState({ ...state, error: 'Email field Cannot be empty' });
    } else {
      setState({ ...state, error: '' });
    }
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Login Form</Text>
        <Text style={styles.error}>{state.error}</Text>
        <TextInput
          style={styles.input_container}
          placeholder="Email Address"
          onChangeText={(text) => {
            setState({ email: text });
          }}
          onBlur={() => inputValidator()}
          variant="rounded"
          marginX={10}
          marginY={5}
        />
        <Text style={styles.error}>{state.error1}</Text>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}>
          <View style={styles.container1}>
            <View style={styles.modalView}>
                            
              <Text style={styles.modalText}>
                Are you sure you want to log in?
              </Text>
              <View>{/* Do something once the user clicks Yes like ---> onPress={() =>
                navigation.navigate('Home', setShowModal(!showModal)*/}
              <Button title="Yes" onPress={() => setShowModal(!showModal)} />
              </View> 
              <Button title="No" onPress={() => setShowModal(!showModal)} />   
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

        <View>
          <br />
          <Checkbox>
            <Text fontSize="md" style={{ color: 'black' }}>
              Remember Password?
            </Text>
          </Checkbox>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

export default LogingForm;

const styles = StyleSheet.create({
  title: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
    margin: 25,
  },

  container: {
    alignItems: 'center',
    margin: 12,
    padding: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input_container: {
    borderRadius: 10,
    margin: 8,
    shadowRadius: 2,
    padding: 14,
    color: 'blue',
  },

  error: {
    color: 'red',
  },
  button: {
    backgroundColor: '#E63169',
    display: 'flex',
    height: 60,
    borderRadius: 100,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    shadowColor: 'hotpink',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  modalText: {
    margin: 15,
    fontWeight: 'bold',
  },

  modalView: {
    width: '65%',
    // height: 'auto',
    // margin: 15,
    // borderColor: 'black',
    borderWidth: 1.2,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
