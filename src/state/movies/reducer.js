import { 
  SET_ACTIVE_MOVIE,
  LOAD_MOVIES_REQUEST,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILED,
} from './actions';

const initialState = {
  data: [],
  activeMovie: null,
  isLoading: false,
  error: null,
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.movie,
      }
    case LOAD_MOVIES_REQUEST: 
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case LOAD_MOVIES_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        data: action.data,
      }
    case LOAD_MOVIES_FAILED: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default reducer;
