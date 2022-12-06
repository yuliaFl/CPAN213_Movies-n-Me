import { ADD_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes/index';

const API_URL = "https://fakestoreapi.com/products?limit=5";

export const fetchProducts = (dispatch) => {
  fetch(API_URL)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: ADD_PRODUCTS,
        payload: {
          products: json
        }
      })
    })
}

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    product
  }
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: {
    product
  }
});