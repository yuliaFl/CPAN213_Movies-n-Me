import { combineReducers } from 'redux';
import movieListReducer from './movieList'

// const state = {
//     movieListReducer: {
//        products: []
//     }
// }

export default combineReducers({ movieListReducer: movieListReducer })