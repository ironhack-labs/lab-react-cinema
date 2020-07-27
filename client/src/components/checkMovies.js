import React, { Component } from 'react';
import '../index.css'
import axios from 'axios';

class CheckMovies extends Component {
  state={
    movies: []
  }

  async componentDidMount(){
    let res = await axios.get('http://localhost:5000/movies')
    // console.log(res.data[0]);
    this.setState({ movies: res.data });
    console.log(this.state.movies);
  }
  displayMovies = () => {
    return this.state.movies.map( (eachMovie) => {
      return (
        <div>
                  <li>
                  <strong>Name:</strong>
                  {eachMovie.title}
                </li>
          <div className="card-front">
              <img
                className="picture"
                src={eachMovie.image}
                alt={eachMovie.title}
              ></img>
            </div>
            <div className="card" key={eachMovie._id}>
              <ul>
                <li>
                  <strong>Name:</strong>
                  {eachMovie.title}
                </li>
                <li>
                  <strong>Director:</strong>
                  {eachMovie.director}
                </li>
                <li>
                  <strong>stars:</strong>
                  {eachMovie.stars.join(' ,')}
                </li>
              </ul>
            </div>
        </div>
      );
    })
  }
  render() {
    return (
      <div>
        <h1>on movies page</h1>
        {this.displayMovies()}
      </div>
    );
  }
}

export default CheckMovies;