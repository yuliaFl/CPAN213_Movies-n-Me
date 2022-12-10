import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Checkbox, NativeBaseProvider } from "native-base";

function Seperator() {
  return <View style={styles.seperator}></View>;
}

function LogingForm() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    email: "",
    error: "",
    password: "",
  });
  const inputValidator = () => {
    if (state.email == "") {
      setState({ ...state, error: "Email field Cannot be empty" });
    } else {
      setState({ ...state, error: "" });
    }
  };
  return (
    <NativeBaseProvider>
      <View style={styles.Screen}>
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
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to log in?
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <Seperator />
        <Seperator />
        <Seperator />

        <View>
          <Checkbox>
            <Text fontSize="md" style={styles.checkBox}>
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
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2882",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#F2E5CE",
    marginBottom: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input_container: {
    backgroundColor: "#000000",
    borderRadius: 12,
    margin: 10,
    shadowRadius: 2,
    padding: 14,
    color: "#F9BC08",
    width: "80%",
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
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  checkBox: {
    color: "#F9BC08",
    fontSize: 14,
    fontWeight: "bold",
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
