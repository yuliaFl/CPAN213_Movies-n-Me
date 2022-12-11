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
import { connect } from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '../redux/actions/index';
import { Provider } from 'react-redux'
import store from '../redux/store/index';


var route2
export default function MoviePage({ route, navigation }) {
  route2 = route
  const MovieSearchConnect = (
    connect(mapStateToProps, mapDispatchToProps)(MovieView)
  )
  return (
    <Provider store={store}>
      <MovieSearchConnect/>
    </Provider>
  );
};
const MovieView = ({
  addProductToCart,
  removeProductFromCart,
}) => {
  console.log(route2.params)
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
  return (
    <View style={styles.Screen}>
      <Text><h1>{movie.Title}</h1></Text>
      {/* <Image style={{width:300,height:434}} source={{uri: movie.Poster}}/> */}
      <Text>Year: {movie.Year}</Text>
      <Text>Plot: {movie.Plot}</Text>
      <Text>Genre: {movie.Genre}</Text>

      <Button title="Add Movie to Watch List" onPress={() => addProductToCart(movie)}/>
    </View>
  )
}

// export default function App() {
//   return (
// <h1>HOME</h1>
//   )
// }

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

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
});