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
  seperator: {
    margin: 6,
  },
});