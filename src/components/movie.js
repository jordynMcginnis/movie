import React from 'react';

let Movie = (props) => (
  <li key={props.movie.title}>{props.movie.title}</li>
)

export default Movie; 

