import * as React from 'react';
import { useState } from 'react';
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
} from 'react-native';
import { connect, Provider } from 'react-redux'; //npm install --save react-redux
import store from '../redux/store/index';
import { addToWatchList, removeFromWatchList } from '../redux/actions/index';


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
      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Image
        style={{ width: 100, height: 200, marginBottom: 10 }}
        source={{ uri: movie.Poster }}
      />
      <Text>Year: {movie.Year}</Text>
      <Text>Plot: {movie.Plot}</Text>
      <Text>Genres: {movie.Genre}</Text>

      <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to Delete this Movie?
              </Text>
              <View style={styles.modalBtnRow}>
                <TouchableOpacity
                  style={styles.modalButton} onPress={() =>  (setShowModal(!showModal), removeMovieFromWatchList(movie), setInWatchList(false))}>
                  <Text style={styles.modalBtnText}> YES </Text>
                </TouchableOpacity>
             

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setShowModal(!showModal)}>
                  <Text style={styles.modalBtnText}> NO </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      
      {
        inWatchList ? (
          <Button title="Remove from Watch List" onPress={() => setShowModal(!showModal)}/>
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
    backgroundColor: "#262361",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  }, modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalButton: {
    backgroundColor: '#F9BC08',
    width: 70,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F2E5CE',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  modalBtnRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  modalBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2882',
  },
  modalText: {
    margin: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E63169',
  },
  modalView: {
    width: '80%',
    height: 180,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#E63169',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
