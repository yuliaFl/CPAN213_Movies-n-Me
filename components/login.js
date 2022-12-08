import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";

import { Checkbox, NativeBaseProvider } from "native-base";

const Main = () => {
  const [state, setState] = useState({
    email: "",
    error: "",
    password: "",
  });
  const inputValidator = () => {
    if (state.email == "") {
      setState({ ...state, error: "Email Cannot be empty" });
    } else {
      setState({ ...state, error: "" });
    }
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Login Form</Text>
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
        <TouchableOpacity style={styles.button}>
          {/* Darien please put a confirm alert in the onPress function here, thank you */}
          <Text style={styles.buttonText}> Confirm Login </Text>
        </TouchableOpacity>

        <View>
          <br />
          <Checkbox>
            <Text fontSize="md" style={{ color: "black" }}>
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
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    margin: 25,
  },

  container: {
    alignItems: "center",
    margin: 12,
    padding: 10,
  },
  input_container: {
    borderRadius: 50,
    margin: 6,
    shadowRadius: 9,
    padding: 10,
    color: "blue",
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
