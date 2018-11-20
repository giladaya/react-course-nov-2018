import React from 'react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const movie = this.props.movie;
    return (
      <div>{JSON.stringify(movie)}</div>
    )
  }
}

export default MovieDetails;