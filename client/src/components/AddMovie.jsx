import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class AddMovie extends Component {
  state = {
    title: "",
    description: "",
    director: "",
    image: "",
    stars: "",
    showtimes: "",
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let movie = { ...this.state };
    movie.stars = movie.stars.split(",");
    movie.showtimes = movie.showtimes.split(",");
    axios.post("http://localhost:5000/NewMovie", movie).then((res) => {
      console.log(res);
      this.props.history.push(`/movie/${res.data.movie._id}`);
    });
  };
  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <br></br>
          <Link to={"/Movies/"}>Previous Page</Link>
          <br></br>
          Director: <input name="director" onChange={this.handleChange}></input>
          Description:{" "}
          <input name="description" onChange={this.handleChange}></input>
          Title: <input name="title" onChange={this.handleChange}></input>
          Image: <input name="image" onChange={this.handleChange}></input>
          Stars: <input name="stars" onChange={this.handleChange}></input>
          Showtimes:{" "}
          <input name="showtimes" onChange={this.handleChange}></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
