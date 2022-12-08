import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
} from "react-native";

export default function Navigation ({navigation}){
  return(
    <View style={styles.container}>
    <h1>nav</h1>
    <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        color="orange"
      />
      <br />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        color="orange"
      />
      <br />
      <Button
        title="Guest"
        onPress={() => navigation.navigate("Home")}
        color="orange"
      />

    </View>
  )
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
