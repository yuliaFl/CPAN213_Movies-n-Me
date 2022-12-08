import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes/index';

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // action
      // payload: {
        // movies: []
        // productCount: 5
      // }
      const { product } = action.payload;

      // Spread operator:
      // 1. Create a new object
      // 2. Copy everything from the state object into the newly created object
      // 3. For the movies property in state, change that to movies that we got from action payload
      return {
        ...state,
        movies: [ ...state.movies, product ]
      };
    }
    case REMOVE_FROM_CART: {
      const { product } = action.payload;
      const { movies: movies } = state;
      const newmovies = movies.filter(p => p.id !== product.id )

      return {
        ...state,
        movies: newmovies
      }
    }
    default: {
      return state;
    }
  }
}