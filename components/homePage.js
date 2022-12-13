import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  TouchableOpacity,
  Animated,
} from "react-native";

function Seperator() {
  return <View style={styles.seperator}></View>;
}

export default function Home({ navigation }) {
  const n = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.spring(n, { toValue: 5, duration: 25000 }).start();
  }, [n]);

  return (
    <View style={styles.Screen}>
      <Animated.View>
        <Animated.Image
          style={{ width: 125, height: 125, left: n }}
          source={require("../logo/logo_final.png")}

        />
      </Animated.View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MovieSearch")}
      >
        <Text style={styles.buttonText}> Search for a Movie </Text>
      </TouchableOpacity>
      <br />
      <Seperator />
      <Seperator />

      <Text style={styles.pageText}>OR. . . .</Text>
      <br />
      <Seperator />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("WatchList")}
      >
        <Text style={styles.buttonText}> View Watch List </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#262361",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  pageText: {
    margin: 40,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F9BC08",
    backgroundColor: "#000000",
    width: "107%",
    height: 50,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  button: {
    backgroundColor: "#F9BC08",
    display: "flex",
    height: 70,
    borderRadius: 100,
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    shadowColor: "goldenrod",
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  seperator: {
    margin: 6,
  },
});
