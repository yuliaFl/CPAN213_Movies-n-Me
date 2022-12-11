import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/index";
import { Provider } from 'react-redux'
import store from '../redux/store/index';

function Seperator() {
  return <View style={styles.seperator}></View>;
}

var navigation2
const MovieSearchPage = ({ addProductToCart, removeProductFromCart }) => {
  const emptyMovie = {
    Title: " ",
    Year: " ",
    Rated: " ",
    Released: " ",
    Runtime: " ",
    Genre: " ",
    Director: " ",
    Writer: " ",
    Actors: " ",
    Plot: " ",
    Language: " ",
    Country: " ",
    Awards: " ",
    Poster: " ",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: " ",
      },
      {
        Source: "Rotten Tomatoes",
        Value: " ",
      },
      {
        Source: "Metacritic",
        Value: " ",
      },
    ],
    Metascore: " ",
    imdbRating: " ",
    imdbVotes: " ",
    imdbID: " ",
    Type: " ",
    DVD: " ",
    BoxOffice: " ",
    Production: " ",
    Website: " ",
    Response: "True",
  };
  const [movie, setMovie] = React.useState(emptyMovie);
  const searchMovie = (name) => {
    fetch("https://www.omdbapi.com/?apikey=a4f1f727&t=" + name) //API
      .then((response) => response.json())
      .then((json) => {
        if (json.Response == "True") {
          setMovie(json);
        } else {
          setMovie(emptyMovie);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log("Data Retrived and Assigned")
  };
  return (
    <View style={styles.Screen}>
      <Text style={styles.title}>Search for any movie here</Text>
      <TextInput
        style={styles.input}
        placeholder="Search movie name. . ."
        onChangeText={searchMovie}
      />

      <View style={styles.seperator}></View>

      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text style={styles.movieText}>Year: {movie.Year}</Text>
      <Text style={styles.movieText}>Plot: {movie.Plot}</Text>
      <Text style={styles.movieText}>Genres: {movie.Genre}</Text>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addProductToCart(movie)}
        >
          <Text style={styles.buttonText}> Add to Watch List </Text>
        </TouchableOpacity>
        <Seperator /><Seperator /><Seperator />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation2.navigate("WatchList")}
        >
          <Text style={styles.buttonText2}> Open Watch List </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

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

// export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
export default function MovieSearch({ navigation }) {
  navigation2 = navigation
  const MovieSearchConnect = (
    connect(mapStateToProps, mapDispatchToProps)(MovieSearchPage)
  )
  return (
    <Provider store={store}>
      <MovieSearchConnect/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2882",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F9BC08",
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "90%",
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#000000",
    placeholderTextColor: "#6D5C82",
    color: "#E63169",
  },
  button: {
    backgroundColor: "#E63169",
    display: "flex",
    height: 50,
    width: "100%",
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "right",
    shadowColor: "hotpink",
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 4
  },
  
  movieTitle: {
    color: "#F2E5CE",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 'bold'
  },
  movieText: {
    color: "#F2E5CE",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
  },
  seperator: {
    width: 6
  },
});
