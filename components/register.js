import * as React from 'react';
import { Checkbox, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

function RegistrationForm() {
  const [state, setState] = useState({
    email: '',
    userName: '',
    confirmPass: '',
    error: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  const [isSelected, setSelection] = useState(false);
  const inputValidator = () => {
    if (state.userName == '') {
      setState({ ...state, error: 'Fields Cannot be Empty' });
    } else {
      setState({ ...state, error: '' });
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.Screen}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.error}>{state.error}</Text>
        <TextInput
          style={styles.input_container}
          placeholder={'Username'}
          onChangeText={(text) => {
            setState({ userName: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={'Email'}
          onChangeText={(text) => {
            setState({ email: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(text) => {
            setState({ password: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          onChangeText={(text) => {
            setState({ confirmPass: text });
          }}
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
                Are you sure you want to register?
              </Text>
              <View style={styles.modalBtnRow}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={styles.modalBtnText}> YES </Text>
                </TouchableOpacity>
                <br /><Seperator />
                <Seperator />

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setShowModal(!showModal)}
                >
                  <Text style={styles.modalBtnText}> NO </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.checkboxContainer}>
          <Checkbox value={isSelected} onValueChange={setSelection}>
            <Text style={styles.checkBox}>
              Agree with terms and conditions
            </Text>
          </Checkbox>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.buttonText}> Create Account </Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}
// const Divider = () => {
//   return <View style={{ height: 1 }}></View>;
// };
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2882",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#F2E5CE',
    marginBottom: 25,
  },
  input_container: {
    backgroundColor: "#000000",
    borderRadius: 12,
    margin: 10,
    shadowRadius: 2,
    padding: 14,
    color: '#F9BC08',
    width: '80%'
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingLeft: 9,
  },
  checkBox: {
    color: '#F9BC08',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 8
  },
  error: {
    color: 'red',
  },
  button: {
    backgroundColor: '#E63169',
    display: 'flex',
    height: 60,
    borderRadius: 100,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    shadowColor: 'hotpink',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalButton: {
    backgroundColor: "#F9BC08",
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#F2E5CE",
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
    fontWeight: "bold",
    color: "#2B2882",
  },
  modalText: {
    margin: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E63169",
  },
  modalView: {
    width: "80%",
    height: 180,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#E63169",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  seperator: {
    margin: 6,
  },
});

export default RegistrationForm;
