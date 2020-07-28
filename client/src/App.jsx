import React, { Component } from 'react';
import Home from './components/Home';
import CheckMovies from './components/checkMovies';
import Movie from './components/Movie';
import { Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path = '/' render = { () => <Home />} />
          <Route exact path = '/check-movies' render={ () => <CheckMovies />} />
          <Route exact path = '/movie/:id' render={(props) => <Movie {...props} />} />
        </Switch>  
      </div>
    );
  }
}

export default App;
