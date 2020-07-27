import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Movies extends Component {
  returnMovies = () => {
    let arr = [];
    arr = this.props.movies.map(function (movie) {
      // console.log(movie);
      return (
        <div key={movie._id} className="movies-container">
          <img src={movie.image} alt={movie.title}></img>{" "}
          <p>
            <b>{movie.title}</b>
          </p>
          <Link to={`/movie/${movie._id}`}>See More</Link>
        </div>
      );
    });
    return arr;
  };
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="movies-header">
          <h1>Ironhack Cinema</h1>
          <p>
            <b>Click on the movie to check the showtimes!</b>
            <br></br>
            <b>
              --or add a new movie <Link to={"/addmovie/"}>here</Link>
            </b>
          </p>
        </div>
        <div className="movies-body">{this.returnMovies()}</div>
      </React.Fragment>
    );
  }
}

export default Movies;
