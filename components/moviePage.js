import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
  Modal,
  TouchableOpacity,
  NativeModules,
} from "react-native";
import { connect, Provider } from "react-redux"; //npm install --save react-redux
import store from "../redux/store/index";
import { addToWatchList, removeFromWatchList } from "../redux/actions/index";

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
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.Screen}>
      <View style={styles.containerBase}>
        {/* <View style={styles.miniContainer}> */}
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <Image
          style={{ width: 100, height: 200, marginBottom: 10, alignSelf: 'center', }}
          source={{ uri: movie.Poster }}
        />

        <Text style={styles.movieText}>Year Released: {movie.Year}</Text>
        <Text style={styles.movieText}>Plot: {movie.Plot}</Text>
        <Text style={styles.movieText}>Genres: {movie.Genre}</Text>
        {/* </View> */}

        {/* {inWatchList ? (
          <Button
            title="Remove from Watch List"
            onPress={() => setShowModal(!showModal)}
          />
        ) : (
          <Button
            title="Add to Watch List"
            onPress={() => (addMovieToWatchList(movie), setInWatchList(true))}
          />
        )} */}
        {inWatchList ? (
        <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(!showModal)}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to Remove this Movie?
            </Text>
            <View style={styles.modalBtnRow}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => (
                  setShowModal(!showModal),
                  removeMovieFromWatchList(movie),
                  setInWatchList(false)
                )}
              >
                <Text style={styles.modalBtnText}> YES </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowModal(!showModal)}
              >
                <Text style={styles.modalBtnText}> NO </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalButton: {
    backgroundColor: "#F9BC08",
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#F2E5CE",
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  modalBtnRow: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  modalBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2B2882",
  },
  modalText: {
    margin: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E63169",
  },
  modalView: {
    width: "80%",
    height: 180,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#E63169",
    padding: 15,
    alignItems: "center",
    backgroundColor: "#000000",
  }, //Big Box
  containerBase: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#000000",
    borderColor: "#E63169",
    height: 160,
    width: '100%',
    padding: 6,
    paddingTop: 20
  },
  //Small box for the content
  // miniContainer: {
  //   flex: 1,
  //   borderWidth: 1,
  //   margin: 50,
  // },
  movieTitle: {
    color: "#E3D9FF",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  movieText: {
    fontSize: 11,
    color: "#E3D9FF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    backgroundColor: '#F748B7',
    display: 'flex',
    height: 40,
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 5,
    shadowColor: 'hotpink',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
