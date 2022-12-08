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
    <View style={styles.Screen}>
      <h1>Search up a movie</h1>
      <Button
        title="Movie Search Page"
        onPress={() => navigation.navigate("MovieSearch")}
        color="orange"
      />
      <br />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
