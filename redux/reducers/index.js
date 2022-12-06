import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart'

// const state = {
//   productsReducer: {
//    products: [] 
// }
// cartReducer: {
//    products: []
// }
// }
export default combineReducers({ productsReducer, cartReducer })