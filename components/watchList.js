import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
// import {
//   addToCart,
//   removeFromCart,
// } from '../redux/actions/index';


const WatchListPage = ({
  movieList,
  // removeProductFromCart,
}) => {  
  const renderMovieList = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Text>{item.description}</Text>
      {/* <Button title="Remove from WatchList" onPress={() => removeProductFromCart(item)} /> */}
      <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
    </View>
  );

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

// // Needed to convert redux actions to props for the component
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addProductToCart: (product) => dispatch(addToCart(product)),
//     removeProductFromCart: (product) => dispatch(removeFromCart(product)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);
export default connect(mapStateToProps)(WatchListPage);