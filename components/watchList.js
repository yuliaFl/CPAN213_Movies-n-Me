import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button, Modal, TouchableOpacity } from 'react-native';
import { connect, Provider } from 'react-redux'; //npm install --save react-redux
import store from '../redux/store/index';
import { useState } from 'react';
import { addToWatchList, removeFromWatchList } from '../redux/actions/index';

var navigation2
export default function WatchList({ navigation }) { //name is now different!!!
  navigation2 = navigation
  const WatchListConnect = (
    connect(mapStateToProps,mapDispatchToProps)(WatchListPage)
  )
  return (
    <Provider store={store}>
      <WatchListConnect/>
    </Provider>
  );
};
const WatchListPage = ({ movieList,removeMovieFromWatchList }) => {  
  const [showModal, setShowModal] = useState(false);
  const [inWatchList, setInWatchList] = React.useState(true);
  const renderMovieList = ({ item }) => (
    <View>
      <Text style={styles.movieTitle}>{item.Title}</Text>
      {/* <Text>{item.Year}</Text>
      <Text>{item.Plot}</Text> */}

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
                Remove Movie from Watch List?
              </Text>
            <View style={styles.modalBtnRow}>
                <TouchableOpacity
                style={styles.modalButton} onPress={() =>  (setShowModal(!showModal), removeMovieFromWatchList(item), setInWatchList(false))}>
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

      <View style={styles.buttons}>
      {/* <Button title="View Movie" onPress={() => navigation2.navigate("MoviePage", item)} />
        <Button title="" onPress={() => setShowModal(!showModal)} /> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation2.navigate("MoviePage", item)}
        >
          <Text style={styles.buttonText}> View Movie </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.buttonText}> Remove from list </Text>
        </TouchableOpacity>
      </View>

      <View style={{ borderBottomColor: '#000000', borderWidth: 2, margin: 5 }} />

      {/* <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} /> */}
    </View>
  );
  return (
    <View style={styles.Screen}>
      <Text style={styles.title}>Your WatchList:</Text>
      <View style={{ margin: 5 }}/>
      <FlatList data={movieList} renderItem={renderMovieList}/>
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
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#F748B7',
    marginTop: 10
  },
  movieTitle: {
    color: "#F9BC08",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 'bold',
    backgroundColor: '#000000'
  },
  list: {
    alignContent: 'stretch', 
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: "#E3D9FF",
    display: "flex",
    height: 40,
    borderRadius: 100,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    shadowColor: "white",
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#262361",
  },
  seperator: {
    margin: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  modalText: {
    margin: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E63169',
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
});