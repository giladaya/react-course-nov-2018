import React from "react";
import ListItem from './ListItem';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <ul>
        {this.props.movies.map((item, idx) => {
          return <ListItem
            key={item.id}
            movie={item}
            onClick={this.props.onSelect} 
            isActive={this.props.activeMovieId === item.id}
          />;
        })}
      </ul>
    );
  }
}
export default MoviesList
