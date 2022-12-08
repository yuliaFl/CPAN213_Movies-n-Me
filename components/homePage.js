import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <h1>nav</h1>
      <Button
        title="Movie Search Page"
        onPress={() => navigation.navigate("MovieSearch")}
        color="orange"
      />
      <br />
      <Button
        title="Watch List"
        onPress={() => navigation.navigate("Login")}
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
