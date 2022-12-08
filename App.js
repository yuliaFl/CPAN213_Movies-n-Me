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
//import WatchList from "./components/watchList";
import Welcome from "./components/welcome";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return <HomePage />;
}
function LoginScreen({ navigation }) {
  return <Login />;
}
function MovieScreen({ navigation }) {
  return (
    <Provider store={store}>
      <MoviePage/>
    </Provider>
  );
}
function SearchScreen({ navigation }) {
  return <MovieSearch />;
}
function NavigationScreen({ navigation }) {
  return <Navigation />;
}
function RegisterScreen({ navigation }) {
  return <Register />;
}
/*function WatchScreen({ navigation }) {
  return <WatchList />;
function WatchScreen({ navigation }) {
  return (
    <Provider store={store}>
      <WatchList/>
    </Provider>
  );
}
*/

function MyStack() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Navigation" component={NavigationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MoviePage" component={MovieScreen} />
      <Stack.Screen name="SearchPage" component={SearchScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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