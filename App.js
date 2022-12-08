import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import store from './redux/store/index';
import HomePage from "./components/homePage";
import Login from "./components/login";
import MoviePage from "./components/moviePage"; 
import MovieSearch from "./components/movieSearch";
import Navigation from "./components/navigation";
import Register from "./components/register";
import WatchList from "./components/watchList";
import Welcome from "./components/welcome";

const Stack = createNativeStackNavigator();

function MovieScreen({ navigation }) {
  return (
    <Provider store={store}>
      <MoviePage/>
    </Provider>
  );
}

function WatchScreen({ navigation }) {
  return (
    <Provider store={store}>
      <WatchList />
    </Provider>
  );
}

function MyStack() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Navigation" component={Navigation} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MoviePage" component={MovieScreen} />
      <Stack.Screen name="MovieSearch" component={MovieSearch} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name ="WatchList" component={WatchScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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