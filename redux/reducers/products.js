import { ADD_PRODUCTS } from '../actionTypes/index';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      // action
      // payload: {
        // products: []
        // productCount: 5
      // }
      const { products } = action.payload;

      // Spread operator:
      // 1. Create a new object
      // 2. Copy everything from the state object into the newly created object
      // 3. For the  products property in state, change that to products that we got from action payload
      return {
        ...state,
        products
      };
    }
    default: {
      return state;
    }
  }
}