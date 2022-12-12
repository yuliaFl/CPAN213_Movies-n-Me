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
import { connect, Provider } from "react-redux"; //npm install --save react-redux
import store from "../redux/store/index";
import { addToWatchList, removeFromWatchList } from "../redux/actions/index";

function Seperator() {
  return <View style={styles.seperator}/>;
}

var navigation2
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
const MovieSearchPage = ({ addMovieToWatchList, removeMovieFromWatchList }) => {
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
    fetch("https://www.omdbapi.com/?apikey=a4f1f727&t="+name) //API
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
  const [inWatchList, setInWatchList] = React.useState(false); //If we don't use the add/remove toggle we don't need this
  return (
    <View style={styles.Screen}>
      <Text style={styles.title}>Search for any movie here</Text>
      <TextInput
        style={styles.input}
        placeholder="Search movie name. . ."
        onChangeText={searchMovie}
      />

      <View style={styles.seperator}/>

      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text style={styles.movieText}>Year: {movie.Year}   </Text>
      <Text style={styles.movieText}>Plot: {movie.Plot}   </Text>
      <Text style={styles.movieText}>Genres: {movie.Genre}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addMovieToWatchList(movie)}
        >
          <Text style={styles.buttonText}> Add to Watch List </Text>
        </TouchableOpacity>
        <Seperator/><Seperator/>
        <TouchableOpacity
          // style={styles.button2} //button2 styles doesn't exist anymore soooo
          style={styles.button2}
          onPress={() => navigation2.navigate("WatchList")}
        >
          {/* <Text style={styles.buttonText2}> Open Watch List </Text>  */} {/* same here with buttonText2 */}
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
    addMovieToWatchList: (movie) => dispatch(addToWatchList(movie)),
    removeMovieFromWatchList: (movie) => dispatch(removeFromWatchList(movie)),
  };
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
    height: 60,
    width: "45%",
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
  button2: {
    backgroundColor: "#F9BC08",
    display: "flex",
    height: 60,
    width: "45%",
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "goldenrod",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    padding: 4
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 18
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