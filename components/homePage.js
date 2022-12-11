import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  TouchableOpacity,
} from "react-native";

function Seperator() {
  return <View style={styles.seperator}></View>;
}

export default function Home({ navigation }) {
  return (
    <View style={styles.Screen}>
      <h1>Search up a movie</h1>
      <Button
        title="Search for a movie"
        onPress={() => navigation.navigate("MovieSearch")}
        color="orange"
      />
      <br />
      <Seperator />
      <Seperator />

      <Text>OR. . . .</Text>
      <br />
      <Seperator />
      <Seperator />

      <h1>View a list of movies you want to watch</h1>
      <Button
        title="Watch List"
        onPress={() => navigation.navigate("WatchList")}
        color="orange"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2882",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#E63169",
    display: "flex",
    height: 60,
    borderRadius: 100,
    marginTop: 25,
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
  seperator: {
    margin: 6,
  },
});
