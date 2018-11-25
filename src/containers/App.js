import {connect} from 'react-redux';
import App from '../components/App';
import { setActiveMovie, loadMoviesThunk } from '../state/movies/actions';

const mapStateToProps = function(state){
  return {
    isLoading: state.movies.isLoading,
    error: state.movies.error,
    movies: state.movies.data,
    activeMovie: state.movies.activeMovie,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadData: () => dispatch(loadMoviesThunk()),
    setActiveMovie: (movie) => dispatch(setActiveMovie(movie)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)