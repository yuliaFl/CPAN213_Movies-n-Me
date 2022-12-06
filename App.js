import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import homePage from "./components/homePage";
import login from "./components/login";
import moviePage from "/components/moviePage";
import navigation from "/components/navigation";
import register from "/components/return";
import watchList from "/components/watchList";
import welcome from "/components/welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Justin</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
