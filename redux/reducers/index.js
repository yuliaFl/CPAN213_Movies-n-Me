import { combineReducers } from 'redux'; //npm install redux if not installed
import movieListReducer from './movieList'

// const state = {
//     movieListReducer: {
//        products: []
//     }
// }

export default combineReducers({ movieListReducer })