import * as React from "react";
import { Checkbox, NativeBaseProvider } from "native-base";
import { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Modal, TouchableOpacity } from "react-native";

function RegistrationForm() {
  const [state, setState] = useState({
    email: "",
    userName: "",
    confirmPass: "",
    error: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPass, setConfirmPass] = useState('');
  const [isSelected, setSelection] = useState(false);
  const inputValidator = () => {
    if (state.userName == "") {
      setState({ ...state, error: "Fields Cannot be Empty" });
    } else {
      setState({ ...state, error: "" });
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.txt_title}>Create Account</Text>
        <Text style={styles.error}>{state.error}</Text>
        <TextInput
          style={styles.input_container}
          placeholder={"Username"}
          onChangeText={(text) => {
            setState({ userName: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={"Email"}
          onChangeText={(text) => {
            setState({ email: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(text) => {
            setState({ password: text });
          }}
          onBlur={() => inputValidator()}
        />
        <TextInput
          style={styles.input_container}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          onChangeText={(text) => {
            setState({ confirmPass: text });
          }}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox value={isSelected} onValueChange={setSelection}>
            <Text style={styles.small_txt}>
              Agree with terms and conditions
            </Text>
          </Checkbox>
        </View>
        <TouchableOpacity style={styles.button}>
          {/* Darien please put a confirm alert in the onPress function here, thank you */}
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
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    margin: 25,
  },
  input_container: {
    borderRadius: 50,
    margin: 6,
    shadowRadius: 9,
    padding: 10,
    color: "blue",
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingLeft: 9,
  },

  container: {
    alignItems: "center",
    margin: 12,
    padding: 10,
  },
  small_txt: {
    fontWeight: "bold",
    fontSize: 12,
    padding: 25,
  },
  error: {
    color: "red",
  },
  button: {
    backgroundColor: "#E63169",
    display: "flex",
    height: 60,
    borderRadius: 100,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    shadowColor: "hotpink",
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default RegistrationForm;
