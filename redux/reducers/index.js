import { combineReducers } from 'redux';
import cartReducer from './cart'

// const state = {
//     cartReducer: {
//        products: []
//     }
// }

export default combineReducers({ cartReducer })