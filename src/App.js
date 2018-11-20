import React, { Component } from 'react';
import MOVIES from './movies';
import './App.css';
import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null,
    }

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleMovieSelect(id) {
    const activeMovie = MOVIES.find(item => item.id === id);
    this.setState({
      activeMovie,
    })
  }

  render() {
    const activeMovieId = this.state.activeMovie ? this.state.activeMovie.id : null;
    return (
      <div className="App">
        <h1>Movies</h1>
        <MoviesList 
          movies={MOVIES}
          activeMovieId={activeMovieId}
          onSelect={this.handleMovieSelect}
        />
        {this.state.activeMovie && <MovieDetails movie={this.state.activeMovie}/>}
      </div>
    );
  }
}

export default App;
