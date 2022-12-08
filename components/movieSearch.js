import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TextInput,
    NativeModules,
  } from "react-native";

  export default function App() {
    const [movie, setMovie] = useState();
    const handleAddMovie = () => { setItems(movie); };
    // useEffect(() => {          //THIS USEEFFECT IS CURSED, USE DIFFERENT ONE
    //     fetch('https://dummy.restapiexample.com/api/v1/employees') //API
    //       .then((response) => response.json())
    //       .then((json) => {handleSetItems(json.data);});
    //       console.log("Data Retrived and Assigned")
    //     // handleSetItems(APIcopy.data);
    //   }, []);
    return (
      <h1>movieSearch</h1>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10
    },
  });