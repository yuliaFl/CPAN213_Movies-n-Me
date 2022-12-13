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
  Image,
  Animated,
} from "react-native";
import ProgressBar from "./welcomeProgress";

function Seperator() {
  return <View style={styles.seperator}></View>;
}
export default function Welcome({ navigation }) {
  const LogoFadeIn = (props) => {
    const n = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(n, {
        toValue: 1,
        duration: 3000,
      }).start();

      setTimeout(() => { navigation.navigate("Navigation") }, 3000);
    }, [n]);

    return (
      <Animated.View style={{ opacity: n }}>{props.children}
      </Animated.View>
    );
  };

  const progValue = 100;
  return (
    <View style={styles.Screen}>
      <View>
        <LogoFadeIn>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../logo/logo_final.png")}
            alt="Logo"
          />
        </LogoFadeIn>
        <Seperator />
        <Seperator />
      </View>

      <ProgressBar
        style={styles.progressBar}
        progress={progValue}
        max={100}
        min={0}
        barColor={"#E3D9FF"}
        borderColor={"#262361"}
        borderWidth={6}
      />
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
  seperator: {
    margin: 6,
  },
  progressBar: {
    borderColor: "white",
    borderWidth: 6,
  },
});
