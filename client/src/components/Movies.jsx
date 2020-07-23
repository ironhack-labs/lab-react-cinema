import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/movies`).then((res) => {
      console.log(res.data);
      this.setState({
        movies: res.data.movies,
      });
    });
  }

  returnMovies = () => {
    let arr = [];
    arr = this.state.movies.map(function (movie) {
      console.log(movie);
      return (
        <div className="movies-container">
          <img src={movie.image} alt={movie.title}></img>{" "}
          <p>
            <b>{movie.title}</b>
          </p>
          <Link to="./Movie">See More</Link>
        </div>
      );
    });
    return arr;
  };
  render() {
    return (
      <React.Fragment>
        <div className="movies-header">
          <h1>Ironhack Cinema</h1>
          <p>
            <b>Click on the movie to check the showtimes!</b>
          </p>
        </div>
        <div className="movies-body">{this.returnMovies()}</div>;
      </React.Fragment>
    );
  }
}

export default Movies;
