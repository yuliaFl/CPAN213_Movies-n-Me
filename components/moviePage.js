import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  TouchableOpacity
} from "react-native";
import { connect, Provider } from "react-redux"; //npm install --save react-redux
import store from "../redux/store/index";
import { addToWatchList, removeFromWatchList } from "../redux/actions/index";

function Seperator() {
  return <View style={styles.seperator}/>;
}

var route2;
export default function MoviePage({ navigation, route }) {
  route2 = route;
  const MovieSearchConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieView);
  return (
    <Provider store={store}>
      <MovieSearchConnect />
    </Provider>
  );
}
const MovieView = ({ addMovieToWatchList, removeMovieFromWatchList }) => {
  const movie = route2.params;
  const [inWatchList, setInWatchList] = React.useState(true);
  return (
    <View style={styles.Screen}>
      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text style={styles.movieText}>Year: {movie.Year} </Text>
      <Text style={styles.movieText}>Plot: {movie.Plot} </Text>
      <Text style={styles.movieText}>Genres: {movie.Genre}</Text>

      {inWatchList ? (
        <TouchableOpacity
        style={styles.button}
        onPress={() => (
          removeMovieFromWatchList(movie), setInWatchList(false)
        )}>
        <Text style={styles.buttonText}> Remove from watchlist </Text>
      </TouchableOpacity>
      ) : (
        <TouchableOpacity
        style={styles.button}
        onPress={() => (addMovieToWatchList(movie), setInWatchList(true))}>
        <Text style={styles.buttonText}> Add to watchlist </Text>
      </TouchableOpacity>
      )}
      
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
    backgroundColor: "#262361",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  movieTitle: {
    color: "#E3D9FF",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: 'bold'
  },
  movieText: {
    color: "#E3D9FF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
    marginLeft: 6,
    marginRight: 6
  },
  button:{
    backgroundColor: '#F748B7',
    display: 'flex',
    height: 60,
    borderRadius: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    shadowColor: 'hotpink',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  seperator: {
    width: 6
  },
});
