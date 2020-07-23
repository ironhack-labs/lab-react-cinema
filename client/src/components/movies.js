import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class movies extends Component {
  state = {
    movies: [],
  };

  // async componentDidMount() {
  //   let res = await axios.get("http://localhost:500/get-movies");
  //   console.log(res);
  //   this.setState({
  //     movies: res.data,
  //   });
  //   console.log(this.state.movies);
  // }

  // displayMovies = () => {
  //   return this.state.movies.map((eachMovie) => {
  //     return (
  //       <div>
  //         <li>
  //           {eachMovie.title}
  //           <Link to="/movie/:id">See More</Link>
  //         </li>
  //       </div>
  //     );
  //   });
  // };

  async componentDidMount() {
    console.log("key");
    let res = await Axios.get("http://localhost:5000/movies").then((res) => {
      console.log(res);
    });
    this.getMovies();
    // this.setState({
    //   movies: res.data.movies,
    // });
  }
  getMovies = async () => {
    let res = await Axios.get("http://localhost:5000/getTheMovies");
    console.log(res);
    this.setState({
      movies: res.data.theMovies,
    });
  };
  displayAllMovies = () => {
    return this.state.movies.map((eachMovie) => {
      return (
        <li>
          {eachMovie.title}
          <img src={eachMovie.image} />
          <Link to="/movieDetail">See More</Link>
        </li>
      );
    });
  };

  render() {
    return <div>{this.displayAllMovies()}</div>;
  }
}

export default movies;
