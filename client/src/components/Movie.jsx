import React, { Component } from "react";
import Axios from "axios";
import "./movie.css";
class Movie extends Component {
  state = {
    stars: [],
    showtimes: [],
  };
  componentDidMount() {
    Axios.get(
      `http://localhost:5000/movies/${this.props.match.params.id}`
    ).then((res) => {
      console.log(res.data);
      this.setState({
        ...res.data.movie,
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="movie-page">
        <div className="image-movie">
          <img src={this.state.image} />
        </div>
        <div className="movie-text">
          <h1>{this.state.title}</h1>
          <p>
            <b>Director: {this.state.director}</b>
          </p>
          <p>
            <b>Stars</b>
          </p>
          <div className="list-stars">
            {this.state.stars.map((star) => (
              <li>{star}</li>
            ))}
          </div>
          <p className="shorter">{this.state.description}</p>
          <p>
            <b>{this.state.showtimes}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
