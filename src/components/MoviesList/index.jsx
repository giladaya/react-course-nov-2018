import React from "react";
import ListItem from './ListItem';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null,
    }

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleMovieSelect(id) {
    this.setState({
      activeMovieId: id,
    })
  }

  render() {
    return (
      <ul>
        {this.props.movies.map((item, idx) => {
          return <ListItem
            key={item.id}
            movie={item}
            onClick={this.handleMovieSelect} 
            isActive={this.state.activeMovieId === item.id}
          />;
        })}
      </ul>
    );
  }
}
export default MoviesList
