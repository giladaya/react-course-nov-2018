export const SET_ACTIVE_MOVIE = 'movies/SET_ACTIVE_MOVIE';

export function setActiveMovie(movie) {
  return {
    type: SET_ACTIVE_MOVIE,
    movie,
  }
}