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
// import logo_proto from "./logo/groupFinal_logo_proto.png";
// import ProgressBar from "./components/welcomeProgress";

export default function App() {
  const logoFadeIn = (props) => {
    const n = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(n, {
        toValue: 1,
        duration: 4000,
      }).start();
    }, [n]);

    return (
      <Animated.View style={{ opacity: n }}>{props.children}</Animated.View>
    );
  };

  return (
    <View style={styles.Screen}>
      <View>
        <logoFadeIn>
          <img src={logo_proto} alt="Logo" />
        </logoFadeIn>
      </View>
      <ProgressBar
        progress={duration}
        max={100}
        min={0}
        barColor={bar}
        borderColor={"white"}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "navy",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
