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
      <View style={styles.container}>
        <Text style={styles.txt_title}>Create Account</Text>
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
          <View style={styles.container1}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to continue?
              </Text>
              <View>
                {' '}
                {/*Do something once the user clicks YES like ---> onPress={() =>
                navigation.navigate('Home', setShowModal(!showModal)) OR Something*/}
                <Button title="Yes" onPress={() => setShowModal(!showModal)} />
              </View>

              <Button title="No" onPress={() => setShowModal(!showModal)} />
            </View>
          </View>
        </Modal>

        <View style={styles.checkboxContainer}>
          <Checkbox value={isSelected} onValueChange={setSelection}>
            <Text style={styles.small_txt}>
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
  txt_title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
    margin: 25,
  },
  input_container: {
    borderRadius: 11,
    margin: 8,
    shadowRadius: 2,
    padding: 12,
    color: 'blue',
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingLeft: 9,
  },

  container: {
    alignItems: 'center',
    margin: 11,
    padding: 10,
  },
  small_txt: {
    fontWeight: 'bold',
    fontSize: 12,
    padding: 25,
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
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    margin: 15,
    fontWeight: 'bold',
  },

  modalView: {
    width: '65%',
    borderWidth: 1.2,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default RegistrationForm;
