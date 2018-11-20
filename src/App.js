import React, { Component } from 'react';
import MOVIES from './movies';
import './App.css';
import MoviesList from './components/MoviesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <MoviesList movies={MOVIES}/>
        {/* <MovieDetails movie={selected}/> */}
      </div>
    );
  }
}

export default App;
