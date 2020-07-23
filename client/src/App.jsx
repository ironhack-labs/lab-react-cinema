import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact component={Movies} path="/Movies" />
          <Route exact component={Movie} path="/Movie" />
          <Route exact component={Home} path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
