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
        duration: 4000,
      }).start();

      setTimeout(() => { navigation.navigate("Navigation") }, 4000);
    }, [n]);

    return (
      <Animated.View style={{ opacity: n }}>{props.children}
      </Animated.View>
    );
  };

  // const MoveBar = (props) => {
  //   const m = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     Animated.sequence([
  //     Animated.timing(m, { toValue: 100, duration: 4000 }),
  //     Animated.timing(m, { toValue: -100, duration: 1000 }),
  //     ]).start();
  //   }, [m]);

  //   return (
  //     <Animated.View >{props.children}</Animated.View>
  //   );
  // };
  const progValue = 100;
  return (
    <View style={styles.Screen}>
      <View>
        <LogoFadeIn>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../logo/logo_proto2.JPG")}
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
        barColor={"white"}
        borderColor={"#2B2882"}
        borderWidth={6}
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
  seperator: {
    margin: 6,
  },
  progressBar: {
    borderColor: "white",
    borderWidth: 6,
  },
});
