import React from 'react';
import Movie from './movie.js';

let MovieList = (props) => (
  <div> 
    <ul>
      {props.movies.map((item) => (
        <Movie movie={item} key={item.title}/>
      ))}
    </ul>
  </div>
);

export default MovieList;