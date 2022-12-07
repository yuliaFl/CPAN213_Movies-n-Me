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
import Register from "./register";
import Login from "./login";
import HomePage from "./homePage";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Screen1} />
          <Drawer.Screen name="Settings" component={Screen2} />
          <Drawer.Screen name="Contacts" component={Screen3} />
      </Drawer.Navigator>
  ); 
}

export default Navigation;


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
