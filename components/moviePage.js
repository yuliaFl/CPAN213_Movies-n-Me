import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
  NativeModules,
} from 'react-native';
import { connect, Provider } from 'react-redux'; //npm install --save react-redux
import store from '../redux/store/index';
import { addToWatchList, removeFromWatchList } from '../redux/actions/index';



var route2
export default function MoviePage({ navigation, route }) {
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
const MovieView = ({ addMovieToWatchList, removeMovieFromWatchList }) => {
  const movie = route2.params;
  const [inWatchList, setInWatchList] = React.useState(true);
  return (
    <View style={styles.Screen}>
      <Text><h1>{movie.Title}</h1></Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text>Year: {movie.Year}</Text>
      <Text>Plot: {movie.Plot}</Text>
      <Text>Genres: {movie.Genre}</Text>
      
      {
        inWatchList ? (
          <Button title="Remove from Watch List" onPress={() => (removeMovieFromWatchList(movie), setInWatchList(false))}/>
        ) : (
          <Button title="Add to Watch List" onPress={() => (addMovieToWatchList(movie), setInWatchList(true))}/>
        )
      }
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
});