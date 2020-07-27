import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import Axios from "axios";
import AddMovie from "./components/AddMovie";

require("dotenv").config();

class App extends Component {
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
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            render={(props) => <Movies {...props} movies={this.state.movies} />}
            path="/Movies"
          />
          <Route
            exact
            render={(props) => <Movie {...props} movies={this.state.movies} />}
            path="/movie/:id"
          />
          <Route exact component={AddMovie} path="/addmovie" />
          <Route exact component={Home} path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
