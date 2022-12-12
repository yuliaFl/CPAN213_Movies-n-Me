import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { connect, Provider } from 'react-redux'; //npm install --save react-redux
import store from '../redux/store/index';


var navigation2
export default function WatchList({ navigation }) { //name is now different!!!
  navigation2 = navigation
  const WatchListConnect = (
    connect(mapStateToProps)(WatchListPage)
  )
  return (
    <Provider store={store}>
      <WatchListConnect/>
    </Provider>
  );
};
const WatchListPage = ({ movieList }) => {  
  const renderMovieList = ({ item }) => (
    <View>
      <Text style={styles.movieTitle}>{item.Title}</Text>
      {/* <Text>{item.Year}</Text>
      <Text>{item.Plot}</Text> */}
      <View style={styles.buttons}>
      <Button title="View Movie" onPress={() => navigation2.navigate("MoviePage", item.imdbID)} />
      <Button title="Remove from list" />
      </View>
      {/* <Button title="Remove from WatchList" onPress={() => removeProductFromCart(item)} /> */}
      <View style={{ borderBottomColor: '#000000', borderWidth: 2, margin: 5 }} />
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
      <Text>{item.Plot}</Text>
      <Button title="Go to" onPress={() => navigation2.navigate("MoviePage", item)} />
      {/* Have remove from watch list button? /> */}
      <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
    </View>
  );
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Your WatchList:</Text>
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
    fontWeight: 'bold',
    fontSize: 30,
    color: '#E63169',
    marginTop: 10
  },
  movieTitle: {
    color: "#6D5C82",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 'bold'
  },
  list: {
    alignContent: 'stretch', 
    width: '100%',
  },
  buttons: {
    flexDirection: 'row'
  },
  seperator: {
    margin: 6,
  },
});