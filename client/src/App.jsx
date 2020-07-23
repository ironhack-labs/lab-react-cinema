import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/movies.js";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/movies" render={() => <Movies />} />
        </Switch>
      </div>
    );
  }
}

export default App;
