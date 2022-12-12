import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actionTypes/index';

export const addToWatchList = (movie) => ({
  type: ADD_TO_WATCHLIST,
  payload: {
    movie
  }
});

export const removeFromWatchList = (movie) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: {
    movie
  }
});