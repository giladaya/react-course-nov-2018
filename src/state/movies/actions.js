export const SET_ACTIVE_MOVIE = 'movies/SET_ACTIVE_MOVIE';
export const LOAD_MOVIES_REQUEST = 'movies/LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'movies/LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_FAILED = 'movies/LOAD_MOVIES_FAILED';

export function setActiveMovie(movie) {
  return {
    type: SET_ACTIVE_MOVIE,
    movie,
  }
}

export function loadMoviesRequest() {
  return {
    type: LOAD_MOVIES_REQUEST,
  }
}

export function loadMoviesSuccess(data) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    data,
  }
}

export function loadMoviesFailed(error) {
  return {
    type: LOAD_MOVIES_FAILED,
    error,
  }
}

export function loadMoviesThunk() {
  return function (dispatch) {
    dispatch(loadMoviesRequest());
    return setTimeout(() => {
      fetch('/data/movies.json')
      .then(response => response.json())
      .then(movies => dispatch(loadMoviesSuccess(movies)))
      .catch(error => dispatch(loadMoviesFailed(error)));
    }, 500);
  };
}