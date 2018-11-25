import {connect} from 'react-redux';
import App from '../components/App';
import { setActiveMovie } from '../state/movies/actions';

const mapStateToProps = function(state){
  return {
    movies: state.movies.data,
    activeMovie: state.movies.activeMovie,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setActiveMovie: (movie) => dispatch(setActiveMovie(movie)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)