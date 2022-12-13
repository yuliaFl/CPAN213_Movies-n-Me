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

function Seperator() {
  return <View style={styles.seperator}></View>;
}

export default function Login({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [state, setState] = useState({
    email: '',
    emailError: '',
    passwordError: '',
    checkBoxErr: '',
    password: '',
  });

  function nav(){
    setShowModal(!showModal)
    navigation.navigate('Home')
   }
  const inputValidator = () => {
    if (state.email == '') {
      setState({ emailError: 'Email Cannot be empty' });
    } else {
      setState({ emailError: '' });
    }
  };
  const validPassoword = () => {
    if (state.password > 9) {
      setState({ passwordError: 'Password must be 8 character max' });
    } else if (state.password == '') {
      setState({ passwordError: 'Password cannot be empty' });
    } else {
      setState({ passwordError: '' });
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.Screen}>
        <Text style={styles.title}>Login Form</Text>
        <Text style={styles.error}>{state.emailError}</Text>
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
        <Text style={styles.error}>{state.passwordError}</Text>
        <TextInput
          style={styles.input_container}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setState({ password: text });
          }}
          onBlur={() => validPassoword()}
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
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to log in?
              </Text>
              <View style={styles.modalBtnRow}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={nav}>
                  <Text style={styles.modalBtnText}> YES </Text>
                </TouchableOpacity>
                <Seperator />
                <Seperator />

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setShowModal(!showModal)}>
                  <Text style={styles.modalBtnText}> NO </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <Seperator />
        <Seperator />
        <Seperator />

        <View>
          <Text style={styles.error}>{state.checkBoxErr}</Text>
          <Checkbox value={isSelected} onValueChange={setIsSelected}>
            <Text fontSize="md" style={styles.checkBox}>
              Remember Password?
            </Text>
          </Checkbox>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#262361',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E3D9FF',
    marginBottom: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input_container: {
    backgroundColor: '#000000',
    placeholderTextColor: '#6D5C82',
    borderRadius: 12,
    margin: 10,
    shadowRadius: 2,
    padding: 14,
    color: '#F9BC08',
    width: '80%',
  },

  error: {
    color: 'red',
  },
  button: {
    backgroundColor: '#F748B7',
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
  checkBox: {
    color: '#F9BC08',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: '#F9BC08',
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#E3D9FF',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  modalBtnRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  modalBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262361',
  },
  modalText: {
    margin: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F748B7',
  },
  modalView: {
    width: '80%',
    height: 180,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#F748B7',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  seperator: {
    margin: 6,
  },
});
