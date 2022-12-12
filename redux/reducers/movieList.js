import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actionTypes/index';

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WATCHLIST: {
      const { movie } = action.payload;

      return {
        ...state,
        movies: [ ...state.movies, movie ]
      };
    }
    case REMOVE_FROM_WATCHLIST: {
      const { movie } = action.payload;
      const { movies } = state;
      const newmovies = movies.filter(p => p.imdbID !== movie.imdbID);

      return {
        ...state,
        movies: newmovies
      };
    }
    default: {
      return state;
    }
  };
};