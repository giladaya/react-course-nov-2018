import INITIAL_MOVIES from './data';
import { SET_ACTIVE_MOVIE } from './actions';

const initialState = {
  data: INITIAL_MOVIES,
  activeMovie: null,
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.movie,
      }
    default:
      return state;
  }
};

export default reducer;
