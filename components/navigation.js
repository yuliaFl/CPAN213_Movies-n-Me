import * as React from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";

export default function Navigation({ navigation }) {
  return (
    <View style={styles.container}>
      <h1>Please login</h1>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        color="orange"
      />
      <br />
      <h1>Register an account with us</h1>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        color="orange"
      />
      <br />
      <h1>Use app as a guest without being able to save movies</h1>
      <Button
        title="Guest"
        onPress={() => navigation.navigate("Home")}
        color="orange"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
