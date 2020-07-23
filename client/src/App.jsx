import React, { Component } from 'react';
import Home from './components/Home';
import { Link, Switch, Route } from 'react-router-dom'
import MoviePage from './components/MoviePage.js'
import axios from 'axios'
import MovieDetail from './components/MovieDetail'
import NewMovie from './components/NewMovie'

class App extends Component {

  state = {
    movies: []
  }

  render() {
    return (
      <div className='App'>
        {/* <Home /> */}

        <Switch>
          <Route exact path='/' render={props => <Home />} />
          <Route exact path='/movies' render={props => <MoviePage />} />
          <Route exact path='/movies/:id' render={props => <MovieDetail {...props} />} />
          <Route exact path='/new' render={props => <NewMovie />} />
        </Switch>
      </div>
    );
  }
}

export default App;
