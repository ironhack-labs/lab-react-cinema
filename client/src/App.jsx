import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/movies.js";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetail.js";
import AddMovie from "./components/addMovie.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/movie/:id"
            render={(props) => <MovieDetail {...props} />}
          />
          <Route exact path="/movies" render={() => <Movies />} />
          <Route exact path="/addMovie" render={() => <AddMovie />} />
        </Switch>
      </div>
    );
  }
}

export default App;
