import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  Image,
} from "react-native";
import { connect } from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '../redux/actions/index';

// function MovieSearchPage({ navigation }) {
//   return (
//     <Provider store={store}>
//       <MovieSearch/>
//     </Provider>
//   );
// }

//       <Stack.Screen name="MovieSearch" component={MovieSearchPage} />

const MovieSearch = ({
  addProductToCart,
  removeProductFromCart,
}) => {
  const emptyMovie = {
    "Title": " ",
    "Year": " ",
    "Rated": " ",
    "Released": " ",
    "Runtime": " ",
    "Genre": " ",
    "Director": " ",
    "Writer": " ",
    "Actors": " ",
    "Plot": " ",
    "Language": " ",
    "Country": " ",
    "Awards": " ",
    "Poster": " ",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": " "
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": " "
      },
      {
        "Source": "Metacritic",
        "Value": " "
      }
    ],
    "Metascore": " ",
    "imdbRating": " ",
    "imdbVotes": " ",
    "imdbID": " ",
    "Type": " ",
    "DVD": " ",
    "BoxOffice": " ",
    "Production": " ",
    "Website": " ",
    "Response": "True"
  }
  const [movie, setMovie] = React.useState(emptyMovie);
  const searchMovie = (name) => {
    fetch("https://www.omdbapi.com/?apikey=a4f1f727&t="+name) //API
      .then((response) => response.json())
      .then((json) => { 
        if (json.Response == "True") {
          setMovie(json); 
        } else {
          setMovie(emptyMovie);
        }
      })
      .catch((err) => { console.log(err.message); });
    // console.log("Data Retrived and Assigned")
  }
  return (
    <View style={styles.container}>
      <h1>Search:</h1>
      <TextInput
        style={styles.input}
        placeholder="Name" //Enter Person Name Here
        placeholderTextColor={`#707070`}
        onChangeText={searchMovie}
      />

      <View style={styles.seperator}></View>

      <Text>{movie.Title}</Text>
      <Image style={{width:300,height:434}} source={{uri: movie.Poster}}/>
      <Text>Year: {movie.Year}</Text>
      <Text>Plot: {movie.Plot}</Text>
      <Text>Genre: {movie.Genre}</Text>

      <Button title="Add Movie to Watch List" onPress={() => addProductToCart(movie)}/>
    </View>
  )
}

// Needed to convert redux state to props for the component
const mapStateToProps = (state) => {
  return {
    movieList: state.movieListReducer.movies,
  };
};

// Needed to convert redux actions to props for the component
const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addToCart(product)),
    removeProductFromCart: (product) => dispatch(removeFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  seperator: { 
    height:10, 
  },
});