import { createStore } from 'redux'; //npm install redux if not installed
import rootReducer from '../reducers/index';

export default createStore(rootReducer);