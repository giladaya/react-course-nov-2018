import React, { Component } from 'react';
import './App.css';
import MoviesList from '../MoviesList'
import MovieDetails from '../MovieDetails'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  componentDidMount(){
    this.props.loadData();
  }

  handleMovieSelect(id) {
    const activeMovie = this.props.movies.find(item => item.id === id);
    this.props.setActiveMovie(activeMovie);
  }

  renderContent() {
    if (this.props.isLoading) {
      return (
        <div>Loading...</div>
      );
    }
    if (this.props.error) {
      return (
        <div>Error: {this.props.error}</div>
      );
    }
    if (this.props.movies.length === 0) {
      return (
        <div>Nothing found :(</div>
      );
    }

    const activeMovieId = this.props.activeMovie ? this.props.activeMovie.id : null;
    return (
      <MoviesList 
        movies={this.props.movies}
        activeMovieId={activeMovieId}
        onSelect={this.handleMovieSelect}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        {this.renderContent()}
        {this.props.activeMovie && <MovieDetails movie={this.props.activeMovie}/>}
      </div>
    );
  }
}

export default App;
