import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movieList.js';
import movies from './data.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : movies,
      currentList: movies
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.handleAddInput = this.handleAddInput.bind(this);
  }
  handleInput (e) {
    let searchItem = e.target.value;
    this.setState({searchItem});
  }
  handleSearch () {
    var currentList = movies;
    var searchItem = this.state.searchItem;
    var newList = currentList.filter((item) => {
      return item.title.toLowerCase().indexOf(searchItem) > -1; 
    });
    this.setState({movies: newList});
    console.log(this.state.movies);
  }
  handleAddInput (e) {
    let item = e.target.value;
    let addItem = {};
    addItem.title = item;
    
    this.setState({addItem});
  }
  addVideo () {
    var newVideo = this.state.movies.concat([this.state.addItem]);
    this.setState({movies: newVideo});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <input placeholder='search videos' onChange={this.handleInput}/>
            <button onClick={this.handleSearch}>Search</button>
          <input placeholder='add video' onChange={this.handleAddInput}/>
          <button onClick={this.addVideo}>Add Video</button>
          {this.state.movies.length !== 0 
            ? <MovieList movies={this.state.movies}/>
            : <p> no movies match your search..</p>
          }
         
        </div>
      </div>
    );
  }
}

export default App;
