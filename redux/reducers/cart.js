import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes/index';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // action
      // payload: {
        // products: []
        // productCount: 5
      // }
      const { product } = action.payload;

      // Spread operator:
      // 1. Create a new object
      // 2. Copy everything from the state object into the newly created object
      // 3. For the  products property in state, change that to products that we got from action payload
      return {
        ...state,
        products: [ ...state.products, product ]
      };
    }
    case REMOVE_FROM_CART: {
      const { product } = action.payload;
      const { products } = state;
      const newProducts = products.filter(p => p.id !== product.id )

      return {
        ...state,
        products: newProducts
      }
    }
    default: {
      return state;
    }
  }
}