import React from 'react';

// class ListItem extends React.Component {
//   render() {
//     const {movie} = this.props;
//     return (
//       <li>
//         {movie.title} ({movie.year})
//       </li>
//     )
//   }
// }
// export {ListItem}

export default ({movie, onClick, isActive}) => {
  const style = {
    border: (isActive ? '1px solid black' : '1px solid transparent'),
  }
  return (
    <li onClick={() => onClick(movie.id)} style={style}>
      {movie.title} ({movie.year})
    </li>
  )
}