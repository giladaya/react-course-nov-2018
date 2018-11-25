import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList'
import MovieDetails from '../MovieDetails'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleMovieSelect(id) {
    const activeMovie = this.props.movies.find(item => item.id === id);
    this.props.setActiveMovie(activeMovie);
  }

  render() {
    const activeMovieId = this.props.activeMovie ? this.props.activeMovie.id : null;
    return (
      <div className="App">
        <h1>Movies</h1>
        {this.props.movies && (
          <MoviesList 
            movies={this.props.movies}
            activeMovieId={activeMovieId}
            onSelect={this.handleMovieSelect}
          />
        )}
        {this.props.activeMovie && <MovieDetails movie={this.props.activeMovie}/>}
      </div>
    );
  }
}

export default App;
