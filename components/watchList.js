import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'; //npm install --save react-redux
import {
  removeFromCart,
} from '../redux/actions/index';
import { Provider } from 'react-redux'
import store from '../redux/store/index';

var navigation2
const WatchListPage = ({
  movieList,
}) => {  
  const renderMovieList = ({ item }) => (
    <View>
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
      <Text>{item.Plot}</Text>
      <Button title="Go to" onPress={() => navigation2.navigate("MoviePage", item.imdbID)} />
      {/* <Button title="Remove from WatchList" onPress={() => removeProductFromCart(item)} /> */}
      <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
    </View>
  );
  // const renderMovieList = ({ item }) => {
  //   var imdbID = item.imdbID
  //   return (
  //     <View>
  //       <Text>{item.Title}</Text>
  //       <Text>{item.Year}</Text>
  //       <Text>{item.Plot}</Text>
  //       <Button title="Go to" onPress={() => navigation.navigate("MoviePage", {imdbID})} />
  //       {/* <Button title="Remove from WatchList" onPress={() => removeProductFromCart(item)} /> */}
  //       <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
  //     </View>
  //   )
  // };

  return (
    <View>
      {/* <View style={{ margin: 5 }} /> */}
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Your WatchList:</Text>
      <FlatList data={movieList} renderItem={renderMovieList} />
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


export default function WatchList({ navigation }) { //name is now different!!!
  navigation2 = navigation
  const WatchListConnect = (
    connect(mapStateToProps, mapDispatchToProps)(WatchListPage)
  )
  return (
    <Provider store={store}>
      <WatchListConnect/>
    </Provider>
  );
};
//export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);